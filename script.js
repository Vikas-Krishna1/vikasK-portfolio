// Smooth scroll for same-page links (About, Projects, Certifications, Contact)
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a[href^='#']");

  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  }

  // Fade-in animation for sections when scrolling
  const sections = document.querySelectorAll("section");
  const revealSection = () => {
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Run once on load
});

// Optional: Simple fade effect when navigating to a new page
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Fade-in when page loads
  body.style.opacity = 0;
  body.style.transition = "opacity 0.6s ease-in";
  setTimeout(() => (body.style.opacity = 1), 100);

  // Fade-out when leaving page
  const projectLinks = document.querySelectorAll("a[href$='.html']");
  projectLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.getAttribute("target") === "_blank") return; // Skip external
      e.preventDefault();
      const destination = link.href;
      body.style.opacity = 0;
      setTimeout(() => (window.location.href = destination), 400);
    });
  });
});
