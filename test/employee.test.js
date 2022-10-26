const Employee = require("../lib/employee");

describe("Employee Class", () => {
    it("getName should return the nam of the employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
        };
        const testEmployee = new Employee(answers);

        expect(testEmployee.getName()).toBe("name");
    });

    it("getID should return ID", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
        };
        const testEmployee = new Employee(answers);

        expect(testEmployee.getID()).toBe("id");
    });

    it("getEmail should return Email", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
        };
        const testEmployee = new Employee(answers);

        expect(testEmployee.getEmail()).toBe("email");
    });

    it("getRole should return 'Name' is an Empoyee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
        };
        const testEmployee = new Employee(answers);

        expect(testEmployee.getRole()).toBe("name is an Employee");
    });
})