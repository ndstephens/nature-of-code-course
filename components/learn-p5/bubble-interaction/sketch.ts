import { type P5CanvasInstance } from '@p5-wrapper/react';

import { Bubble } from './Bubble';

export function sketch(p: P5CanvasInstance) {
  const bubbles: Bubble[] = [];

  //* SETUP *
  p.setup = () => {
    p.createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
      const x = p.random(p.width);
      const y = p.random(p.height);
      const r = p.random(30, 70);
      bubbles.push(new Bubble(p, x, y, r));
    }
  };

  //* DRAW *
  p.draw = () => {
    p.background(220, 0, 200);
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show(p.mouseX, p.mouseY);
    }
  };

  //* MOUSE PRESSED *
  p.mousePressed = () => {
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].clicked(p.mouseX, p.mouseY);
    }

    // Add a new bubble when you click the mouse and mouse is within the canvas
    // if (
    //   p.mouseX >= 0 &&
    //   p.mouseX < p.width &&
    //   p.mouseY >= 0 &&
    //   p.mouseY < p.height
    // ) {
    //   bubbles.push(new Bubble(p, p.mouseX, p.mouseY, 100));
    // }
    // console.log('x: ', p.mouseX);
    // console.log('y: ', p.mouseY);
    // console.log('width: ', p.width);
    // console.log('height: ', p.height);
  };
}
