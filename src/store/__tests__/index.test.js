import { reducer } from "../index";

const initialState = {
  isLoading: false,
  categories: [],
  menu: [],
  openingHours: [],
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle setLoadingTrue", () => {
    expect(reducer(initialState, { type: "setLoadingTrue" })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle setLoadingFalse", () => {
    expect(reducer(initialState, { type: "setLoadingFalse" })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it("should handle FETCH_CATEGORIES", () => {
    const categories = ["Category 1", "Category 2"];
    expect(
      reducer(initialState, { type: "FETCH_CATEGORIES", payload: categories })
    ).toEqual({
      ...initialState,
      categories,
    });
  });

  it("should handle FETCH_MENU", () => {
    const menu = ["Item 1", "Item 2"];
    expect(
      reducer(initialState, { type: "FETCH_MENU", payload: menu })
    ).toEqual({
      ...initialState,
      menu,
    });
  });

  it("should handle FETCH_OPENING_HOURS", () => {
    const openingHours = ["9:00 AM - 5:00 PM"];
    expect(
      reducer(initialState, {
        type: "FETCH_OPENING_HOURS",
        payload: openingHours,
      })
    ).toEqual({
      ...initialState,
      openingHours,
    });
  });
});
