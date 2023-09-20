'use strict';

module.exports = (config, app, db)=>{
    app.get('/existencia_pelos_vellosos_miniaturizados',(req,res)=>{
        return db.tbl_existencia_pelos_vellosos_miniaturizados.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/existencia_pelos_vellosos_miniaturizado/:id", (req, res) => {
        return db.tbl_existencia_pelos_vellosos_miniaturizados.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva existencia_pelos_vellosos_miniaturizado:
    app.post("/existencia_pelos_vellosos_miniaturizado", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_existencia_pelos_vellosos_miniaturizados.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar existencia_pelos_vellosos_miniaturizado:
    app.put("/existencia_pelos_vellosos_miniaturizado/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_existencia_pelos_vellosos_miniaturizados.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_existencia_pelos_vellosos_miniaturizados.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar existencia_pelos_vellosos_miniaturizado:
    app.delete("/existencia_pelos_vellosos_miniaturizado/:id", (req, res) => {
        return db.tbl_existencia_pelos_vellosos_miniaturizados.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};