var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next){
    let novedades = await novedadesModel.getNovedades();

    res.json(novedades);
});

router.post('/contact', async (req, res) => {

    const mail = {
        to: 'maurogacion@gmail.com',
        subject: 'Contact Web',
        html: `${req.body.nombre} se contactó a través de la web y 
        quiere más información a este correo: ${req.body.email} <br>
        Su comentario: <br>
        ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        msg: 'Mensaje enviado'
    });

});

module.exports = router;