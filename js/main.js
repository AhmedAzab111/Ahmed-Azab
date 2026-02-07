document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuClose = document.querySelector(".menu-close");

  if (menuToggle && mobileMenu && menuClose) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  /* =========================
     LITE YOUTUBE EMBED
  ========================= */
  const liteVideos = document.querySelectorAll(".lite-yt");

  if (liteVideos.length > 0) {
    liteVideos.forEach(el => {
      el.addEventListener("click", () => {
        const videoId = el.dataset.id;
        const startTime = el.dataset.start || 0;

        el.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;">
          </iframe>
        `;
      });
    });
  }

});
