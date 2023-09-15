'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_agrupacion_criterios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno único que identifica a cada tipo de dato del formulario. Es un número secuencial entero.",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Título del Tipo de Dato"
    },
    usuario_creacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código del usuaro que creó el registro"
    },
    dte_fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Fecha de creación del registro"
    },
    usuario_modificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código del usuario que modificó el registro"
    },
    dte_fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Fecha de modificación del registro"
    }
  }, {
    sequelize,
    tableName: 'tbl_agrupacion_criterios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_agrupacion_criterios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
