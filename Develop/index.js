var fs = require("fs");
var inquirer = require('inquirer');
let inputs = [];

// function to write README file
function writeToFile() {
    for (var i = 0; i < inputs.length; i++)
    {
    fs.appendFile("log.txt", inputs[i] + '\n', function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Commit logged!");
        }
      
      });
    }
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
            default: "Just type Node index into the terminal"
        },
        {
            name: 'credits',
            message: 'List the collaborators and tutorials used.',
            default: "None"
        },
    ])
    .then(answers => {
        console.info('Project Title:', answers.title);
        console.info('Description:', answers.description);
        console.info('Installation:', answers.install);
        console.info('Usage:', answers.usage);
        console.info('Credits:', answers.credits);
        // Use user feedback for... whatever!!
        inputs.push(answers)
        console.info(inputs)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
    writeToFile()
}
// function call to initialize program
init();