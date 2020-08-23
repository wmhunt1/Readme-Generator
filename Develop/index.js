var fs = require("fs");
var inquirer = require('inquirer');
let inputs = [];

// function to write README file
function writeToFile() {
    
    fs.appendFile("testREADME.md", JSON.stringify(inputs), function(err) {

        if (err) {
          console.log(err);
        }
        else {
          //nothing
        }
      
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
        console.info('Project Title:', answers.title);
        console.info('Description:', answers.description);
        console.info('Installation:', answers.install);
        console.info('Usage:', answers.usage);
        console.info('Credits:', answers.credits);
        console.info('License:', answers.license);
        console.info('License:', answers.badge);
        console.info('License:', answers.contributing);
        console.info('License:', answers.tests);
        console.info('License:', answers.questions);
        //adds answers to input array
        inputs.push(answers)
        //reads inputs
        console.info(inputs)
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
writeToFile()



