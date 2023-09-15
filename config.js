'use strict' 

require('dotenv').config();

const config = {
    host: process.env.HOST,
    port: process.env.PORT || 3000,
    https: process.env.HTTPS === 'true',
    certificado: {
        path: process.env.CERTIFICATE_PATH,
        pass: process.env.CERTIFICATE_SECRET
    },
    db: {
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_SERVER,
        dialect: process.env.DB_DIALECT,
        schema: process.env.DB_SCHEMA,
        logging: function (str) {
            //se descomenta y se ven todas las sentencias sql que se utilizan:
            //console.debug("DATABASE: ", str);
        }        
    }
};

module.exports = config;

