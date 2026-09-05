import readlineSync from "readline-sync";
import * as evenGame from "./games/brain-even.js";
import * as calcGame from "./games/brain-calc.js";

const ROUNDS_COUNT = 3;
const GAMES_REGISTRY = {
  even: evenGame,
  calc: calcGame,
};

function startGame(gameName) {
  const selectedGame = GAMES_REGISTRY[gameName];

  if (!selectedGame) {
    console.error(`Ошибка: Игра "${gameName}" не найдена.`);
    return;
  }

  runEngine(selectedGame);
}

export const runEngine = (game) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(game.getDescription());

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = game.generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
