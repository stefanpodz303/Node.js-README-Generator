
const generateMarkdown = data => 

`# ${data.title}

![APM](https://img.shields.io/badge/license-${data.license}-blue)

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Test
${data.test}

## Repository
${data.repo})

## GitHub
- ${data.githubInfo}
- ${data.email}`;


module.exports = generateMarkdown;
