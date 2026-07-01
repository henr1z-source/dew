function processarProduto(produto) {
    let precoConvertido = parseFloat(produto.preco);

    if (!Number.isNaN(precoConvertido)) {
        produto.preco = precoConvertido;
    }

    console.log(`Produto: ${produto.nome}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(`Preço: R$ ${produto.preco}`);

    if (produto.estoque < 10) {
        console.log("\nEstoque baixo\n");
    } else {
        console.log("\nEstoque adequado\n");
    }

    console.log(Object.keys(produto));
    console.log(`Tipo nome: ${typeof produto.nome}`);
    console.log(`Tipo categoria: ${typeof produto.categoria}`);
    console.log(`Tipo preco: ${typeof produto.preco}`);
    console.log(`Tipo estoque: ${typeof produto.estoque}`);
    console.log("----------------------------\n");
}

const entrada1 = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};

const entrada2 = {
    nome: "Cadeira",
    categoria: "Escritório",
    preco: "450",
    estoque: 30
};

processarProduto(entrada1);
processarProduto(entrada2);