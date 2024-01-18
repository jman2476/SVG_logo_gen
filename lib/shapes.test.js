const [, Triangle, Circle, Square] = require('./shapes.js')

// test the render() method on the triangle class
describe('Triangle render', () => {
    it('Should render an svg triangle element with the given fill color', () => {
        const triTest = new Triangle()
        triTest.setColor('blue')

        expect(triTest.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>')
    })
})

// test the render() method on the square class
describe('Square render', () => {
    it('Should render an svg square element with the given fill color', () => {
        const sqrTest = new Square()
        sqrTest.setColor('red')

        expect(sqrTest.render()).toBe('<polygon points=\"50, 0 250,0 250, 200 50, 200\" fill=\"red\"></polygon>')
    })
})

// test the render() method on the circle class
describe('Circle render', () => {
    it('Should render an svg circle element with the given fill color', () => {
        const circleTest = new Circle()
        circleTest.setColor('#b00b13')

        expect(circleTest.render()).toBe('<circle cx="150" cy="100" r="50" fill="#b00b13"></circle>')
    })
})