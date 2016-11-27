var Mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(Mongoose.connection);

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

atendimentoSchema.plugin(autoIncrement.plugin, {
    model: 'Atendimento',
    field: 'id_origen',
    startAt: 1,
    incrementBy: 1
});

var Atendimento = Mongoose.model('Atendimento', atendimentoSchema);


module.exports = Atendimento;