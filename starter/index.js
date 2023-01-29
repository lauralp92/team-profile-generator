const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerData = [
  {
    type: "input",
    message: "Please enter the team Manager's name:",
    name: "managerName",
  },

  {
    type: "input",
    message: "Please enter the team Manager's ID:",
    name: "managerID",
  },

  {
    type: "input",
    message: "Please enter the team Manager's email address:",
    name: "managerEmail",
  },

  {
    type: "input",
    message: "Please enter the team Manager's office number:",
    name: "officeNum",
  },
];

const employeeMenu = [
  {
    type: "list",
    message: "Please select either an Engineer or Intern to add to the team:",
    choices: ["Engineer", "Intern"],
    name: "empType",
  },
];

const engData = [
  {
    type: "input",
    message: "Please enter the engineer's name:",
    name: "engName",
  },

  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "engID",
  },

  {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "engEmail",
  },

  {
    type: "input",
    message: "Please enter the engineer's GitHub username",
    name: "engGithub",
  },
];

const internData = [
  {
    type: "input",
    message: "Please enter the intern's name:",
    name: "intName",
  },

  {
    type: "input",
    message: "Please enter the intern's ID:",
    name: "intID",
  },

  {
    type: "input",
    message: "Please enter the intern's email address:",
    name: "intEmail",
  },

  {
    type: "input",
    message: "Please enter the name of the intern's university/school",
    name: "intSch",
  },
];
