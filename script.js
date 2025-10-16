const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lightning = [];
const maxLines = 60;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createLightning() {
  if (lightning.length > maxLines) lightning.shift();
  lightning.push({
    x: random(0, canvas.width),
    y: 0,
    length: random(100, 400),
    speed: random(5, 15),
    alpha: 1,
  });
}

function drawLightning() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lightning.forEach((bolt) => {
    const gradient = ctx.createLinearGradient(bolt.x, 0, bolt.x, bolt.length);
    gradient.addColorStop(0, "rgba(0,255,255,0)");
    gradient.addColorStop(0.5, "rgba(0,255,255,0.8)");
    gradient.addColorStop(1, "rgba(0,255,255,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bolt.x, bolt.y);
    for (let i = 0; i < bolt.length; i += 10) {
      const offset = random(-10, 10);
      ctx.lineTo(bolt.x + offset, bolt.y + i);
    }
    ctx.stroke();
    bolt.y += bolt.speed;
    bolt.alpha -= 0.01;
  });
  lightning = lightning.filter((bolt) => bolt.alpha > 0);
}

function animate() {
  requestAnimationFrame(animate);
  drawLightning();
  if (Math.random() < 0.2) createLightning();
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
