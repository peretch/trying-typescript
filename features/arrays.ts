const carMarkers = ['ford', 'toyota', 'chevy']; // string[] by inferrence
// const carMarkers = []; // 'any' by inferrence
// const carMarkers: string[] = []; // 'string[]' by annotation
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // 'string[][]' by inferrence

// Help ith inference when extracting values
const car0 = carMarkers[0]; // 'string' by inferrence from array 'string[]'
const myCar = carMarkers.pop(); // 'string' by inferrence from array 'string[]'

// Prevent incompatible values
// carMarkers.push(100); // Type error showed

carMarkers.map((car: string) => {
  // Can be inferred
  return car.toUpperCase();
});

// Multiple types inside arrays (flexible types)
const importantDates = [new Date(), '2030-10-10']; // (string | Date) inferred
importantDates.push(new Date());
importantDates.push('Some string');
// importantDates.push(100); // Type error showed
