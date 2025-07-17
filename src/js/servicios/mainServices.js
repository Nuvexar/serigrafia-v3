const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// Inicializar masonry después de que las imágenes se carguen
window.addEventListener("load", () => {
  resizeAllMasonryItems();
  assignImageClickEvents(); 
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remover clase activa de todos los botones
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Agregar clase activa al botón clickeado
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (
        filter === "all" ||
        item.getAttribute("data-category").includes(filter)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    
    assignImageClickEvents();
  });
});

function assignImageClickEvents() {
    const visibleItems = Array.from(document.querySelectorAll('.gallery-item'))
        .filter(item => item.style.display !== 'none');

    filteredImages = visibleItems.map(item => item.querySelector('img').src);

    visibleItems.forEach((item, index) => {
        const img = item.querySelector('img');
        img.onclick = () => openLightbox(index);
    });
}




