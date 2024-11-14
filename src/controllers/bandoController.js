var bandoModel = require("../models/bandoModel");

function listar(req, res) {
  bandoModel.listar()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao listar personagens", erro });
    });
}

function cadastrar(req, res) {
  var nome = req.body.nome;

  if (nome == undefined) {
    res.status(400).send("Nome está undefined!");
  } else {


    bandoModel.cadastrar(nome)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar,
  listar,
};
