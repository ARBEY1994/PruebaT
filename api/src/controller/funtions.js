const axios = require("axios");

const { Estudiante, Grados } = require("../db");

const getDb = async () => {
  try {
    return await Estudiante.findAll({
      include: {
        model: Grados,
        attributes: ["Nombre"],
        through: { attributes: [] },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getIdDb = async (id) => {
  try {
    return await Estudiante.findByPk(id, {
      include: [
        {
          model: Grados,
          attributes: ["Nombre"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDb,
  getIdDb,
};
