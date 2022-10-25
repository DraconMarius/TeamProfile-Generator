
//get global variable to store our employee
let payroll = [];


//we need to prompt for answers:
//everyone needs to have a name, an employee ID, and email. 
// manager has a sepcial office ID; Eng has GitHub userName; intern has school as their defining attriubtes

//creating questions array for clearner calling below
const questions = [
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
            if (answer === NaN) {
                return "*Please provide a ID"
            }
            return true
        },
    },
    {
        type: "confirm",
        message: "Are you a manager?",
        name: "mngr",
    },
    {
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
    {
        type: "confirm",
        message: "Are you an Engineer?",
        name: "eng",
        when: (answers) => {
            if (!answers.mngr) {
                return true;
            }
        },
    },
    {
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
    {
        type: "confirm",
        message: sixq,
        name: "license",
        choices: ["NONE", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "GNU:GPLv3(GeneralPublicLicense)", "LesserGPLv3", "MIT", "Mozilla Public License 2.0", "WTFPL", "Eclipse Public License 2.0"],
    },
    {
        type: "input",
        message: sevenq,
        name: "testing",
        default: "NONE"
    },
    {
        type: "confirm",
        message: eightq,
        name: "github",
    },
    {
        type: "input",
        message: "What's your gitHub username?",
        name: "gitHubUserName",
        when: (answers) => {
            if (answers.github) {
                return true;
            }
        },
    },
    {
        type: "confirm",
        message: "Ah you must be intern then?",
        name: "intern",
        when: (answers) => {
            if (!answers.mngr && !answers.gitHub) {
                return true;
            }
        },
    },
    {
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
];

function addTeamMember() {
    inquirer.prompt(questions).then((answers) => {
        if (answers.mngr) {
            const Lead = new Manager(answers);
            payroll.push(Lead);
        } else if (answers.eng) {
            const eng = new Engineer(answers);
            payroll.push(eng);
        } else if (answers.intern) {
            const Intern = new Intern(answers);
            payroll.push(Intern);
        }
    })
}

//.then((answers) => {
//     console.log(answers);
//     const filename = "generated.md";
//     const markdown = generateMarkdown(answers);
//     fs.writeFile(filename, markdown, (err) =>
//         (err) ? console.log("I think I am having a stroke, blame my creator \b" + err) : console.log("sucess??")

//     );
// })
//     ;
