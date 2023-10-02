// um produto tera um valor k, porem se esse pruduto for comprado a vista terá 10% de desconto, caso seja parcelado pagara o valor original de k
// voçe ira pagar xxxx reais se pagar a vista e pagara xxxx reais se pagar pacelado
// entrada : valor da compra | qnt de parcelas


const valorDoProduto = 100;
const qntDeParcelas = 12;

if (qntDeParcelas === 1) {
    const valorAvista = (valorDoProduto * 0.9).toFixed(2);

    console.log(`voce deve pagar R$ ${valorAvista} a vista`);

} else if (qntDeParcelas >= 2 && qntDeParcelas <= 6) {
    const valorParcelado = (valorDoProduto / qntDeParcelas).toFixed(2);

    console.log(`você deve pagar ${qntDeParcelas} vezes de  R$ ${valorParcelado}`);

} else if (qntDeParcelas >= 7 && qntDeParcelas <= 12
) {
    const formulaMontante = valorDoProduto * (1 + 0.01) ** qntDeParcelas;
    const valorPago = (formulaMontante / qntDeParcelas).toFixed(2);

    console.log(`voce deve pagar ${qntDeParcelas} vezes de ${valorPago}`);
} else {
    console.log("numeros de parcelas invalidos")
}

