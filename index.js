
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require('./utils/generateMarkdown.js');


inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a  short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation instructions if applicable."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage."
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0',
            'ISC'
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide contributing parties."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide any project test instructions if applicable."
    },
    {
        type: "input",
        name: "githubInfo",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link?"
    },
  ])

  .then((data) => {

    fs.writeFile("README.md", generateREADME(data), (err) =>
      err ? console.log(err) : console.log('New README file created!')
    );
  });