const express = require("express");
const { filtrarId, listaDeCarros } = require("./controladores/carros.js");
const validandoSenha = require("./intermediario/senhadeacesso.js");
const app = express();

app.use(validandoSenha);

app.get("/carros", listaDeCarros);
app.get("/carros/:id", filtrarId);

app.listen(3000);
