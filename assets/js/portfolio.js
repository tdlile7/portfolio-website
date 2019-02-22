const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-collapse");

//Toggles viewing the navigation menu when selecting the hamburger menu icon when the viewport is at a mobile device size
navBtn.addEventListener("click", function() {
  navItems.classList.toggle("hide");
  navItems.classList.toggle("show");
});
