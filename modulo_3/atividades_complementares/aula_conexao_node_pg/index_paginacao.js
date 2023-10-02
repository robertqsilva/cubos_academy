const express = require("express");
const pool = require("./conexao");
const { off } = require("process");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { qntdPorPagina, pagina } = req.query;

    const query = "select * from pessoas order by id asc limit $1 offset $2";

    const { rowCount } = await pool.query("select * from pessoas");
    const offset = pagina === 1 ? 0 : (pagina - 1) * qntdPorPagina;
    const resultado = await pool.query(query, [qntdPorPagina, offset]);

    const result = {
      pagina,
      qntdPorPagina,
      total: rowCount,
      registros: resultado.rows,
    };

    return res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3003);
