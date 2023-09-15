'use strict';

//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_grosor_pelo_comparacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno que identifica al registro. Es un número secuencial entero.",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Descripción de la opción"
    },
    agrupacion_criterios_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica el tipo de dato",
      references: {
        model: 'tbl_agrupacion_criterios',
        key: 'id'
      }
    },
    peso_aga: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "Probabilidad de tener AGA"
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
    tableName: 'tbl_grosor_pelo_comparacion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_grosor_pelo_comparacion_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
