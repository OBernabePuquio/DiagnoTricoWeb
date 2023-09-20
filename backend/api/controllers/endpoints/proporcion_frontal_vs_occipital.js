'use strict';

module.exports = (config, app, db)=>{
    app.get('/proporcion_frontal_vs_occipital',(req,res)=>{
        return db.tbl_proporcion_frontal_vs_occipital.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/proporcion_frontal_vs_occipital/:id", (req, res) => {
        return db.tbl_proporcion_frontal_vs_occipital.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva proporcion_frontal_vs_occipital:
    app.post("/proporcion_frontal_vs_occipital", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_proporcion_frontal_vs_occipital.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar proporcion_frontal_vs_occipital:
    app.put("/proporcion_frontal_vs_occipital/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_proporcion_frontal_vs_occipital.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_proporcion_frontal_vs_occipital.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar proporcion_frontal_vs_occipital:
    app.delete("/proporcion_frontal_vs_occipital/:id", (req, res) => {
        return db.tbl_proporcion_frontal_vs_occipital.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};