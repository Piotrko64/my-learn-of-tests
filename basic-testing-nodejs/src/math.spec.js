import { it, expect } from "vitest"; //or {test}
import { add } from "./math";

it("should sumarize all numbers values from array", () => {
    // ARRANGE
    const numbers = [1, 2, 3];

    // ACT
    const result = add(numbers);

    // ASSERT
    const expectResult = numbers.reduce((prev, cur) => prev + cur, 0);

    expect(result).toBe(expectResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
    // ARRANGE
    const inputs = ["invalid", 1];

    // ACT
    const result = add(inputs);

    //ASSERT
    expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
    // ARRANGE
    const numbers = ["1", "2"];

    // ACT
    const result = add(numbers);

    // ASSERT
    const expectResult = numbers.reduce((prev, cur) => +prev + +cur, 0);

    expect(result).toBe(expectResult);
});

it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it("should throw an eror if no value is passed into the function", () => {
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array - MY EXAMPLE", () => {
    // ARRANGE
    const numbers = [1, 2, 3];

    // ACT
    const resultFn = () => {
        add(...numbers);
    };

    // ASSERT
    expect(resultFn).not.toThrow(/something went wrong/);
    expect(resultFn).toThrow(/is not iterable/);
});
