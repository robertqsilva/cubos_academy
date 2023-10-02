function inverterString(palavra) {
    const palavraArray = palavra.split("")
    palavraArray.reverse()
    const juntadoArray = palavraArray.join("")
    return juntadoArray

}

console.log(inverterString("Robert Queiroz"))

