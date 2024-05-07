'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';

import { sketch } from './sketch';

export default function BubbleRemove() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
