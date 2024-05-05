// Once the conditional changes from `true` to `false`, the returned function will always return `false`

export function conditionalGate() {
  let isGateOpen = false;

  return function (conditional: boolean) {
    if (isGateOpen) return false;

    if (conditional) return true;

    if (!conditional) {
      isGateOpen = true;
    }
    return false;
  };
}

// EXAMPLE
// const thisIsTrue = conditionalGate();
//
// p5.draw = () => {
//  // init code to always run
//
//   if (thisIsTrue(p5.mouseX === 0)) {
//     return;
//   }
//
//  // code to run once conditional changes
// }
