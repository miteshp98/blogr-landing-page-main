"use stricy";

const menuToggleButton = document.querySelector(".menu-toggle");
const navToggler = document.querySelector(".navigation-wrapper");
const menuIcon = document.querySelector(".hamburger-icon");
const dropdown = document.querySelectorAll(".menu-dropdown");
const dropdownMenu = document.querySelectorAll(".submenu-list");
const arrow = document.querySelectorAll(".icon-arrow-dark");

menuToggleButton.addEventListener("click", function () {
  if (!navToggler.classList.contains("toggle")) {
    navToggler.classList.add("toggle");
    menuIcon.src = "images/icon-close.svg";
  } else {
    menuIcon.src = "images/icon-hamburger.svg";
    navToggler.classList.remove("toggle");
  }

  removeDropdownMenu();
});

dropdown.forEach((link, index) => {
  link.addEventListener("click", function () {
    if (
      dropdownMenu[index].classList.contains("toggle-dropdown") &&
      arrow[index].classList.contains("arrow-rotate")
    ) {
      dropdownMenu[index].classList.remove("toggle-dropdown");
      arrow[index].classList.remove("arrow-rotate");
    } else {
      removeDropdownMenu();
      dropdownMenu[index].classList.add("toggle-dropdown");
      arrow[index].classList.add("arrow-rotate");
    }
  });
});

function removeDropdownMenu() {
  dropdownMenu.forEach((element) => {
    element.classList.remove("toggle-dropdown");
  });

  arrow.forEach((element) => {
    element.classList.remove("arrow-rotate");
  });
}
