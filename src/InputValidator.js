const LENGTH = 3;
const ERROR_MESSAGE =
  "[ERROR] 0을 제외한 각 자리 수가 서로 다른 3자리의 숫자를 입력해주세요.";

class InputValidator {
  validate(input) {
    const numbers = input.split("").map((number) => Number(number));
    this.#checkLength(numbers);
    this.#checkEachNumber(numbers);
    this.#checkDuplicate(numbers);
  }

  #checkLength(numbers) {
    if (numbers.length !== LENGTH) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #checkEachNumber(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number)) || number === 0) {
        throw new Error(ERROR_MESSAGE);
      }
    });
  }

  #checkDuplicate(numbers) {
    const isDuplicated = [...new Set(numbers)].length !== LENGTH;
    if (isDuplicated) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

module.exports = InputValidator;
