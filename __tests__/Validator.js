const Validator = require("../src/domain/Validator");

describe("Validator 단위 테스트", () => {
  test("isValidNumber 메서드로 올바른 입력 값인지 검사", () => {
    const TEST_CASE = [
      {
        input: "",
        result: false,
      },
      {
        input: " ",
        result: false,
      },
      {
        input: "\n",
        result: false,
      },
      {
        input: "1",
        result: false,
      },
      {
        input: "12",
        result: false,
      },
      {
        input: "123",
        result: true,
      },
      {
        input: "111",
        result: false,
      },
      {
        input: "1234",
        result: false,
      },
      {
        input: "abc",
        result: false,
      },
    ];

    TEST_CASE.forEach(({ input, result }) => {
      expect(Validator.isValidNumber(input)).toBe(result);
    });
  });
});
