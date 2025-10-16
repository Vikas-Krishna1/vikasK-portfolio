document.addEventListener("DOMContentLoaded", () => {
  const particleCanvas = document.getElementById("particle-canvas");
  const lightningCanvas = document.getElementById("lightning-canvas");
  const ctx = particleCanvas.getContext("2d");
  const ltx = lightningCanvas.getContext("2d");

  function resizeCanvas() {
    particleCanvas.width = lightningCanvas.width = window.innerWidth;
    particleCanvas.height = lightningCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  /* === LINE + DOT PARTICLES === */
  const particles = [];
  const particleCount = 80;
  const maxDistance = 140;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > particleCanvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > particleCanvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,255,255,0.7)";
      ctx.fill();

      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,255,${1 - distance / maxDistance})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }

  /* === LIGHTNING OVERLAY === */
  function lightningEffect() {
    ltx.clearRect(0, 0, lightningCanvas.width, lightningCanvas.height);
    if (Math.random() < 0.02) {
      const startX = Math.random() * lightningCanvas.width;
      const startY = Math.random() * lightningCanvas.height * 0.5;
      const endY = lightningCanvas.height;

      ltx.strokeStyle = "rgba(0,255,255,0.4)";
      ltx.lineWidth = 1.2;
      ltx.beginPath();
      ltx.moveTo(startX, startY);

      for (let i = 0; i < 10; i++) {
        const x = startX + (Math.random() - 0.5) * 100;
        const y = startY + (endY - startY) * (i / 10);
        ltx.lineTo(x, y);
      }
      ltx.stroke();
    }
    requestAnimationFrame(lightningEffect);
  }

  drawParticles();
  lightningEffect();
});
