// Masonry Layout
function resizeMasonryItem(item) {
  const grid = document.querySelector(".masonry-grid");

  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );

  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );

  const content = item.querySelector(".gallery-img");

  // Esperar a que la imagen cargue para obtener su altura real
  if (content.complete) {
    const rowSpan = Math.ceil(
      (content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
    item.style.setProperty("--span", rowSpan);
  } else {
    content.addEventListener("load", () => {
      const rowSpan = Math.ceil(
        (content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
      item.style.setProperty("--span", rowSpan);
    });
  }
}

// Redimensiona todos los elementos del layout mansory
function resizeAllMasonryItems() {
  const allItems = document.querySelectorAll(".masonry-item");
  allItems.forEach((item) => {
    resizeMasonryItem(item);
  });
}