// create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:
// your name is (blank), you are (blank) years old, and your username is (blank)
// for extra credit, have the program log this information in a file to be accessed later.

const inquirer = require("inquirer");
const fs = require("fs");

async function easy1() {
    const questions = [
        {
          type: "input",
          name: "name",
          message: "What's your name?"
        },
        {
          type: "input",
          name: "age",
          message: "What's your age?"
        },
        {
          type: "input",
          name: "user",
          message: "What's your Reddit username?"
        }
      ];
      
      const answers = await inquirer.prompt(questions);
      const out = `Your name is ${answers.name}, you are ${answers.age} years old, and your username is ${answers.user}.`;
      console.log(out);
      fs.writeFileSync('./output/easy1.txt', out);
}

easy1();