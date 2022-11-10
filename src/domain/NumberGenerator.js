const MissionUtils = require("@woowacourse/mission-utils");

class NumberGenerator {
  static generateRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers.map((number) => String(number)).join("");
  }
}

module.exports = NumberGenerator;
