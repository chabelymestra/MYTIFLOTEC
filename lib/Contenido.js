const Contenido = require("./ContenidoSchema");
exports.getContenidos = (req, res) => {
  Contenido.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getContenido = (req, res) => {
  let id = req.params.id;

  Contenido.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(contenido);
  });
};

exports.newContenido = (req, res) => {
  const newContenido = new Contenido(req.body);
  newContenido.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newContenido);
  });
};

exports.updateContenido = (req, res) => {
  let nombre = req.body.nombre;
  Contenido.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteContenido = (req, res) => {
  Contenido.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
