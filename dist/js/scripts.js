
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

    
})


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
