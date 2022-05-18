import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
