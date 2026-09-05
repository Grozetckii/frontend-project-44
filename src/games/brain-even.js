import _ from "lodash";

const minRandInt = 0;
const maxRandInt = 100;

export const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const randNum = _.random(minRandInt, maxRandInt, false);
  const correctAnswer = getCorrectAnswer(randNum);

  return { question: String(randNum), correctAnswer };
};

const getCorrectAnswer = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};
