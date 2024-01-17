// bring in the shapes
const [Shape, Triangle, Circle, Square] = require('./lib/shapes')

const inquirer = require("inquirer")

const triMan = new Triangle()

console.log(triMan.renderSVG())