const imagens = [10, 11, 12, 13, 14, 15, 16];
const posicao = ">>>";
let toaqui = 0;

for (let i = 0; i < posicao.length; i++) {
    if (posicao[i] === ">") {
        toaqui += 1;
    } else if (posicao[i] === "<") {
        toaqui -= 1;
    }

    if (toaqui > 6) {
        toaqui = 0;
    } else if (toaqui < 0) {
        toaqui = 6;
    }
}

console.log(toaqui);