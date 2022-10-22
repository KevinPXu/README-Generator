//packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");

//an array of questions for user input questions used in inquirer prompt
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

// function to write README file using node file systems
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

//function to initialize app using inquirer prompts and storing the answers to answers object.
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

// Function call to initialize app
init();
