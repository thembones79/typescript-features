var oldCivic = {
    name: "civic",
    month: 2,
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var drinks = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var olderCivic = {
    name: "civic",
    //month: 2,
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var oldestCivic = {
    name: "civic",
    //month: 2,
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log("\n  Name: " + vehicle.name + "\n  Year: " + vehicle.year + "\n  Broken " + vehicle.broken + "\n  ");
};
var printVehicle2 = function (vehicle) {
    console.log("\n  Name: " + vehicle.name + "\n  Year: " + vehicle.year + "\n  Broken: " + vehicle.broken + "\n  summary: " + vehicle.summary() + "\n  ");
};
var printVehicle3 = function (vehicle) {
    console.log("\n\n  summary: " + vehicle.summary() + "\n  ");
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drinks);
printVehicle2(oldCivic);
