import { type P5CanvasInstance } from '@p5-wrapper/react';

export class Template {
  constructor(private readonly p: P5CanvasInstance) {
    this.p = p;
  }
}
