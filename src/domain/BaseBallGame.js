const LENGTH = 3;

class BaseBallGame {
  #computer;

  constructor(generateRandomNumbers) {
    const computer = generateRandomNumbers();
    this.#validate(computer);
    this.#computer = computer;
  }

  getStrikeCount(numbers) {
    let result = 0;
    for (let i = 0; i < LENGTH; i += 1) {
      if (numbers[i] === this.#computer[i]) {
        result += 1;
      }
    }
    return result;
  }

  getBallCount(numbers) {
    return this.getIncludedCount(numbers) - this.getStrikeCount(numbers);
  }

  getIncludedCount(numbers) {
    return [...this.#intersect(numbers)].length;
  }

  #intersect(numbers) {
    return new Set(numbers.filter((x) => new Set(this.#computer).has(x)));
  }

  #validate(numbers) {
    if (numbers.length !== LENGTH) {
      throw new Error(`number's length must be ${LENGTH}`);
    }
  }
}

module.exports = BaseBallGame;
