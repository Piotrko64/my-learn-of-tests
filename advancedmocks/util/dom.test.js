import { it, vi } from "vitest";
import { showError } from "./dom";

import fs from "fs";

import path from "path";

const htmlPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlContent);
vi.stubGlobal("document", document);

it("", () => {
    showError();
});
