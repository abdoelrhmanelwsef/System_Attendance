

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
       
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
window.addEventListener('load', function (e) {
    let users = [];

    if (localStorage.getItem("users") == null) {
        let admin = {
            "firstName": "ali",
            "lastName": "mahmoud",
            "address": "mansoura",
            "age": "30",
            "email": "ali22@gmail.com",
            "username": "admin",
            "password": "123",
            "rol": "admin"
        }
        let security = {
            "firstName": "ahmed",
            "lastName": "osama",
            "address": "alex",
            "age": 28,
            "email": "ahmed22@gmail.com",
            "username": "security",
            "password": "456",
            "rol": "security"
        }
        users.push(admin);
        users.push(security);
        let data = JSON.stringify(users);
        localStorage.setItem("users", data);

    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }

    var table = this.document.getElementById("datatablesSimple");

    // var tr = this.document.createElement("tr");
    for (let i = 1; i < users.length; i++) {
        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);


        cell1.innerHTML = users[i].firstName + " " + users[i].lastName;
        cell2.innerHTML = users[i].address;
        cell3.innerHTML = users[i].email;
        cell4.innerHTML = users[i].age;
        cell5.innerHTML = users[i].password;
        cell6.innerHTML = users[i].username;

    }

})


