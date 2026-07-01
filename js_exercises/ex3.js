function processarBiblioteca(stringAutores, autorParaBuscar) {
    const listaAutores = stringAutores.split(",");

    listaAutores.forEach(autor => {
        console.log(autor);
    });

    if (listaAutores.includes(autorParaBuscar)) {
        console.log("\nAutor encontrado");
    } else {
        console.log("\nAutor não encontrado");
    }

    function formatarLivro(titulo, autor) {
        return `O livro "${titulo}" foi escrito por ${autor}.`;
    }

    if (listaAutores.length > 0) {
        console.log(formatarLivro("Obra Prima", listaAutores));
    }

    console.log("\nLista completa (join): " + listaAutores.join(" - "));
    console.log("------------------------------------------\n");
}

const entrada1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
console.log("### SAÍDA 1 ###");
processarBiblioteca(entrada1, "Machado de Assis");

const entrada2 = "J. K. Rowling,J. R. R. Tolkien";
console.log("### SAÍDA 2 ###");
processarBiblioteca(entrada2, "Machado de Assis"); 