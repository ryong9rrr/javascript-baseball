const BaseBallGame = require("../src/domain/BaseBallGame");

const generateRandomNumbers = () => [1, 2, 3];

describe("BaseBallGame 테스트", () => {
  test("랜덤 생성된 숫자 배열의 길이가 3이 아니면 예외 발생", () => {
    expect(() => {
      new BaseBallGame(() => []);
    }).toThrow();
  });

  test("공이 몇 개 포함됐는지 알려주는 기능", () => {
    const baseBallGame = new BaseBallGame(generateRandomNumbers);
    const TEST_CASE = [
      {
        numbers: [1, 2, 3],
        result: 3,
      },
      {
        numbers: [3, 1, 4],
        result: 2,
      },
      {
        numbers: [6, 5, 4],
        result: 0,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      const count = baseBallGame.getIncludedCount(numbers);
      expect(result).toEqual(count);
    });
  });

  test("스트라이크의 개수를 알려주는 기능", () => {
    const baseBallGame = new BaseBallGame(generateRandomNumbers);
    const TEST_CASE = [
      {
        numbers: [1, 2, 3],
        result: 3,
      },
      {
        numbers: [2, 1, 3],
        result: 1,
      },
      {
        numbers: [6, 5, 4],
        result: 0,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      const strikeCount = baseBallGame.getStrikeCount(numbers);
      expect(result).toEqual(strikeCount);
    });
  });

  test("볼의 개수를 알려주는 기능", () => {
    const baseBallGame = new BaseBallGame(generateRandomNumbers);
    const TEST_CASE = [
      {
        numbers: [1, 2, 3],
        result: 0,
      },
      {
        numbers: [2, 1, 3],
        result: 2,
      },
      {
        numbers: [6, 5, 4],
        result: 0,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      const ballCount = baseBallGame.getBallCount(numbers);
      expect(result).toEqual(ballCount);
    });
  });
});
