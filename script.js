function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
