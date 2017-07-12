require('babel-polyfill'); // this is required for async and await


import Calculator from './Calculator';
import SuperCalculator from './SuperCalculator';

var calculator = new Calculator(2);
console.log(calculator.myBase);
console.log(calculator.sum(1,2,3,4));


var sc = new SuperCalculator(2);
console.log(sc.sum(1,2,3,4));
console.log(sc.pow(3,4));

// showing how to use Arrow functions in 1 line
// showing how to use Promise
console.log(sc.sumAsync(2,3,4).then((result) => console.log(result)));

// await must inside an async function
(async function test() {
  var result = await sc.sumAsync(3,4,5);
  console.log(result);
})();

