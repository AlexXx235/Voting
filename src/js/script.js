const $ = sel => document.querySelector(sel);

const App = require('./App.js');
const StatusUI = require('./UI/StatusUI/StatusUI.js');
const VotingUI = require('./UI/ContractUI/VotingUI.js');
const contractData = {
    abi: require('../../build/contracts/Voting.json').abi,
    address: '0xE7140F8CC3BDd4582FfdFc240F28A93cAC283ce1',
    chainId: '0x539' // Ganache
}

let provider;
let app;
let statusUI;
let votingUI;
let candidatesListObserver;

const detectMetaMask = require('@metamask/detect-provider');
detectMetaMask()
    .then(receivedProvider => {
        provider = receivedProvider;
       if (provider && provider.isMetaMask) {
           app = new App(provider, contractData);
           statusUI = new StatusUI(app);
           votingUI = new VotingUI(app);
           setEventHandlers();
           void app.start();
       } else {
           window.alert('Please install MetaMask and reload the page!');
       }
    })
    .catch(error => {
        console.log("App start failed");
        console.error(error);
    });

function setEventHandlers() {
    $('.accounts-requesting-row__btn').addEventListener('click', () => {
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
    });

    $('#join-btn').addEventListener('click', app.contract.participate.bind(app.contract));

    document.querySelectorAll('.candidate__vote-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const btn = event.currentTarget;
            const candidateElement = btn.closest('.candidate');
            const address = candidateElement.dataset.address;
            app.contract.vote(address);
        });
    });

    candidatesListObserver = new MutationObserver(records => {
        records.forEach(record => {
            record.addedNodes.forEach(candidate => {
                candidate.querySelector('.candidate__vote-btn').addEventListener('click', event => {
                    const item = event.currentTarget.closest('.candidate');
                    const address = item.dataset.address;
                    app.contract.vote(address);
                })
            });
        });
    });
    candidatesListObserver.observe($('.candidates-list__body'), {childList: true});
}
