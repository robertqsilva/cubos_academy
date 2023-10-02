const pessoa = {
    nome: "Robert",
    idade: 18,
    profissao: "Assitente Administrativo",
    altura: 1.70
}

function apresentacao(robert) {
    console.log(`meu nome é ${robert.nome} tenho, ${robert.idade} anos, trabalho como ${robert.profissao} e tenho ${robert.altura} de altura`)
}

apresentacao(pessoa)