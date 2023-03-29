const fs = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

class svg {
    constructor() {
        this.texElement = ''
        this.shapeElement = ''
    }
    render(){
    return `<svg version=1.1" xmlns="http://wwww.w3/200.svg" width="300px" fill="${color}`;
    }
    setTextElement(text,color) {
        this.setTextElement = `<text x="150" y="125" font-size="60"`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }

}

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
        message: "Which Pixel-Image would you like to use?",
        choices: ["Circle", "Square","Triangle"],
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexidecimal number):",
    },
    
];

//Function to write files//
function writeToFile(fileName, data) {
    console.log("writing [" + data + ") to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } 
        console.log("Your logo.svg has been successfully generated!");
    });
}

async function init() {
    console.log("starting init");
    var svgString = "";
    var svg_file = "logo.svg";

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
    if (user_shape_type === "Square" || user_shape_type ==="square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
            user_shape = new Circle();
            console.log("User selceted Circle shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
            user_shape = new Triangle();
            console.log("User selected Triangle shape");
    }
    else {
        console.log("Oops, Invalid input!");
    }
    user_shape.setColor(user_shape_color);

//Create new svg and add shape and text elements//
var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();
    
//Print shape to console//
    console.log("Dispalying shape:\n\n" + svgString);
    
    console.log("Your shape has been generated!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);

}
init()