import exchange from "../configs/exchangeAPI"
import { Express } from "express"
import { exchange_apikey } from "../configs/credentials";

class ExchangeController{
    
    static coinsSymbols = async(req,res) =>{
        try{
            const url = exchange + '/symbols';

            const {data} = await exchange.get(exchange_apikey.apikey)
            
            res.send({
                Symbols: data.symbols
            })
        }catch(e){
            res.send({
                error: 'Algo deu errado! Erro:'+ e.code
            })
        }


    }
}