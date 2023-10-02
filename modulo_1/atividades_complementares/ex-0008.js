//calculat itens do array e exir


const somandoArray = [1, 3, 5, 7, 11, 13, 17, 19, 555, 99, 88, 77, 55]

/*let i = 0
let soma = 0;

while (i < somandoArray.length) {
    soma += somandoArray[i]
    i++
}
console.log(soma);*/
let soma = 0;
for (let i = 0; i < somandoArray.length; i++) {
    soma += somandoArray[i];
}
console.log(soma)