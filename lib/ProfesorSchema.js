const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({

  nombre:String,
  apellido:String,
  cedula: Number,
  colegio: String,
  curso:Number,
  materia:String
  });

module.exports = mongoose.model("Profesor", ProfesorSchema);
