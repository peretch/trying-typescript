// Array like structure where each element represents some property of a record
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// We spect 0. color, 1. carbonated, 2. sugar
// We declare the exact order in types, instead of (string | boolean | number)
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];
const sprinte: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
