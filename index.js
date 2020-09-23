const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "pTitle"
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "pDescription"
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "pInstallation"
    },
    {
        type: "input",
        message: "Enter application usage information:",
        name: "pUsage"
    },
    {
        type: "checkbox",
        message: "Select a license for your application:",
        name: "pLicense",
        choices: [
            "MIT License",
            "APACHE License",
            "GPL License",
            "Public Domain"
        ]
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "pContributing"
    },
    {
        type: "input",
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
