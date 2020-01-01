// Hello, coders! An important part of programming is being able to apply your programs, so your challenge for today is to create a calculator application that has use in your life. It might be an interest calculator, or it might be something that you can use in the classroom. For example, if you were in physics class, you might want to make a F = M * A calc.

// EXTRA CREDIT: make the calculator have multiple functions! Not only should it be able to calculate F = M * A, but also A = F/M, and M = F/A!

const inquirer = require("inquirer");

async function easy2() {
    const questions = [
        {
          type: "input",
          name: "start",
          message: "What's your initial balance?"
        },
        {
          type: "input",
          name: "roi",
          message: "What's the rate of interest?"
        },
        {
          type: "input",
          name: "duration",
          message: "What's the duration?"
        }
      ];
      
      const answers = await inquirer.prompt(questions);
      const netIncome = ((answers.start * answers.roi / 100 * answers.duration / 365) * 0.81).toPrecision(3);
      console.log(netIncome);
}

easy2();