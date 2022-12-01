class BaseBallGame {
  #computer;

  constructor(generateRandomNumbers) {
    this.#computer = generateRandomNumbers();
  }
}

module.exports = BaseBallGame;
