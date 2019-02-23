const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-collapse");
const loader = document.getElementById("loading-container");

//Remove preloader after rest of the site's content has been loaded
window.onload = function() {
  loader.style.display = "none";
};

//Toggles viewing the navigation menu when selecting the hamburger menu icon when the viewport is at a mobile device size
navBtn.addEventListener("click", function() {
  navItems.classList.toggle("hide");
  navItems.classList.toggle("show");
});
