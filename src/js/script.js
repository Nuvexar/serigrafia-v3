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

// Formulario de contacto
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Validación básica
  if (!name || !email || !service || !message) {
    alert("Por favor completa todos los campos");
    return;
  }

  // Aquí iría el envío del formulario a un backend
  // Como es una demo, mostramos un mensaje de éxito
  alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
  contactForm.reset();
});

// Animación al hacer scroll
const observerOptions = {
  threshold: 0.9,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const elements = entry.target.querySelectorAll(".animate-fadeIn");
      elements.forEach((el) => {
        el.style.opacity = "0";
        setTimeout(() => {
          el.style.opacity = "1";
        }, 100);
      });
    }
  });
}, observerOptions);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});
