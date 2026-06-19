
let quantidadeMacas = Number(prompt("Insira a quantidade de maçãs que deseja comprar:"));
let precoUnitario = quantidadeMacas < 12 ? 1.30 : 1.00;
let custoTotal = quantidadeMacas * precoUnitario;

alert("O custo total da sua compra é: R$ " + custoTotal.toFixed(2));