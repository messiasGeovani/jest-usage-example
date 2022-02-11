export default function (a: number, b: number, c: number): boolean | string {
  const isValidTriangle: boolean = a < b + c || b < a + c || c < a + b;
  const isEquilateral: boolean = a == b && b == c;
  const isIsosceles: boolean = a == b || a == c || b == c;

  if (!isValidTriangle) {
    return false;
  }

  if (isEquilateral) {
    return "Equilateral triangle!";
  }

  if (isIsosceles) {
    return "Isosceles triangle!";
  }

  return "Escalene triangle!";
}
