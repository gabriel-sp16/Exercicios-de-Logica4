let grausCelsius = Number(prompt("Insira o valor da temperatura em graus Celsius (°C):"));

let grausFahrenheit = (grausCelsius * 9 / 5) + 32;

alert("A temperatura equivalente é de: " + grausFahrenheit.toFixed(1) + " °F");