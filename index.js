const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, credits, tests, github, email }) =>
  `# ${title}
  * ${description}
  
  ## 📘 Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#contributors)
  - [Tests](#tests)
  - [Demo](#demo)
  - [Questions?](#questions)
  
  ## Installation 🔧
  
  * ${installation}
  
  ## Usage 💡

  * ${usage}

  ## License 🔓
  
  * ${license}

  ## Contributors 🏆
  
  * ${credits}
  
  ## Tests 🔬

  * ${tests}

  ## Questions❓

  * Visit my Github repo at github.com/${github}
  * Or email me at ${email}
  `;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a one-sentence description explaining the what, why, and how of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How might this project be used.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Add the license used, if any.',
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'Creative Commons Zero v1.0 Universal'],
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Include the names of collaborators or 3rd-party assets used, if any.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide details on how to run tests for your project.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username so that users can reference your code.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address that users can contact with any questions.',
      },
  ])
   .then((data) => {
    const readmeData = generateREADME(data);

// TODO: Create a function to write README file (JSON.stringify(data, null, '\t'),)
    fs.writeFile('generatedREADME.md', readmeData, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


// // TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
