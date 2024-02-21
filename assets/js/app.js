// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    navMenu.classList.toggle("active");
}
// ----------year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year

// -------
const mytimeout = setTimeout(layout, 3000)
function layout(){
    document.getElementById("preloader").classList.remove("loader-content")
    document.getElementById("pre-text").style.display = "none"
    
}