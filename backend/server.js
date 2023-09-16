//Dependencias: 
const express = require('express');
const http = require('http');
const app = express();
const https = require('https');
const fs = require('fs'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Obtener configuracion
const config = require('./config'); 

const dbmodels = require("./api/database")(config);
dbmodels.then((db) => {

        //Middleware:
        //--------------
        app.use(express.json({limit:'50mb'})); //req.body
        app.use(express.urlencoded({extended:false})); 
        app.use(cookieParser()); //req.cookies 
        // cors: 
                // Configura el middleware de CORS
                app.use(cors());
                // Manejador para solicitudes OPTIONS
                app.options('*', cors());

        //controladores:
        var router = express.Router();
        require('./api/controllers')(config, router,db);
        app.use('/api/v1/',router);

        //gestion error:
        app.use(function(err, req, res, next) {
            return res.status(err.statusCode || 500).jsonp({ error: err.name, message: err.message });
        });
        app.use(function(req, res, next) {
            res.status(404).jsonp({ error: 'NotFound', message: `Cannot found ${req.method} ${req.url}` });
        });


        //Servidor:
        const onStart = ()=>{console.log(`Servidor listo en: ${config.https ? 'https':'http'}://${config.host}:${config.port}`)};
        if (config.https === true) {
            //usar https:
            var certificado = {
                pfx:fs.readFileSync(config.certificado.path),
                passphrase:config.certificado.pass
            }
            https.createServer(certificado,app).listen(config.port,config.host,onStart);
        } else {
            http.createServer(app).listen(config.port,config.host,onStart);
        }

}); 





