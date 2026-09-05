import _ from "lodash";

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 50;
const MIN_STEP = 1;
const MAX_STEP = 10;

export const getDescription = () => "What number is missing in the progression?";

export const generateRound = () => {
  const length = _.random(MIN_LENGTH, MAX_LENGTH, false);
  const start = _.random(MIN_START, MAX_START, false);
  const step = _.random(MIN_STEP, MAX_STEP, false);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = _.random(0, length - 1, false);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = "..";
  const question = progression.join(" ");

  return { question, correctAnswer };
};

const generateProgression = (length, start, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};
