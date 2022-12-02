const LENGTH = 3;
const ERRORS = Object.freeze({
  NUMBER:
    "[ERROR] 0을 제외한 각 자리 수가 서로 다른 3자리의 숫자를 입력해주세요.",
  REPLAY: "[ERROR] 1또는 2를 눌러주세요.",
});

class InputValidator {
  static validateReplayAnswer(answer) {
    if (answer !== "1" || answer !== "2") {
      throw new Error(ERRORS.REPLAY);
    }
  }

  static validateInputNumber(input) {
    const numbers = input.split("").map((number) => Number(number));
    InputValidator.checkLength(numbers);
    InputValidator.checkEachNumber(numbers);
    InputValidator.checkDuplicate(numbers);
  }

  static checkLength(numbers) {
    if (numbers.length !== LENGTH) {
      throw new Error(ERRORS.NUMBER);
    }
  }

  static checkEachNumber(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number)) || number === 0) {
        throw new Error(ERRORS.NUMBER);
      }
    });
  }

  static checkDuplicate(numbers) {
    const isDuplicated = [...new Set(numbers)].length !== LENGTH;
    if (isDuplicated) {
      throw new Error(ERRORS.NUMBER);
    }
  }
}

module.exports = InputValidator;
