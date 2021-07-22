import axios from 'axios';


//COINGECKO
// const baseURL = "https://coingecko.com/api/v3";


// const getCurrencies = () => {
//   return axios
//   .get(`${baseURL}/coins/list&ids=BTC,ETH,DOGE`)
// .then(response =>  response.data).then(result=>console.log(result))
// }


//NOMICS
// const baseURL = "https://api.nomics.com/v1";
// const keyAPI = "200b8026db2abd296f45150a2d5fe512232f7cec"

// const getCurrencies = () => {
//   return axios
//   .get(`${baseURL}/currencies/ticker?key=${keyAPI}&ids=BTC,ETH,DOGE&interval=1d,30d&convert=USD&per-page=100&page=1`)
// .then(response =>  response.data)
// }



//COIMARKETCAP
const baseURL = "https://pro-api.coinmarketcap.com/v1";
const keyAPI = "fe1f1105-3e85-4f52-8db0-f4de61e2756a"



const getCurrencies = () => {
    return axios
    .get(`${baseURL}/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${keyAPI}&symbol=BTC,ETH,DOGE&fiat=USD`)
  .then(response =>  console.log(response.data))
}


getCurrencies();


export default {
    getCurrencies 
}