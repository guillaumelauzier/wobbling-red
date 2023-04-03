const canvas = document.getElementById('wobblingCircle');
const ctx = canvas.getContext('2d');

const circleRadius = 50;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let angle = 0;

function drawWobblingCircle() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the wobbling effect
  const wobbleX = centerX + Math.sin(angle) * 20;
  const wobbleY = centerY + Math.cos(angle) * 20;

  // Draw the red circle
  ctx.beginPath();
  ctx.arc(wobbleX, wobbleY, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();

  // Update the angle for the wobbling effect
  angle += 0.05;

  // Call the function again with a slight delay to create an animation
  requestAnimationFrame(drawWobblingCircle);
}

// Start the animation
drawWobblingCircle();
