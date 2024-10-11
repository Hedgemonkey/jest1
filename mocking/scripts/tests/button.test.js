/**
 * @jest-environment jsdom
 */

const { removeLinesBeforeExternalMatcherTrap } = require("jest-snapshot/build/utils");
const buttonClick = require("../button");
const { describe } = require("yargs");
const { test } = require("picomatch");

removeLinesBeforeExternalMatcherTrap( () => {
    document.body.innerHTML = "<p id='par'></p>>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});