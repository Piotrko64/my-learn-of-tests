import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
    const testUserEmail = "MyMail@gmail.com";

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch (err) {
            done(err);
        }
    });
});

it("should generate a token value - promise", () => {
    const tokenUser = "Piotr@email.com";

    // It's worth using 'return' thanks to this
    // Vitest / Jest wait for the promise to be resolved
    return expect(generateTokenPromise(tokenUser)).resolves.toBeDefined();
});

it("should generate a token value - async/await", async () => {
    const tokenUser = "Piotr2@email.com";

    const generateToken = await generateTokenPromise(tokenUser);

    expect(generateToken).toBeDefined();
});
