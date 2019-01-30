const Estudiante = require("./EstudianteSchema");
exports.getEstudiantes = (req, res) => {
  Estudiante.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getEstudiante = (req, res) => {
  let id = req.params.id;

  Estudiante.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(estudiante);
  });
};

exports.newEstudiante = (req, res) => {
  const newEstudiante = new Estudiante(req.body);
  newEstudiante.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newEstudiante);
  });
};

exports.updateEstudiante = (req, res) => {
  let nombre = req.body.nombre;
  Estudiante.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteEstudiante = (req, res) => {
  Estudiante.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
