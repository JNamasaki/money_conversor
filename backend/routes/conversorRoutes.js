import express from "express";
import TransactionsController from './controller/transactionsController.js';


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