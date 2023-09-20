'use strict';

module.exports = (config, app, db)=>{
    app.get('/escalas_alopecia',(req,res)=>{
        return db.tbl_escala_alopecia.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/escala_alopecia/:id", (req, res) => {
        return db.tbl_escala_alopecia.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva escala_alopecia:
    app.post("/escala_alopecia", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_escala_alopecia.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar escala_alopecia:
    app.put("/escala_alopecia/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_escala_alopecia.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_escala_alopecia.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar escala_alopecia:
    app.delete("/escala_alopecia/:id", (req, res) => {
        return db.tbl_escala_alopecia.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};