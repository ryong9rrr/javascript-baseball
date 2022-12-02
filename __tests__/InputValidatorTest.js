const InputValidator = require("../src/InputValidator");

describe("입력값 유효성 통합테스트", () => {
  test("입력값이 길이가 3이 아니면 예외 발생", () => {
    const TEST_CASE = ["ab", "1234", "11"];
    TEST_CASE.forEach((input) => {
      expect(() => {
        InputValidator.validateInputNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("입력값이 숫자가 아니면 예외 발생", () => {
    const TEST_CASE = ["abc", "c12", "12a", " 123", "123 ", "   "];
    TEST_CASE.forEach((input) => {
      expect(() => {
        InputValidator.validateInputNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("0이 포함되면 예외 발생", () => {
    const TEST_CASE = ["102"];
    TEST_CASE.forEach((input) => {
      expect(() => {
        InputValidator.validateInputNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("중복된 숫자가 있다면 예외 발생", () => {
    const TEST_CASE = ["121"];
    TEST_CASE.forEach((input) => {
      expect(() => {
        InputValidator.validateInputNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("다시 시작할 때 입력값이 1이나 2가 아니면 에러발생", () => {
    expect(() => {
      InputValidator.validateReplayAnswer("3");
    }).toThrow("[ERROR]");
  });
});
