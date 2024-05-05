import { type Metadata } from 'next';

import LearnP5Sketch from 'components/learn-p5/LearnP5Sketch';

// import MouseMoveSketch from 'components/learn-p5/mouse-move/MouseMove';
// import TestSketch from 'components/test-sketch/TestSketch';

export const metadata: Metadata = {
  title: 'Hello',
};

export default function HomePage() {
  return (
    <main className="flex grow flex-col items-center justify-center">
      {/* <TestSketch /> */}
      {/* <MouseMoveSketch /> */}
      <LearnP5Sketch />
    </main>
  );
}
