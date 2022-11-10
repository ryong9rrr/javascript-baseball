const Computer = require("../src/domain/Computer");
const Utils = require("../src/Utils");

const repeat = (callbackFn, trial = 100) => {
  for (let repeatCount = 0; repeatCount < trial; repeatCount += 1) {
    callbackFn();
  }
};

describe("Computer 단위 테스트", () => {
  test("generateRandomNumber 메서드 100회 테스트", () => {
    repeat(() => {
      const randomNumber = Computer.generateRandomNumber();
      expect(Utils.removeDuplicatedString(randomNumber).length).toEqual(3);
    });
  });
});
