'use strict';

module.exports = (config, app, db)=>{
    app.get('/evaluaciones',(req,res)=>{
        return db.tbl_evaluacion.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/evaluacion/:id", (req, res) => {
        return db.tbl_evaluacion.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva evaluacion:
    app.post("/evaluacion", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_evaluacion.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar evaluacion:
    app.put("/evaluacion/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_evaluacion.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_evaluacion.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar evaluacion:
    app.delete("/evaluacion/:id", (req, res) => {
        return db.tbl_evaluacion.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};