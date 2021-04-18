// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
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
${answers.License}
## How to Contribute
${answers.Contribute}
## Tests
${answers.Tests}
## Questions
${answers.Questions}
  `;


inquirer
  .prompt([
    {
        type: 'input',
        name: 'userName',
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
      name: 'license',
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
.then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
