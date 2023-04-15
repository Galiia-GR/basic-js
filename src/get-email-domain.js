const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let dog;

  const arr = email.split("");

  if (arr.indexOf("@") != -1) {
    dog = arr.indexOf("@");
    email = arr.slice(dog + 1).join("");

    return getEmailDomain(email);
  }
  return email;
}

module.exports = {
  getEmailDomain,
};
