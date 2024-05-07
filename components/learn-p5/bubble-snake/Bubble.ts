import { type P5CanvasInstance } from '@p5-wrapper/react';

export class Bubble {
  constructor(
    public readonly p: P5CanvasInstance,
    public x: number,
    public y: number,
    public r: number,
    public brightness: number,
  ) {}

  contains(mx: number, my: number) {
    const d = this.p.dist(mx, my, this.x, this.y);
    return d < this.r;
  }

  changeColor(brightness: number) {
    this.brightness = brightness;
  }

  move() {
    this.x = this.x + this.p.random(-3, 3);
    this.y = this.y + this.p.random(-3, 3);
  }

  show() {
    this.p.stroke(255);
    this.p.strokeWeight(4);
    this.p.fill(this.brightness, 100);
    this.p.ellipse(this.x, this.y, this.r * 2);
  }
}
