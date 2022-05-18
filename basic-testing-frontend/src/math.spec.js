import { it, expect } from "vitest"; //or {test}
import { add } from "./math";

it("should sumarize all numbers values from array", () => {
    // ARRANGE
    const numbers = [1, 2, 3];

    // ACT
    const result = add(numbers);

    // ASSERT
    expect(result).toBe(6);
});
