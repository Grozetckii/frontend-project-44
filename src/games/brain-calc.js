import _ from "lodash";

const MIN_RAND = 0;
const MAX_RAND = 100;

export const getDescription = () => "What is the result of the expression?";

export const generateRound = () => {
  const num1 = _.random(MIN_RAND, MAX_RAND, false);
  const num2 = _.random(MIN_RAND, MAX_RAND, false);
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
