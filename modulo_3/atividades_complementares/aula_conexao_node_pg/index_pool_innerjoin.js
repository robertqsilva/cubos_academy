const express = require("express");
const pool = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const query = ` 
        select e.id as empresaId, e.nome as nomedaempresa, f.pais as paisDafilial,
        p.nome as funcionario, p.email as emailFuncionario
        from empresas e inner join filiais f on f.empresa_id = e.id join pessoas p on p.empresa_id = e.id;
    `;
    const resultado = await pool.query(query);

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3333);
