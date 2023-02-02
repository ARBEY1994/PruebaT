const { Router } = require("express");
const router = Router();
const {
  getIdDb,

  getDb,
} = require("../controller/funtions");
const { Estudiante, Grados } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let AllInfo = await getDb();

    if (name) {
      let infoDb = await getDb();

      let nameDb = infoDb.filter(
        (e) =>
          e.PrimerNombre.toLowerCase().includes(name.toLowerCase()) ||
          e.SegundoNombre.toLowerCase().includes(name.toLowerCase()) ||
          e.PrimerApellido.toLowerCase().includes(name.toLowerCase()) ||
          e.SegundoApellido.toLowerCase().includes(name.toLowerCase())
      );

      nameDb.length
        ? res.status(200).send(nameDb)
        : res.status(400).send("¡Estudiante no encontrado!");
    } else {
      res.status(200).send(AllInfo);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let infoId = await getIdDb(id);
    infoId
      ? res.status(200).send(infoId)
      : res.status(400).send("id no encontrado!");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const {
    PrimerNombre,
    SegundoNombre,
    PrimerApellido,
    SegundoApellido,
    FechaDeNacimiento,
    gradosM,
    Fotografia,
  } = req.body;
  try {
    let newStudent = await Estudiante.create({
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      FechaDeNacimiento,

      Fotografia,
    });

    let gradosMo = await Grados.findAll({
      where: { Nombre: gradosM },
    });
    newStudent.addGrados(gradosMo);
    res.status(200).send("¡estudiante registrado correctamente!");
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    PrimerNombre,
    SegundoNombre,
    PrimerApellido,
    SegundoApellido,
    FechaDeNacimiento,
    gradosM,
    Fotografia,
  } = req.body;
  try {
    let student = await Estudiante.findByPk(id);
    if (student) {
      student.PrimerNombre = PrimerNombre;
      student.SegundoNombre = SegundoNombre;
      student.PrimerApellido = PrimerApellido;
      student.SegundoApellido = SegundoApellido;
      student.FechaDeNacimiento = FechaDeNacimiento;
      student.Fotografia = Fotografia;
      await student.save();

      let gradosMo = await Grados.findAll({
        where: { Nombre: gradosM },
      });
      await student.setGrados(gradosMo);
      res.status(200).send("¡Estudiante actualizado correctamente!");
    } else {
      res.status(404).send("Estudiante no encontrado");
    }
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let student = await Estudiante.findByPk(id);
    if (student) {
      await student.destroy();
      res.status(200).send("Estudiante eliminado correctamente");
    } else {
      res.status(404).send("Estudiante no encontrado");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
