let idadeCliente = Number(prompt("Insira a idade para verificar a categoria do ingresso:"));
let categoriaIngresso;

if (idadeCliente < 12) {
    categoriaIngresso = "Infantil";
} else if (idadeCliente <= 17) {
    categoriaIngresso = "Adolescente";
} else if (idadeCliente <= 64) {
    categoriaIngresso = "Adulto";
} else {
    categoriaIngresso = "Sênior";
}

alert("Categoria do ingresso gerada: " + categoriaIngresso);