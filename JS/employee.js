window.addEventListener('load', function () {
    var btn = document.getElementById("Check-attendance");
    var content = document.getElementsByClassName("content")[0];
    var uName = document.getElementById("uName");


    // var email;
    var attend = [];
    attend = JSON.parse(localStorage.getItem("users"));
    var attendToday = [];
    attendToday = JSON.parse(localStorage.getItem("Attend"));
    console.log(attend[0].username);

    let email;
    for (let i = 0; i < attend.length; i++) {
        if (attend[i].username == uName.value) {
            email = attend[i].email;
            console.log(attend[i].email);
        }
    }


    let today = new Date().toLocaleDateString();

    let time = new Date();
   

    btn.addEventListener('click', function () {
        let newAttend = {
            "userName": `${uName.value}`,
            "today": `${today}`,
            // "email": `${email}`,
            "timeAttendance": `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
            "checkoutTime": ""
        }

        attendToday.push(newAttend);
        let att = JSON.stringify(attendToday);
        localStorage.setItem("Attend", att);
        content.append("Sucsefful");
    })
    if (btn.clicked == true)
    {
        console.log("clickagain");
    }

})//end of load