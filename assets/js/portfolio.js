const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-collapse");
const loader = document.getElementById("loading-container");

//Removes preloader after the rest of the window has loaded
window.onload = function myFunction() {
  loader.style.display = "none";
};

//Toggles viewing the navigation menu when selecting the hamburger menu icon when the viewport is at a mobile device size
navBtn.addEventListener("click", function() {
  navItems.classList.toggle("hide");
  navItems.classList.toggle("show");
});
