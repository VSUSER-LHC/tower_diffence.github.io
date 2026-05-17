// /entities/enemies/enemy.js
import { path } from "../../map/path.js";
import { ctx } from "../../core/canvas.js";

export class Enemy {
  constructor() {
    this.x = path[0].x;
    this.y = path[0].y;
    this.i = 1; // 次の目標地点
    this.speed = 1.2;
    this.hp = 5;
  }

  update() {
    const target = path[this.i];
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 1) {
      this.i++;
      if (this.i >= path.length) {
        this.dead = true; // ゴール
      }
      return;
    }

    this.x += dx / dist * this.speed;
    this.y += dy / dist * this.speed;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x - 5, this.y - 5, 10, 10);
  }
}
