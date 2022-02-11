import validateTriangle from "../../src/functions/validateTriangle";

type Tmeasurements = { [key: string]: number | null };

const triangleMatches = {
  equilateral: "Equilateral triangle!",
  isosceles: "Isosceles triangle!",
  escalene: "Escalene triangle!",
};

describe("validateTriangle function", () => {
  const measurements: Tmeasurements = {
    a: null,
    b: null,
    c: null,
  };

  beforeEach(() => {
    Object.keys(measurements).map((key) => (measurements[key] = null));
  });

  it("should validate a equilateral triangle", () => {
    Object.keys(measurements).map((key) => (measurements[key] = 10));

    expect(
      validateTriangle(
        measurements.a as number,
        measurements.b as number,
        measurements.c as number
      )
    ).toBe(triangleMatches.equilateral);
  });

  it("should validate a isosceles triangle", () => {
    measurements.a = 5;
    measurements.b = 10;
    measurements.c = 10;

    expect(
      validateTriangle(
        measurements.a as number,
        measurements.b as number,
        measurements.c as number
      )
    ).toBe(triangleMatches.isosceles);
  });

  it("should validate a escalene triangle", () => {
    measurements.a = 5;
    measurements.b = 7;
    measurements.c = 10;

    expect(
      validateTriangle(
        measurements.a as number,
        measurements.b as number,
        measurements.c as number
      )
    ).toBe(triangleMatches.escalene);
  });

  it("should not validate a triangle", () => {
    expect(
      validateTriangle(
        measurements.a as number,
        measurements.b as number,
        measurements.c as number
      )
    ).toBeFalsy();

    measurements.a = 5;
    measurements.b = 7;
    measurements.c = NaN;

    expect(
      validateTriangle(
        measurements.a as number,
        measurements.b as number,
        measurements.c as number
      )
    ).toBeFalsy();
  });
});
