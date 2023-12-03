// Function that returns a license badge based on which license the user picked in the prompts
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';

  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

  } else if (license === 'Eclipse Public License 2.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';

  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';

  } else if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';

  } else {
    return '';
  }
}

// Function that returns the license link based on which license the user picked in the prompts
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';

  } else if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)';

  } else if (license === 'Eclipse Public License 2.0') {
    return '(https://opensource.org/licenses/EPL-1.0)';

  } else if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)';

  } else if (license === 'The Unlicense') {
    return '(http://unlicense.org/)';

  } else {
    return '';
  }
 }

// Function that returns the license section of README
function renderLicenseSection(license) { 
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return badge + link;
}

// Function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Licensing](#Licensing)

  [Questions](#Questions)

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.tests}

  ### Licensing
  ${renderLicenseSection(data.license[0])}

  ### Questions
  Please reach out with any questions regarding use and/or contributions related to this project.

  GitHub: https://github.com/${data.username}

  email: ${data.email}
  `;
}

// exports generateMarkdown function
module.exports = generateMarkdown;
