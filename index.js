//node modules
//require "inquire" dependency to prompt user questions 
const inquirer = require("inquirer");

//Global variables to create team 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs')
const template = require('./src/page-template')


//team array
const team = [];
const idArray = [];

//prompted questions in console 
inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your managers name?(Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter managers name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Manager ID number?(Requird)",
        validate: idNumber => {
          if (idNumber) {
            return true;
          } else {
            console.log("You need to type your employee number ID");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "ManagerEmail",
        message: "What is your managers email address?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is your managers office number?",
      }
    ])
    //chain answers with .then method
    .then(answers => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
      )
      team.push(manager);
      idArray.push(answers.managerId);
      promptUser();
    })

promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chosen",
        message:
          "Add any of the following options to build a team (Enter and press the arrows to chose)",
        choices: ["Engineer", "Intern", "Done"]
      }
    ])
    .then(answer => {
      if (answer.chosen === "Engineer") {
        createEngineer();
      } else if (answer.chosen === "Intern") {
        createIntern();
      } else {
        createTeam();
      }
    })
};

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your Engineer ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      }
    ])
    .then(answer => {
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.github
      );
      team.push(engineer);
      idArray.push(answer.engineerId);
      promptUser();
    })
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your school?",
      }
    ])
    .then(answer => {
      const intern = new Intern(
        answer.interName,
        answer.internId,
        answer.internEmail,
        answer.school
      );
      team.push(intern);
      idArray.push(answer.internId);
      promptUser();
    })
}
function createTeam() {
  fs.writeFile('index.html', template(team), 'utf-8', err => err ? console.log(err) : console.log('HTML has been created'));
}