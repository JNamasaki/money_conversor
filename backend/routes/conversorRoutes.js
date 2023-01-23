import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';

import TransactionsController from './controller/transactionsController.js';

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = path.dirname(__filename);



var router = express.Router();

/* GET home page. */
router
    .get('/', (req, res) => {
        res.send({
            message: {
                retorno: 'Endpoint Iniciado'
            }
        });
    })
    .post('/conversor', TransactionsController.recordTransaction)
    .get('/historico', TransactionsController.historicalTransactions)

export default router;