import _ from "lodash";

const MAX_RAND = 1;
const MIN_RAND = 100;

export const getDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const randNum = _.random(MAX_RAND, MIN_RAND, false);

  const question = String(randNum);
  const correctAnswer = isPrime(randNum) ? "yes" : "no";

  return { question, correctAnswer };
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
