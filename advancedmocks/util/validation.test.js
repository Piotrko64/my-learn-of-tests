import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe("ValidateNotEmpty()", () => {
    it("should throw an error if an empty string is provided as value", () => {
        const testInput = "";

        const validationFn = () => validateNotEmpty(testInput);

        expect(validationFn).toThrow();
    });
    it("should throw an error if an empty with white spaces is provided as value", () => {
        const testInput = "        ";

        const validationFn = () => validateNotEmpty(testInput);

        expect(validationFn).toThrow();
    });
    it("Should throw error - 'there is nothing here'", () => {
        const testInput = " ";
        const errorText = "there is nothing here";

        const validate = () => validateNotEmpty(testInput, errorText);

        expect(validate).toThrowError("there is nothing here");
    });
});
