var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.post("/cadastrar", function (req, res) {
  personagemController.cadastrar(req, res);
});

router.post("/votar", function (req, res) {
  personagemController.votar(req, res); 
});

router.get("/buscarPorId/:id", function (req, res) {
  personagemController.buscarPorId(req, res);
});

router.get("/buscarPorNome/:nome", function (req, res) {
  personagemController.buscarPorNome(req, res);
});

router.get("/listar", function (req, res) {
  personagemController.listar(req, res);
});

router.get("/listarComVotos", function (req, res) {
  personagemController.listarComVotos(req, res);
});



module.exports = router;
