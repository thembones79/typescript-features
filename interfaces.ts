interface VehicleI {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

type Vehiclex = {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
};

const oldCivic = {
  name: "civic",
  month: 2,
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const olderCivic: VehicleI = {
  name: "civic",
  //month: 2,
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const oldestCivic: Vehiclex = {
  name: "civic",
  //month: 2,
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken ${vehicle.broken}
  `);
};

const printVehicle2 = (vehicle: VehicleI): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  summary: ${vehicle.summary()}
  `);
};

const printVehicle3 = (vehicle: Reportable): void => {
  console.log(`

  summary: ${vehicle.summary()}
  `);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drinks);
printVehicle2(oldCivic);
