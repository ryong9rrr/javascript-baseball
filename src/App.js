const { Console } = require("@woowacourse/mission-utils");
const NumberGenerator = require("./domain/NumberGenerator");
const Referee = require("./domain/Referee");
const Validator = require("./domain/Validator");

class App {
  RESTART = {
    YES: "1",
    NO: "2",
  };

  MESSAGES = {
    GREET: "숫자 야구 게임을 시작합니다.",
    PLEASE_NUMBER: "숫자를 입력해주세요 : ",
    GAME_SET: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  };

  constructor() {
    this.referee = new Referee();
  }

  play() {
    Console.print(this.MESSAGES.GREET);
    this.gameStart();
    this.gameOver();
  }

  gameStart() {
    const computerNumber = NumberGenerator.generateRandomNumber();
    while (true) {
      const playerNumber = this.referee.askNumber();
      if (!Validator.isValidNumber(playerNumber)) {
        throw new Error();
      }
      const { strike, ball } = Referee.countStrikeAndBall(
        computerNumber,
        playerNumber,
      );
      Console.print(this.referee.getResultMessage({ strike, ball }));
      if (strike === 3) {
        break;
      }
    }
  }

  gameOver() {
    Console.print(this.MESSAGES.GAME_SET);
    const playerAnswer = this.referee.askRestart();
    if (playerAnswer === this.RESTART.YES) {
      this.gameStart();
      return;
    }
    if (playerAnswer === this.RESTART.NO) {
      Console.close();
      return;
    }
    throw new Error();
  }
}

module.exports = App;
