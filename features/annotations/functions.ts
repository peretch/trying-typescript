// Example where return statement can be inferred
// const add = (a: number, b: number): number => {
// return a + b;
// };
const add = (a: number, b: number) => {
  return a + b;
};

const subsctract = (a: number, b: number): number => {
  // a - b; If we forget the 'return', "void" will be the inferred type
  // Is good practie to always add return annotation
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Here the end of the function will never be reached
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuration
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
