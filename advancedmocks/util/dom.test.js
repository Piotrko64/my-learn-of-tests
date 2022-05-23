import { beforeEach, expect, it, vi } from "vitest";
import { showError } from "./dom";

import fs from "fs";

import path from "path";

const htmlPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlContent);
});

it("first test with happy-dom", () => {
    showError();
});

it("should add an error paragraph to the id='errors' element", () => {
    showError("error");

    const errorEl = document.getElementById("errors");
    const paragraphEl = errorEl.firstElementChild;

    expect(paragraphEl).not.toBeNull();
});

it("paragraph should contain error message", () => {
    const errMessage = "error";
    showError(errMessage);

    const errorEl = document.getElementById("errors");
    const paragraphEl = errorEl.firstElementChild;

    expect(paragraphEl.textContent).toBe(errMessage);
});
