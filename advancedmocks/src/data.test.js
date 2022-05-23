import { expect, it, vi } from "vitest";
import { generateReportData } from "./data";

it("should be called", () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toBeCalled();
});
