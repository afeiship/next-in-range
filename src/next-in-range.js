(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.inRange = function (inNumber, inStart, inEnd) {
    return inNumber >= inStart && inNumber < inEnd;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.inRange;
  }

}());
