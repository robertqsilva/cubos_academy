
const pessoa = {
    nome: "Robert",
    idade: 18,
    altura: 1.70,
    cnh: false,
    apelidos: ["rt", "roba", "totoso"],
    local: {
        pais: "Brasil",
        estado: "Bahia",
        cidade: "Salvador"
    }
};

let temCNH = pessoa.cnh ? "possui cnh" : "não possui cnh";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${temCNH}, e tem como residência:
 País: ${pessoa.local.pais} 
 Estado: ${pessoa.local.estado}
 Cidade: ${pessoa.local.cidade}
 
 Possui os seguintes apelidos:`)

for (let i = 0; i < pessoa.apelidos.length; i++) {
    console.log(`- ${pessoa.apelidos[i]}`)
}


