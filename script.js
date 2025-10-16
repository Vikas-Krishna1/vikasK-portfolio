// Initialize ParticleJS background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded successfully.');
});

// Scroll fade-in animation for sections
const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
});
