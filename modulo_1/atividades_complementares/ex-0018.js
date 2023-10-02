
function faixaEtariaDeIdade(idade) {
    if (idade <= 21) {
        return "Jovem";

    } else if (idade < 66) {
        return "adulto(a)";

    } else {
        return "idoso(a)";

    }
}

function apresentacao(pessoa) {
    console.log(`Olá! meu nome é ${pessoa.nome}, sou um ${faixaEtariaDeIdade(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
}

const pessoa1 = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "Estudante"
}

apresentacao(pessoa1);