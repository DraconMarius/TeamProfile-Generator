const Employee = require("./employee");

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.gitHub = answers.gitHub;
    };
    getRole = () => {
        return (`${this.name} is an Emgineer`);
    };
    getGitHub = () => {
        return (`https://github.com/${this.gitHub}`);
    };
};

module.exports = Engineer;


// function Engineer(answers) {
//     this.name = answers.name;
//     this.id = answers.id;
//     this.email = answers.email;
//     this.gitHub = answers.gitHub;
// };