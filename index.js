const fs = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg {
    constructor() {
        this.texElement = ''
        this.shapeElement = ''
    }
    render(text, textColor, shape) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="90" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`
    }
};
//Array of questions for user input//
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT-COLOR: Enter a color (Or a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Which Pixel Image would you like to use?",
        choices: ["Circle", "Square","Triangle"],
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE-COLOR: Enter a color keyword (OR a hexidecimal number):",
    },
];
//Function to write files//
function writeToFile(data) {
    console.log("writing [" + data + ") to file Output")
    fs.writeFile("./output/logo.svg", data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo.svg has been successfully generated!");
    });
}
async function init() {
    console.log("starting init");
    var svgString = "";
//Prompt the user for answers//
const answers = await inquirer.prompt(questions);
//user text//
var user_text = "";
if (answers.text.length > 0 && answers.text.length < 4) {
        //1-3 characrers, valid entry//
        user_text = answers.text;
    } else {
        //0 or 4+ characters, invalid entry//
        console.log("Oops! Something went wrong. Please enter 1-3 characters.");
        return;
    }
console.log("User text: [" + user_text + "]");
//user font color//
user_font_color = answers["text-color"];
console.log("User font color: [" + user_font_color + "]");
//user shape color//
user_shape_color = answers.shape;
console.log("User shape color: [" + user_shape_color + "]");
//user shape type//
user_shape_type = answers["pixel-image"];
console.log("User entered shape = [" + user_shape_type +"]");
//user shape//
let user_shape;
switch (user_shape_type) {
    case 'Circle':
    user_shape = new Circle(user_shape_color);
    break;
  case 'Square':
    user_shape = new Square(user_shape_color);
    break;
  case 'Triangle':
    user_shape = new Triangle(user_shape_color);
    break;
  default:
    console.log('Invalid input!');
}
//Create new svg and add shape and text elements//
var svg = new Svg();
    svgString = svg.render(user_text, user_font_color, user_shape)
//Print shape to console//
    console.log("Dispalying shape:\n\n" + svgString);
    console.log("Your shape has been generated!");
    console.log("Writing shape to file...");
    writeToFile(svgString);
}
init()