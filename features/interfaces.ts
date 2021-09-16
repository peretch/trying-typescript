interface Reportable {
  summary(): string; // Expect summary functio to return string
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Drink {
  color: string;
  sugar: number;
  carbonated: boolean;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
const isCarbonatedDrink = (drink: Drink): boolean => drink.carbonated;
const isAnOldVehicle = (vehicle: Vehicle): boolean => vehicle.year < 2001;

const oldCivic: Vehicle & Reportable = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const someDrink: Drink & Reportable = {
  color: 'brown',
  sugar: 40,
  carbonated: true,
  summary(): string {
    return `My drink has: ${this.sugar} grams of sugar`;
  },
};

printSummary(oldCivic);
printSummary(someDrink);

isAnOldVehicle(oldCivic);
isCarbonatedDrink(someDrink);
