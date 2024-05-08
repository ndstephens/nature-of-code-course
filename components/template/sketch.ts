import { type P5CanvasInstance, type SketchProps } from '@p5-wrapper/react';

import { Template } from './TemplateClass';

type MySketchProps = SketchProps & {
  rotation: number;
};

export function sketch(p: P5CanvasInstance<MySketchProps>) {
  let rotation = 0;

  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.updateWithProps = (props) => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = () => {
    p.background(100);
    p.rotateY(rotation);
  };
}
