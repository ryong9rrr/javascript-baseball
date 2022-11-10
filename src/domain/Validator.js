const Utils = require("../Utils");

class Validator {
  static isValidNumber(enteredNumber) {
    return (
      typeof enteredNumber === "string" &&
      !Number.isNaN(Number(enteredNumber)) &&
      Utils.removeDuplicatedString(enteredNumber).length === 3
    );
  }
}

module.exports = Validator;
