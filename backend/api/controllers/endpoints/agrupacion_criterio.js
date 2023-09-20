'use strict';

module.exports = (config, app, db)=>{
    app.get('/agrupacion_criterios',(req,res)=>{
        return db.tbl_agrupacion_criterios.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/agrupacion_criterio/:id", (req, res) => {
        return db.tbl_agrupacion_criterios.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva agrupacion_criterio:
    app.post("/agrupacion_criterio", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_agrupacion_criterios.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar agrupacion_criterio:
    app.put("/agrupacion_criterio/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_agrupacion_criterios.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_agrupacion_criterios.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar agrupacion_criterio:
    app.delete("/agrupacion_criterio/:id", (req, res) => {
        return db.tbl_agrupacion_criterios.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};