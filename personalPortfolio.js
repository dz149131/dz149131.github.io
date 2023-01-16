//Nav Toggle Button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//Onscroll Nav Opacity 
function changeOpacity() {
    let scrollValue = window.scrollY;
    let navbar = document.getElementById('navbar');
    if(scrollValue < 100){
        navbar.classList.remove('navOpacity');
    } else {
        navbar.classList.add('navOpacity');
    }
}

window.addEventListener('scroll', changeOpacity);

//Background Move
var background = document.getElementById("container");
background.style.animation = "move-background 20s linear infinite";

//Email button
function copyEmail() {
    const email = "dz149131@gmail.com";
    navigator.clipboard.writeText(email).then (function () {
        alert("Email address copied to clipboard.");
    }, function(err) {
        console.error("Failed to copy email:", err)
    });
}
