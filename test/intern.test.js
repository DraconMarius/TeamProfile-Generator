const Intern = require("../lib/intern");

describe("Intern Class", () => {
    it("should inherit getName from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.getName()).toBe("name");
    });

    it("should inherit getID from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.getID()).toBe("id");
    });

    it("should inherit getEmail from Employee", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.getEmail()).toBe("email");
    });

    it("should have updated getRole", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.getRole()).toBe("name is an intern @ school");
    });

    it("should have an extra special attribute of school", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.school).toBe("school");
    });

    it("should have an extra method of getSchool", () => {
        const answers = {
            name: "name",
            id: "id",
            email: "email",
            school: "school"
        };
        const testIntern = new Intern(answers);

        expect(testIntern.getSchool()).toBe("school");
    });

});

