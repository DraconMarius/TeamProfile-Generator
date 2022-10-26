
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
            <div class="container-fluid">
                <ul class="list-group" id="Manager"> ${Manager.name} \b Manager
                    <li>ID: ${Manager.employeeID}</li>
                    <li>Email: <a href="mailto:${Manager.email}">${Manager.email}</li>
                    <li>Office#: ${Manager.OfficeNum}</li>
                </ul>
                <ul class="list-group" id="Engineer"> ${Engineer.name} \b SWE
                    <li>ID: ${Engineer.employeeID}</li>
                    <li>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></li>
                </ul>
                <ul class="list-group" id="Intern"> ${Intern.name} \b Intern
                    <li>ID: ${Intern.employeeID}</li>
                    <li>Email: <a href="mailto:${Intern.email}">${Intern.email}</li>
                    <li>School: ${Intern.school}
                </ul>
            </div>
        </div>
    </body>
    
    </html>`
}

module.exports = (generateHTML);