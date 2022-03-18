const App = require('./App.js');
const UI = require('./UI.js');

const detectMetaMask = require('@metamask/detect-provider');
detectMetaMask()
    .then(provider => {
       if (provider && provider.isMetaMask) {
           const app = new App(provider);
           const ui = new UI(app);
           void app.start();
       } else {
           window.alert('Please install MetaMask and reload the page!');
       }
    })
    .catch(error => {
        console.log("Provider detection failed");
        console.error(error);
    });