window.addEventListener('load', function () {


    var userNameSignInput = document.getElementById("fname");
    var lastnameSignInput = document.getElementById("lname");
    var emailSignInput = document.getElementById("email");
    var addressSignInput = document.getElementById("address");
    var ageSignInput = document.getElementById("age");


    waitingListData = [];
    

    SaveDataBtn = document.getElementById('save');

    document.getElementById('sub').addEventListener('submit', function (e) {

        e.preventDefault();
        id = waitingListData[waitingListData.length - 1].id + 1;
        newEmp = new Employee(id, userNameSignInput.value, passwordSignInput.value, emailSignInput.value, addressSignInput.value, ageSignInput.value);
        waitingListData.push(newEmp);
        sendEmail(newEmp, adminData.email);

    });


   

    userNameSignInput.focus();

    userNameSignInput.addEventListener("blur", function () {
        if (!firstNameValid()) {

            this.style.border = "2px solid red";
            this.focus();
            this.select();
        } else {
            this.style.border = "2px solid green";
        }
    });

    lastnameSignInput.addEventListener("blur", function () {
        if (!lastNameValid()) {


            this.style.border = "2px solid red";
            this.focus();
            this.select();
        } else {

            this.style.border = "2px solid green";
        }
    });

    addressSignInput.addEventListener("blur", function () {
        if (!addressValid()) {


            this.style.border = "2px solid red";
            this.focus();
            this.select();
        } else {

            this.style.border = "2px solid green";
        }
    });

    emailSignInput.addEventListener("blur", function () {
        if (!emailValid()) {

            this.style.border = "2px solid red";
            this.focus();
            this.select();

        } else {

            this.style.border = "2px solid green";
        }
    });

    ageSignInput.addEventListener("blur", function () {
        if (!agevalid()) {


            this.style.border = "2px solid red";
            this.focus();
            this.select();

        } else {

            this.style.border = "2px solid green";
        }
    });


    function firstNameValid() {
        return userNameSignInput.value.match(/^[A-Za-z]+(\s?[A-Za-z])*$/);
    }
    function lastNameValid() {
        return lastnameSignInput.value.match(/^[A-Za-z]+(\s?[A-Za-z])*$/);
    }
    function addressValid() {
        return addressSignInput.value.match(/^[A-Za-z0-9]+(\s?[A-Za-z])*$/);
    }

    function emailValid() {
        return emailSignInput.value.match(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/
        );


    }
    function agevalid() {
        return ageSignInput.value.match(/^[1-9]?$|^120$/);

    }
});//end of load




window.addEventListener('submit',function(e){

   
});

