//primitives
const apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;
let now: Date = new Date();
// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];

//class

class Automobile {}

let car: Automobile = new Automobile();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const testy: (x: string) => void = (x: string) => {
console.log(x)
}

// When to use annotations
// 1) Function that returns 'any' type

const json: string = `{"x":10, "y":20}`;
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
