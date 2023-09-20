'use strict';

module.exports = (config, app, db)=>{
    app.get('/sexos',(req,res)=>{
        return db.tbl_sexo.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/sexo/:id", (req, res) => {
        return db.tbl_sexo.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nuevo sexo:
    app.post("/sexo", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_sexo.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar sexo:
    app.put("/sexo/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_sexo.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_sexo.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar sexo:
    app.delete("/sexo/:id", (req, res) => {
        return db.tbl_sexo.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};