


window.addEventListener('load', function () {

    var btn = this.document.getElementById("submitButton");
    userName = document.getElementById("emailAddress");

    let users = JSON.parse(this.localStorage.getItem("users"));
    dailyReport = JSON.parse(this.localStorage.getItem("dailyReport"));

    var table = this.document.getElementById("datatablesSimple");

   
    function checkUserName(USERNAME) {
        let user = users.find(user => user.username == USERNAME)
        if (user) {
            return true;
        }
        return false;
    }

    btn.addEventListener('click', function () {
        let name = userName.value;
        let time = new Date();

        if (checkUserName(name)) {
            dailyReport.forEach(report => {
                if (report.userName == name) {
                    if (report.attendanceTime == "") {
                        report.attendanceTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                    }
                    else if (report.checkoutTime == "") {
                        report.checkoutTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                    }
                    localStorage.setItem("dailyReport", JSON.stringify(dailyReport));
                }
            });


            var row = table.insertRow(1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            users.forEach(user => {
                if (user.username == name) {
                    cell1.innerHTML = user.firstName + " " + user.lastName;
                    cell2.innerHTML = user.address;
                    cell3.innerHTML = user.email;
                    cell4.innerHTML = user.age;
                    cell5.innerHTML = user.username;

                }

            })

            dailyReport.forEach(report => {
                if (report.userName == name) {
                    cell6.innerHTML = report.attendanceTime;
                    cell7.innerHTML = report.checkoutTime;
                }
            })
        }


    })//end of button Login
})//end of Load


