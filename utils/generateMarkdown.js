// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table Of Contents
  * [Description](#Description)<br>
  * [Installation](#Installation)<br>
  * [Usage](#Usage)<br>
  * [License](#License)<br>
  * [Contribution](#Contribution)<br>
  * [Tests](#Tests)<br>
  * [Questions](#Questions)<br>

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.installation}
  
  ## License
  ${data.pLicense}
  
  ## Contribution
  ${data.pContribution}
  
  ## Tests
  ${data.pTest}
  
  ## Questions
  ${data.pQuestion}  
`;
}

module.exports = generateMarkdown;
