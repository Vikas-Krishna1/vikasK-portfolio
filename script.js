// === Page Fade Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Fade in
  body.style.opacity = 0;
  body.style.transition = "opacity 0.6s ease-in";
  setTimeout(() => (body.style.opacity = 1), 100);

  // Fade out before navigating
  const links = document.querySelectorAll("a[href$='.html']");
  links.forEach(link => {
    link.addEventListener("click", e => {
      if (link.getAttribute("target") === "_blank") return;
      e.preventDefault();
      const destination = link.href;
      body.style.opacity = 0;
      setTimeout(() => (window.location.href = destination), 400);
    });
  });
});

// === Particle Background Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.prepend(canvas);

  // Canvas setup
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = 0; // Make visible behind text but above bg
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.5,
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha})`;
      ctx.shadowColor = "rgba(0, 200, 255, 0.6)";
      ctx.shadowBlur = 12;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Resize canvas dynamically
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
