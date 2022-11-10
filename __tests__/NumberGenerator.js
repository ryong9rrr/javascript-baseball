const NumberGenerator = require("../src/domain/NumberGenerator");
const Utils = require("../src/Utils");

const repeat = (callbackFn, trial = 100) => {
  for (let repeatCount = 0; repeatCount < trial; repeatCount += 1) {
    callbackFn();
  }
};

describe("NumberGenerator 단위 테스트", () => {
  test("generateRandomNumber가 서로 다른 3자리 숫자를 반환하는지 100회 테스트", () => {
    repeat(() => {
      const randomNumber = NumberGenerator.generateRandomNumber();
      expect(Utils.removeDuplicatedString(randomNumber).length).toEqual(3);
    });
  });
});
