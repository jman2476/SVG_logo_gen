

// create parent class for all shapes
// all shapes need shape color, text, and text color
// default shape color to black, default text color to white
class Shape {
    constructor() {
        this.fillColor = 'black' // set default background color black
        this.textColor = 'white' // set default text color to white
        this.text = '' // set text to empty string
    }

    // takes a string of a color as an argument
    setColor(color) {
        this.fillColor = color
    }

    // takes first 3 characters of string to make the text
    setText(string) {
        this.text = string.slice(0, 3)
    }

    // set color of string to color in argument
    setTextColor(color) {
        this.textColor = color
    }

    // render the shape part of the svg file
    render() {
        const element = `<${this.type} ${this.coordinates} fill="${this.fillColor}"></${this.type}>`

        return element
    }

    // render the text part of the svg file
    renderText() {
        const element = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`

        return element
    }

    // render the full logo
    renderSVG() {
        const shapeCode = this.render()

        const textCode = this.renderText()

        const logo = `<svg version="1.1" width="300" height="200">
        ${shapeCode}
        ${textCode}
        </svg>`

        return logo
    }
}

// child class for triangle
class Triangle extends Shape {
    constructor() {
        super()
        this.type = 'polygon'
        this.coordinates = 'points="150, 18 244, 182 56, 182"'
    }
}

// child class for circle
class Circle extends Shape {
    constructor() {
        super()
        this.type = 'circle'
        this.coordinates = 'cx="150" cy="100" r="50"'
    }
}

// child class for square
class Square extends Shape {
    constructor() {
        super()
        this.type = 'polygon'
        this.coordinates = 'points="50, 0 250,0 250, 200 50, 200"'
    }
}

module.exports = [Shape, Triangle, Circle, Square]