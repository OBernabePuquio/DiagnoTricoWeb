'use strict';
const { Op } = require('sequelize');

module.exports = (config, app, db)=>{
    app.get('/evaluaciones',(req,res)=>{
        return db.tbl_evaluacion.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/evaluacion/:id", (req, res) => {
        return db.tbl_evaluacion.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nueva evaluacion:
    app.post("/evaluacion", (req, res) => {
        req.body.dte_fecha_creacion = Date.now();
        return db.tbl_evaluacion.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar evaluacion:
    app.put("/evaluacion/:id", (req, res) => {
        req.body.dte_fecha_modificacion = Date.now();
        return db.tbl_evaluacion.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_evaluacion.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar evaluacion:
    app.delete("/evaluacion/:id", (req, res) => {
        return db.tbl_evaluacion.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    

    //Buscar Evaluación:
    app.post("/evaluacion_buscar", async (req, res) => {
        const objWhere = {};
        if (req.body.codigoPaciente != undefined && req.body.codigoPaciente !== null && req.body.codigoPaciente.trim() !== "") {
            objWhere.codigo_paciente=req.body.codigoPaciente.trim();
        }       

        if (req.body.rangoFechas != undefined && req.body.rangoFechas !== null && req.body.rangoFechas.length > 1) {
            var startDate = new Date(req.body.rangoFechas[0]).setHours(0, 0, 0, 0);
            var endDate = new Date(req.body.rangoFechas[1]).setHours(23, 59, 59);
            objWhere.dte_fecha_creacion={
                [Op.between]: [startDate, endDate]
            }
        } 
        return db.tbl_evaluacion.findAll({
            where: objWhere
        }).then((result) => res.status(200).jsonp(result))
        .catch((err) => {
            log.error(err.name, { req: req, exception: err });
            return res.status(500).jsonp({ error: err.name, message: err.message });
        });
    });


};