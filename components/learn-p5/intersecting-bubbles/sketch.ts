import { type P5CanvasInstance } from '@p5-wrapper/react';

import { Bubble } from './Bubble';

export function sketch(p: P5CanvasInstance) {
  const bubbles: Bubble[] = [];

  //* SETUP *
  p.setup = () => {
    p.createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
      const x = p.random(p.width);
      const y = p.random(p.height);
      const r = p.random(30, 70);
      bubbles.push(new Bubble(p, x, y, r));
    }
  };

  //* DRAW *
  p.draw = () => {
    p.background(220, 0, 200);

    // bubbles all first need to complete their moves before we can accurately compare all intersections from one to another.  We also need to reset the colors
    bubbles.forEach((bubble) => {
      bubble.move();
      bubble.changeColor(100);
    });

    // then we can compare all bubbles to each other and see if they intersect
    bubbles.forEach((bubble, index) => {
      // increment the start index so we don't check bubbles we already checked from earlier loops. We also add 1 so that we're checking a bubble against itself.
      for (let i = index + 1; i < bubbles.length; i++) {
        const other = bubbles[i];
        if (bubble.intersects(other)) {
          bubble.changeColor(255);
          other.changeColor(255);
        }
      }
      bubble.show();
    });
  };

  // p.draw = () => {
  //   p.background(220, 0, 200);
  //   const intersectingBubbles: Bubble[] = [];
  //   // bubbles all first need to complete their moves before we can accurately compare all intersections from one to another
  //   bubbles.forEach((bubble) => bubble.move());
  //   // then we can compare all bubbles to each other and see if they intersect
  //   bubbles.forEach((bubble) => {
  //     // if bubble was already found to be involved in an intersection from a previous bubble's check then we don't need to compare it to all others
  //     if (
  //       intersectingBubbles.includes(bubble) ||
  //       bubbles.some((other) => {
  //         const isIntersecting = bubble !== other && bubble.intersects(other);
  //         if (isIntersecting) {
  //           // if "other" bubble is found to be intersecting then we don't need to later check it against all others...we already know it's involved in an intersection
  //           intersectingBubbles.push(other);
  //         }
  //         return isIntersecting;
  //       })
  //     ) {
  //       bubble.changeColor(255);
  //     } else {
  //       bubble.changeColor(100);
  //     }
  //     bubble.show();
  //   });
  // };
}
