let temperaturaFahr = Number(prompt("Insira o valor da temperatura em graus Fahrenheit (°F):"));

let temperaturaCels = (temperaturaFahr - 32) * 5 / 9;

alert("A temperatura equivalente é de: " + temperaturaCels.toFixed(2) + " °C");