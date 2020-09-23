const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown")

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
        type: "list",
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


// function to write README file
function writeToFile(fileName, data) {
    markDown = gm(data)
    console.log(markDown)
    // fs.writeFileSync(fileName, markDown)
}

// function to initialize program
function init(questions) {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile("README.md", response)
    });
    
};

// function call to initialize program
init(questions);
