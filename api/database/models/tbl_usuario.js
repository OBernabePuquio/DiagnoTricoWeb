'use strict';

//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Id código interno que identifica al usuario. Es un número secuencial entero.",
      primaryKey: true
    },
    usuario: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Texto que identifica al usuario"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Contraseña"
    },
    perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno que identifica el perfil que tiene el usuario",
      references: {
        model: 'tbl_perfil',
        key: 'id'
      }
    },
    usuario_creacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Id que identifica al usuario que creó la cuenta"
    },
    dte_fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Fecha y hora de la creación del registro"
    },
    usuario_modificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Id que identifica al usuario que hizo la última modificación a la cuenta"
    },
    dte_fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Fecha y hora de la última modificación"
    }
  }, {
    sequelize,
    tableName: 'tbl_usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
