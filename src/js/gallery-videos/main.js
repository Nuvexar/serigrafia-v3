// Modal de video
const videoModal = document.getElementById("video-modal");
const videoTitle = document.getElementById("video-title");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
let currentVideoIndex = 0;

// Datos de los videos
const videoData = [
  {
    title: "Proceso de Sublimación",
    description:
      "En este video mostramos paso a paso cómo realizamos el proceso de sublimación en nuestras remeras personalizadas, desde la preparación del diseño hasta el producto final.",
    url: "../videos/1.mp4",
  },
  {
    title: "Tutorial de Diseño",
    description:
      "Aprende a crear diseños profesionales para remeras utilizando Adobe Photoshop. Técnicas, consejos y trucos para lograr resultados de calidad.",
    url: "../videos/2.mp4",
  },
  {
    title: "Proyecto Eagles",
    description:
      "Documentación del proceso de creación de uniformes para el equipo de básquet Eagles, desde el diseño inicial hasta la entrega final.",
    url: "../videos/3.mp4",
  },
  {
    title: "Proceso de Tazas",
    description:
      "Cómo sublimamos tazas personalizadas para regalos corporativos y eventos. Técnicas y consejos para lograr resultados duraderos.",
    url: "../videos/4.mp4",
  },
];

function openVideoModal(index) {
  currentVideoIndex = index;
  videoSource.src = videoData[index].url;
  videoPlayer.load(); // Recargar el nuevo video
  videoPlayer.play(); // Reproducir automáticamente
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  videoPlayer.pause(); // Pausar la reproducción
  videoPlayer.currentTime = 0; // Reiniciar el video
  videoSource.src = "";
  videoPlayer.load(); // Limpiar
  document.body.style.overflow = "";
}

// Cerrar modal al hacer clic fuera del contenido
videoModal.addEventListener("click", function (e) {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

// Teclas de navegación para el modal
document.addEventListener("keydown", function (e) {
  if (!videoModal.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeVideoModal();
  }
});

// Precargar imágenes para las miniaturas
window.addEventListener("load", function () {
  const thumbnails = document.querySelectorAll(".video-thumbnail img");
  thumbnails.forEach((img) => {
    const newImg = new Image();
    newImg.src = img.src;
  });
});
