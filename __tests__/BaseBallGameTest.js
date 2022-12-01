const BaseBallGame = require("../src/domain/BaseBallGame");

const generateRandomNumbers = () => [1, 2, 3];

describe("BaseBallGame 테스트", () => {
  test("볼의 개수를 반환하는 기능", () => {
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
      const ballCount = baseBallGame.getIncludedCount(numbers);
      expect(result).toEqual(ballCount);
    });
  });
});
