// /map/path.js
export const path = [
  { x: 0,   y: 300 },
  { x: 200, y: 300 },
  { x: 200, y: 100 },
  { x: 600, y: 100 },
  { x: 600, y: 500 },
  { x: 800, y: 500 }
];
// /map/path.js に追加
import { ctx } from "../core/canvas.js";

export function drawPath() {
  ctx.strokeStyle = "rgba(0,0,0,0.3)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(path[0].x, path[0].y);

  for (let i = 1; i < path.length; i++) {
    ctx.lineTo(path[i].x, path[i].y);
  }

  ctx.stroke();
}
