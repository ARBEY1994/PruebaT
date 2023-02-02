const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "estudiante",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      PrimerNombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      SegundoNombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      PrimerApellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SegundoApellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FechaDeNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      Fotografia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
