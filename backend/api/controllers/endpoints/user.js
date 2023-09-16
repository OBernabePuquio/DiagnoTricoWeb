'use strict';

module.exports = (config, app, db)=>{
    app.get('/users',(req,res)=>{
        return db.tbl_usuario.findAll().then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                console.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });

    app.get("/user/:id", (req, res) => {
        return db.tbl_usuario.findOne({ where: { id: req.params.id } }).then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            })
    });

    //nuevo usuario:
    app.post("/user", (req, res) => {
        req.body._create_at = Date.now();
        return db.tbl_usuario.create(req.body)
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //editar usuario:
    app.put("/user/:id", (req, res) => {
        req.body._modify_at = Date.now();
        return db.tbl_usuario.update(req.body, { where: { id: req.params.id } })
            .then(() => db.tbl_usuario.findOne({ where: { id: req.params.id } }))
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });
    //eliminar usuario:
    app.delete("/user/:id", (req, res) => {
        return db.tbl_usuario.destroy({ where: { id: req.params.id } })
            .then((result) => res.status(200).jsonp(result))
            .catch((err) => {
                log.error(err.name, { req: req, exception: err });
                return res.status(500).jsonp({ error: err.name, message: err.message });
            });
    });    

    //login:
    app.post("/auth", async (req, res) => {
        if (req.body.user_name === undefined || req.body.user_name === null || req.body.user_name.trim() === "") {
            return res.status(400).jsonp({ error: 'Falta ingresar Usuario', err_config: config.err });
        }

        if (req.body.password === undefined || req.body.password === null || req.body.password.trim() === "") {
            return res.status(400).jsonp({ error: 'Falta ingresar Contrase\u00F1a', err_config: config.err });
        }

        return db.tbl_usuario.findOne({
            where: {
                usuario: req.body.user_name,
                password: req.body.password
            }
        }).then(result => { 
            if (result) {
                return res.status(200).jsonp({acceso:'ok'});
            } else {
                return res.status(400).jsonp({ error: 'Login incorrecto', err_config: config.err });
            }
            
        })
        .catch((err) => {
            log.error(err.name, { req: req, exception: err });
            return res.status(500).jsonp({ error: err.name, message: err.message });
        });


    });
};