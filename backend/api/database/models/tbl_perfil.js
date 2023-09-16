'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_perfil', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno único que identifica a cada perfil. Es un número secuencial entero.",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nombre del perfil"
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
    tableName: 'tbl_perfil',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_perfil_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
