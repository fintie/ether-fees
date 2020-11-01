import Web3 from "web3";
// import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
var express = require('express');
const app = express();


// const providerOptions = {
//   walletconnect: {
//     display: {
//       logo: "data:image/gif;base64,INSERT_BASE64_STRING",
//       name: "Mobile",
//       description: "Scan qrcode with your mobile wallet"
//     },
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
//     }
//   }
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });


const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // Required
});
//  Enable session (triggers QR Code modal)
// await provider.enable();
//  Create Web3
const web3 = new Web3(provider);
const myFunction = async() => {
  const accounts = await web3.eth.getAccounts();
  return accounts
};

(async () => {
  const value = await myFunction()
  console.log(value);
})()
// accounts.then(function(accountsData){
//   console.log(accountsData);
// });

// var api = require('etherscan-api').init('A4IBKW3HZY7VEWZHFEFBUIKPHQ4NZH7SYN');
// var balance = api.account.balance('0xa28E48De48A2c4E9991dd732c8A557A3D7f264F9');
// balance.then(function(balanceData){
//   console.log(balanceData);
// });

// var transactionCount = api.proxy.eth_getTransactionCount('0xa28E48De48A2c4E9991dd732c8A557A3D7f264F9', 'latest');
// transactionCount.then(function(transactionCountData){
//   console.log(transactionCountData);
// });



// var transaction = api.transaction.getstatus('0xfbabe9aa7888de08f22d9e0e218ba779bf9510256f91793858f3aa34999ddd51');
// transaction.then(function(transactionData){
//   console.log(transactionData);
// });

// var transaction = api.account.txlist('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae', 1, 'latest', 1, 100, 'asc');
// var totalGas = 0;
// var transactionAmount = 0;
// transaction.then(function(transactionData){
//   // console.log(transactionData.result[0]);
//   for (i = 0; i < transactionData.result.length; i++) { 
//     // console.log(transactionData.result[i].gas);
//     totalGas += Number(transactionData.result[i].gas);
//   }
//   transactionAmount = transactionData.result.length
//   console.log(transactionAmount);
//   console.log(totalGas);
// });

// var gasprice = api.proxy.eth_gasPrice();
// gasprice.then(function(gaspriceData){
//   console.log(gaspriceData);
// });

// app.set('view engine', 'pug')
// app.get('/', function(req, res){
//     // res.sendFile(path.join(__dirname + '/index.html'));
//     res.render('index', { title: 'Hey', message: accounts, totalGas: totalGas, transactionAmount: transactionAmount})
// });

// app.listen(8080);