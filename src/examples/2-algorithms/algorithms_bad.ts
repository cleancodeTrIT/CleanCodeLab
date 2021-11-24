/* eslint-disable max-lines-per-function */

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

// ❌ high cyclomatic complexity
export function getArea(shape: Shape): number {
  const PI = 3.14;
  const HALVE = 0.5;
  let area: number;
  // ❌ switch cases don´t scale well
  switch (shape.name) {
    case 'TRIANGLE':
      area = shape.base * shape.height * HALVE;
      break;
    case 'SQUARE':
      area = shape.height * shape.height;
      break;
    case 'RECTANGLE':
      area = shape.height * shape.width;
      break;
    case 'CIRCLE':
      area = PI * shape.radius * shape.radius;
      break;
    // ❌ more cases implies change the code
    default:
      throw new Error('shape not recognized');
  }
  return area;
}

// 🚨 it seems a naive if condition, but...
export function getUnitName(measureSystem: string): string {
  if (measureSystem === 'US') {
    return 'square yards';
  } else {
    return 'square metres';
  }
}

// ❌ there are duplicated logic
export function getUnitSymbol(measureSystem: string): string {
  if (measureSystem === 'US') {
    return 'yd2';
  } else {
    return 'm2';
  }
}
// 🔥 and can need another else or a switch if there is another case

const myMeasureSystem = 'US';
const myCircle: Shape = { name: 'CIRCLE', radius: 5 };
const myArea = getArea(myCircle);
const myUnits = getUnitName(myMeasureSystem);
const areaDescription = `My ${myCircle.name} occupies an area of ${myArea} ${myUnits}`;
console.log(areaDescription);
