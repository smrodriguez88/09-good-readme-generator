const inquirer = require("inquirer");
const fs = require("fs");
const { exception } = require("console");

// array of questions for user
const questions = [
    {
        message: "Enter project title:",
        name: "pTitle"
    },
    {
        message: "Enter project description:",
        name: "pDescription"
    },
    {
        message: "Enter installation instructions:",
        name: "pInstallation"
    },
    {
        message: "Enter application usage information:",
        name: "pUsage"
    },
    {
        message: "Enter contribution guidelines:",
        name: "pContributing"
    },
    {
        message: "Enter test instructions:",
        name: "pTests"
    }
];

inquirer.prompt(questions).then((response) => {
    console.log(response)
})



// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
