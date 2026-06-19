let notaAvaliacao = Number(prompt("Insira a nota obtida pelo aluno (0 a 100):"));
let conceitoAcademico;

if (notaAvaliacao >= 90) {
    conceitoAcademico = "A";
} else if (notaAvaliacao >= 80) {
    conceitoAcademico = "B";
} else if (notaAvaliacao >= 70) {
    conceitoAcademico = "C";
} else if (notaAvaliacao >= 60) {
    conceitoAcademico = "D";
} else {
    conceitoAcademico = "F";
}

alert("O conceito final atribuído a esta nota é: " + conceitoAcademico);