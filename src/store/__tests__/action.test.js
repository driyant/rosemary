import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../action";
import fetchMock from "jest-fetch-mock";
global.fetch = fetchMock;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  it("creates FETCH_CATEGORIES when fetching categories has been done", () => {
    const expectedActions = [
      { type: "setLoadingTrue" },
      {
        type: "FETCH_CATEGORIES",
        payload: ["all", "Category 1", "Category 2"],
      },
      { type: "setLoadingFalse" },
    ];
    const store = mockStore({ categories: [] });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([{ name: "Category 1" }, { name: "Category 2" }]),
      })
    );
    return store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("create FETCH_MENU when fetching has been done", () => {
    const expectedActions = [
      { type: "setLoadingTrue" },
      {
        type: "FETCH_MENU",
        payload: [
          {
            category: {
              id: 3,
              name: "appetizer",
            },
            description:
              "Grilled bread topped with a mixture of fresh tomatoes, basil, garlic, and olive oil.",
            id: 1,
            name: "Bruschetta",
            price: 9.99,
          },
          {
            category: {
              id: 3,
              name: "appetizer",
            },
            description:
              "Mushrooms stuffed with a savory mixture of breadcrumbs, garlic, herbs, and cheese, baked to perfection.",
            id: 2,
            name: "Stuffed Mushrooms",
            price: 11.99,
          },
        ],
      },
      { type: "setLoadingFalse" },
    ];
    const store = mockStore({ menus: [] });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              category: {
                id: 3,
                name: "appetizer",
              },
              description:
                "Grilled bread topped with a mixture of fresh tomatoes, basil, garlic, and olive oil.",
              id: 1,
              name: "Bruschetta",
              price: 9.99,
            },
            {
              category: {
                id: 3,
                name: "appetizer",
              },
              description:
                "Mushrooms stuffed with a savory mixture of breadcrumbs, garlic, herbs, and cheese, baked to perfection.",
              id: 2,
              name: "Stuffed Mushrooms",
              price: 11.99,
            },
          ]),
      })
    );
    return store.dispatch(actions.fetchMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should receive response on action FETCH_OPENING_HOURS", () => {
    const expectedActions = {
      type: "FETCH_OPENING_HOURS",
      payload: ["09:00", "10:00"],
    };
    const store = mockStore({ openingHours: [] });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(["09:00", "10:00"]),
      })
    );
    return store.dispatch(actions.fetchOpeningHours()).then((res) => {
      expect(res).toEqual(expectedActions);
    });
  });
  it("should return ok for sendEmailSubscriber", () => {
    const store = mockStore({ message: "OK" });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: { message: "OK" },
      })
    );
    return store
      .dispatch(actions.sendEmailSubscriber({ email: "email@example.com" }))
      .then((res) => {
        expect(res.json.message).toEqual("OK");
      });
  });
  it("should return ok for contactHandler", () => {
    const store = mockStore({ message: "OK" });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: { message: "OK" },
      })
    );
    return store.dispatch(actions.contactHandler()).then((res) => {
      expect(res.json.message).toEqual("OK");
    });
  });
  it("should return ok for reservation", () => {
    const store = mockStore({ message: "OK" });
    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: { message: "OK" },
      })
    );
    return store.dispatch(actions.reservationHandler()).then((res) => {
      expect(res.json.message).toEqual("OK");
    });
  });
});
