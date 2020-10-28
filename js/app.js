// Toggle menu
const navbarBtn = document.getElementById("navbar-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

navbarBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Navbar fixed
const navbar = document.getElementById("navbar");
navbarHeight = navbar.offsetHeight;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add("--fixed");
  } else {
    navbar.classList.remove("--fixed");
  }
});

// узнать высоту навбара
// при прокрутке окна на высоту навбара добавить к навбару класс фиксд

// нужно получить навбар
// его высоту
