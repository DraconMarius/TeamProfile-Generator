const Employee = require("./employee");

class Manager extends Employee {
    constructor(answers) {
        this.officeNum = answers.officeNum;
    };
    getRole = () => {
        return (`${this.name} is a Manager`)
    }
};