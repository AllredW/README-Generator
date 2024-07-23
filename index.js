// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({projectName, projectDescription, projectLicense, githubIssues, githubContrib}) =>
  // TO DO
// [![License: MIT](https://img.shields.io/badge/License-${projectLicense}-yellow.svg)](https://opensource.org/licenses/${projectLicense})
// [![Contributors](https://img.shields.io/github/contributors/404pandas/empty-resources.svg?style=plastic&logo=appveyor)](${githubContrib})
// [![Issues](https://img.shields.io/github/issues/404pandas/empty-resources.svg?style=plastic&logo=appveyor)](${githubIssues})
// [![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555)](${linkedIn})
  `<div align="center">

</div>
  
  <h3 align="center">${projectName}</h3>
    <p align="center"> ${projectDescription}
    <br />
    <a href="${githubIssues}">Report Bug</a>
    <a href="${githubIssues}">Request Feature</a>
  </p>`;

// Creates an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Tell us about your project. What does it do? What resources and languages does it utilize? What motivated you to make this project?",
    },
    // {
    //     type: "list",
    //     name: "projectLicense",
    //     message: "Does your project use a license? (Use the arrow keys to scroll options, and the Enter key to submit)",
    //     choices: ["N/A", "BSD-3-clause", "MIT", "GPL-License", "Apache-2-0", "ISC-license"],
    //   },
    {
      type: "input",
      name: "githubProfile",
      message:
      "What is the URL your GitHub profile?",
    },
    {
        type: "input",
        name: "githubRepo",
        message:
          "What is the URL your project's repo in Github?",
      },
    //     {
    //     type: "input",
    //     name: "githubIssues",
    //     message:
    //       "What is the URL to the Issues page in your repo?",
    //   },
    //   {
    //     type: "input",
    //     name: "githubContrib",
    //     message:
    //       "What is the URL to the Contributors page in your repo? (Go to the 'Insights' tab, and select 'Contributors)",
    //   },
    //   {
    //     type: "input",
    //     name: "linkedIn",
    //     message: "What is the URL your LinkedIn profile?",
    //   },
  ])
  .then((answers) => {
    console.log(answers);
    // Pass inquirer answers to generateMarkdown
    const markdown = generateMarkdown(answers);
    // Write the Markdown to a file
    fs.writeFile("Sample.md", markdown, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
    // RESOURCE: https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
