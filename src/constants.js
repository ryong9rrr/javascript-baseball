const MESSAGES = Object.freeze({
  GREET: "숫자 야구 게임을 시작합니다.",
  PLEASE_NUMBER: "숫자를 입력해주세요 : ",
  GAME_SET: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

const RESULT = Object.freeze({
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const COMMAND = Object.freeze({
  YES: "1",
  NO: "2",
});

module.exports = {
  MESSAGES,
  RESULT,
  COMMAND,
};
