const { Console } = require("@woowacourse/mission-utils");
const InputValidator = require("../InputValidator");

const InputView = {
  readNumber(cb) {
    Console.readLine("숫자를 입력해주세요 : ", (inputNumber) =>
      this.readNumberCallback(inputNumber, cb),
    );
  },

  readNumberCallback(inputNumber, cb) {
    InputValidator.validate(inputNumber);
    const numbers = inputNumber.split("").map((number) => Number(number));
    Console.print("\n");
    cb(numbers);
  },

  readReplay(cb) {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => this.readReplayCallback(answer, cb),
    );
  },

  readReplayCallback(answer, cb) {
    InputValidator.validateReplayAnswer(answer);
    cb(answer);
  },
};

module.exports = InputView;
