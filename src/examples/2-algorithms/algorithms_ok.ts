/* eslint-disable @typescript-eslint/no-use-before-define */
const PI = 3.14;
const HALVE = 0.5;

// ✔️ a data object could be loaded or modified at run time
export const areaCalculator = {
  TRIANGLE: (shape: Shape): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: Shape): number => shape.height * shape.height,
  RECTANGLE: (shape: Shape): number => shape.height * shape.width,
  CIRCLE: (shape: Shape): number => PI * shape.radius * shape.radius,
};

// ✔️ this function never gets modified
export function getArea(shape: Shape): number {
  const calulator = areaCalculator[shape.name];
  return calulator(shape);
}

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

// 💉 inject another shape without modifying
// areaCalculator['SPHERE'] = shape => 4 * 3.14 * shape.radius * shape.radius;

type MeasureSystem = { measureSystem: string; unitName: string; unitSymbol: string };
// ✔️ all the business knowledge is on the same place
const measureSystems: MeasureSystem[] = [
  { measureSystem: 'US', unitName: 'square yards', unitSymbol: 'yd2' },
  { measureSystem: 'SI', unitName: 'square metres', unitSymbol: 'm2' },
];

// ✔️ with no need for conditions we can use very simple arrow functions
export const getUnitNames = (measureSystem: string): string =>
  getMeasureSystem(measureSystem).unitName;

export const getUnitSymbol = (measureSystem: string): string =>
  getMeasureSystem(measureSystem).unitSymbol;

const getMeasureSystem = (measureSystem: string): MeasureSystem =>
  measureSystems.find(ms => ms.measureSystem === measureSystem);
