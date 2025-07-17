// Menú móvil
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Cerrar menú al hacer clic en un enlace
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// Cerrar menú móvil si se cambia a modo desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) { // md breakpoint en Tailwind (768px)
    mobileMenu.classList.remove("open");
  }
});