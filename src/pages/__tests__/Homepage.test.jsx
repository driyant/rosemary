import React from "react";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Homepage from "../Homepage";
import { BrowserRouter } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@testing-library/jest-dom";

describe("Homepage", () => {
  beforeEach(() => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </ChakraProvider>
    );
  });

  it("should render the homepage and match snapshot", () => {
    expect(screen.getByTestId("homepage-heading")).toBeInTheDocument();
    expect(screen.getByTestId("homepage-qoutes")).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should have a title", async () => {
    await waitFor(
      () => {
        const rosemaryHeading = screen.getByTestId("homepage-heading");
        expect(rosemaryHeading).toBeInTheDocument();
        expect(rosemaryHeading).toHaveTextContent("rosemary restaurant");
      },
      { timeout: 3000 }
    );
  });

  it.skip("should initially have the mobile menu closed and hamburger icon as 'menu'", () => {
    const mobileMenu = screen.getByRole("list");
    expect(mobileMenu).toHaveStyle({ transform: "translateX(1000px)" });

    const menuButtonText = screen.getByText(/menu/i);
    expect(menuButtonText).toBeInTheDocument();

    const hamburgerBar1 = screen.getByTestId("hamburger-bar-1");
    const hamburgerBar2 = screen.getByTestId("hamburger-bar-2");
    expect(hamburgerBar1).toHaveStyle({ transform: "" });
    expect(hamburgerBar2).toHaveStyle({ transform: "" });
  });

  // it("should open the mobile menu and change hamburger icon to 'close' when clicked", async () => {
  //   const menuButton = screen.getByRole('button', { name: /menu/i }); // Cari tombol berdasarkan teks 'menu'
  //   await userEvent.click(menuButton);

  //   const mobileMenu = await screen.findByRole('list');
  //   expect(mobileMenu).toHaveStyle({ transform: 'translateX(0px)' });

  //   const closeButtonText = screen.getByText(/close/i);
  //   expect(closeButtonText).toBeInTheDocument();

  //   const hamburgerBar1 = await screen.findByTestId('hamburger-bar-1');
  //   const hamburgerBar2 = await screen.findByTestId('hamburger-bar-2');
  //   expect(hamburgerBar1).toHaveStyle({ transform: 'rotate(45deg) translate(7px, 6px)' });
  //   expect(hamburgerBar2).toHaveStyle({ transform: 'rotate(-45deg) translate(6px, -6px)' });
  // });

  // it("should close the mobile menu and change hamburger icon back to 'menu' when clicked again", async () => {
  //   const menuButton = screen.getByRole('button', { name: /menu/i });
  //   await userEvent.click(menuButton); // Open the menu
  //   await userEvent.click(menuButton); // Close the menu

  //   const mobileMenu = await screen.findByRole('list');
  //   expect(mobileMenu).toHaveStyle({ transform: 'translateX(1000px)' });

  //   const menuButtonText = await screen.findByText(/menu/i);
  //   expect(menuButtonText).toBeInTheDocument();

  //   const hamburgerBar1 = await screen.findByTestId('hamburger-bar-1');
  //   const hamburgerBar2 = await screen.findByTestId('hamburger-bar-2');
  //   expect(hamburgerBar1).toHaveStyle({ transform: '' });
  //   expect(hamburgerBar2).toHaveStyle({ transform: '' });
  // });

  // it("should have a title", async () => {
  //   await waitFor(() => {
  //     const rosemaryHeading = screen.getByTestId("homepage-heading");
  //     expect(rosemaryHeading).toBeInTheDocument();
  //     expect(rosemaryHeading).toHaveTextContent("rosemary restaurant");
  //   });
  // });
});
