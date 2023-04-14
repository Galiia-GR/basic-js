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
    if (arr[0] === arr[i] && arr[0] === "--double-prev") {
      arrTransorm.pop();
    } else if (arr[i] === arr[arr.length - 1] && arr[i] === "--double-next") {
      arrTransorm.pop();
    } else if (arr[i] === "--discard-next" && arr[i + 1] != undefined) {
      i++;
    } else if (arr[i] === "--discard-prev" && arr[i - 2] !== "--discard-next") {
      arrTransorm.pop();
    } else if (arr[i] === "--double-next" && arr[i + 1] != undefined) {
      arrTransorm.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && arr[i - 2] != undefined) {
      arrTransorm.push(arr[i - 1]);
    } else {
      arrTransorm.push(arr[i]);
    }
  }

  return arrTransorm;
}

module.exports = {
  transform,
};
