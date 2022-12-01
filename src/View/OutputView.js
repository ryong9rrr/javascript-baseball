const { Console } = require("@woowacourse/mission-utils");

class OutputView {
  static printStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  static printResult(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print("낫싱");
      return;
    }
    if (ballCount === 0) {
      Console.print(`${strikeCount}스트라이크`);
      return;
    }
    if (strikeCount === 0) {
      Console.print(`${ballCount}볼`);
      return;
    }
    Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }

  static printEnd() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
}

module.exports = OutputView;
