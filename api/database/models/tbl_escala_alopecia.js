'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_escala_alopecia', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Código interno único que identifica a la escala. Es un número secuencial entero.",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Título o nombre de la escala"
    },
    sexo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Cíodigo interno que identifica el sexo del paciente",
      references: {
        model: 'tbl_sexo',
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
    tableName: 'tbl_escala_alopecia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_escala_alopecia_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
