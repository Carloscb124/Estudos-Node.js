import chalk from "chalk"
import logSymbols from "log-symbols"

// console.log(chalk.blue.bgGreen.italic("Ola eu sou"));
// console.log(chalk.green.bgBlue.bold("Jarvis"));

console.log(logSymbols.success, chalk.green.italic("Servidor iniciado"));
console.log(logSymbols.error, chalk.red.italic("Servidor Falhou"));