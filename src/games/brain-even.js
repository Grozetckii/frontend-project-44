import _ from "lodash";

const MIN_RAND = 0;
const MAX_RAND = 100;

export const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const randNum = _.random(MIN_RAND, MAX_RAND, false);
  const correctAnswer = getCorrectAnswer(randNum);

  return { question: String(randNum), correctAnswer };
};

const getCorrectAnswer = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};
