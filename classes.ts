class Vehicle {
  color: string = "red";

  constructor(color?: string) {
    this.color = color || "blue";
  }

  protected honk(): void {
    console.log("beep");
  }
}

class VehicleShortcut {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Card extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk(); // here we have access to the honk() protected method
  }
}

class Poison {
  constructor(public props: { taste: string; smell: string }) {}
  print(): void {
    console.log(`

    This posison smells ${this.props.smell} and tastes ${this.props.taste}.


    `);
  }
}

const ricineProps = { taste: "good", smell: "bad" };

const ricine = new Poison(ricineProps);

const vehicle = new Vehicle("orange");
const vehicle2 = new Vehicle();
const car1 = new Card(4, "black");
car1.startDrivingProcess();
// car.honk();
// vehicle.honk(); // bo jest protected
console.log(vehicle.color);
console.log(vehicle2.color);
console.log(car1.color);
console.log(car1.wheels);

ricine.print();
const rycynka = ricine.props;
console.log(rycynka);
console.log({ rycynka });
