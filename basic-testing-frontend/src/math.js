import { clearNumbers } from "./util/numbers.js";

export function add(numbers) {
    let sum = 0;

    // throw new Error("Something went wrong");

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
}

export function calculateResult(numberInputs) {
    let result = "";
    try {
        const numbers = clearNumbers(numberInputs);

        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }
    return result;
}
