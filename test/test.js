var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-in-range');

describe('next/inRange', function () {

  it('number:3 inrange:2, 4 ', function () {
    var num = 3;
    var start = 2;
    var end = 4;
    assert.equal(
      nx.inRange(num, start, end),
      true
    );
  });

  it('number:2 inrange:2, 4 ', function () {
    var num = 2;
    var start = 2;
    var end = 4;
    assert.equal(
      nx.inRange(num, start, end),
      true
    );
  });

  it('number:4 not inrange:2, 4 ', function () {
    var num = 4;
    var start = 2;
    var end = 4;
    assert.equal(
      nx.inRange(num, start, end),
      false
    );
  });

});
