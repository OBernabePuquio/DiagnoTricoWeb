'use strict';

module.exports = (config, app, db)=>{
    app.get('/perfiles',(req,res)=>{
        return db.tbl_perfil.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/perfil/:id", (req, res) => {
        return db.tbl_perfil.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nuevo perfil:
    app.post("/perfil", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_perfil.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar perfil:
    app.put("/perfil/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_perfil.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_perfil.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar perfil:
    app.delete("/perfil/:id", (req, res) => {
        return db.tbl_perfil.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};