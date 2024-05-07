import { type P5CanvasInstance } from '@p5-wrapper/react';

import { Bubble } from './Bubble';

export function sketch(p: P5CanvasInstance) {
  const brightness = 100;
  const bubbles: Bubble[] = [];

  //* SETUP *
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  //* DRAW *
  p.draw = () => {
    p.background(220, 0, 200);
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
    }
    if (bubbles.length > 20) {
      bubbles.shift();
    }
  };

  //* MOUSE DRAGGED *
  p.mouseDragged = () => {
    bubbles.push(new Bubble(p, p.mouseX, p.mouseY, 40, brightness));
  };
}
