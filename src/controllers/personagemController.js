var personagemModel = require("../models/personagemModel");

function listar(req, res) {
  personagemModel.listar()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao listar personagens", erro });
    });
}

function buscarPorId(req, res) {
  var id = req.params.idPersonagem;

  personagemModel.buscarPorId(id)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(404).json({ mensagem: "Personagem não encontrado" });
      }
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao buscar personagem", erro });
    });
}

function buscarPorNome(req, res) {
  var nome = req.params.nome;

  personagemModel.buscarPorNome(nome)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(404).json({ mensagem: "Personagem não encontrado" });
      }
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao buscar personagem", erro });
    });
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  var descricao = req.body.descricao;

  personagemModel.buscarPorNome(nome)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(401).json({ mensagem: `O personagem ${nome} já existe` });
      } else {
        personagemModel.cadastrar(nome, descricao)
          .then((resultado) => {
            res.status(201).json(resultado);
          })
          .catch((erro) => {
            res.status(500).json({ mensagem: "Erro ao cadastrar personagem", erro });
          });
      }
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao verificar personagem", erro });
    });
}

function listarComVotos(req, res) {
  personagemModel.listarComVotos()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: "Erro ao listar personagens com votos", erro });
    });
}

function votar(req, res) {
  var idPersonagem = req.body.idPersonagem;

  personagemModel.atualizarQtdVotos(idPersonagem)
    .then((resultado) => {
      res.status(200).json({ mensagem: 'Voto registrado com sucesso', resultado });
    })
    .catch((erro) => {
      res.status(500).json({ mensagem: 'Erro ao registrar voto', erro });
    });
}

module.exports = {
  buscarPorNome,
  buscarPorId,
  cadastrar,
  listar,
  listarComVotos,
  votar,
};
