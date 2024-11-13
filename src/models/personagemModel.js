var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM personagem WHERE idPersonagem = '${id}'`;
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idPersonagem, nome, descricao, qtdVotos FROM personagem`;
  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao) {
  var instrucaoSql = `INSERT INTO personagem (nome, descricao) VALUES ('${nome}', '${descricao}')`;
  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM personagem WHERE nome = '${nome}'`;
  return database.executar(instrucaoSql);
}

function listarComVotos() {
  var instrucaoSql = `SELECT idPersonagem, nome, descricao, qtdVotos AS votos FROM personagem`;
  return database.executar(instrucaoSql);
}

function atualizarQtdVotos(id) {
  var instrucaoSql = `UPDATE personagem SET qtdVotos = qtdVotos + 1 WHERE idPersonagem = '${id}'`;
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarPorId,
  cadastrar,
  listar,
  buscarPorNome,
  listarComVotos,
  atualizarQtdVotos,
};
