// Typing effect in hero/terminal
const text = 'echo "Welcome, I\'m Sai Sri Harsha - Cyber Security Enthusiast"';
let i = 0;
function typeText() {
  const el = document.getElementById('typed');
  if (i < text.length) {
    el.innerHTML += text.charAt(i++);
    setTimeout(typeText, 42);
  }
}
window.onload = typeText;

// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
let fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.13)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px monospace";
  ctx.fillStyle = "#00ff41";
  for (let i = 0; i < drops.length; i++) {
    let text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.968) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 36);
