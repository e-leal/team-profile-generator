const generateManager = (manager) =>{
    return `
    <section class="my-3" id="manager">
        <div class="flex-row justify-space-between">
            <div class="card-deck">
                <div class="card" style="width: 18rem;">
                    <div class="card-header text-white">
                        <h2 class="text-white">
                            ${manager.name}</h2>
                         <h4 class="text-white"> <i class="fa fa-coffee" aria-hidden="true"></i>Manager</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee Id:${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};

const generateEmployees = teamArr =>{
    return `
    <section class="my-3" id="members">
      <div class="flex-row justify-space-between">
      ${teamArr
    .filter((emp) => emp.getRole() === "Engineer")
    .map(({name, ...stats}) => {
      
        return `<div class="card-deck">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-white">
            <h3 class="text-white">
       ${name}</h3>
       <h4 class="text-white"><i class="fas fa-glasses" aria-hidden="true"></i>Engineer</h4>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">Employee Id: ${stats.id}</li>
       <li class="list-group-item">Email: <a href="mailto:${stats.email}"> ${stats.email}</a></li>
       <li class="list-group-item">Github Account: <a href="https://github.com/${stats.gitHub}">${stats.gitHub}</a></li>
     </ul>
   </div>`;
      
        
    })
    .join('')}

    ${teamArr
    .filter(emp => emp.getRole() === "Intern")
    .map(({name, id, email, schoolName}) =>{
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header text-white bg-primary">
        <h3 class="text-white">
          ${name}</h3>
        <h4 class="text-white"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee Id: ${id}</li>
          <li class="list-group-item">Email:<a href="mailto:${email}"> ${email}</a></li>
          <li class="list-group-item">School Name: ${schoolName}</li>
        </ul>
      </div>
        `;
        
    })
.join('')}
</div>
</section>
    `;
};

module.exports = templateData => {
    const {manager, employees} = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="./src/style.css">
    </head>
  
    <body>
      <header>
      <div class="container flex-row justify-space-between align-center py-3 d-block">
      <h1 class="page-title py-2 px-3 text-white">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
        ${generateManager(manager)}
        ${generateEmployees(employees)}
        </main>
        <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>
    `;
};

