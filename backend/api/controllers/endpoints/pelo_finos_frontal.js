'use strict';

module.exports = (config, app, db)=>{
    app.get('/pelo_finos_frontal',(req,res)=>{
        return db.tbl_pelo_finos_frontal.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/pelo_finos_frontal/:id", (req, res) => {
        return db.tbl_pelo_finos_frontal.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva pelo_finos_frontal:
    app.post("/pelo_finos_frontal", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_pelo_finos_frontal.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar pelo_finos_frontal:
    app.put("/pelo_finos_frontal/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_pelo_finos_frontal.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_pelo_finos_frontal.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar pelo_finos_frontal:
    app.delete("/pelo_finos_frontal/:id", (req, res) => {
        return db.tbl_pelo_finos_frontal.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};