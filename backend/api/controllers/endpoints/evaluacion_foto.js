'use strict';

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

    //nueva evaluacion_foto:
    app.post("/evaluacion_foto", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_evaluacion_fotos.create(req.body)
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