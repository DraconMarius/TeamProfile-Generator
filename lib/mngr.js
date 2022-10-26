const Employee = require("./employee");

class Manager extends Employee {
    constructor(answers) {
        super(answers); //calling super to access this with Employee
        this.officeNum = answers.officeNum;
        this.mngr = answers.mngr;
    };
    getRole() {
        return (`${this.name} is a Manager`)
    };
};

module.exports = Manager;