// === Page Fade Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Fade in when page loads
  body.style.opacity = 0;
  body.style.transition = "opacity 0.6s ease-in";
  setTimeout(() => (body.style.opacity = 1), 100);

  // Smooth scroll for internal section links (#about, #projects, etc.)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });

  // Fade out before navigating to other pages (.html)
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

  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = -1;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Darker, subtler particles
  const particles = [];
  const particleCount = 80;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    });
  }

  // Gradient background
  function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#0a0a1f");
    gradient.addColorStop(1, "#1c1c3c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Animate particles
  function animateParticles() {
    drawBackground();
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 180, 255, 0.15)";
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Resize responsiveness
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
