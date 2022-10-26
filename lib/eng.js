const Employee = require("./employee");

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.gitHub = answers.gitHub;
        this.eng = answers.eng;
    };
    getRole() {
        return (`${this.name} is an Engineer`);
    };
    getGitHub() {
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