let numero1 = Number(prompt("Insira o primeiro número inteiro:"));
let numero2 = Number(prompt("Insira o segundo número inteiro (diferente do primeiro):"));
let numero3 = Number(prompt("Insira o terceiro número inteiro (diferente dos anteriores):"));

let maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}

alert("O maior número entre os três inseridos é: " + maiorNumero);