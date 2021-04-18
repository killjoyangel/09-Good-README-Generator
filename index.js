// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const generateREADME = (answers) =>
//read me skeleton goes here
  ` # Title
  ${answers.Title}
## Description
${answers.Description}
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Questions](#Questions)
## Installation
${answers.Installation}
## Usage:
${answers.Usage}
## License
[![badge:${answers.License}](https://img.shields.io/badge/license-${answers.License}-brightgreen)](https://opensource.org/licenses/${answers.License})
## How to Contribute
${answers.Contribute}
## Tests
${answers.Tests}
## Questions
${answers.Questions}
## GitHub User name 
${answers.usernName}
### Link to GitHub:
https://github.com/killjoyangel
### Email address 
${answers.address}
# Demo
![Demo of README](assets\images\README.gif)`;

// inquier prompt goes here with questions
inquirer
.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'GitHub username?',
    },
    {
        type: 'input',
        name: 'address',
        message: 'What is you email address?',
    }, 
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Briefly describe your project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What dependencies need to be installed?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your application?',
    },
    {type: 'list',
    name: 'License',
    message: 'What license does your project use?',
    choices: [
        'MIT',
        'Apache2.0',
        'GPL3.0',
        'BSD3',
        'None',
    ]  
    },
    {
        type: 'input',
        name: 'Contribute',
        message: 'How can contributions be added?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What command should a user run to test this application?',
    },
])

//file path to print read me
.then((answers) => {
    const READMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
});

   // fs.writeFile('READMEexample.md', READMEPageContent, <-- how to make it generate a new file