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
