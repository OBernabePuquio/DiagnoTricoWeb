'use strict';

// DEPENDENCIAS
const fileLoader = require('../utils/fileScan');

module.exports = (config, app,db) => {
    fileLoader(__dirname).filter(file => {
        return (file.indexOf('.') !== 0 && file !== __filename && file.slice(-3) === '.js');
    }).forEach(file => {
        require(file)(config, app,db);
    });
};
