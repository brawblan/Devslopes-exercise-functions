// Exercise 1

// function randomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max))
// }

// var num1 = randomInt(50);
// var num2 = randomInt(50);
// var num3 = randomInt(50);
// var num4 = randomInt(50);

// if (num1 > 27) {
//   console.log('Number:', num1, 'Difference:', (num1 - 27) * 2)
// } else {
//   console.log('Number:', num1, 'Difference:', num1 - 27)
// }
// ////////////
// if (num2 > 27) {
//   console.log('Number:', num2, 'Difference:', (num2 - 27) * 2)
// } else {
//   console.log('Number:', num2, 'Difference:', num2 - 27)
// }
// ////////////
// if (num3 > 27) {
//   console.log('Number:', num3, 'Difference:', (num3 - 27) * 2)
// } else {
//   console.log('Number:', num3, 'Difference:', num3 - 27)
// }
// ////////////
// if (num4 > 27) {
//   console.log('Number:', num4, 'Difference:', (num4 - 27) * 2)
// } else {
//   console.log('Number:', num4, 'Difference:', num4 - 27)
// }



// Exercise 2

// function randomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max))
// }

// var add1 = randomInt(10);
// var add2 = randomInt(10);
// var add3 = randomInt(10);
// var add4 = randomInt(10);

// if (add1 === add2) {
//   console.log('Number 1:', add1, 'Number 2:', add2, 'Sum:', ((add1 + add2) * 3));
// } else {
//   console.log('Number 1:', add1, 'Number 2:', add2, 'Sum:', ((add1 + add2)));
// }
// //////////////
// if (add3 === add4) {
//   console.log('Number 1:', add3, 'Number 2:', add4, 'Sum:', ((add3 + add4) * 3));
// } else {
//   console.log('Number 1:', add3, 'Number 2:', add4, 'Sum:', ((add3 + add4)));
// }



// Exercise 3

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

var match1 = randomInt(40);
var match2 = randomInt(40);
var match3 = 40;
var match4 = 13;
var match5 = 12;
var match6 = 28;

console.log('Number1:', match1, 'Number2:', match2, 'Sum:', match1 + match2);
if (match1 === 40 || match2 === 40 || (match1 + match2) === 40) {
  console.log(true);
} else {
  console.log(false);
}

console.log('Number1:', match3, 'Number2:', match4, 'Sum:', match3 + match4);
if (match3 === 40 || match4 === 40 || (match3 + match4) === 40) {
  console.log(true);
} else {
  console.log(false);
}

console.log('Number1:', match5, 'Number2:', match6, 'Sum:', match5 + match6);
if (match5 === 40 || match6 === 40 || (match5 + match6) === 40) {
  console.log(true);
} else {
  console.log(false);
}