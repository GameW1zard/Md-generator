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
"Please select a licence for your project",
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
            {type: 'input', message: questions[7], name: 'githubusername'},
            {type: 'input', message: questions[8], name: 'email'},
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: [
                    "none/other",
                    "Apache 2.0 License",
                    "Boost Software License 1.0",
                    "BSD 3-Clause License",
                    "BSD 2-Clause License",
                    "CC0",
                    "Attribution 4.0 International",
                    "Attribution-ShareAlike 4.0 International",
                    "Attribution-NonCommercial 4.0 International",
                    "Attribution-NoDerivates 4.0 International",
                    "Attribution-NonCommmercial-ShareAlike 4.0 International",
                    "Attribution-NonCommercial-NoDerivatives 4.0 International",
                    "Eclipse Public License 1.0",
                    "GNU GPL v3",
                    "GNU GPL v2",
                    "GNU AGPL v3",
                    "GNU LGPL v3",
                    "GNU FDL v1.3",
                    "The Hippocratic License 2.1",
                    "The Hippocratic License 3.0",
                    "IBM Public License Version 1.0",
                    "ISC License (ISC)",
                    "The MIT License",
                    "Mozilla Public License 2.0",
                    "Attribution License (BY)",
                    "Open Database License (ODbL)",
                    "Public Domain Dedication and License (PDDL)",
                    "The Perl License",
                    "The Artistic License 2.0",
                    "SIL Open Font License 1.1",
                    "The Unlicense",
                    "The Do What the Fuck You Want to Public License",
                    "The zlib/libpng License"
                ]
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
                
                //generateMarkdown.renderLicenseLink(data)
                generateMarkdown.makeMD(data)
        })
}

// TODO: Create a function to initialize app
function init() {writeToFile(ProjectTitle)}

// Function call to initialize app
//generateMarkdown.testfunc("Hello world")
init();
