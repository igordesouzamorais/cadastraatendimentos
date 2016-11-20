var express = require('express');
var router = express.Router();
var Atendimento = require('../models/atendimento');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cadastro', function(req, res, next){
	res.render('cadastrar');
});

router.post('/cadastrar', function(req, res, next){

	var A = new Atendimento({
		id_origen: req.body.id_origen,
		cliente: req.body.cliente,
		endereco: req.body.endereco,
		numero: req.body.numero,
		bairro: req.body.bairro,
		cep: req.body.cep,
		cidade: req.body.cidade,
		uf: req.body.uf,
		observacao: req.body.observacao,
		data: new Date()
	});

	A.save(function(err) {
  		if (err) return console.error(err);
	});

	res.redirect('/cadastro');
});

router.get('/listar', function(req, res, next){
	Atendimento.find(function(err, valores) {
      if (err) return console.error(err);  
		res.render('lista', {atendimentos: valores});
    });
});

//retorna todos os atendimentos cadastrados em formato json
router.get('/json', function(req, res, next){
	Atendimento.find(function(err, valores) {
      if (err) return console.error(err);  
		res.json(valores);
    });
});

module.exports = router;
