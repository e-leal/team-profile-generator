const fs = require('fs');
const inquirer = require('inquirer');

const managerQuestions = () => {
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
]);
};

const promptTeam = teamData => {
    if(!teamData.members){
        teamData.members = [];
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
    teamData.members.push(memberData);
    if(memberData.confirmAddEmp){
        return promptTeam(teamData);
    }else{
        return teamData;
    }
});
};

managerQuestions()
.then(promptTeam);