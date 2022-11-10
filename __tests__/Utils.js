const Utils = require("../src/Utils");

describe("Utils 단위 테스트", () => {
  test("removeDuplicatedString 메서드 테스트", () => {
    expect(Utils.removeDuplicatedString("111").length).toEqual(1);
    expect(Utils.removeDuplicatedString("121").length).toEqual(2);
    expect(Utils.removeDuplicatedString("123").length).toEqual(3);
    expect(Utils.removeDuplicatedString("1234").length).toEqual(4);
  });
});
