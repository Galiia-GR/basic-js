const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const arrUniq = [];

  let count = 0;

  for (let el of names) {
    if (arrUniq.indexOf(el) === -1) {
      arrUniq.push(el);
    } else {
      for (let item of arrUniq) {
        if (el === item || item === `${el}(${count})`) {
          count++;
        }
      }
      arrUniq.push(`${el}(${count})`);
      count = 0;
    }
  }
  return arrUniq;
}

module.exports = {
  renameFiles,
};
