'use strict';

module.exports = (config, app, db)=>{
    app.get('/puntos_amarillos',(req,res)=>{
        return db.tbl_puntos_amarillos.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/punto_amarillo/:id", (req, res) => {
        return db.tbl_puntos_amarillos.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nuevo punto_amarillo:
    app.post("/punto_amarillo", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_puntos_amarillos.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar punto_amarillo:
    app.put("/punto_amarillo/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_puntos_amarillos.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_puntos_amarillos.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar punto_amarillo:
    app.delete("/punto_amarillo/:id", (req, res) => {
        return db.tbl_puntos_amarillos.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};