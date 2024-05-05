'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';

import { sketch } from './sketch';

export default function MouseMoveSketch() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
      <NextReactP5Wrapper sketch={sketch} />
      <NextReactP5Wrapper sketch={sketch} />
      <NextReactP5Wrapper sketch={sketch} />
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
