const fs = require('fs');
// const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
const Team = require('./lib/Team');

//const generatePage = require('./src/page-template.js');


// const managerQuestions = () => {
//         return inquirer.prompt([{
//             type: 'input',
//             name: 'manName',
//             message: "Enter your team manager's name (Required)",
//             validate : nameInput => {
//                 if(nameInput){
//                     return true;
//                 }else{
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'manId',
//             message: "Enter your team manager's employee ID (Required)",
//             validate : idInput => {
//                 if(idInput){
//                     return true;
//                 }else{
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'manEmail',
//             message: "Enter your team manager's email (Required)",
//             validate : emailInput => {
//                 if(emailInput){
//                     return true;
//                 }else{
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "Enter your team manager's office number (Required)",
//             validate : officeInput => {
//                 if(officeInput){
//                     return true;
//                 }else{
//                     return false;
//                 }
//             }
//         }
//     ])
//     // .then(({manName, manId, manEmail, officeNumber}) =>{
//     //      const manager = new Manager(manName, manId, manEmail, officeNumber);
//     //      console.log(manager);
//     //      return manager;
//     //  });
//     };
    
// const promptTeam = teamData => {
        
//         if(!teamData.members){
//             teamData.members = [];
//         }
//         console.log(`
//         ==================
//         Adding a ream member
//         ===================`);
//         return inquirer.prompt([
//             {
//             type: 'list',
//             name: 'empType',
//             message: 'Select an Intern or engineer to be added to your team',
//             default: 'Intern',
//             choices: ['Engineer', 'Intern']
//             },
//             {
//                 type: 'input',
//                 name: 'empName',
//                 message: "Enter the employee's name: ",
//                 default: 'Unknown',
//             },
//             {
//                 type: 'input',
//                 name: 'empId',
//                 message: "Enter the employee's ID: ",
//                 default: 0
//             },
//             {
//                 type: 'input',
//                 name: 'empEmail',
//                 message: "Enter the employee's email: ",
//                 default: 'noemail@mail.com' 
//             },
//             {
//                 type: 'input',
//                 name: 'schoolName',
//                 message: "Enter Intern's school name: ",
//                 when: ({empType}) => empType === 'Intern'
//             },
//             {
//                 type: 'input',
//                 name: 'gitHub',
//                 message: "Enter Engineer's gitHub name: ",
//                 when: ({empType}) => empType === 'Engineer'
//             },
//             {
//                 type: 'confirm',
//                 name: 'confirmAddEmp',
//                 message: 'Would you like to add another team member?',
//                 default: false
//             }
//     ])
//     .then(memberData => {
//         teamData.members.push(memberData);
//         if(memberData.empType === 'Engineer'){
//             const engineer = new Engineer(memberData.empName, memberData.empId, memberData.empEmail, memberData.gitHub);
//             teamData.members.push(engineer);
//         }else{
//             const intern = new Intern(memberData.empName, memberData.empId, memberData.empEmail, memberData.schoolName);
//             teamData.members.push(intern);
//         }
//         if(memberData.confirmAddEmp){
//             return promptTeam(teamData);
//         }else{
//             return teamData;
//         }
        
//     });
//     };
    
//     // function to write README file
// const writeToFile = (fileName, data) => {
//         return new Promise((resolve, reject) =>{
//             fs.writeFile(fileName, generatePage(data), err =>{
//                 if(err){
//                     reject(err);
//                     return;
//                 }
    
//                 resolve({
//                     ok:true,
//                     message: 'File created!'
//                 });
//             });
//         });
//     };
    
    
// const initializeTeam = () => {
//         managerQuestions()
//         .then(promptTeam)
//         .then(teamData =>{
//             return writeToFile('./index.html', teamData);
//         });
//     };
//
//const team = new Team();
// const initialize = () =>{
//     team.managerQuestions()
//     .then(promptTeam)
//     .then(teamData =>{
//     return writeToFile('./index.html', teamData);
// });};

new Team().managerQuestions();
