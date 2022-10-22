# Weather-Application

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- inquirer.js
- file systems
- VS Code
- Git
- GitHub

## Summary

This project was created to explore node.js and some of its packages. The package used in this program was called inquirer which allowed the creation of a terminal interface that retrieved user data. The terminal interface allows the user to input what they want for each section of a dynamically created README.md file using nodes file systems. This was a first introduction to a new runtime environment.

## Demonstration

Link to demonstrate how to use the application:

## Description

A simple terminal application that will dynamically create a fresh README.md file for the user after answering several prompts. Each prompt is for a specific section of the README document. Once all prompts have been answered, the document is generated to the current directory.

## Code Snippet

### Functions that initializes the generation of the README by generating prompts to the terminal using inquirer.js

```JavaScript
const questions = [
  "What is the title of your project?",
  "What is your Github Username:",
  "What is your email:",
  "Write a description for you README:",
  "Write the installation instructions for you application:",
  "Please describe how to use the application:",
  "Please explain how the application is used:",
  "What license would you like to use?",
  "Please name all the contributors of the application",
  "Please write any tests for your application here:",
];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "username",
        message: questions[1],
      },
      {
        type: "input",
        name: "email",
        message: questions[2],
      },
      {
        type: "input",
        name: "description",
        message: questions[3],
      },
      {
        type: "input",
        name: "install",
        message: questions[4],
      },
      {
        type: "input",
        name: "howToUse",
        message: questions[5],
      },
      {
        type: "input",
        name: "whatUseFor",
        message: questions[6],
      },
      {
        type: "list",
        name: "license",
        message: questions[7],
        choices: ["MIT", "APACHE", "MOZILLA", "BSD"],
      },
      {
        type: "input",
        name: "contributors",
        message: questions[8],
      },
      {
        type: "input",
        name: "tests",
        message: questions[9],
      },
    ])
    .then((answers) => {
      const markdownPageCont = generateMarkdown(answers);
      writeToFile("Generated-README.md", markdownPageCont);
    });
}
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/kevin-xu-4672a7215/)
[GitHub](https://github.com/KevinPXu)
