import { type P5CanvasInstance, type SketchProps } from '@p5-wrapper/react';

export function sketch(p5: P5CanvasInstance) {
  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.background(220, 0, 200);

    p5.rect(100, 100, 60, 100, 20);
  };
}
