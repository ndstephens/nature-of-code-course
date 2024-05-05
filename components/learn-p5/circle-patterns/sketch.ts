import { type P5CanvasInstance } from '@p5-wrapper/react';

export function sketch(p5: P5CanvasInstance) {
  const frameRate = 30;
  const numSeconds = 10;
  const circleSize = 40;
  const opacity = 40;

  //* SETUP *
  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.frameRate(frameRate);
    p5.background(220, 0, 200);
  };

  //* DRAW *
  p5.draw = () => {
    // p5.background(220, 0, 200);

    const cx = p5.random(0, 400);
    const cy = p5.random(0, 400);

    p5.noStroke();

    // this was alternating between white and pink circles
    // if (Math.floor((p5.frameCount / frameRate) * 30) % 2 === 0) {

    // white circles for `numSeconds`, then pink circles for `numSeconds`, then back to white circles for `numSeconds`, etc etc
    if (Math.floor(p5.frameCount / (frameRate * numSeconds)) % 2 === 0) {
      p5.fill(255, opacity);
    } else {
      p5.fill(220, 0, 200, opacity);
    }
    p5.circle(cx, cy, circleSize);
  };
}
