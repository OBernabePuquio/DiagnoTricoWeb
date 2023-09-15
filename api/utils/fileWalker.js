'use strict';

const fs = require('fs');
const path = require('path');

// Función para obtener todos los ficheros de carpetas y subcarpetas    
function fileWalker(dir) {
    const results = [];
    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat && fileStat.isDirectory()) {
            // Recurse into a subdirectory
            results.push(...fileWalker(filePath));
        } else {
            // Is a file
            results.push(filePath);
        }
    });

    return results;
}

module.exports = fileWalker;
