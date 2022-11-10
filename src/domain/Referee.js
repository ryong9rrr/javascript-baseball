class Referee {
  BALL = "볼";

  STRIKE = "스트라이크";

  NOTHING = "낫싱";

  static countStrikeAndBall(computerNumber, enteredNumber) {
    const initialCounter = {
      strike: 0,
      ball: 0,
    };

    return [...enteredNumber].reduce((counter, eachEnteredNumber, index) => {
      if (computerNumber[index] === eachEnteredNumber) {
        return { ...counter, strike: counter.strike + 1 };
      }
      if (computerNumber.includes(eachEnteredNumber)) {
        return { ...counter, ball: counter.ball + 1 };
      }
      return counter;
    }, initialCounter);
  }

  getResultMessage({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      return this.NOTHING;
    }

    return this.createMessageOrder({ strike, ball })
      .reduce((messages, { type, count }) => {
        if (count > 0) {
          messages.push(`${count}${type}`);
        }
        return messages;
      }, [])
      .join(" ");
  }

  createMessageOrder = ({ strike, ball }) => [
    {
      type: this.BALL,
      count: ball,
    },
    {
      type: this.STRIKE,
      count: strike,
    },
  ];
}

module.exports = Referee;