const express = require("express");
const routes = express.Router();
const db = require("./times");

routes.get("/", (req, res) => {
  res.status(200).json(db.times);
});

routes.get("/:nome", (req, res) => {
  const nome = req.params.nome;

  const times = db.times.filter((x) => x.nome.toLowerCase().match(nome.toLowerCase()));
  if (times.length <= 0) {
    res.sendStatus(404);
  } else {
    res.status(200).json(times);
  }
});

routes.post("/", (req, res) => {
  const { nome, cidade, estado, serie, titulos, folhaPagamento } = req.body;

  if (!nome || !cidade || !estado || !titulos || !folhaPagamento) {
    res.sendStatus(400);
  } else {
    const id = db.times[db.times.length - 1].id + 1;
    const time = {
      id,
      nome,
      cidade,
      estado,
      serie,
      titulos,
      folhaPagamento,
    };
    db.times.push(time);
    res.status(200).json(time);
  }
});

routes.put("/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    const id = parseInt(req.params.id);
    const time = db.times.find((c) => c.id == id);
    if (time != undefined) {
      const nome = req.body.nome;
      const cidade = req.body.cidade;
      const estado = req.body.estado;
      const serie = req.body.serie;
      const titulos = req.body.titulos;
      const folhaPagamento = req.body.folhaPagamento;

      if (nome != undefined) time.nome = nome;
      if (cidade != undefined) time.cidade = cidade;
      if (estado != undefined) time.estado = estado;
      if (serie != undefined) time.serie = serie;
      if (titulos != undefined) time.titulos = titulos;
      if (folhaPagamento != undefined) time.folhaPagamento = folhaPagamento;

      res.status(200).json(time);
    } else {
      res.sendStatus(404);
    }
  }
});

routes.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.times.findIndex((c) => c.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "Time não encontrado." });
  } else {
    db.times.splice(index, 1);
    res.status(200).json({ msg: "Time excluído com sucesso." });
  }
});

module.exports = routes;
