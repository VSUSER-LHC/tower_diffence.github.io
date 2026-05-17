// /core/loop.js
import { clear } from "./canvas.js";
import { updateEnemies, drawEnemies } from "../entities/enemies/enemy.js";
import { updateTowers, drawTowers } from "../entities/towers/tower.js";
import { updateBullets, drawBullets } from "../entities/bullets/bullet.js";
import { drawUI } from "../ui/hud.js";

export function loop() {
  clear();

  updateEnemies();
  updateTowers();
  updateBullets();

  drawEnemies();
  drawTowers();
  drawBullets();
  drawUI();

  requestAnimationFrame(loop);
}
