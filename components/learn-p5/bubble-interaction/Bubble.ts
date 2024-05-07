import { type P5CanvasInstance } from '@p5-wrapper/react';

export class Bubble {
  brightness = 100;

  constructor(
    public readonly p: P5CanvasInstance,
    public x: number,
    public y: number,
    public r: number,
  ) {}

  private isMouseOver(mx: number, my: number) {
    const d = this.p.dist(mx, my, this.x, this.y);
    return d < this.r;
  }

  clicked(mx: number, my: number) {
    if (this.isMouseOver(mx, my)) {
      // toggle brightness
      if (this.brightness === 100) {
        this.brightness = 255;
      } else {
        this.brightness = 100;
      }
    }
  }

  move() {
    this.x = this.x + this.p.random(-5, 5);
    this.y = this.y + this.p.random(-5, 5);
  }

  show(mx: number, my: number) {
    this.p.stroke(255);
    this.p.strokeWeight(4);
    // fill with white when mouse is hovered over bubble
    if (this.isMouseOver(mx, my)) {
      this.p.fill(255);
    } else {
      this.p.fill(this.brightness, 100);
    }
    this.p.ellipse(this.x, this.y, this.r * 2);
  }
}
