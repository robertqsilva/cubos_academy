const carros = require('../bancodedados')

const listaDeCarros = (req, res) => {
    const { cor, marca } = req.query
    let resultado = carros

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        })
    }

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        })
    }

    res.send(resultado)
}

const filtrarId = (req, res) => {
    const { id } = req.params
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id)
    })

    res.send(carroEncontrado)
}

module.exports = {
    listaDeCarros,
    filtrarId
}
