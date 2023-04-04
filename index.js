// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
var ProjectTitle = process.argv[2]
// TODO: Create an array of questions for user input
const questions = ["what is the name of your project?", "please discribe your project", "how do you install your project?"];

// TODO: Create a function to write README file
function writeToFile(ProjectTitle) {
    inquirer
        .prompt([
            {type: 'input', message: questions[0], name: 'title'}




        ])

.then (function (response){
console.log(response.title)

fs.writeFile("./Output/" + ProjectTitle + '.md', response.title, (err) => err ? console.error(err) : console.log("Write success!"))




})


}

// TODO: Create a function to initialize app
function init() {writeToFile(ProjectTitle)}

// Function call to initialize app
init();
