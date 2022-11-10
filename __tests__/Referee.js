const Referee = require("../src/domain/Referee");

describe("Referee 단위 테스트", () => {
  test("countResult 메서드로 스트라이크, 볼 개수를 반환", () => {
    const TEST_CASE = [
      {
        inputs: ["123", "123"],
        results: [3, 0],
      },
      {
        inputs: ["713", "123"],
        results: [1, 1],
      },
      {
        inputs: ["713", "145"],
        results: [0, 1],
      },
      {
        inputs: ["713", "671"],
        results: [0, 2],
      },
      {
        inputs: ["713", "256"],
        results: [0, 0],
      },
    ];

    TEST_CASE.forEach(({ inputs, results }) => {
      const [computerNumber, enteredNumber] = inputs;
      const [strikeCount, ballCount] = results;
      const { strike, ball } = Referee.countResult(
        computerNumber,
        enteredNumber,
      );
      expect(strike).toBe(strikeCount);
      expect(ball).toBe(ballCount);
    });
  });

  test("getResultMessage 메서드로 스트라이크, 볼, 낫싱을 출력", () => {
    const TEST_CASE = [
      {
        strike: 3,
        ball: 0,
        result: "3스트라이크",
      },
      {
        strike: 0,
        ball: 0,
        result: "낫싱",
      },
      {
        strike: 2,
        ball: 1,
        result: "1볼 2스트라이크",
      },
      {
        strike: 0,
        ball: 2,
        result: "2볼",
      },
    ];

    const referee = new Referee();

    TEST_CASE.forEach(({ strike, ball, result }) => {
      const message = referee.getResultMessage({ strike, ball });
      expect(message).toBe(result);
    });
  });
});
