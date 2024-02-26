const NavBar = document.querySelector(".navbar");
const NavItem = document.querySelector(".main-item");
const Btn = document.querySelector(".btn");

Btn.addEventListener("click", function () {
  NavBar.classList.toggle("open");
});
