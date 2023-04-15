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
  let repeat;
  let separator;
  let sepLen;
  let addition;
  let addRepeat;
  let separAdit;

  if (options.repeatTimes) {
    repeat = options.repeatTimes;
  } else {
    repeat = 1;
  }

  if (options.separator) {
    separator = options.separator;
  } else {
    separator = "+";
  }

  if (options.addition) {
    addition = options.addition;
  } else {
    addition = "";
  }

  if (options.additionRepeatTimes) {
    addRepeat = options.additionRepeatTimes;
  } else {
    addRepeat = 1;
  }

  if (options.additionSeparator != undefined) {
    separAdit = options.additionSeparator;
  } else {
    separAdit = "";
  }

  sepLen = separator.length;

  const resultStr = `${str}`;

  const resultAddStr = `${addition}${separAdit}`.repeat(addRepeat - 1);

  const result = `${resultStr}${resultAddStr}${addition}${separator}`.repeat(
    repeat
  );

  const newArr = result.slice(0, -sepLen);

  return newArr;
}

module.exports = {
  repeater,
};
