// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
var ProjectTitle = process.argv[2]
var data = {
    title: "",
    description: "",
    installation: "",
    usage: "",
    contribution: "",
    testingInstructions: "",
}
// TODO: Create an array of questions for user input
const questions = ["what is the name of your project?",
"please discribe your project (eg: its a calculator)",
"how do you install your project? (eg: open in webrowser)",
"How is your project used?",
"Who worked on this project?",
"Please enter short test instructions for your project",
"What licence are you using for your project",
"please enter your Github username",
"please enter a email for awnsering questions about your project"
]
// TODO: Create a function to write README file
function writeToFile(ProjectTitle) 
{
    inquirer
        .prompt([
            {type: 'input', message: questions[0], name: 'title'},
            {type: 'input', message: questions[1], name: 'description'},
            {type: 'input', message: questions[2], name: 'installation'},
            {type: 'input', message: questions[3], name: 'usage'},
            {type: 'input', message: questions[4], name: 'contribution'},
            {type: 'input', message: questions[5], name: 'testingInstructions'},
            {type: 'input', message: questions[7], name: 'guthubusername'},
            {type: 'input', message: questions[8], name: 'email'},
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
            }
        ])

        .then (function (response){

                data.title = response.title
                data.description = response.description
                data.installation = response.installation
                data.usage = response.usage
                data.contribution = response.contribution
                data.testingInstructions = response.testingInstructions
                data.license = response.license
                data.githubusername = response.githubusername
                data.email = response.email
                console.log(response.license)

                generateMarkdown.makeMD(data)
        })
}

// TODO: Create a function to initialize app
function init() {writeToFile(ProjectTitle)}

// Function call to initialize app
//generateMarkdown.testfunc("Hello world")
init();
