function processarMatricula(disciplinas) {
    const total = disciplinas.length;
    const cursaJS = disciplinas.includes("JavaScript");

    disciplinas.push("Nova Disciplina");

    for (let i = 0; i < disciplinas.length; i++) {
        let disciplina = disciplinas[i];

        if (disciplina === "") {
            continue;
        }

        console.log(disciplina);

        if (disciplina === "TCC") {
            console.log("\nLaço interrompido");
            break;
        }
    }

    if (total > 0 && !disciplinas.includes("TCC")) {
        console.log("\nTotal: " + total);
        if (cursaJS) {
            console.log("\nAluno cursa JavaScript");
        }
    }
}

const entrada1 = ["HTML", "CSS", "JavaScript"];
console.log("--- Saída 1 ---");
processarMatricula(entrada1);

const entrada2 = ["Banco de Dados", "", "TCC", "Redes"];
console.log("\n--- Saída 2 ---");
processarMatricula(entrada2);