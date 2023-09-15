'use strict';

//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_escala_alopecia_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno único que identifica al item de la escala. Es un número secuencial entero.",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Título, nombre del item de la escala"
    },
    escala_alopecia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Cíodigo interno que identifica a la escala a la cual pertenece el item",
      references: {
        model: 'tbl_escala_alopecia',
        key: 'id'
      }
    },
    grado_alopecia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Cíodigo interno que identifica el grado de alopecia a la cual pertenece el item",
      references: {
        model: 'tbl_grado_alopecia',
        key: 'id'
      }
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
    tableName: 'tbl_escala_alopecia_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_escala_alopecia_items_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
