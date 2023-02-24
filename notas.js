var biblioteca = require("readline-sync");
var n1 = parseFloat(biblioteca.question("Digite sua nota na prova: "));
var n2 = parseFloat(biblioteca.question("Digite sua nota no trabalho: "));
var n3 = parseFloat(biblioteca.question("Digite sua nota na atividade: "));
var n4 = parseFloat(biblioteca.question("Digite sua nota na maquete: "));
var soma = (n1 + n2 + n3 + n4) / 4;
console.log("nota final: " + soma);
