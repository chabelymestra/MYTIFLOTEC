const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({

nombre:String,
 apellidos:String,
  identificacion:Number,
  edad:Number,
  colegio:String,
  grado:Number,
  grupo:String
  });

module.exports = mongoose.model("Estudiante", EstudianteSchema);
