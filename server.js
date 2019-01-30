//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb://localhost:27017/mitiflotec",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

  //estudiantes
  var estudiante = require("./lib/Estudiante");

  app.get("/estudiantes", (req, res) => {
    estudiante.getEstudiantes(req, res);
  });

  app.get("/estudiantes/:id", (req, res) => {
    estudiante.getEstudiante(req, res);
  });

  app.post("/estudiantes", (req, res) => {
    estudiante.newEstudiante(req, res);
  });

  app.put("/estudiantes/:id", (req, res) => {
    estudiante.updateEstudiante(req, res);
  });

  app.delete("/estudiantes/:id", (req, res) => {
    estudiante.deleteEstudiante(req, res);
  });

 //profesores
 var profesor = require("./lib/Profesor");

 app.get("/profesores", (req, res) => {
   profesor.getProfesores(req, res);
 });

 app.get("/profesores/:id", (req, res) => {
   profesor.getProfesor(req, res);
 });

 app.post("/profesores", (req, res) => {
   profesor.newProfesor(req, res);
 });

 app.put("/profesores/:id", (req, res) => {
   profesor.updateProfesor(req, res);
 });

 app.delete("/profesores/:id", (req, res) => {
   profesor.deleteProfesor(req, res);
 });


 //Contenido
 var contenido = require("./lib/Contenido");

 app.get("/contenidos", (req, res) => {
   contenido.getContenidos(req, res);
 });

 app.get("/contenidos/:id", (req, res) => {
   contenido.getContenido(req, res);
 });

 app.post("/contenidos", (req, res) => {
   contenido.newContenido(req, res);
 });

 app.put("/contenidos/:id", (req, res) => {
   contenido.updateContenido(req, res);
 });

 app.delete("/contenidos/:id", (req, res) => {
   contenido.deleteContenido(req, res);
 });



// escuchamos
app.listen(3000);
console.log(`Run server on %s ${app.settings.env}`);
