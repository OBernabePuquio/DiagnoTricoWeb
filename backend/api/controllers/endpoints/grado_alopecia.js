'use strict';

module.exports = (config, app, db)=>{
    app.get('/grados_alopecia',(req,res)=>{
        return db.tbl_grado_alopecia.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/grado_alopecia/:id", (req, res) => {
        return db.tbl_grado_alopecia.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva grado_alopecia:
    app.post("/grado_alopecia", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_grado_alopecia.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar grado_alopecia:
    app.put("/grado_alopecia/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_grado_alopecia.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_grado_alopecia.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar grado_alopecia:
    app.delete("/grado_alopecia/:id", (req, res) => {
        return db.tbl_grado_alopecia.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};