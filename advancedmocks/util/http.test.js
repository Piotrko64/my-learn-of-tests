import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
    return new Promise((res, rej) => {
        const testResponse = {
            // ok: true,
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
    const sendData = sendDataRequest(testData);
    return expect(sendData).resolves.toEqual(testResponseData);
});

// const testFetch = vi.fn(() => {}).mockReturnValue("default");

// vi.stubGlobal("fetch", testFetch);

// it("should return any available response data", () => {
//     sendDataRequest();
//     expect(sendDataRequest()).toBe("default");
// });
