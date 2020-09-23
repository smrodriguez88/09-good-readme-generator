// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table Of Contents
  
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
