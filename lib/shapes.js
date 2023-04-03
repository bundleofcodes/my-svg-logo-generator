class Shape {
    constructor(color) {
        this.color= color;
    }
    setColor(color) {
        this.color=(color);
    }
}
//Defines a Circle class that extends shape and renders an svg file with position, size and fill color//
class Circle extends Shape {
    constructor(color) {
        super(color)
        this.position = ''
        this.size = '90';
    }
    render() {
        return `<circle cx="90" cy="100" r="${this.size}" fill="${this.color}"/>`
    }
}
//Defines a Square class that extends shape and renders an svg file with position, size, and fill color//
class Square extends Shape {
    constructor(color) {
        super(color)
        // this.position = ''
        // this.size = '40';
    }
    render() {
        return `<rect x="5" height="200" width="200" fill="${this.color}"/>`
    }
}
//Defines a Triangle class that extends shape and renders an svg file with position, size and fill color//
class Triangle extends Shape {
    constructor(color) {
        super(color)
        // this.position = ''
        // this.size = '40';
    }
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150, 0" fill="${this.color}"/>`
    }
};
module.exports = {Circle, Square, Triangle}