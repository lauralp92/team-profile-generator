const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// stores team information
const teamArr = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Prompts user to choose which employee to add the team
function employeePrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select an employee to add to the team:",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((data) => {
      if (data.addEmployee === "Engineer") {
        addEngData();
      } else if (data.addEmployee === "Intern") {
        addIntData();
      } else {
        const html = render(teamArr);
        fs.writeFile(outputPath, html);
      }
    });
}

// Prompts the user to enter data relating to the team manager
function addManagerData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the team manager's name:",
        name: "managerName",
      },
      {
        type: "input",
        message: "Please enter the team manager's ID:",
        name: "managerID",
      },
      {
        type: "input",
        message: "Please enter the team manager's email address:",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Please enter the team manager's office number:",
        name: "officeNum",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.officeNum
      );
      teamArr.push(manager);
      employeePrompt();
    });
}

// questions for the user when adding engineer

function addEngData() {
  inquirer
    .prompt([
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
        message: "Please enter the engineers's GitHub username:",
        name: "engGitHub",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engName,
        data.engID,
        data.engEmail,
        data.engGitHub
      );
      teamArr.push(Engineer);
      employeePrompt();
    });
}

// questions for the user when adding intern
function addIntData() {
  inquirer
    .prompt([
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
        message: "Please enter the intern's school/university:",
        name: "engSch",
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.intName,
        data.intID,
        data.intEmail,
        data.intSch
      );
      teamArr.push(Intern);
      employeePrompt();
    });
}

addManagerData();
