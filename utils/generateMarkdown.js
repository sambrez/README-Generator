// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[Contributions](#Contribution Guidelines)
  *[Tests](#Tests)
  *[Licensing](#Licensing)
  *[Questions](#Questions)

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contribution Guidelines
  ${data.contributions}

  ### Tests
  ${data.tests}

  ### Licensing
  ${data.license}

  ### Questions
  Please reach out with any questions regarding use and/or contributions related to this project.

  *[GitHub:] ${data.username}
  *[email:] ${data.email}
  `;
}

module.exports = generateMarkdown;
