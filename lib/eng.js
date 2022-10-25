class Engineer extends Employee {
    constructor(answers) {
        this.gitHub = answers.gitHub;
    };
    getRole = () => {
        return (`${this.name} is an Emgineer`);
    };
    getGitHub = () => {
        return (`https://github.com/${this.gitHub}`);
    };
};



// function Engineer(answers) {
//     this.name = answers.name;
//     this.id = answers.id;
//     this.email = answers.email;
//     this.gitHub = answers.gitHub;
// };