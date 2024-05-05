'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';
import { useEffect, useState } from 'react';

import { sketch } from './sketch';

export default function TestSketch() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRotation((rotation) => rotation + 100),
      100,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <NextReactP5Wrapper sketch={sketch} rotation={rotation} />;
}
