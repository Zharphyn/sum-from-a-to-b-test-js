/*jshint esversion: 6 */

function sum(fromN, toN) {
  let total = fromN;

  if (fromN === toN){
    return toN;
  }

  return total += sum(fromN + 1, toN);
}

module.exports = sum;

