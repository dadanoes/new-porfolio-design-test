document.addEventListener("DOMContentLoaded", function () {
  // --- FUNGSI EFEK TYPEWRITER ---
  const typewriterElement = document.getElementById("typewriter");
  const jobTitles = ["UI/UX Designer", "MERN Developer", "Creative Coder"];
  let titleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < jobTitles[titleIndex].length) {
      typewriterElement.textContent += jobTitles[titleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 110);
    } else {
      setTimeout(erase, 2500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = jobTitles[titleIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 60);
    } else {
      titleIndex = (titleIndex + 1) % jobTitles.length;
      setTimeout(type, 500);
    }
  }

  // --- FUNGSI ANIMASI SAAT SCROLL (INTERSECTION OBSERVER) ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((elem) => {
    revealObserver.observe(elem);
  });

  // --- FUNGSI UPDATE TAHUN OTOMATIS DI FOOTER ---
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (typewriterElement) {
    type();
  }

  // --- FUNGSI TOMBOL KEMBALI KE ATAS ---
  const returnToTopBtn = document.querySelector(".return-to-top");

  if (returnToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        returnToTopBtn.classList.add("visible");
      } else {
        returnToTopBtn.classList.remove("visible");
      }
    });
  }
});
