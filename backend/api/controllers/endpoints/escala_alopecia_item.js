'use strict';

module.exports = (config, app, db)=>{
    app.get('/escala_alopecia_items',(req,res)=>{
        return db.tbl_escala_alopecia_items.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/escala_alopecia_item/:id", (req, res) => {
        return db.tbl_escala_alopecia_items.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva escala_alopecia_item:
    app.post("/escala_alopecia_item", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_escala_alopecia_items.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar escala_alopecia_item:
    app.put("/escala_alopecia_item/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_escala_alopecia_items.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_escala_alopecia_items.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar escala_alopecia_item:
    app.delete("/escala_alopecia_item/:id", (req, res) => {
        return db.tbl_escala_alopecia_items.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};