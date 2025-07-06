window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const fullText = "code. create. innovate.";
let index = 0;
let isDeleting = false;
const speed = 100;
const pause = 1000;
const el = document.getElementById("typewriter");

function typeLoop() {
  const currentText = fullText.slice(0, index);
  el.textContent = currentText;

  if (!isDeleting && index < fullText.length) {
    index++;
    setTimeout(typeLoop, speed);
  } else if (isDeleting && index > 0) {
    index--;
    setTimeout(typeLoop, speed / 2);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeLoop, pause);
  }
}

typeLoop();

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
});
