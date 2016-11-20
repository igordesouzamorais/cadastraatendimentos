var Mongoose = require('mongoose');

var atendimentoSchema = new Mongoose.Schema({
  cliente: String,
  id_origen: Number,
  endereco: String,
  numero: String,
  bairro: String,
  cep: String,
  cidade: String,
  uf: String,
  observacao: String,
  data: Date
});

var Atendimento = Mongoose.model('Atendimento', atendimentoSchema);

module.exports = Atendimento;