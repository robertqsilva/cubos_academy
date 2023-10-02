
const cartao = {
    nomeDoCliente: "Robert Queiroz",
    idadeDoCliente: 18,

    produtosConsumidos: [
        {
            nomeDOproduto: "Agua",
            PrecoUnitario: 100,
            quantidadeComprada: 5
        },
        {
            nomeDOproduto: "Gin",
            PrecoUnitario: 7000,
            quantidadeComprada: 5
        },
        {
            nomeDOproduto: "Cerveja",
            PrecoUnitario: 1000,
            quantidadeComprada: 5
        }
    ]
}

console.log(`COMANDA

Nome: ${cartao.nomeDoCliente}
Idade: ${cartao.idadeDoCliente}

Produtos Consumidos:

${cartao.produtosConsumidos[0].nomeDOproduto}
Valor unitario: ${cartao.produtosConsumidos[0].PrecoUnitario}
Quantidade: ${cartao.produtosConsumidos[0].quantidadeComprada}
TOTAL: ${cartao.produtosConsumidos[0].PrecoUnitario * cartao.produtosConsumidos[0].quantidadeComprada}
`)





















