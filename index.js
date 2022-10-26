const Employee = require("./lib/employee");
const Manager = require("./lib/mngr");
const Engineer = require("./lib/eng");
const Intern = require("./lib/intern");
const inquirer = require('inquirer');


//get global variable to store our employee after every ask.//
let payroll = [];


//we need to prompt for answers:
//everyone needs to have a name, an employee ID, and email. 
// manager has a sepcial office ID; Eng has GitHub userName; intern has school as their defining attriubtes

//creating questions array for clearner calling below
// const questions = ;

function addTeamMember() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
            validate(answer) {
                if (!answer) {
                    return "*Your name cannot be an empty string*"
                }
                return true
            },
        },
        {
            type: "input",
            message: "Please provide your company email address",
            name: "email",
            validate(answer) {
                if (!answer) {
                    return "*error, no text entered*"
                }
                return true
            }
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "employeeID",
            validate(answer) {
                if (parseInt(answer) === NaN) { //this validation is not working, but we wil; 
                    return "*Please provide a ID"
                }
                return true
            },
        },
        { //is manager?
            type: "confirm",
            message: "Are you a manager?",
            name: "mngr",
        },
        { //if yes = manager: officeNum special
            type: "list",
            message: "which office are you assigned to?",
            name: "officeNum",
            choices: ["SBO-200", "SFO-105", "MTV-240", "MTV200", "BayView-500"],
            when: (answers) => {
                if (answers.mngr) {
                    return true;
                }
            },
        },
        { //only if manager is false, ask are you engineer?
            type: "confirm",
            message: "Are you an Engineer?",
            name: "eng",
            when: (answers) => {
                if (!answers.mngr) {
                    return true;
                }
            },
        },
        { //if yes = engineer: gitHub special
            type: "input",
            message: "What is your GitHub user name?",
            name: "gitHub",
            when: (answers) => {
                if (answers.eng) {
                    return true;
                }
            },
            validate(answer) {
                if (!answer) {
                    return "Your GitHub user name cannot be blank"
                }
                return true
            }
        },
        { // if not manager AND not eng, must be intern?
            type: "confirm",
            message: "Ah you must be intern then?",
            name: "intern",
            when: (answers) => {
                if (!answers.mngr && !answers.eng) {
                    return true;
                }
            },
        },
        { // if yes = internL: school special
            type: "input",
            message: "Where do/did you go to school?",
            name: "school",
            when: (answers) => {
                if (answers.intern) {
                    return true;// 
                }
            },
        },
        {
            type: "confirm",
            message: "Do you want to add another team member?",
            name: "addmore",
        },
    ]).then((answers) => {
        console.log(answers);
        if (answers.mngr) {
            const Lead = new Manager(answers);
            payroll.push(Lead);
        } else if (answers.eng) {
            const engEmployee = new Engineer(answers);
            payroll.push(engEmployee);
        } else if (answers.intern) {
            const internEmployee = new Intern(answers);
            payroll.push(internEmployee);
        };
        if (!answers.addmore) {
            console.log(payroll);
            return payroll;
        } else {
            return addTeamMember();
        }
    });
};

addTeamMember();

//.then((answers) => {
//     console.log(answers);
//     const filename = "generated.md";
//     const markdown = generateMarkdown(answers);
//     fs.writeFile(filename, markdown, (err) =>
//         (err) ? console.log("I think I am having a stroke, blame my creator \b" + err) : console.log("sucess??")

//     );
// })
//     ;
