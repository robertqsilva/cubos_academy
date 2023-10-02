let errado = 0

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] !== letra) {
        errado++
    }
}

console.log(errado)