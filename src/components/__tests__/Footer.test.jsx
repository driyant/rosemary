import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Footer from "../Footer";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { theme } from "../../theme";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { submitSubscriptionUrl } from "@/utils/constant";

// Mock the useToast hook and other necessary exports
vi.mock("@chakra-ui/react", async (importOriginal) => {
  const actual = await importOriginal();
  const mockToast = vi.fn();
  return {
    ...actual,
    useToast: () => mockToast,
    extendTheme: actual.extendTheme || vi.fn((arg) => arg), // Mock extendTheme, return argument
    sendNewsletter: vi.fn().mockResolvedValue({ success: true }), // Mock sendNewsletter
  };
});

describe("Footer", () => {
  beforeEach(() => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    );
  });

  it("should match snapshot", () => {
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });

  it("should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render the text-save-deals", () => {
    expect(screen.getByTestId("text-save-deals")).toBeInTheDocument();
  });

  it("should render the text-our-weekly-newsletter", () => {
    expect(
      screen.getByTestId("text-our-weekly-newsletter")
    ).toBeInTheDocument();
  });

  it("should render the newsletter-input", () => {
    expect(screen.getByTestId("newsletter-input")).toBeInTheDocument();
  });

  it("should render the newsletter-button", () => {
    expect(screen.getByTestId("newsletter-button")).toBeInTheDocument();
  });

  it("should render the footer logo", () => {
    expect(screen.getByTestId("footer-more-list")).toBeInTheDocument();
  });

  it("should render button newsletter", () => {
    expect(screen.getByTestId("newsletter-button")).toBeInTheDocument();
  });

  it("should render the footer logo text", () => {
    expect(screen.getByTestId("footer-logo")).toBeInTheDocument();
  });

  it("should show an error toast with an invalid email", async () => {
    const inputElement = screen.getByTestId("newsletter-input");
    const buttonElement = screen.getByTestId("newsletter-button");
    fireEvent.change(inputElement, { target: { value: "invalid-email" } });
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(vi.mocked(useToast)()).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "BAD REQUEST!",
          description: "Sorry cannot process, email should not be empty!",
          status: "error",
        })
      );
    });
  });

  it("should call sendNewsletter and show error toast on API call failure", async () => {
    const inputElement = screen.getByTestId("newsletter-input");
    const buttonElement = screen.getByTestId("newsletter-button");

    // Mock fetch menggunakan vi.fn()
    const mockFetchPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: false,
          status: 500,
          statusText: "Internal Server Error",
        });
      }, 1000);
    });

    const mockFetch = vi.fn().mockReturnValueOnce(mockFetchPromise);

    // Mock global fetch
    globalThis.fetch = mockFetch; // Assign mock fetch to globalThis

    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        submitSubscriptionUrl,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: "test@example.com" }),
        })
      );
      expect(vi.mocked(useToast)()).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Error!",
          description: "HTTP error! status: 500",
          status: "error",
        })
      );
    });

    // Cleanup mock
    globalThis.fetch = undefined;
  });

  it("should call sendNewsletter and show success toast on API call success", async () => {
    const inputElement = screen.getByTestId("newsletter-input");
    const buttonElement = screen.getByTestId("newsletter-button");

    // Mock fetch menggunakan vi.fn()
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Subscribed successfully" }),
    });

    // Mock global fetch
    globalThis.fetch = mockFetch; // Assign mock fetch to globalThis

    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        submitSubscriptionUrl,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: "test@example.com" }),
        })
      );
      expect(vi.mocked(useToast)()).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Error!",
          description: "HTTP error! status: 500",
          status: "error",
        })
      );
    });

    // Cleanup mock
    globalThis.fetch = undefined;
  });

  it("should show spinner while loading after clicking subscribe", async () => {
    const inputElement = screen.getByTestId("newsletter-input");
    const buttonElement = screen.getByTestId("newsletter-button");

    // Buat promise yang tidak langsung resolve untuk mensimulasikan loading
    let resolveFetch;
    const mockFetchPromise = new Promise((resolve) => {
      resolveFetch = resolve;
    });
    const mockFetch = vi.fn().mockReturnValueOnce(mockFetchPromise);
    globalThis.fetch = mockFetch;

    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    fireEvent.click(buttonElement);

    // Spinner should be visible
    expect(screen.getByRole("spinner")).toBeInTheDocument();
    // expect(screen.getByRole("arrow-right")).not.toBeInTheDocument();

    // Resolve fetch
    resolveFetch({ ok: true, json: async () => ({ message: "Subscribed" }) });
    await waitFor(() => expect(globalThis.fetch).toHaveBeenCalled());

    // Spinner should be hidden
    expect(screen.queryByRole("spinner")).not.toBeInTheDocument();
    // Arrow-right should be visible
    expect(screen.getByRole("arrow-right")).toBeInTheDocument();

    // Cleanup mock
    globalThis.fetch = undefined;
  });
});
