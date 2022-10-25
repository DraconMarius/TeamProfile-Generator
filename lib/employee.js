//nasoc employee class, eveyone we enter will have this as a baseline. 
// excluded getRole here becasue we will be specifying what the return result is within
// those, and using instance of. We should be able to make that work. 
class Employee {
    constructor(answers) {
        this.name = answers.name;
        this.id = answers.id;
        this.email = answers.email;
    }
    getName = () => {
        return this.name;
    };
    getId = () => {
        return this.id;
    };
    getEmail = () => {
        return this.email;
    };
    // this.getRole = () => {
    //     return "Employee"
    // }
    gerRole = () => {
        return (`${this.name} is an Employee`)
    }
};