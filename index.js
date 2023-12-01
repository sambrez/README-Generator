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
        message: 'Provide any guidelines or instructions necessary for others to contribute to this project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe all tests written for this project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for this project.',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-clause "New" or "Revised" License',
            'Boot Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
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
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            if (error) {
                return console.log(error);
            }
        });

    writeToFile();
};

// Function call to initialize app
init();
