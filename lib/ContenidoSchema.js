const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContenidoSchema = new Schema({

nombre:String,
unidad:String,
tema:String
  });

module.exports = mongoose.model("Contenido", ContenidoSchema);
