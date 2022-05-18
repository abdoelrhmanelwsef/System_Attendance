window.addEventListener('load', function () {
    let emp = [];
    emp = JSON.parse(localStorage.getItem("users"));
    let data = document.location.search.slice(1)
        .split("&")
        .map((e) =>
            e.split("=")[1]);
    let second = new Date()
    let pass = Math.floor(Math.random() * 1000) + 1;
    
    let employee = {
        "firstName": `${data[0]}`,
        "lastName": `${data[1]}`,
        "address": `${data[2]}`,
        "age": `${data[4]}`,
        "email": `${data[3]}`,
        "username": `${data[0]}${data[1]}${second.getSeconds()}`,
        "password": `${pass}`,
        "rol": "employee"
    }
    
    emp.push(employee);
    let newData = JSON.stringify(emp);
    localStorage.setItem("users", newData);

    localStorage.users.split(",")[5]
    
})