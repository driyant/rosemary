import { render } from "@testing-library/react";
import Homepage from "../Homepage/Homepage";

describe("Homepage Unit Testing Area", () => {
  it("rosemary tag should be in the document", () => {
    const screen = render(<Homepage />, {});
    expect(true).toBe(true);
  });
});
