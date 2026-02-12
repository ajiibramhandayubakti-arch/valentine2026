function openSurprise() {

  document.getElementById("overlay").classList.remove("hidden");

  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 }
  });
}