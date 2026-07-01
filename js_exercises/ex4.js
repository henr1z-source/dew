function processarGastos(gastosMensais) {
    let total = 0;

    gastosMensais.forEach(gastoTexto => {
        let valorConvertido = parseFloat(gastoTexto);

        if (!Number.isNaN(valorConvertido)) {
            total += valorConvertido;
        }
    });

    console.log(`Total: R$ ${total.toFixed(2)}`);

    if (total > 2000) {
        console.log("Limite ultrapassado\n");
    } else {
        console.log("Gastos dentro do limite\n");
    }
}

const entrada1 = ["500", "350.50", "1000"];
console.log("### SAÍDA 1 ###");
processarGastos(entrada1);

const entrada2 = ["800", "900", "700"];
console.log("### SAÍDA 2 ###");
processarGastos(entrada2);