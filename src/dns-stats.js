const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domObj = new Object();

  const domainsArr = domains.map((el) =>
    el.split(".").reverse().join(".").split(".")
  );

  domainsArr.reverse();

  domObj[`.${domainsArr[0][0]}`] = domainsArr.length;

  for (let i = 0; i < domainsArr.length; i++) {
    if (domainsArr[i].length <= 2) {
      domObj[`.${domainsArr[i].join(".")}`] = domainsArr.length;
    } else {
      domObj[`.${domainsArr[i].join(".")}`] = 1;
    }
  }
  return domObj;
}

module.exports = {
  getDNSStats,
};
