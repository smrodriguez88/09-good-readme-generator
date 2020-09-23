// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.pTitle}
  ## Table Of Contents
  * [Description](#Description)<br>
  * [Installation](#Installation)<br>
  * [Usage](#Usage)<br>
  * [License](#License)<br>
  * [Contribution](#Contribution)<br>
  * [Tests](#Tests)<br>
  * [Questions](#Questions)<br>

  ## Description
  ${data.pDescription}

  ## Installation
  ${data.pInstallation}
  
  ## Usage
  ${data.pUsage}
  
  ## License
  ${data.pLicense}
  
  ## Contribution
  ${data.pContributing}
  
  ## Tests
  ${data.pTests}
  
  ## Questions
  ${data.pQuestions}  
`;
}

module.exports = generateMarkdown;
