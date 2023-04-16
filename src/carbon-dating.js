const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (
    typeof sampleActivity != "string" ||
    sampleActivity === undefined ||
    sampleActivity === null ||
    sampleActivity === "" ||
    sampleActivity === " "
  ) {
    return false;
  }

  let sampleActNumber = Number(sampleActivity);

  if (isNaN(sampleActNumber) || sampleActNumber > 15 || sampleActNumber <= 0) {
    return false;
  }

  const logActivity = Math.log(MODERN_ACTIVITY / sampleActNumber);
  const result = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(logActivity / result);
}

module.exports = {
  dateSample,
};
