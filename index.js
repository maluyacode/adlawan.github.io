// not finished
let form = document.querySelector('#message-me');
let navBar = document.querySelector('#navbar');
let header = document.querySelector('#header');
let burger = document.querySelector('.burger');
let navLinks = document.querySelectorAll('#navbar a')
// console.log(navLinks);
let state = "hide"


window.addEventListener('resize', navigation);
burger.addEventListener('click', showNav);

// navLinks.forEach(element => {

//     element.addEventListener('click', showNav)
//     console.log("Asdas");

// });


function navigation() {

    let widthScreenSize = window.innerWidth;

    if (state == 'show' && widthScreenSize < 800) {
        state = "hide"
        return;
    }

    if (widthScreenSize < 800) {
        navBar.style.display = "none"
        burger.style.display = "block"
        header.setAttribute('id', 'horizontalHeader')
        navBar.setAttribute('id', 'horizontalNavbar')

    } else {
        navBar.style.display = "flex"
        burger.style.display = "none"
        header.setAttribute('id', 'header')
        navBar.setAttribute('id', 'navbar')
    }
}

function showNav() {

    if (state == 'hide') {
        state = "show"
        burger.setAttribute('data-state', state)
        // header.setAttribute('id', 'horizontalHeader')
        // navBar.setAttribute('id', 'horizontalNavbar')
        navBar.style.display = "flex"
    } else {
        state = "hide"
        burger.setAttribute('data-state', state)
        // header.setAttribute('id', 'header')
        // navBar.setAttribute('id', 'navbar')

        navBar.style.display = "none"
    }
}

navigation()
// not finished

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Not Available");
})