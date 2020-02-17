var fs = require("fs");
var data = fs.readFileSync("./day3.txt").toString("utf-8").split("\n");

data = data.map((d) => d);

// DAY 1
// var fuelTotal = 0;
// data.forEach((module) => {
//     fuelCalculator(module);
// });

// function fuelCalculator(module) {
//     if (module <= 0) {
//         return 0;
//     } else {
//         const fuel = Math.floor(parseInt(module, 10) / 3) - 2;
//         if (fuel <= 0) {
//             return module;
//         } else {
//             fuelTotal += fuel
//             return fuelCalculator(fuel);
//         }
//     }
// }

// DAY 2

// var fuelTotal = 0;
// console.log(ProgramAlarm2(data, 19690720));

// function ProgramAlarm1(code, index) {
//     if (code[index]) {
//         let total;

//         const num1 = code[code[index + 1]];
//         const num2 = code[code[index + 2]];
//         const totalLocation = code[index + 3];

//         switch (code[index]) {
//             case 1:
//                 total = num1 + num2;
//                 code[totalLocation] = total;
//                 break;
//             case 2:
//                 total = num1 * num2;
//                 code[totalLocation] = total;
//                 break;
//             case 99:
//                 return code[0];
//             default:
//                 console.log('something went wrong', index);
//                 break;
//         }

//         return ProgramAlarm1(code, index + 4);
//     } else {
//         return code[0];
//     }
// }

// function ProgramAlarm2(inputArray, targetValue) {
//     for (let i = 0; i <= 99; i ++) {
//       for (let j = 0; j <= 99; j++) {
//         const newArr = [...inputArray];
//         newArr[1] = i;
//         newArr[2] = j;
//         const currentResult = ProgramAlarm1(newArr, 0);
//         console.log('CURRENT VALUE', currentResult);
  
//         if (currentResult === targetValue) {
//           return 100 * i + j;
//         }
//       }
//     }
  
//     throw new Error('Value not found');
//   };

// DAY 3

wireCrossing(data);

function parse(line) {
    const segments = [];
    let position = {x: 0, y: 0};
    line
        .split`,`
        .map((tuple) => {
            const array = [...tuple];
            const letter = array.shift();
            const distance = parseInt(array.join``);
            const nextPosition = {
                x: position.x,
                y: position.y
            };
            switch(letter) {
                case 'U':
                    nextPosition.y -= distance;
                    break;
                case 'D':
                    nextPosition.y += distance;
                    break;
                case 'R':
                    nextPosition.x += distance;
                    break;
                case 'L':
                    nextPosition.x -= distance;
                    break;
            }
            segments.push({
                from: {
                    x: position.x,
                    y: position.y
                },
                to: {
                    x: nextPosition.x,
                    y: nextPosition.y
                },
            });
            position = nextPosition;
        });
    return segments;
};

function wireCrossing(data) {
    const wire1 = parse(data[0]);
    const wire2 = parse(data[1]);

    console.log(wire1);
    console.log(wire2);
    const intersections = {};

    wire1.map((wire1c) => {
        wire2.map((wire2c) => {
            // TODO
        });
    });
}
