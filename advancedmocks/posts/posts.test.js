import { beforeEach, describe, expect, it } from "vitest";

import { extractPostData } from "./posts";

const testTitle = "test title";
const testContent = "test content";
let testFormData;

describe("extraxtPostData", () => {
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get: function (key) {
                return this[key];
            },
        };
    });
    it("should extraxt title and content from the provided form data", () => {
        const data = extractPostData(testFormData);
        expect(data.content).toBe(testContent);
        expect(data).toMatchObject({ title: testTitle });
    });
});
