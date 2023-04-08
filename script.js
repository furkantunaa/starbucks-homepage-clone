const button = document.querySelector(".hamburger-menu-icon");
const reponsive_menu = document.querySelector(".responsive-menu");
const closeButton = document.querySelector(".close-button");

button.addEventListener("click", function () {
  reponsive_menu.classList.add("open-menu");
});

closeButton.addEventListener("click", function () {
  reponsive_menu.classList.remove("open-menu");
  console.log("worked");
});
