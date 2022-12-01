class BaseBallGame {
  #computer;

  constructor(generateRandomNumbers) {
    this.#computer = generateRandomNumbers();
  }

  getIncludedCount(numbers) {
    return [...this.#intersect(numbers)].length;
  }

  #intersect(numbers) {
    return new Set(numbers.filter((x) => new Set(this.#computer).has(x)));
  }
}

module.exports = BaseBallGame;
