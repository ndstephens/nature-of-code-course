import { type Metadata } from 'next';

import BubbleInteraction from 'components/learn-p5/bubble-interaction/BubbleInteraction';
import LearnP5Sketch from 'components/learn-p5/LearnP5Sketch';

// import TestSketch from 'components/test-sketch/TestSketch';
// import MouseMoveSketch from 'components/learn-p5/mouse-move/MouseMove';
// import CirclePatternsSketch from 'components/learn-p5/circle-patterns/CirclePatterns';

export const metadata: Metadata = {
  title: 'Hello',
};

export default function HomePage() {
  return (
    <main className="flex grow flex-col items-center justify-center">
      {/* <TestSketch /> */}
      {/* <MouseMoveSketch /> */}
      {/* <CirclePatternsSketch /> */}
      <BubbleInteraction />
      {/* <LearnP5Sketch /> */}
    </main>
  );
}
