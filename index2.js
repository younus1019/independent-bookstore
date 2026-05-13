
/* =========================
MOBILE NAV TOGGLE
========================= */
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

// create mobile button dynamically
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");
header.appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


/* =========================
ACTIVE NAV LINK HIGHLIGHT
========================= */
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


/* =========================
SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});


/* =========================
SCROLL ANIMATION (FADE IN)
========================= */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });

}, { threshold: 0.15 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


/* =========================
BUTTON CLICK EFFECT
========================= */
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});