// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        default: '[Project Title]',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of this project.',
        default: '[Project Description]',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Detail any necessary steps a user must take to install this project.',
        default: '[Installation Instructions]',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the intended purpose and use of this project.',
        default: '[Intended Use]',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Provide any guidelines necessary for others to follow if contributing to this project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any instructions for running tests that were written for this project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for this project.',
        choices: [
            'Apache License 2.0',
            'MIT License',
            'Eclipse Public License 2.0',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }

        console.log('Your README.md has been SUCCESSFULLY generated.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
            const fileData = generateMarkdown(data);
            writeToFile('README.md', fileData);
        })
        .catch((error) => {
            if (error) {
                return console.log(error);
            }
        });
};

// Function call to initialize app
init();
