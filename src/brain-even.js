import readlineSync from "readline-sync";

const numberOfCorrectAnswersToWin = 3;
const minRandInt = 0;
const maxRandInt = 100;

function brainEven() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isWin = brainEvenLoop();

  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

function brainEvenLoop() {
  let numberOfCorrectAnswers = 0;

  while (numberOfCorrectAnswers < numberOfCorrectAnswersToWin) {
    const randNum = getRandomInt(minRandInt, maxRandInt);
    console.log(`Question: ${randNum}`);
    const playerInput = readlineSync.question("Your answer: ");
    const playerAnswer = mapAnswer(playerInput);
    const correctAnswer = isEven(randNum);

    if (playerAnswer === correctAnswer) {
      numberOfCorrectAnswers++;
      console.log("Correct!");
    } else {
      console.log(
        `'${playerInput}' is wrong answer ;(. Correct answer was '${correctAnswer ? "yes" : "no"}'.`,
      );
      return false;
    }
  }

  return true;
}

function mapAnswer(value) {
  const mapping = {
    yes: true,
    no: false,
  };

  return mapping[value];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

export default brainEven;
