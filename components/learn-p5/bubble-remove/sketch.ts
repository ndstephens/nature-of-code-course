import { type P5CanvasInstance } from '@p5-wrapper/react';

import { Bubble } from './Bubble';

export function sketch(p: P5CanvasInstance) {
  const brightness = 100;
  const bubbles: Bubble[] = [];

  //* SETUP *
  p.setup = () => {
    p.createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
      const x = p.random(p.width);
      const y = p.random(p.height);
      const r = p.random(30, 70);
      bubbles.push(new Bubble(p, x, y, r, brightness));
    }
  };

  //* DRAW *
  p.draw = () => {
    p.background(220, 0, 200);
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();

      if (bubbles[i].contains(p.mouseX, p.mouseY)) {
        bubbles[i].changeColor(255); // change color to white
      } else {
        bubbles[i].changeColor(brightness); // reset brightness
      }

      bubbles[i].show();
    }
  };

  //* MOUSE PRESSED *
  p.mousePressed = () => {
    // when deleting items in an array using a loop and `splice` it's best to go through the array backwards.  Otherwise you will skip the checking of an item b/c it's index will be 1 less after the splice happens, but that index was also the current one being checked.  So on the next cycle of the loop it will skip that item. (Doesn't matter here since we're not allowing the deletion of multiple bubbles at the same time)
    for (let i = bubbles.length - 1; i >= 0; i--) {
      if (bubbles[i].contains(p.mouseX, p.mouseY)) {
        bubbles.splice(i, 1); // remove the bubble
        break; // only remove one bubble per click (for when you click on overlapping bubbles)
      }
    }
  };
}
