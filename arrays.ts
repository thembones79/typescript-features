const carMakers = ["ford", "toyota", "chevy"];

const carMakers2: string[] = ["ford", "toyota", "chevy"];

const carMakers3 = ["ford", "toyota", "chevy", 4];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values

const carrot = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with "map"

carMakers.map((car4: string): string => {
  return car4.toUpperCase();
});

// Flexible

const arr = [
  "one",
  2,
  ["three"],
  [4],
  { five: 6 },
  { seven: [{ eight: "nine" }] }
];

const importantDates: (Date | string)[] = [new Date(), "2020-02-05"];
