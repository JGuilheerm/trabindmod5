import readlineSync from "readline-sync";
import chalk from "chalk";


const properties = [];
let input = "";

while (input != "sair") {
  properties.push(input);
  input = readlineSync
    .question(chalk.redBright.bgBlue("Digite uma propriedade CSS: "))
    .toLocaleLowerCase();
}
console.log(chalk.whiteBright.bgGreen(properties.sort().join("\n")));