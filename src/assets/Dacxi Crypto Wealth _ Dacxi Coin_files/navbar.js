$(document).ready(function () {
  const menuBtn = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-top");
  const navList = document.querySelector(".nav-mobile-list");
  let menuOpen = false;
  menuBtn &&
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("menu-open");
        mobileNav.classList.add("nav-open");
        navList.classList.add("list-open");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("menu-open");
        mobileNav.classList.remove("nav-open");
        navList.classList.remove("list-open");
        menuOpen = false;
      }
    });
});
