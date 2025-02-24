window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-transparant");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



