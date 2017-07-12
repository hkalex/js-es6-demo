import Calculator from './Calculator';

export default class SuperCalculator extends Calculator {
  constructor(myBase) {
    super(myBase);
  }
  sum() {
    var result = this.myBase;
    for(var i=0; i<arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  pow(x,y) {
    return Math.pow(x,y);
  }
  sumAsync() {
    var args = arguments;
    var myBase = this.myBase;
    return new Promise((resolve, reject) => {
      try {
        var result = myBase;
        for(var i=0; i<arguments.length; i++) {
          result += arguments[i];
        }
        return resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
}
