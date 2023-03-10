//___________Nav Toggle Button___________
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//___________Onscroll Nav Opacity ___________
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

//___________Background Move___________
// var background = document.getElementById("container");
// background.style.animation = "move-background 30s linear infinite";

//___________Email button___________
function copyEmail() {
    const email = "dz149131@gmail.com";
    navigator.clipboard.writeText(email).then (function () {
        alert("Email address copied to clipboard.");
    }, function(err) {
        console.error("Failed to copy email:", err)
    });
}

//___________Mascot animation ___________
document.addEventListener('mousemove', (e) => {
    // console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // console.log(angleDeg)

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

// Canvas Background sizing
// const canvas = document.querySelector("canvas");
//     canvas.style.width = window.innerWidth;
//     canvas.style.height = "3300px";

// const windows = document.querySelector("window");
// console.dir(window);