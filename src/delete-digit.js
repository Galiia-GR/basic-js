const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const arr = n.toString().split("");

  const newArr = arr.map((el) => Number(el));

  const minimum = Math.min(...newArr);

  const ind = newArr.indexOf(minimum);

  newArr.splice(ind, 1);
  return Number(newArr.join(""));
}

module.exports = {
  deleteDigit,
};
