const headerRightSide = document.querySelector(".header .header__rightSide");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    headerRightSide.classList.toggle("active");
});



const lightDarkModeContainer = document.querySelector(".lightDarkModeContainer");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

IsDarkMode();
lightDarkModeContainer.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-on");

    IsDarkMode();
});

function IsDarkMode() {
    if (document.body.classList.contains("dark-mode-on")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "flex";
    } else {
        sunIcon.style.display = "flex";
        moonIcon.style.display = "none";
    }
}



ScrollReveal({ 
    reset: true ,
distance:'80px',
  duration:'2000',
  delay: 200
});
ScrollReveal().reveal('.heroPage, .severs section,  .aboutus, .section_sever, .container, .severs__data, .container, .tews, .tvv', { origin: 'top'});





