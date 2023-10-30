'use strict';
const multer = require('multer');
//const upload = multer({ dest: 'fotos/' });

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'fotos')
    },
    filename: function (req, file, cb) {
        // console.log("file_22");
        // console.log(file);   
        cb(null, Date.now() + '-' + file.originalname)
    }
})

 var upload = multer({ storage: storage })


module.exports = (config, app, db)=>{
    app.get('/evaluacion_fotos',(req,res)=>{
        return db.tbl_evaluacion_fotos.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/evaluacion_foto/:id", (req, res) => {
        return db.tbl_evaluacion_fotos.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    app.get("/evaluacion_foto_x_evaluacion/:id", (req, res) => {
        return db.tbl_evaluacion_fotos.findAll({ where: { evaluacion_id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva evaluacion_foto:
    app.post("/evaluacion_foto", upload.single('image'), (req, res) => {
        if (!req.file) {
            return res.status(500).jsonp({message:'No se proporcionó una imagen válida'});
          }

          req.body.dte_fecha_creacion = Date.now();
          req.body.evaluacion_id = +req.body.evaluacionId;
          req.body.str_ruta_foto = req.file.originalname + "***" + req.file.filename + "***" + req.body.evaluacionId;        
          
        return db.tbl_evaluacion_fotos.create(req.body)
            .then((result1) => {
                var result1_actualizado =  result1.dataValues;
                result1_actualizado.str_ruta_foto = result1_actualizado.str_ruta_foto + "_" + result1_actualizado.id;              
                return db.tbl_evaluacion_fotos.update(result1_actualizado, { where: { id: result1_actualizado.id } })
                      .then(() => db.tbl_evaluacion_fotos.findOne({ where: { id: result1_actualizado.id  } }))
            })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    //editar evaluacion_foto:
    app.put("/evaluacion_foto/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_evaluacion_fotos.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_evaluacion_fotos.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar evaluacion_foto:
    app.delete("/evaluacion_foto/:id", (req, res) => {
        return db.tbl_evaluacion_fotos.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};