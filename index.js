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
            "MIT",
            "APACHE",
            "GPLv3",
            "ISC",
            "Unlicensed",
            "WTFPL"
        ]
    },
    {
        type: "input",
        message: "Enter contributors:",
        name: "pContributing"
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "pTests"
    },
    {
        type: "input",
        message: "Enter contact information for questions:",
        name: "pQuestions"
    }
];



// function to write README file
function writeToFile(fileName, data) {
    licenses = {
        "MIT" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "APACHE" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "GPLv3" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "ISC" : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        "Unlicensed" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        "WTFPL" : "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }
    let lickey = data.pLicense
    data.pLicense = licenses[lickey]
    let markDown = gm(data)
    fs.writeFileSync(fileName, markDown)
}

// function to initialize program
function init(questions) {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", response)
    });
    
};

// function call to initialize program
init(questions);
