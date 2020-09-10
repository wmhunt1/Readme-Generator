var fs = require("fs");
var inquirer = require('inquirer');

// function to write README file
function writeToFile(data) {
    
    fs.writeFile("testREADME.md", data, function(err) {

        if (err) throw err
      });
}

// function to initialize program
function init() {
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: 'title',
            message: 'What is your project title?',
            default: "Project 1"
        },
        {
            name: 'description',
            message: 'Describe your project',
            default: "Details of Project"
        },
        {
            name: 'install',
            message: 'What is needed to install your project?',
            default: "Just use npm install"
        },
        {
            name: 'usage',
            message: 'Provide instructions to use your project.',
            default: "Just type node index into the terminal"
        },
        {
            name: 'credits',
            message: 'List the collaborators and tutorials used.',
            default: "None"
        },
        {
            name: 'license',
            message: 'What can users do or not do with your project?',
            default: "Anything"
        },
        {
            name: 'badge',
            message: 'provide a badge',
            default: ""
        },
        {
            name: 'contributing',
            message: 'How can others contribute to your project?',
            default: "They can't"
        },
        {
            name: 'tests',
            message: 'Provide tests for your application',
            default: "No tests provided"
        },
        {
            name: 'questions',
            message: 'link your email and github link',
            default: "example@test.com and github.com"
        },
       
    ])
    .then(answers => {
        let markdown = 'Project Title: ' + answers.title + '\n' + 'Description: ' + answers.description + '\n' + 'Installation: ' +  answers.install + '\n' + 'Usage: ' + answers.usage + '\n' + 'Credits: ' +  answers.credits +  '\n' + 'License: ' + answers.license + '\n' + 'Badge: ' + answers.badge + '\n' + 'Contributing: ' + answers.contributing + '\n' + 'Test: ' + answers.tests + '\n' + 'Questions: ' + answers.questions;
        writeToFile(markdown)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
    
}
// function call to initialize program
init();



