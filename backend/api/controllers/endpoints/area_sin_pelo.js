'use strict';

module.exports = (config, app, db)=>{
    app.get('/areas_sin_pelo',(req,res)=>{
        return db.tbl_areas_sin_pelo.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/area_sin_pelo/:id", (req, res) => {
        return db.tbl_areas_sin_pelo.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva area_sin_pelo:
    app.post("/area_sin_pelo", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_areas_sin_pelo.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar area_sin_pelo:
    app.put("/area_sin_pelo/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_areas_sin_pelo.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_areas_sin_pelo.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar area_sin_pelo:
    app.delete("/area_sin_pelo/:id", (req, res) => {
        return db.tbl_areas_sin_pelo.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    


};