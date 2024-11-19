var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM personagem WHERE idPersonagem = '${id}'`;
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idPersonagem, personagem.nome as nomePersonagem, descricao, qtdVotos, bando.nome as nomeBando FROM personagem JOIN bando on personagem.fkBando = bando.idBando`;
  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao, fkBando) {
  var instrucaoSql = `INSERT INTO personagem (nome, descricao, fkBando) VALUES ('${nome}', '${descricao}', ${fkBando})`;
  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM personagem WHERE nome = '${nome}'`;
  return database.executar(instrucaoSql);
}

function personagemComMaisVotos() {
  var instrucaoSql = `select nome, MAX(qtdVotos) as votos from personagem GROUP BY nome HAVING MAX(qtdVotos) ORDER BY MAX(qtdVotos) DESC LIMIT 1`;
  return database.executar(instrucaoSql);
}

function porcentagemMaisVotos() {
  var instrucaoSql = `SELECT nome, ROUND((qtdVotos / (SELECT SUM(qtdVotos) FROM personagem) * 100),2) AS porcentagem FROM personagem WHERE qtdVotos = (SELECT MAX(qtdVotos) FROM personagem);`
  return database.executar(instrucaoSql)
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
  personagemComMaisVotos,
  porcentagemMaisVotos,
};
