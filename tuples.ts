const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

// what is the difference between interface and type?

interface Drank {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const cola = {
  color: "brown",
  carbonated: true,
  sugar: 40
} as Drank;

type Dronk = { color: string; carbonated: boolean; sugar: number };

const sprite: Dronk = {
  color: "brown",
  carbonated: true,
  sugar: 40
};
