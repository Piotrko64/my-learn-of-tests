import { expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

it("Input should be not empty", () => {
    const inputString = " Tests are awesome! ";
    const inputEmptyString = " ";

    const resultCheckLength = () => validateStringNotEmpty(inputString);
    const resultCheckLengthEmptyString = () => validateStringNotEmpty(inputEmptyString);

    expect(resultCheckLength).not.toThrowError();
    expect(resultCheckLengthEmptyString).toThrowError(/must not be empty./);
});

it("should be not NaN", () => {
    const randomNaN = "64P"; // or {} or "['a']";

    const resultNaN = () => validateNumber(randomNaN);

    expect(resultNaN).toThrowError(/Invalid number input/);
});

it("should not throw error", () => {
    const randomNumber = 555_444_333;
    const resultNumber = () => validateNumber(randomNumber);
    expect(resultNumber).not.toThrowError();
});
