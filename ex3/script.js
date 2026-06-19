let valorCompra = Number(prompt("Insira o valor total da compra (R$):"));
let valorFinalCompra = valorCompra > 100 ? valorCompra * 0.90 : valorCompra;

alert("Valor a ser pago: R$ " + valorFinalCompra.toFixed(2));