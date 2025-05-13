import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Menu from "../Menu";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

const defaultProps = {
  menus: [
    {
      id: 1,
      name: "Menu 1",
      link: "/menu1",
      description: "Description 1",
      price: 10,
    },
    {
      id: 1,
      name: "Menu 2",
      link: "/menu2",
      description: "Description 2",
      price: 20,
    },
    {
      id: 1,
      name: "Menu 3",
      link: "/menu3",
      description: "Description 3",
      price: 30,
    },
  ],
};

describe("Menu", () => {
  beforeEach(() => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Menu {...defaultProps} data-testid="menu" />
        </BrowserRouter>
      </ChakraProvider>
    );
  });

  it("should render the menu component and match snapshot", () => {
    const result = render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Menu {...defaultProps} data-testid="menu" />
        </BrowserRouter>
      </ChakraProvider>
    );
    expect(result).toMatchSnapshot();
  });

  it("should render the menus", () => {
    const menuElements = screen.getAllByTestId(/menu-\d+/);
    expect(menuElements.length).toBe(3);
    expect(menuElements[0]).toHaveTextContent("Menu 1");
    expect(menuElements[1]).toHaveTextContent("Menu 2");
    expect(menuElements[2]).toHaveTextContent("Menu 3");
  });

  it("should render there is no menus available", () => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Menu menus={[]} />
        </BrowserRouter>
      </ChakraProvider>
    );
    expect(screen.getByText(/No data menu available/i)).toBeInTheDocument();
  });
});
