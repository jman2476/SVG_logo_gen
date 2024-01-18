// bring in the shapes
const [Shape, Triangle, Circle, Square] = require('./lib/shapes.js')
// bring in inquirer and fs, and dayjs for naming files
const inquirer = require("inquirer")
const fs = require('fs')
const dayjs = require('dayjs')



inquirer.prompt([{
    type: 'list',
    name: 'shape',
    message: 'What shape logo would you like?',
    choices: ['Triangle', 'Circle', 'Square']
},
{
    type: 'input',
    name: 'fillColor',
    message: 'What color should the shape be? Use a color keyword, or a hexdecimal preceded by #'
},
{
    type: 'input',
    name: 'text',
    message: 'What text do you want on your logo? Only the first 3 characters will be used'   
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color should the text be? Use a color keyword, or a hexdecimal preceded by #'
}]).then((answerObj) => {

    switch(answerObj.shape) {
        case 'Triangle':
            const triangle  = new Triangle()
            triangle.setColor(answerObj.fillColor)
            triangle.setText(answerObj.text)
            triangle.setTextColor(answerObj.textColor)
            return triangle
        case 'Circle':
            const circle  = new Circle()
            circle.setColor(answerObj.fillColor)
            circle.setText(answerObj.text)
            circle.setTextColor(answerObj.textColor)
            return circle
        case 'Square':
            const square  = new Square()
            square.setColor(answerObj.fillColor)
            square.setText(answerObj.text)
            square.setTextColor(answerObj.textColor)
            return square
    }
}).then((logoObj) => {
    const dateTag = dayjs().format('D-M-YY_hh-mm')
    fs.writeFile(`./logos/${logoObj.text}-Logo-${dateTag}.svg`, logoObj.renderSVG(), (err => {
        if (err) return console.log(err)

        console.log('Successfully made new logo!')
    }))
})