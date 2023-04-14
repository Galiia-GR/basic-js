const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr) || !(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const arrTransorm = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      arrTransorm.pop();
    } else if (arr[0] === arr[i] && arr[0] === "--double-prev") {
      arrTransorm.pop();
    } else if (arr[i] === "--double-next") {
      arr[i] = arr[i + 1];
      arrTransorm.push(arr[i]);
    } else if (arr[0] === arr[i] && arr[i] === "--discard-prev") {
      arrTransorm.pop();
    } else if (arr[i] === "--discard-prev") {
      arrTransorm.pop();
    } else if (arr[i] === "--discard-next") {
      arrTransorm.pop();
    } else {
      arrTransorm.push(arr[i]);
    }
  }
  return arrTransorm;
}

module.exports = {
  transform,
};
