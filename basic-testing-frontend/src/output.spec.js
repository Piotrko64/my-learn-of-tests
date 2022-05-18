import { describe, expect, it } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
    it("should return a string", () => {
        const val1 = 1;
        const val2 = "inv";

        const res1 = generateResultText(val1);
        const res2 = generateResultText(val2);

        expect(res1).toBeTypeOf("string");
        expect(res2).toBeTypeOf("string");
    });
    it("should contain string text", () => {
        const val1 = 5;

        const res1 = generateResultText(val1);

        expect(res1).toContain(val1.toString());
    });
});
