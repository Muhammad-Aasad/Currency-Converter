import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base currency
  EUR: 0.91,
  GPB: 0.76,
  INR: 74.54,
  PKR: 280,
};

let user_Answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR"],
  },

  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR"],
  },

  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let formamount = currency[user_Answer.from];    //exchange rate 
let toamount = currency[user_Answer.to];   //exchange rate 
let amount = user_Answer.amount;
let baseamount = amount / formamount; //USD base currency // 4
let covertedamount = baseamount * toamount;

console.log(formamount);
console.log(toamount);
console.log(amount);
console.log(covertedamount);
