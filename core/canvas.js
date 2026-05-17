// /core/canvas.js
export const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");

export function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
