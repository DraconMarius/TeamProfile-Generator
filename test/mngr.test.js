const Manager = require("../lib/mngr");

describe("Manager Class", () => {
    it("should inherit getName from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            officeNum: "officeNum"
        };
        const testManager = new Manager(answers);
        const testName = testManager.getName()
        expect(testName).toEqual("name");
    });

    it("should inherit getID from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            officeNum: "officeNum"
        };
        const testManager = new Manager(answers);
        const id = testManager.getID()
        expect(id).toBe("id");
    });

    it("should inherit getEmail from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            officeNum: "officeNum"
        };
        const testManager = new Manager(answers);
        const testEmail = testManager.getEmail()
        expect(testEmail).toEqual("email");
    });

    it("should have updated getRole", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            officeNum: "officeNum"
        };
        const testManager = new Manager(answers);
        const testRole = testManager.getRole();
        expect(testRole).toBe("name is a Manager");
    });

    it("should have an extra special attribute of officeNum", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            officeNum: "officeNum"
        };
        const testManager = new Manager(answers);

        expect(testManager.officeNum).toBe("officeNum");
    });

});

