document.querySelectorAll(".timeline-flip-card-inner").forEach((card) => {
  let cooldown = false;

  card.addEventListener("click", () => {
    if (cooldown) return;

    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      card.style.transform = "rotateY(180deg)";
    } else {
      card.style.transform = "rotateY(0deg)";
    }

    cooldown = true;
    setTimeout(() => {
      cooldown = false;
    }, 1000); // 1 second cooldown
  });
});
