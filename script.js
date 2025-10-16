document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  let particles = [];
  const particleCount = 80;
  const maxDistance = 130;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      alpha: Math.random() * 0.5 + 0.5,
      size: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Glow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00ffff";

    // Draw particles
    for (let p of particles) {
