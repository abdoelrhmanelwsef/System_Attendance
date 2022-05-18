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


     dailyReport = [];
    if (localStorage.getItem("dailyReport") == null) {
        let report;
        users.forEach(user => {
            if (user.rol == "employee") {
                report = {
                    "userName": user.username,
                    "attendanceTime": "",
                    "checkoutTime": "",
                    "excuse": "No"
                }
                dailyReport.push(report);
            }
            
        });
        this.localStorage.setItem("dailyReport", JSON.stringify(dailyReport));
    } else {
        dailyReport = JSON.parse(this.localStorage.getItem(dailyReport));
    }


    var username = document.getElementsByClassName("btn-1")[0];
    var password = document.getElementsByClassName("btn-2")[0];



    var login = document.getElementsByClassName("btn")[0];

    login.addEventListener('click', function (e) {

        for (let i = 0; i < users.length; i++) {
            users = JSON.parse(localStorage.getItem("users"));
            // debugger;
            if (username.value == users[i].username && password.value == users[i].password) {
                if (users[i].rol == "admin") {
                    location.href = "../admin/index.html";
                    e.preventDefault();
                }
                else if (users[i].rol == "security") {
                    location.href = "../security/index.html";
                    e.preventDefault();
                }
                else if (users[i].rol == "employee") {

                    location.href = "../employee/index.html";
                    e.preventDefault();
                }

            }
            // if(username.value == users[i].username && password.value==users[i].password){
            //     location.href = "../employee/index.html";
            //         e.preventDefault();
            // }
        }


    })
})


