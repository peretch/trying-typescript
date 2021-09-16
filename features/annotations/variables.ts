// ------------- //
// Variables type annotations
// ------------- //

// This is a variable type annotation
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in objects
const now: Date = new Date();

// Array
const colors: string[] = ['yellow', 'black', 'green'];
const numbers: number[] = [1, 2, 3, 5, 8];
const truths: boolean[] = [true, true, false];

// Classes
class Car {}
const car: Car = new Car();

// Object literal
interface Point {
  x: number;
  y: number;
}
const point: Point = {
  x: 10,
  y: 20,
};
const otherPoint: { x: number; y: number } = {
  x: 10,
  y: 20,
};
