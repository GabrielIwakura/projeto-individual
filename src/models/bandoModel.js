var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT idBando, nome FROM bando`;
  return database.executar(instrucaoSql);
}

function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO bando (nome) VALUES ('${nome}')`;
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar,
  listar,
};
