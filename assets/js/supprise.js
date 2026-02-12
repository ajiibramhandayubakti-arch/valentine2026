function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}