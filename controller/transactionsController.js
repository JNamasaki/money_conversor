import TransactionModels from '../configs/conversorModel.js';

class TransactionsController {

    static historicalTransactions = (req, res) => {
        TransactionModels.find((err, TransactionModels) => {
            res.status(200).json(TransactionModels)
        })

    }

    static recordTransaction = (req, res) => {
        let record = new TransactionModels(req.body);

        record.save((err) => {
            if (err) {
                res.status(400).send({
                    message: `${err} - fail to record transaction.`
                })
            } else {
                res.status(201).send({
                    resultado: 'Transação salva com sucesso!',
                    transacao_gravada: record.toJSON()
                })
            }
        });


    }
}

export default TransactionsController