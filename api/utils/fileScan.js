'use strict';

const fs = require('fs');
const path = require('path');

// Función para obtener todos los ficheros de carpetas y subcarpetas    
function fileScan(dir) {
    const results = [];
    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat && fileStat.isDirectory()) {
            // si es un directorio se revisa su contenido
            results.push(...fileScan(filePath));
        } else {
            // si es un archivo
            results.push(filePath);
        }
    });

    return results;
}

module.exports = fileScan;
