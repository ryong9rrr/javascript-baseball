const { Console } = require("@woowacourse/mission-utils");
const BaseBallGame = require("./domain/BaseBallGame");
const Computer = require("./domain/Computer");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  play() {
    OutputView.printStart();
    this.showStart();
  }

  showStart() {
    this.baseBallGame = new BaseBallGame(Computer.generateRandomNumbers);
    this.showReadNumber();
  }

  showReadNumber() {
    InputView.readNumber((numbers) => this.showReadNumberCallback(numbers));
  }

  showReadNumberCallback(numbers) {
    const ballCount = this.baseBallGame.getBallCount(numbers);
    const strikeCount = this.baseBallGame.getStrikeCount(numbers);
    OutputView.printResult(ballCount, strikeCount);
    if (strikeCount !== 3) {
      this.showReadNumber();
      return;
    }
    OutputView.printEnd();
    this.showReadReplay();
  }

  showReadReplay() {
    InputView.readReplay((answer) => this.showReadReplayCallback(answer));
  }

  showReadReplayCallback(answer) {
    if (answer === "1") {
      this.showStart();
      return;
    }
    Console.close();
  }
}

module.exports = App;
