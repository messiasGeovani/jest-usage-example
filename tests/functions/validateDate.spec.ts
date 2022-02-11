import validateDate from "../../src/functions/validateDate";

describe("validateDate", () => {
  it("should return true", () => {
    const validDate = Date.now();

    expect(validateDate(validDate)).toBeTruthy();
  });

  it("should return false with a invalid date", () => {
    const invalidDate = "sonisbleinis";

    expect(validateDate(invalidDate)).toBeFalsy();
  });
});
