import { extractEnteredNumberValues } from "./src/parser.js";

import { calculateResult } from "./src/math.js";

import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(e) {
    e.preventDefault();
    const numberInputValues = extractEnteredNumberValues(form);

    const result = calculateResult(numberInputValues);

    const resultText = generateResultText(result);

    outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
