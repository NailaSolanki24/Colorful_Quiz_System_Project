#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold.italic("\n\tWelcome to Naila Solanki's Quiz System Project\n"));


const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message:
      (chalk.greenBright("\nQ1.What is the correct way to check if two values are not equal in TypeScript?")),
    choices: ["a == b", "a === b", "a = b", "a !== b"],
  },
  {
    name: "question_2",
    type: "list",
    message:
      (chalk.yellow("\nQ2.Which of the following characters is commonly allowed in variable names in TypeScript?")),
    choices: ["$", "@", "#", "&"],
  },
  {
    name: "question_3",
    type: "list",
    message:
      (chalk.magentaBright("\nQ3.Which operator is commonly used for string concatenation in TypeScript?")),
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question_4",
    type: "list",
    message:
      (chalk.blueBright("\nQ4.Which symbol is commonly used to terminate a statement in TypeScript?")),
    choices: [".", ":", ";", ","],
  },
  {
    name: "question_5",
    type: "list",
    message:
      (chalk.gray("\nQ5.Which method of inquirer.js is used to start the prompt interface and receive user input?")),
    choices: ["start()", "prompt()", "init()", "run()"],
  },
]);

let score: number = 0;

switch (quiz.question_1) {
  case "a !== b":
    console.log(chalk.blue("\n1. Correct!\n"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n1. Incorrect!\n"));
}

switch (quiz.question_2) {
  case "$":
    console.log(chalk.blue("\n2. Correct!\n"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n2. Incorrect!\n"));
}

switch (quiz.question_3) {
  case "+":
    console.log(chalk.blue("\n3. Correct!\n"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n3. Incorrect!\n"));
}

switch (quiz.question_4) {
  case ";":
    console.log(chalk.blue("\n4. Correct!\n"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n4. Incorrect!\n"));
}

switch (quiz.question_5) {
  case "prompt()":
    console.log(chalk.blue("\n5. Correct!\n"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n5. Incorrect!\n"));
}

console.log(`\nscore: ${score}`);
