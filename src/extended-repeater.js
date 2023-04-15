const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator;
  let sepLen;
  let repeat = options.repeatTimes;
  if (options.separator) {
    separator = options.separator;
  } else {
    separator = "+";
  }

  sepLen = separator.length;

  sepLen;

  const resultStr = `${str}${separator}`.repeat(repeat);

  const resultArr = resultStr.split("");
  const newArr = resultArr.slice(0, -sepLen);

  console.log(newArr);

  return newArr.join("");
}

module.exports = {
  repeater,
};
