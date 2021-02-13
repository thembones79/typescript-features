import "reflect-metadata";

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
console.log(plane);

const note = Reflect.getMetadata("note", plane);

console.log(note);

Reflect.defineMetadata("note", "blue", plane, "color");

const anotherColor = Reflect.getMetadata("note", plane, "color");
console.log(anotherColor);

@printMetadata
class Plane2 {
  color: string = "red";

  @markFunction("123456789")
  fly(): void {
    console.log("vrrrrrrrrrrrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane2, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata("secret", Plane2.prototype, "fly");
console.log({ secret });

function printMetadata(target: typeof Plane2) {
  for (let key in target.prototype) {
    const secret2 = Reflect.getMetadata("secret", target.prototype, key);
    console.log({ secret2 });
  }
}
