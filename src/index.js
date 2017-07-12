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
// 1 2 3 4 5 will be shown slowly
(async function test() {
  var result1 = await sc.sumAsync(1);
  console.log(result1); // print 3

  var result2 = await sc.sumAsync(2);
  console.log(result2); // print 4

  var result3 = await sc.sumAsync(3);
  console.log(result3); // print 5

  var result4 = await sc.sumAsync(4);
  console.log(result4); // print 6

  var result5 = await sc.sumAsync(5);
  console.log(result5); // print 7
})();

