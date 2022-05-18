import { it, expect } from "vitest";
import { clearNumbers, transformToNumber } from "./numbers";

it("Check transform string to number - string is a number", () => {
    // Arrange
    const numberAsString = "64";

    // Act
    const result = transformToNumber(numberAsString);

    // Assert
    const expectResult = +numberAsString;

    expect(result).toBe(expectResult).toBeTypeOf("number").not.toBeNaN();
});

it("Check transform string to number - string is a word", () => {
    // Arrange
    const simpleString = "I am simple but invalid!";
    // const exampleWithArray = [0, 1];

    // Act
    const result = transformToNumber(simpleString);
    // const resultArray = transformToNumber(exampleWithArray);

    // Assert
    expect(result).toBeNaN();
    // expect(resultArray).toBeNaN();
});

// Vitest coverage is awesome tool!

it("should not throw error and transform show  array numbers", () => {
    const valueArray = ["3", "2", "11"];

    const result = clearNumbers(valueArray);

    expect(result).toEqual(valueArray.map((el) => +el));
});
