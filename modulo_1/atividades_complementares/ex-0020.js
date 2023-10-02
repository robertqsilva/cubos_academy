// crie um funcao que recebe um array de objetos de usuarios que contem as propriedades nome e idade. a função deve validar se todos os usuarios são maiores de idade. caso todos os usuarios sejam maiores, devera exibir a mensagem "festa liberada!, caso contrario devera exibir "possui menor de idade"

const usuarios = [
    {
        nome: "Robert",
        idade: 18,
    },
    {
        nome: "Marcelo",
        idade: 19,
    },
    {
        nome: "Julia",
        idade: 18,
    },
    {
        nome: "Carol",
        idade: 20,
    }

]

const verificacao = usuarios.every((usuarios) => {
    const maioresDeIdade = usuarios.idade >= 18
    if (maioresDeIdade) {
        console.log("Festa liberada!");
    } else {
        console.log("Possui menor de idade");
    }
})

