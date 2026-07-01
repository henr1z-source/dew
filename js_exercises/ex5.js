function gerenciarEvento(evento) {
    console.log(`Evento: ${evento.nome}`);

    if (evento.local && evento.participantes.length > 0) {
        console.log(`Local: ${evento.local}`);
    }

    console.log(evento.data.toLocaleDateString("pt-BR"));

    const totalParticipantes = evento.participantes.length;
    console.log(`Participantes: ${totalParticipantes}`);

    if (totalParticipantes === 0) {
        console.log("Nenhum participante cadastrado");
    }

    if (totalParticipantes > 0) {
        console.log(`Local cadastrado: ${evento.hasOwnProperty("local")}`);
    }

    console.log("\nPropriedades encontradas:", Object.keys(evento));

    console.log("--- Verificação de Tipos ---");
    console.log(`nome: ${typeof evento.nome}`);
    console.log(`local: ${typeof evento.local}`);
    console.log(`data: ${typeof evento.data}`);
    console.log(`participantes: ${Array.isArray(evento.participantes) ? "array" : typeof evento.participantes}`);
    console.log("----------------------------\n");
}

const entrada1 = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

const entrada2 = {
    nome: "Workshop Angular",
    local: "Laboratório 5",
    data: new Date("2026-09-10"),
    participantes: []
};

console.log("### SAÍDA 1 ###");
gerenciarEvento(entrada1);

console.log("### SAÍDA 2 ###");
gerenciarEvento(entrada2);