import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Mocking lazy loaded components
jest.mock("../src/pages/Homepage/Homepage", () => () => <div>Homepage</div>);
jest.mock("../src/pages/Discover/Discover", () => () => <div>Discover</div>);
jest.mock("../src/pages/OurMenu/OurMenu", () => () => <div>Our Menu</div>);
jest.mock("../src/pages/Contact/Contact", () => () => <div>Contact</div>);
jest.mock("../src/pages/Reservation/Reservation", () => () => (
  <div>Reservation</div>
));
jest.mock("../src/pages/Page404/Page404", () => () => <div>404 Page</div>);
jest.mock("../src/components/Lazy/Lazy", () => () => <div>Loading...</div>);

const renderWithProviders = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("Should testing on component App", () => {
  it("renders Homepage component for root route", async () => {
    renderWithProviders(<App />, { route: "/" });
    expect(await screen.findByText("Homepage")).toBeInTheDocument();
  });

  it("renders Discover component for /discover route", async () => {
    renderWithProviders(<App />, { route: "/discover" });
    expect(await screen.findByText("Discover")).toBeInTheDocument();
  });

  it("renders Our Menu component for /menu route", async () => {
    renderWithProviders(<App />, { route: "/menu" });
    expect(await screen.findByText("Our Menu")).toBeInTheDocument();
  });

  it("renders Contact component for /contact route", async () => {
    renderWithProviders(<App />, { route: "/contact" });
    expect(await screen.findByText("Contact")).toBeInTheDocument();
  });

  it("renders Reservation component for /reservation route", async () => {
    renderWithProviders(<App />, { route: "/reservation" });
    expect(await screen.findByText("Reservation")).toBeInTheDocument();
  });

  it("renders 404 Page component for unknown route", async () => {
    renderWithProviders(<App />, { route: "/unknown-route" });
    expect(await screen.findByText("404 Page")).toBeInTheDocument();
  });
});
