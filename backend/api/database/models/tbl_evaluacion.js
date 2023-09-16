'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_evaluacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Código interno único que identifica al registro. Es un número secuencial entero.",
      primaryKey: true
    },
    codigo_paciente: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Código Imterno que identifica al Paciente"
    },
    sexo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica el sexo del paciente",
      references: {
        model: 'tbl_sexo',
        key: 'id'
      }
    },
    escala_alopecia_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica el item de la escala que mide la alopecia",
      references: {
        model: 'tbl_escala_alopecia_items',
        key: 'id'
      }
    },
    areas_sin_pelo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica el tipo de area sin pelo",
      references: {
        model: 'tbl_areas_sin_pelo',
        key: 'id'
      }
    },
    puntos_amarillos_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica el número de puntos amarrillos",
      references: {
        model: 'tbl_puntos_amarillos',
        key: 'id'
      }
    },
    grosor_pelo_comparacion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica las opciones a seleccionar: de si considera que el menor grosor promedio el pelo en el área Frontal en comparación al Occipital",
      references: {
        model: 'tbl_grosor_pelo_comparacion',
        key: 'id'
      }
    },
    pelo_finos_frontal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica la opción seleecionada de la pregunta: ¿Más de 10% de pelos finos en la foto del área frontal?",
      references: {
        model: 'tbl_pelo_finos_frontal',
        key: 'id'
      }
    },
    proporcion_frontal_vs_occipital_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica la opción seleccionada de la pregunta: Proporción frontal versus occpipital aumentada de Ostium con un solo cabello.",
      references: {
        model: 'tbl_proporcion_frontal_vs_occipital',
        key: 'id'
      }
    },
    existencia_pelos_vellosos_miniaturizados_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica la opción seleccionada de la pregunta: Existencia de Pelos Vellosos o Miniaturiazdos",
      references: {
        model: 'tbl_existencia_pelos_vellosos_miniaturizados',
        key: 'id'
      }
    },
    decoloracion_piel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Código interno que identifica la opción seleccionada de la pregunta: Decoloración en la Piel alrededor de los pelos en el cuero cabelludo",
      references: {
        model: 'tbl_decoloracion_piel',
        key: 'id'
      }
    },
    probabilidad_aga: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "Probabilidad de que el paciente tenga AGA según todas las respuestas"
    },
    comentario_evaluacion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Texto donde el médico escribe alguna observación o comentario del examen"
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
    tableName: 'tbl_evaluacion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_evaluacion_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
