document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-flex");
  if (aboutSection) {
    function checkVisibility() {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        aboutSection.classList.add("visible");
        window.removeEventListener("scroll", checkVisibility);
      }
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
      } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
      }
    });
  }

  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    showSlide(current);
    setInterval(nextSlide, 3000);
  }
});
