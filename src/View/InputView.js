const { Console } = require("@woowacourse/mission-utils");
const InputValidator = require("../InputValidator");

const InputView = {
  readNumber(cb) {
    Console.readLine("숫자를 입력해주세요 : ", (inputNumber) =>
      this.readNumberCallback(inputNumber, cb),
    );
  },

  readNumberCallback(inputNumber, cb) {
    try {
      InputValidator.validateInputNumber(inputNumber);
      const numbers = inputNumber.split("").map((number) => Number(number));
      cb(numbers);
    } catch (error) {
      Console.print(error.message);
      this.readNumber(cb);
    }
  },

  readReplay(cb) {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => this.readReplayCallback(answer, cb),
    );
  },

  readReplayCallback(answer, cb) {
    try {
      InputValidator.validateReplayAnswer(answer);
      cb(answer);
    } catch (error) {
      Console.print(error.message);
      this.readReplay(cb);
    }
  },
};

module.exports = InputView;
