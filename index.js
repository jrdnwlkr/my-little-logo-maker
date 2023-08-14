const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Select three (3) characters."
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color keyword or hexidecimal for the text color."
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape.",
        choices: ["Circle", "Square", "Triangle"], 
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color keyword or hexidecimal for the shape color."
    }
];