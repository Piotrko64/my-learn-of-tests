import { expect, it, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
    return new Promise((res, rej) => {
        if (typeof options.body !== "string") {
            return rej("Not a string");
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((res, rej) => {
                    res(testResponseData);
                });
            },
        };
        res(testResponse);
    });
});

// vi.mock()

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

// const testFetch = vi.fn(() => {}).mockReturnValue("default");

// vi.stubGlobal("fetch", testFetch);

// it("should return any available response data", () => {
//     sendDataRequest();
//     expect(sendDataRequest()).toBe("default");
// });
it("should convert the provided data to JSON before sending the request", async () => {
    const testData = 500;
    let errorMessage;
    try {
        await sendDataRequest(testData);
    } catch (err) {
        errorMessage = err;
    }
    expect(errorMessage).not.toBe("Not a string");
});
it("should throw an HttpError in case of non-ok response", () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((res, rej) => {
            if (typeof options.body !== "string") {
                return rej("Not a string");
            }
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((res, rej) => {
                        res(testResponseData);
                    });
                },
            };
            res(testResponse);
        });
    });
    const testData = 500;
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
