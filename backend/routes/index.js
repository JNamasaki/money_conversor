import express from 'express';
import conversor from './conversorRoutes.js';

const routes = (app) => {

    app.use(
        express.json(),
        conversor
    )
}

export default routes