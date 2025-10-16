/* === PARTICLES.JS LIGHTNING NETWORK EFFECT === */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ccff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#00ffff",
      opacity: 0.8,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});

/* === ENSURE CANVAS RESIZES CORRECTLY === */
window.addEventListener("resize", () => {
  const canvas = document.querySelector("#particles-js > canvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
