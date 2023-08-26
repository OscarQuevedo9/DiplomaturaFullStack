var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req,res,next) {

    const novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', function(req,res,next) {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req,res,next) => {
    try{
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else{
            res.render('admin/agregar',{
                layout: 'admin/layout',
                error: true, message: "Todos los campos son requeridos"
            });
        }
    } catch(error){
        console.log(error);
        res.render('admin/agregar',{
            layout: admin/layout,
            error: true, message: "No se cargó la novedad"
        });
    }
});

router.get('/borrar/:id', async (req, res, next) => {
        var id = req.params.id;
        await novedadesModel.deleteNovedad(id);
        res.redirect('/admin/novedades');
    });

router.get('/editar/:id', async (req, res, next) => {
        let id = req.params.id;
        let novedad = await novedadesModel.getNovedadById(id);
        res.render('admin/editar', {
            layout: 'admin/layout',
            novedad
        });
    });

router.post('/editar', async(req,res,ext) =>{
    try{
        id = req.body.id;
        let obj={
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        await novedadesModel.editarNovedad(obj,id);
        res.redirect('/admin/novedades')
    }catch (error){
        console.log(error);
        res.render('admin/editar',{
            layout: 'admin/layout',
            error:true, message: "Error en la edición"
        });
    }
});




module.exports = router;