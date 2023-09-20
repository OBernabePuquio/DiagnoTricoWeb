'use strict';

module.exports = (config, app, db)=>{
    app.get('/decoloraciones_piel',(req,res)=>{
        return db.tbl_decoloracion_piel.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/decoloracion_piel/:id", (req, res) => {
        return db.tbl_decoloracion_piel.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva decoloracion_piel:
    app.post("/decoloracion_piel", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_decoloracion_piel.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar decoloracion_piel:
    app.put("/decoloracion_piel/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_decoloracion_piel.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_decoloracion_piel.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar decoloracion_piel:
    app.delete("/decoloracion_piel/:id", (req, res) => {
        return db.tbl_decoloracion_piel.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};