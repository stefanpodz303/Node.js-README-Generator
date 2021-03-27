// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require('./utils/generateMarkdown');

// res => `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//         integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
// </head>
// <body>
//     <div class="jumbotron jumbotron-fluid">
//         <div class="container">
//             <h1 class="display-4">Portfolio</h1>
//             <p class="lead">Check out my Portfolio.</p>
//         </div>
//         <div class=display-2 id='name'>${res.name}</div>
//         <div class=display-2 id='location'>${res.location}</div>
//         <div class=display-2 id='bio'>${res.bio}</div>
//         <div class=display-2><a href='#' id='linkedin'>${res.linkedin}</a></div>
//         <div class=display-2><a href='#' id='github'>${res.github}</a></div>
//     </div>
// <script src =index.js type=text/javascript></script>
// </body>
// </html>`

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
        message: "Please provide your project's description."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions."
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
            'GNU GPL v3.0'
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
        message: "Please provide the project test instructions if applicable."
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
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