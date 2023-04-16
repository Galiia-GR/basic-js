const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = "";
    } else if (value === null) {
      value = "null";
    }
    this.chainArr.push(`(${value})`);
    return this;
  },
  removeLink(position) {},
  reverseChain() {},
  finishChain() {
    return this.chainArr.join("~~");
  },
};

module.exports = {
  chainMaker,
};
