var express = require("express");
var router = express.Router();

var bandoController = require("../controllers/bandoController");

router.post("/cadastrar", function (req, res) {
  bandoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  bandoController.listar(req, res);
});




module.exports = router;
