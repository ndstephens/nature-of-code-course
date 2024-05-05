import { type P5CanvasInstance } from '@p5-wrapper/react';

import { conditionalGate } from 'lib/p5_utils/conditionalGate';

export function sketch(p5: P5CanvasInstance) {
  let mx = p5.mouseX;
  let my = p5.mouseY;
  const mouseHasNotMovedYet = conditionalGate();

  //* SETUP *
  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  //* DRAW *
  p5.draw = () => {
    mx = p5.mouseX;
    my = p5.mouseY;

    p5.background(220, 0, 200);

    // short circuit sketch until conditional changes
    // this is done here to prevent the circle from displaying at 0,0 by default when the sketch starts, then jumping to the mouse position once the mouse is first moved
    if (mouseHasNotMovedYet(mx === 0 && my === 0)) {
      return;
    }

    p5.circle(mx, my, 200);
  };
}
