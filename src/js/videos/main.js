document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");
  const galleryVideos = document.querySelectorAll(".gallery-video");
  let currentIndex = 0;
  let videoList = Array.from(galleryVideos);

  function openLightbox(index) {
    if (!videoList[index]) return;
    currentIndex = index;

    lightboxVideo.src = videoList[index].getAttribute("src");
    lightboxVideo.load(); // reinicia el video
    lightboxVideo.play();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    document.body.style.overflow = "";
  }

  function changeVideo(direction) {
    currentIndex = (currentIndex + direction + videoList.length) % videoList.length;
    openLightbox(currentIndex);
  }

  // Asignar clic a cada video en la galería
  videoList.forEach((video, index) => {
    video.addEventListener("click", () => openLightbox(index));
  });

  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => changeVideo(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => changeVideo(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") changeVideo(-1);
    else if (e.key === "ArrowRight") changeVideo(1);
  });
});
