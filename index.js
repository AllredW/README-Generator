// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  projectName,
  projectDescription,
  projectLicense,
  githubIssues,
  githubRepo,
  githubName,
  userName,
  userEmail,
  mediaLink,
  usageInstructions,
}) =>
  // TO DO

  // [![Contributors](https://img.shields.io/github/contributors/404pandas/empty-resources.svg?style=plastic&logo=appveyor)](${githubContrib})
  // [![Issues](https://img.shields.io/github/issues/404pandas/empty-resources.svg?style=plastic&logo=appveyor)](${githubIssues})
  // [![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555)](${linkedIn})

  // ### Built With

  // <div align="center">

  // [![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)
  // [![HTML](https://img.shields.io/badge/Language-HTML/CSS-ff8000?style=plastic&logo=HTML5&logoWidth=10)](https://html.com/)
  // [![homebrew](https://img.shields.io/badge/Tools-Homebrew-80ff00?style=plastic&logo=Homebrew&logoWidth=10)](https://brew.sh/)
  // [![VS Code](https://img.shields.io/badge/IDE-VSCode-ff0000?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)

  // </div>
  `<div align="center">
[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-yellow.svg)](https://opensource.org/licenses/${projectLicense})
</div>
  
  <h3 align="center">${projectName}</h3>
    <p align="center"> ${projectDescription}
    <br />
    <a href="${githubIssues}">Report Bug</a>
    <a href="${githubIssues}">Request Feature</a>
  </p>

  <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#usage">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions/Contact</a></li>
  </ol>
</details>

## Usage

 <a href="${githubRepo}">
    <img src="${mediaLink}" alt="" width="600" height="400">
  </a>

${usageInstructions}

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the ${projectLicense} license.

See LICENSE.txt for more information.

## Questions
If you have any questions about this project, you can contact:

${userName}: ${userEmail}
Github Profile: https://github.com/${githubName}

Project Link: [${githubRepo}](${githubRepo})
`;

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
      message:
        "Tell us about your project. What does it do? What resources and languages does it utilize? What motivated you to make this project?",
    },
    {
        type: "input",
        name: "usageInstructions",
        message:
          "Tell us about how to use your project. Do you need to install any features before you can start? Do you need to clone the repository to a personal terminal?",
      },
    {
      type: "input",
      name: "mediaLink",
      message:
        "Do you have any images of your application in action? Place the pathway to one of them here. (Don't forget to add an alt to the image attributes later!)",
    },
    {
      type: "list",
      name: "projectLicense",
      message:
        "Does your project use a license? (Use the arrow keys to scroll options, and the Enter key to submit)",
      choices: [
        "N/A",
        "BSD-3-clause",
        "MIT",
        "GPL-License",
        "Apache-2-0",
        "ISC-license",
      ],
    },
    {
      type: "input",
      name: "githubRepo",
      message: "What is the URL your project's repo in Github?",
    },
    {
      type: "input",
      name: "userName",
      message: "Now tell us about yourself. What is your name?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is you professional email address?",
    },
    {
      type: "input",
      name: "githubName",
      message: "What is your GitHub username?",
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
    fs.writeFile("yourRepo.md", markdown, (err) =>
      err ? console.log(err) : console.log(`Your README has been created! You can find it on the sidebar labelled yourRepo.md!`)
    );
  });
