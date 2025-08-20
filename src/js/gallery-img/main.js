document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const galleryItems = document.querySelectorAll(".gallery-item img");
  let filteredImages = Array.from(galleryItems);
  let currentImageIndex = 0;

  function openLightbox(index) {
    if (!filteredImages[index]) return;
    currentImageIndex = index;
    lightboxImage.src = filteredImages[index].src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function changeImage(direction) {
    currentImageIndex =
      (currentImageIndex + direction + filteredImages.length) %
      filteredImages.length;
    lightboxImage.src = filteredImages[currentImageIndex].src;
  }

  galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  document
    .querySelector(".lightbox-close")
    .addEventListener("click", closeLightbox);
  document
    .getElementById("lightbox-prev")
    .addEventListener("click", () => changeImage(-1));
  document
    .getElementById("lightbox-next")
    .addEventListener("click", () => changeImage(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") changeImage(-1);
    else if (e.key === "ArrowRight") changeImage(1);
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryBoxes = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      filteredImages = [];

      galleryBoxes.forEach((item) => {
        const category = item.getAttribute("data-category");
        const img = item.querySelector("img");

        // 👇 Nueva lógica
        if (filter === "all") {
          // Mostrar todo MENOS los de categoría "web"
          if (category !== "web") {
            item.style.display = "block";
            filteredImages.push(img);
          } else {
            item.style.display = "none";
          }
        } else if (category.includes(filter)) {
          item.style.display = "block";
          filteredImages.push(img);
        } else {
          item.style.display = "none";
        }
      });

      // Reasignar eventos de click a las imágenes visibles
      filteredImages.forEach((img, index) => {
        img.onclick = () => openLightbox(index);
      });

      currentImageIndex = 0;
    });
  });

  function applyMasonry() {
    const items = document.querySelectorAll(".masonry-item");

    items.forEach((item) => {
      const spanValue = item.getAttribute("data-span") || 30;
      item.style.setProperty("--span", Math.ceil(spanValue / 3));
    });
  }

  window.addEventListener("load", applyMasonry);
  window.addEventListener("resize", applyMasonry);
  // 🔹 Aplicar filtro inicial para "Sublimación y DTF"
  document.querySelector('.filter-btn.active').click();
});
