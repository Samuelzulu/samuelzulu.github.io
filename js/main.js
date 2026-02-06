// Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if(toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
        toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    //close menu when clicking a link (mobile)
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") {
            navLinks.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.setAttribute("aria-label", "Open menu");
        }
    })
}

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));

document.querySelectorAll(".project-card.reveal").forEach((card, i) => {
  card.style.setProperty("--delay", `${i * 80}ms`);
});


// Footer year 
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear);