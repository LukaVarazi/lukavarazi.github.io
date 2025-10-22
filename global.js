// ===============================
// Navbar scroll + background effect
// ===============================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Gradient movement based on scroll
  const scrollPercentage =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const backgroundPosition = scrollPercentage * 100;
  document.body.style.backgroundPosition = `0% ${backgroundPosition}%`;

  // Scroll indicator fade
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.style.opacity = window.scrollY > 100 ? "0" : "1";
  }
});

// ===============================
// Smooth scrolling for nav links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

/*LOAD ANIMATION*/

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that are NOT navbar or inside navbar
  const elements = document.querySelectorAll(
    "body *:not(.navbar):not(.navbar *)"
  );

  // Add animate-on-scroll class
  elements.forEach((el) => el.classList.add("animate-on-scroll"));

  // Intersection Observer for scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
    }
  );

  elements.forEach((el) => observer.observe(el));
});
