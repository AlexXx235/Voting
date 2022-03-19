const App = require('./App.js');
const UI = require('./UI.js');

let provider;
let app;
let ui;

const detectMetaMask = require('@metamask/detect-provider');
detectMetaMask()
    .then(receivedProvider => {
        provider = receivedProvider;
       if (provider && provider.isMetaMask) {
           app = new App(provider);
           ui = new UI(app);
           void app.start();
       } else {
           window.alert('Please install MetaMask and reload the page!');
       }
    })
    .catch(error => {
        console.log("App start failed");
        console.error(error);
    });

document.querySelector('.accounts-requesting-row__btn').addEventListener('click', () => {
    provider
        .request({ method: 'eth_requestAccounts'})
        .then(app.state.onAccountsChanged.bind(app.state))
        .catch((err) => {
            if (err.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
})