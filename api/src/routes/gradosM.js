const { Router } = require("express");
const axios = require("axios");

const { Grados } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let grados = await Grados.findAll();
    res.status(200).send(grados);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  const { Nombre } = req.body;
  try {
    let grado = await Grados.create({
      Nombre,
    });
    res.status(201).send(grado);
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { Nombre } = req.body;
  try {
    let grado = await Grados.findByPk(id);
    if (grado) {
      grado.Nombre = Nombre;
      await grado.save();
      res.status(200).send(grado);
    } else {
      res.status(404).send({ error: "Grado no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let grado = await Grados.findByPk(id);
    if (grado) {
      await grado.destroy();
      res.status(200).send({ message: "Grado eliminado exitosamente" });
    } else {
      res.status(404).send({ error: "Grado no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
