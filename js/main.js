// Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close menu when clicking a link (mobile)
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Open menu");
    }
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Stagger project cards slightly (premium feel)
document.querySelectorAll(".project-card.reveal").forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`; // 0ms, 80ms, 160ms...
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));