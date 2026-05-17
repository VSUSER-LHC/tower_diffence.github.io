// /core/input.js
export const mouse = { x: 0, y: 0, clicked: false };

document.addEventListener("mousemove", e => {
  const rect = game.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

document.addEventListener("mousedown", () => {
  mouse.clicked = true;
});

document.addEventListener("mouseup", () => {
  mouse.clicked = false;
});

