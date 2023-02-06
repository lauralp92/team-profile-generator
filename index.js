const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");

// stores team information
const teamArr = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Questions for the user regarding team manager
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
      employeeMenu();
    });
}

// prompts user to choose which type of employee they want to add after manager
function employeeMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        message:
          "Please select either an Engineer or Intern to further add to the team",
        choices: ["Engineer", "Intern", "None"],
        name: "empType",
      },
    ])
    .then((data) => {
      if (data.empType === "Engineer") {
        addEngData();
      } else {
        if (data.empType === "Intern") return addIntData();
      }

      // questions for the user when adding engineer
      function addEngData() {
        return inquirer
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
              message: "Please enter the engineer's GitHub username",
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
            teamArr.push(engineer);
            employeeMenu();
          });

        // questions for the user when adding an intern
        function addIntData() {
          return inquirer
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
                message: "Please enter the intern's university/school",
                name: "intSch",
              },
            ])
            .then((data) => {
              const intern = new Intern(
                data.intName,
                data.intID,
                data.intEmail,
                int.Sch
              );
              teamArr.push(intern);
              employeeMenu();
            });
        }
      }

      function init() {
        addManagerData();
      }

      init();
    });
}
