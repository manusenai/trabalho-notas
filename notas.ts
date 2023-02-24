const biblioteca = require("readline-sync");
let n1: number = parseFloat(biblioteca.question("Digite sua nota na prova: "));
let n2: number = parseFloat (biblioteca.question("Digite sua nota no trabalho: "));
let n3: number = parseFloat(biblioteca.question("Digite sua nota na atividade: "));
let n4: number = parseFloat(biblioteca.question("Digite sua nota na maquete: "));
let soma: number = (n1 + n2 + n3 + n4) / 4;
console.log("nota final: " + soma);