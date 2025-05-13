import React from "react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Discover from "@/pages/Discover";
import { BrowserRouter } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@testing-library/jest-dom";

describe("Discover", () => {
  beforeEach(() => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Discover />
        </BrowserRouter>
      </ChakraProvider>
    );
  });
  it("should render the discover page and match snapshot", () => {
    expect(screen.getByTestId("discover-heading")).toBeInTheDocument();
    expect(screen.getByTestId("discover-subheading")).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
