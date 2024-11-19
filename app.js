const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Function to make logos move
const logos = document.querySelector(".rotating-logos__track").cloneNode(true);
document.querySelector(".rotating-logos").appendChild(logos);

// Function to make phone call
const callPhone = document.querySelector(".hero__btn");
callPhone.addEventListener("click", function () {
  window.location.href = "tel:+14059777508";
});

const headerTransparency = document.querySelector(".navbar__container");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    headerTransparency.classList.add("navbar__transparent");
  } else {
    headerTransparency.classList.remove("navbar__transparent");
  }
});

window.addEventListener("load", () => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});
