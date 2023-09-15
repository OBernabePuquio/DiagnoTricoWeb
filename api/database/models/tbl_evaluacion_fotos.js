'use strict';

//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_evaluacion_fotos', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Código interno único que identifica al registro. Es un número secuencial entero.",
      primaryKey: true
    },
    evaluacion_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Código interno que identifica al Formulario de Evaluación de la Alopecia Androgénica",
      references: {
        model: 'tbl_evaluacion',
        key: 'id'
      }
    },
    str_ruta_foto: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ruta donde se encuentra la foto"
    },
    usuario_creacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código del usuario que creó el registro"
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
    tableName: 'tbl_evaluacion_fotos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_evaluacion_fotos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
