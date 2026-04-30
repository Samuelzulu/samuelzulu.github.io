// ── Mobile Nav Toggle ────────────────────────
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu   = document.querySelector(".nav-links");

if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
        toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close menu when clicking a link (mobile)
    navMenu.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") {
            navMenu.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.setAttribute("aria-label", "Open menu");
        }
    });
}


// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const moon        = document.getElementById('icon-moon');
const sun         = document.getElementById('icon-sun');

if (themeToggle && moon && sun) {
    // Apply saved preference on load
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        moon.style.display = 'none';
        sun.style.display  = 'block';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            moon.style.display = 'block';
            sun.style.display  = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            moon.style.display = 'none';
            sun.style.display  = 'block';
        }
    });
}


// Active Nav Highlight (index.html only)
const sections    = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

if (sections.length && allNavLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                allNavLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => sectionObserver.observe(section));
}


// Footer Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


// Stagger Project Cards
document.querySelectorAll(".project-card.reveal").forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
});


// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));