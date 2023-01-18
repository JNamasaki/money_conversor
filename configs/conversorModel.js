import mongoose from "mongoose";


const TransactionSchema = new mongoose.Schema({
    id_usuario: { type: String },
    origin_coin: { type: String, required: true },
    origin_value: { type: Number, required: true },
    destination_coin: { type: String, required: true },
    destination_value: { type: Number, required: true },
    conversion_tax: { type: Number, required: true },
    data_time: { type: Date }
})
const TransactionModels = mongoose.model('transaction', TransactionSchema)
export default TransactionModels;