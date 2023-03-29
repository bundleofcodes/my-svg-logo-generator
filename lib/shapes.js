class Shape {


    construction() {
        this.color= ''
    }
    setColor(color) {
        this.color=(color);
    }
}
//Defines a Circle class that extends shape and renders an svg file with position, size and fill color//
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
//Defines a Square class that extends shape and renders an svg file with position, size, and fill color//
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}
//Defines a Triangle class that extends shape and renders an svg file with position, size and fill color//
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150, 0" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle}