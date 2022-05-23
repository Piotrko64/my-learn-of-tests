import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

it('Should set message on "Vitest" ', () => {
    const text = "Vitest";
    const newMessage = new HttpError("", text, "");

    expect(newMessage.message).toBe(text);
});

describe("class HttpError", () => {
    it("should contain the proided status code, message and data", () => {
        const testStatus = 1;
        const testMessage = "Vitest";
        const testData = { key: "test" };

        const testError = new HttpError(testStatus, testMessage, testData);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBe(testData);
    });
    it("should contain undefined as data if no data is provided", () => {
        const testStatus = 1;
        const testMessage = "Vitest";

        const testError = new HttpError(testStatus, testMessage);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).not.toBeDefined();
    });
});

describe("class ValidationError", () => {
    it("should contain the provided message", () => {
        const testMessage = "text";

        const testError = new ValidationError(testMessage);

        expect(testError.message).toBe(testMessage);
    });
});
