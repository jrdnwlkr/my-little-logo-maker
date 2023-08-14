const inquirer = require("inquirer");
const fs = require("fs");

function userPrompts() {
inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter three (3) characters."
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
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color keyword or hexidecimal for the shape color."
    }
])
.then(answers => {
    console.log(answers);
})
.catch(error => {
    console.error('Error:', error);
})
}

userPrompts();