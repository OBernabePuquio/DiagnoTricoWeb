'use strict';

const fileLoader = require('../utils/fileWalker');
const Sequelize = require('sequelize');

module.exports = (config) => {
    const Op = Sequelize.Op;
    const customOperators = {
        $eq: Op.eq, $ne: Op.ne, $gte: Op.gte, $gt: Op.gt, $lte: Op.lte,
        $lt: Op.lt, $not: Op.not, $in: Op.in, $notIn: Op.notIn, $is: Op.is,
        $like: Op.like, $notLike: Op.notLike, $iLike: Op.iLike,
        $notILike: Op.notILike, $regexp: Op.regexp, $notRegexp: Op.notRegexp,
        $iRegexp: Op.iRegexp, $notIRegexp: Op.notIRegexp, $between: Op.between,
        $notBetween: Op.notBetween, $overlap: Op.overlap, $contains: Op.contains,
        $contained: Op.contained, $adjacent: Op.adjacent, $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight, $noExtendRight: Op.noExtendRight, $noExtendLeft: Op.noExtendLeft,
        $and: Op.and, $or: Op.or, $any: Op.any, $all: Op.all, $values: Op.values, $col: Op.col,
        $substring: Op.substring
    };

    function initializeModels(options) {
        const db = {};
        const sequelizeInstance = new Sequelize(options);

        return sequelizeInstance.authenticate().then(() => {
            console.log('Conexión exitosa a la base de datos.');

            fileLoader(__dirname).filter(file => {
                return (file.indexOf('.') !== 0 && file !== __filename && file.slice(-3) === '.js');
            }).forEach(file => {
                const modelDefinition = require(file)(sequelizeInstance, Sequelize.DataTypes);
                db[modelDefinition.name] = modelDefinition;
            });

            Object.keys(db).forEach(modelName => {
                if (db[modelName].associate) {
                    db[modelName].associate(db);
                }
            });

            db.sequelize = sequelizeInstance;
            db.Sequelize = Sequelize;

            return db.sequelize.sync({ alter: false }).then(() => db);
        }).then((db) => {
            return db;
        }).catch(err => {
            console.log('Error: No se pudo conectar a la base de datos:', err);
            throw new Error(err);
        });
    }

    config.db.customOperators = customOperators;
    return initializeModels(config.db);
};