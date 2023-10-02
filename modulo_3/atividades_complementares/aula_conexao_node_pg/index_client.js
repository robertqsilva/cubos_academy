const { log } = require("console");
const express = require("express");

const app = express();
const { Client } = require("pg");

app.use(express.json());

app.get("/", async (req, res) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "robert",
    database: "aula_conexao_node_pg",
  });

  try {
    await client.connect();

    const resultado = await client.query(
      "select * from empresas where site is not null"
    );

    await client.end();

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000);
