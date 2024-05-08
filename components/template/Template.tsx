'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';

import { sketch } from './sketch';

export default function TemplateComponent() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
