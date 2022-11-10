const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./domain/Computer");
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
    this.computerNumber = null;
  }

  play() {
    this.printMessage(this.MESSAGES.GREET);
    this.gameStart();
  }

  gameStart() {
    this.computerNumber = Computer.generateRandomNumber();
    this.askNumbers();
  }

  askNumbersCallback(enteredNumber) {
    if (!Validator.isValidNumber(enteredNumber)) {
      throw new Error();
    }
    const { strike, ball } = Referee.countStrikeAndBall(
      this.computerNumber,
      enteredNumber,
    );
    this.printMessage(this.referee.getResultMessage({ strike, ball }));
    if (strike === 3) {
      this.gameOver();
      return;
    }
    this.askNumbers();
  }

  askNumbers() {
    this.takeInput(
      this.MESSAGES.PLEASE_NUMBER,
      this.askNumbersCallback.bind(this),
    );
  }

  gameOver() {
    this.printMessage(this.MESSAGES.GAME_SET);
    this.askRestart();
  }

  askRestartCallback(answer) {
    if (answer === this.RESTART.YES) {
      this.gameStart();
      return;
    }
    if (answer === this.RESTART.NO) {
      this.gameExit();
      return;
    }
    throw new Error();
  }

  askRestart() {
    this.takeInput(
      this.MESSAGES.ASK_RESTART,
      this.askRestartCallback.bind(this),
    );
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  takeInput(message, callbackFn) {
    MissionUtils.Console.readLine(message, callbackFn);
  }

  gameExit() {
    MissionUtils.Console.close();
  }
}

module.exports = App;
