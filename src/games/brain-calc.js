import _ from "lodash";

const minRandNum = 0;
const maxRandNum = 100;

export const getDescription = () => "What is the result of the expression?";

export const generateRound = () => {
  const num1 = _.random(minRandNum, maxRandNum, false);
  const num2 = _.random(minRandNum, maxRandNum, false);
  const operation = _.sample(["+", "-", "*"]);
  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;

  switch (operation) {
    case "+":
      correctAnswer = String(num1 + num2);
      break;
    case "-":
      correctAnswer = String(num1 - num2);
      break;
    case "*":
      correctAnswer = String(num1 * num2);
      break;
    default:
      correctAnswer = undefined;
  }

  return { question, correctAnswer };
};
