const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.gitHub = github;
    }

    getGiithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;