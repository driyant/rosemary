import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Category from "../Category";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

const defaultProps = {
  categories: ["category1", "category2", "category3"],
  filterCategories: vi.fn(),
  activeLink: "category1",
};

vi.mock("@chakra-ui/react", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    extendTheme: actual.extendTheme || vi.fn((arg) => arg),
  };
});

describe("Category", () => {
  beforeEach(() => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Category {...defaultProps} data-testid="category" />
        </BrowserRouter>
      </ChakraProvider>
    );
  });

  it("should render the category component and match snapshot", () => {
    const result = render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Category {...defaultProps} data-testid="category" />
        </BrowserRouter>
      </ChakraProvider>
    );
    expect(result).toMatchSnapshot();
  });

  it("should render the categories", () => {
    const categoryElements = screen.getAllByTestId(/category-\d+/);
    expect(categoryElements.length).toBe(3);
    expect(categoryElements[0]).toHaveTextContent("category1");
    expect(categoryElements[1]).toHaveTextContent("category2");
    expect(categoryElements[2]).toHaveTextContent("category3");
  });

  it("should render there is no categories available", () => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Category
            categories={[]}
            filterCategories={defaultProps.filterCategories}
            activeLink={defaultProps.activeLink}
          />
        </BrowserRouter>
      </ChakraProvider>
    );
    const noCategoriesText = screen.getByTestId("no-categories");
    expect(noCategoriesText).toBeInTheDocument();
    expect(noCategoriesText).toHaveTextContent("No categories available");
  });

  it("should call filterCategories when a category is clicked", () => {
    const categoryElement = screen.getByTestId("category-0");
    fireEvent.click(categoryElement);
    expect(defaultProps.filterCategories).toHaveBeenCalledWith("category1");
  });
});
