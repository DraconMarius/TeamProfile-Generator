
function generateHTML(payroll) {
    let Manager = payroll.find(
        obj => obj.mngr);
    let Engineer = payroll.find(
        obj => obj.eng);
    let Intern = payroll.find(
        obj => obj.intern);
    console.log(Manager);
    console.log(Engineer);
    console.log(Intern);

    const template = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
        <h1> Team Profile </h1>
            <div class="container-fluid">
                <div class = "card">
                <ul class="list-group" id="Manager"> 
                <h2>${Manager.name}</h2>
                <br> Manager
                    <li class = "list-group-item">ID: ${Manager.id}</li>
                    <li class = "list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                    <li class = "list-group-item">Office#: ${Manager.officeNum}</li>
                </ul>
                </div>
                <div class = "card">
                <ul class="list-group" id="Engineer"> 
                <h2>${Engineer.name}</h2>
                <br> SWE
                    <li class = "list-group-item">ID: ${Engineer.id}</li>
                    <li class = "list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li class = "list-group-item">GitHub: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></li>
                </ul>
                </div>
                <div class = "card">
                <ul class="list-group" id="Intern">
                <h2> ${Intern.name} </h2>
                <br> Intern
                    <li class = "list-group-item">ID: ${Intern.id}</li>
                    <li class = "list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                    <li class = "list-group-item">School: ${Intern.school}
                </ul>
                </div>
            </div>
        </div>
    </body>
    
    </html>`

    return template;
}

module.exports = (generateHTML);