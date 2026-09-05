import _ from "lodash";

const MIN_RAND = 1;
const MAX_RAND = 100;

export const getDescription = () => "Find the greatest common divisor of given numbers.";

export const generateRound = () => {
  const num1 = _.random(MIN_RAND, MAX_RAND, false);
  const num2 = _.random(MIN_RAND, MAX_RAND, false);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return { question, correctAnswer };
};

const getGcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};
