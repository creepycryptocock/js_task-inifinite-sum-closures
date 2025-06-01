'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const local = sum;

    if (num === undefined) {
      sum = 0;

      return local;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
