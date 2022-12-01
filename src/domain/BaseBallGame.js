class BaseBallGame {
  #computer;

  constructor(generateRandomNumbers) {
    this.#computer = generateRandomNumbers();
  }

  getStrikeCount(numbers) {
    let result = 0;
    for (let i = 0; i < 3; i += 1) {
      if (numbers[i] === this.#computer[i]) {
        result += 1;
      }
    }
    return result;
  }

  getIncludedCount(numbers) {
    return [...this.#intersect(numbers)].length;
  }

  #intersect(numbers) {
    return new Set(numbers.filter((x) => new Set(this.#computer).has(x)));
  }
}

module.exports = BaseBallGame;
