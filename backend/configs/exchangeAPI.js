import axios from "axios";

const exchange = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data'
})

export default exchange;