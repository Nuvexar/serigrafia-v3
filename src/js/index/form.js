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