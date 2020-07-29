const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');

class Team {
    constructor(){
        this.manager = new Manager('Unknown', 0, 'unknown@mail.com', 0);
        this.employees = [];
    }

    writeToFile = (fileName, data) => {
        return new Promise((resolve, reject) =>{
            fs.writeFile(fileName, generatePage(data), err =>{
                if(err){
                    reject(err);
                    return;
                }
    
                resolve({
                    ok:true,
                    message: 'File created!'
                });
            });
        });
    };

    managerQuestions = () => {
        return inquirer.prompt([{
            type: 'input',
            name: 'manName',
            message: "Enter your team manager's name (Required)",
            validate : nameInput => {
                if(nameInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manId',
            message: "Enter your team manager's employee ID (Required)",
            validate : idInput => {
                if(idInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manEmail',
            message: "Enter your team manager's email (Required)",
            validate : emailInput => {
                if(emailInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter your team manager's office number (Required)",
            validate : officeInput => {
                if(officeInput){
                    return true;
                }else{
                    return false;
                }
            }
        }
    ])
    .then(({manName, manId, manEmail, officeNumber}) =>{
        this.manager = new Manager(manName, manId, manEmail, officeNumber);
        this.promptTeam();
      });
    };

    promptTeam = () => {
    
        if(!this.employees){
            this.employees = [];
        }
        console.log(`
        ==================
        Adding a ream member
        ===================`);
        return inquirer.prompt([
            {
            type: 'list',
            name: 'empType',
            message: 'Select an Intern or engineer to be added to your team',
            default: 'Intern',
            choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'empName',
                message: "Enter the employee's name: ",
                default: 'Unknown',
            },
            {
                type: 'input',
                name: 'empId',
                message: "Enter the employee's ID: ",
                default: 0
            },
            {
                type: 'input',
                name: 'empEmail',
                message: "Enter the employee's email: ",
                default: 'noemail@mail.com' 
            },
            {
                type: 'input',
                name: 'schoolName',
                message: "Enter Intern's school name: ",
                when: ({empType}) => empType === 'Intern'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "Enter Engineer's gitHub name: ",
                when: ({empType}) => empType === 'Engineer'
            },
            {
                type: 'confirm',
                name: 'confirmAddEmp',
                message: 'Would you like to add another team member?',
                default: false
            }
    ])
    .then(memberData => {
        //this.employees.push(memberData);
        if(memberData.empType === 'Engineer'){
            const engineer = new Engineer(memberData.empName, memberData.empId, memberData.empEmail, memberData.gitHub);
            this.employees.push(engineer);
        }else{
            const intern = new Intern(memberData.empName, memberData.empId, memberData.empEmail, memberData.schoolName);
            this.employees.push(intern);
        }
        if(memberData.confirmAddEmp){
            return this.promptTeam(this);
        }else{
            return this.writeToFile('./index.html', this);
        }
        
    });
    };

    

    initializeTeam = () => {
        this.managerQuestions()
    };

}
module.exports = Team;