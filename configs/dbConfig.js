import mongoose from "mongoose"
import credencial_banco from "./credentials.js"

mongoose.connect(`mongodb+srv://${credencial_banco.user}:${credencial_banco.password}@cluster0.gj6x7ab.mongodb.net/test`)



let db = mongoose.connection;

export default db;