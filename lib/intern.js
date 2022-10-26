const Employee = require("./employee");

class Intern extends Employee {
    constructor(answers) {
        super(answers);
        this.school = answers.school;
        this.intern = answers.intern;
    };
    getRole = () => {
        return (`${this.name} is an intern @ ${this.school}`);
    }
    getSchool = () => {
        return (this.school);
    }
};

module.exports = Intern;