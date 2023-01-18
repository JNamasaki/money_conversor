import express from 'express';
import conversor from './conversorRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Endpoint Iniciado');
    })

    app.use(
        express.json(),
        conversor
    )
}

export default routes