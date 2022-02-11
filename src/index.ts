import validateDate from "./functions/validateDate";
import validateTriangle from "./functions/validateTriangle";

const currentDate = Date.now();
const isValidDate = validateDate(currentDate);

console.log(isValidDate ? "Valid date" : "Invalid date");
console.log(validateTriangle(2, 2, NaN));
