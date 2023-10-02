const express = require("express");
const pool = require("./conexao");

const app = express();

app.use(express.json());

app.get("/:id/:id2/:id3", async (req, res) => {
  try {
    const { id, id2, id3 } = req.params;

    const query = "select * from empresas where id = $1 or id = $2 or id = $3";
    const params = [id, id2, id3];

    const resultado = await pool.query(query, params);

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3030);
