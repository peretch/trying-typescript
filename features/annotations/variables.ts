// -------------------------- //
// Variables type annotations
// -------------------------- //
// IF POSSIBLE, ALLWAYS USE TYPE INFERENFCE

// This is a variable type annotation
const apples: number = 5; // Not necesary, can be inferenced
const speed: string = 'fast'; // Not necesary, can be inferenced
const hasName: boolean = true; // Not necesary, can be inferenced

const nothingMuch: null = null; // Not necesary, can be inferenced
const nothing: undefined = undefined; // Not necesary, can be inferenced

// built in objects
const now: Date = new Date(); // Not necesary, can be inferenced

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

// Function
// We tell typescript inside and output types
// it spect to receive (i: number)
// it spect to return nothing (void)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS
// 1) Fucntion that returns the 'any' type
const json = '{"X": 10, "y": 20}';
// const coordinates = JSON.parse(json); // infered annotation is 'any'
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20}

// 2) Declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWorld; // infered annotation is 'any'
let foundWorld: boolean; // infered annotation is 'any'
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWorld = true;
  }
}

// 3) Variable whose type that can't be inferred
let numbersList = [-10, -1, 12];
// let numberAboveZero = false; // infered annotation is 'boolean'
let numberAboveZero: boolean | number = false; // May be boolean or number
for (let i = 0; i < numbersList.length; i++) {
  if (numbersList[i] > 0) {
    numberAboveZero = numbersList[i];
  }
}
