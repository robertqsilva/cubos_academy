const validandoUsuario = (req, res, next) => {
    const {senha} = req.query
    const senhaDeAccesso = "carros123"
   
    if(!senha){
       return res.send('a senha não foi informada')
    }
   
    if(senha !== senhaDeAccesso){
       return res.send('A senha está incorreta')
    }
    next()
}

module.exports = validandoUsuario