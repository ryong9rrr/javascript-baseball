const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./domain/Computer");
const Referee = require("./domain/Referee");
const Validator = require("./domain/Validator");

class App {
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
    this.printMessage(this.MESSAGES.GREET);
    this.gameStart();
  }

  gameStart() {
    const computerNumber = Computer.generateRandomNumber();
    this.inputNumber(computerNumber);
  }

  inputNumber(computerNumber) {
    const takeInputCallback = (enteredNumber) => {
      if (!Validator.isValidNumber(enteredNumber)) {
        throw new Error();
      }
      const { strike, ball } = Referee.countStrikeAndBall(
        computerNumber,
        enteredNumber,
      );
      this.printMessage(this.referee.getResultMessage({ strike, ball }));
      if (strike === 3) {
        this.gameOver();
        return;
      }
      this.inputNumber(computerNumber);
    };

    this.takeInput(this.MESSAGES.PLEASE_NUMBER, takeInputCallback);
  }

  gameOver() {
    this.printMessage(this.MESSAGES.GAME_SET);
    this.askRestart();
  }

  askRestart() {
    const takeInputCallback = (answer) => {
      if (answer === "1") {
        this.gameStart();
        return;
      }
      if (answer === "2") {
        this.gameExit();
        return;
      }
      throw new Error();
    };

    this.takeInput(this.MESSAGES.ASK_RESTART, takeInputCallback);
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
