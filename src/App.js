const { Console } = require("@woowacourse/mission-utils");
const NumberGenerator = require("./domain/NumberGenerator");
const Validator = require("./domain/Validator");
const Referee = require("./domain/Referee");
const { MESSAGES, COMMAND } = require("./constants");

class App {
  constructor() {
    this.computerNumber = null;
  }

  play() {
    Console.print(MESSAGES.GREET);
    this.gameStart();
  }

  gameStart() {
    this.computerNumber = NumberGenerator.generateRandomNumber();
    this.askNumber();
  }

  gameOver() {
    Console.print(MESSAGES.GAME_SET);
    this.askRestart();
  }

  askNumber() {
    Console.readLine(MESSAGES.PLEASE_NUMBER, this.askNumberCallback.bind(this));
  }

  askRestart() {
    Console.readLine(MESSAGES.ASK_RESTART, this.askRestartCallback.bind(this));
  }

  askNumberCallback(playerNumber) {
    if (!Validator.isValidNumber(playerNumber)) {
      throw new Error();
    }
    const { strike, ball } = Referee.countResult(
      this.computerNumber,
      playerNumber,
    );
    Console.print(Referee.getResultMessage({ strike, ball }));
    if (this.isSuccess(strike)) {
      this.gameOver();
      return;
    }
    this.askNumber(this.computerNumber);
  }

  askRestartCallback(playerAnswer) {
    if (playerAnswer === COMMAND.YES) {
      this.gameStart();
      return;
    }
    if (playerAnswer === COMMAND.NO) {
      Console.close();
      return;
    }
    throw new Error();
  }

  isSuccess(strike) {
    return strike === 3;
  }
}

module.exports = App;
