const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let strResult = String();

  console.log(str);

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        strResult += count + str[i];
        count = 1;
      } else if (count === 1) {
        strResult += str[i];
      }
    }
  }
  return strResult;
}

module.exports = {
  encodeLine,
};
