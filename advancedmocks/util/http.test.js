import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";

// vi.mock()

const testFetch = vi.fn(() => {}).mockReturnValue("default");

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
    sendDataRequest();
    expect(sendDataRequest()).toBe("default");
});
