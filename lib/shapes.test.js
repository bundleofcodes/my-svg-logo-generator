//Imports shapes classes from shape.js file??
//Tests to make sure that the shape objects will be rendered correctly//
const {Circle, Square, Triangle} = require("./shapes.js")

//Circle Shape//
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="40" fill="${color}">`);
    });
});
//Square Shape//
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});
//Triangle Shape//
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});
