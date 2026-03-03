// ==========================
// Smooth Scroll for buttons
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".section, .project-card, .skills-grid div").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ==========================
// Typing Effect for Hero
// ==========================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){
  const text = heroTitle.innerText;
  heroTitle.innerText = "";
  let i = 0;

  function typeEffect(){
    if(i < text.length){
      heroTitle.innerText += text.charAt(i);
      i++;
      setTimeout(typeEffect, 60);
    }
  }

  typeEffect();
}

// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(".primary-btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    btn.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

// ==========================
// Parallax Background Effect
// ==========================

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollY = window.scrollY;
  if(hero){
    hero.style.backgroundPositionY = scrollY * 0.4 + "px";
  }
});

// ==========================
// Cursor Glow Effect
// ==========================

const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
