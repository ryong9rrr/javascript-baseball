const { Console } = require("@woowacourse/mission-utils");
const NumberGenerator = require("./domain/NumberGenerator");
const Referee = require("./domain/Referee");
const Validator = require("./domain/Validator");
const { MESSAGES, COMMAND } = require("./constants");

class App {
  play() {
    Console.print(MESSAGES.GREET);
    this.gameStart();
    this.gameOver();
  }

  gameStart() {
    const computerNumber = NumberGenerator.generateRandomNumber();
    while (true) {
      const playerNumber = Referee.ask(MESSAGES.PLEASE_NUMBER);
      if (!Validator.isValidNumber(playerNumber)) {
        throw new Error();
      }
      const { strike, ball } = Referee.countResult(
        computerNumber,
        playerNumber,
      );
      Console.print(Referee.getResultMessage({ strike, ball }));
      if (strike === 3) {
        break;
      }
    }
  }

  gameOver() {
    Console.print(MESSAGES.GAME_SET);
    const playerAnswer = Referee.ask(MESSAGES.ASK_RESTART);
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
}

module.exports = App;
