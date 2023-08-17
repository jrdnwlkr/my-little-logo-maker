const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle } = require('./lib/shapes');
const { stripVTControlCharacters } = require("util");

class Shape {
    constructor() {
        this.textElement = ''
    }
}

function userPrompts() {
inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter three (3) characters."
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Enter a color keyword or hexidecimal for the shape color."
    }
])
.then(answers => {
    console.log(answers);
    if (answers.text.length > 3) {
        console.log("Maximum characters: 3. Please try again.");
        userPrompts();
    } else {
        writeToFile("logo.svg", answers);
    }
});
}

function writeToFile(filename, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<g>";

    svgString += `${answers.shape}`;
    
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill=${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += `</g>`;
    svgString += "</svg>";
} 

userPrompts();