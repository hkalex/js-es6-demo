export default class Calculator {
  constructor(myBase) {
    this.myBase = myBase;
  }

  sum() {
    var result = 0;
    for(var i=0; i<arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
}