const Employee = require("./employee");

class Intern extends Employee {
    constructor(answers) {
        this.school = answers.school;
    };
    getRole = () => {
        return (`${this.name} is an intern @ ${this.school}`);
    }
    getSchool = () => {
        return (this.school);
    }
};