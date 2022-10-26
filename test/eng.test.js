const Engineer = require("../lib/eng");

describe("Engineer Class", () => {
    it("should inherit getName from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.getName()).toBe("name");
    });

    it("should inherit getID from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.getID()).toBe("id");
    });

    it("should inherit getEmail from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.getEmail()).toBe("email");
    });

    it("should have updated getRole", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.getRole()).toBe("name is an Engineer");
    });

    it("should have an extra special attribute of officeNum", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.gitHub).toBe("gitHub");
    });

    it("should have an extra getGitHub method", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            gitHub: "gitHub"
        };
        const testEngineer = new Engineer(answers);

        expect(testEngineer.getGitHub()).toBe("https://github.com/gitHub");
    });

});

