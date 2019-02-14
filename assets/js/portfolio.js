const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-collapse");

navBtn.addEventListener("click", function() {
  navItems.classList.toggle("hide");
  navItems.classList.toggle("show");
});
