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

    value = String(value);

    this.chainArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    let index;

    if (
      typeof position != "number" ||
      position === undefined ||
      position <= 0 ||
      position > this.chainArr.length
    ) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    index = this.chainArr.indexOf(`(${position})`);
    this.chainArr.splice(-index, 1);
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let end = this.chainArr.join("~~");
    this.chainArr = [];
    return end;
  },
};

module.exports = {
  chainMaker,
};
