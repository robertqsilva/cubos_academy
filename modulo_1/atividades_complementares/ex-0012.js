const produtos = [50, 100, 100, 100, 100, 20]
let menorNumero = Infinity;
let somatotal = 0


for (let i = 0; i < produtos.length; i++) {
    somatotal += produtos[i]

    if (produtos[i] < menorNumero) {
        menorNumero = produtos[i]
    }
}

if (produtos.length < 5) {
    console.log(somatotal)
}

if (produtos.length >= 5) {
    console.log(somatotal - menorNumero)
}