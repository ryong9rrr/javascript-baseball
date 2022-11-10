const { RESULT } = require("../constants");

class Referee {
  static countResult(computerNumber, enteredNumber) {
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

  static getResultMessage({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      return RESULT.NOTHING;
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

  static createMessageOrder = ({ strike, ball }) => [
    {
      type: RESULT.BALL,
      count: ball,
    },
    {
      type: RESULT.STRIKE,
      count: strike,
    },
  ];
}

module.exports = Referee;
