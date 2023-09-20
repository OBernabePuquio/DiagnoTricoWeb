'use strict';

module.exports = (config, app, db)=>{
    app.get('/grosor_pelo_comparacion',(req,res)=>{
        return db.tbl_grosor_pelo_comparacion.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/grosor_pelo_comparacion/:id", (req, res) => {
        return db.tbl_grosor_pelo_comparacion.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva grosor_pelo_comparacion:
    app.post("/grosor_pelo_comparacion", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_grosor_pelo_comparacion.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar grosor_pelo_comparacion:
    app.put("/grosor_pelo_comparacion/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_grosor_pelo_comparacion.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_grosor_pelo_comparacion.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar grosor_pelo_comparacion:
    app.delete("/grosor_pelo_comparacion/:id", (req, res) => {
        return db.tbl_grosor_pelo_comparacion.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};