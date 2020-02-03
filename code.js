var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString("utf-8");
var data = text.split("\n");

// DAY 1
var fuelTotal = 0;
data.forEach((module) => {
    fuelCalculator(module);
});

function fuelCalculator(module) {
    if (module <= 0) {
        return 0;
    } else {
        const fuel = Math.floor(parseInt(module, 10) / 3) - 2;
        if (fuel <= 0) {
            return module;
        } else {
            fuelTotal += fuel
            return fuelCalculator(fuel);
        }
    }
}