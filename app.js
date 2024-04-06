//  CURRENCY CONVERTER
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bold.underline("********Welcome to Currency Counter**********"));
// Initial Exchange Rates against USD (Base Currency)
const exchangeRates = {
    USD: 1, // US Dollar
    EUR: 0.83, // Euro
    GBP: 0.72, // British Pound
    JPY: 109.80, // Japanese Yen 
    PKR: 278, // Pakistani Rupee
    INR: 74.89, // Indian Rupee
    CAD: 1.36, // Canadian Dollar
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.yellowBright.bold("Enter the currency to convert from")),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'JYP', 'INR', 'PKR']
    },
    { name: "to",
        message: (chalk.redBright.bold("Enter the currency to convert to")),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: (chalk.greenBright.bold("Enter the amount to convert")),
        type: "number"
    },
]);
let from = userAnswer.from;
let to = userAnswer.to;
let amount = userAnswer.amount;
let result = (amount / exchangeRates[from]) * exchangeRates[to];
console.log(result);
console.log(chalk.blueBright.bold("*********Thanks for using Currency Counter*******"));
