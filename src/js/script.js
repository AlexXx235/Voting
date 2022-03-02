// Faced errors
// 4001 (EIP-1193) - User denied the transaction (clicked deny in popup or closed it)
// -32603 (JSON-RPC) - Internal JSON-RPC error (mostly possible gas estimation failed)
// how to get the reason from require???
// -32000 - -32099 Reserved for implementation-defined errors
// here I can find the reason
const networks = {
    '0x1': 'Ethereum MainNet',
    '0x3': 'Ropsten TestNet',
    '0x4': 'Rinkeby TestNet',
    '0x5': 'Goerli TestNet',
    '0x539': 'Ganache'
}

const TxRecordHandler = require('./TxRecordHandler.js');

const $ = sel => { return document.querySelector(sel); };

// Templates
const transactionLoadingTmp = $('#transaction-loading').content.firstElementChild;
const checkSignTmp = $('#check-sign').content.firstElementChild;
const transactionRecordTmp = $('#transaction-record').content.firstElementChild;
const errorRecordTmp = $('#error-tmp').content.firstElementChild;
const redCrossTmp = $('#red-cross-tmp').content.firstElementChild;
const eventTmp = $('#event-tmp').content.firstElementChild;
const accountRecordTmp = $('#account-record-tmp').content.firstElementChild;

// Contract data
const contract = {
    address: '0x69ABab51e6f9910a35F9203466220c122b698dcF',
    json: require('../../build/contracts/Voting.json'),
}
const Voting = TruffleContract(contract.json);
let instance = null;

// Accounts data
let currentAccount = null;

let provider;
detectEthereumProvider()
    .then(result => {
        provider = result;
        if (provider && provider.isMetaMask) {
            //provider.on('connect', handleConnect);
            //provider.on('disconnect', handleDisconnect);
            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            //provider.on('message', handleProviderMessage);
            Voting.setProvider(provider);

            void onMetaMaskDetected();
            void startApp();
        } else {
            console.log('Please install MetaMask!');
        }
    });

async function startApp() {
    // Check for network connection
    checkNetworkConnection();

    // Get the Voting contract instance
    instance = await Voting.at(contract.address);

    instance.Vote().on('data', showEvent);
    instance.Join().on('data', showEvent);

    $('#participate-btn').addEventListener('click', participate);

    // We do not need the account to call view functions, so
    // we can get the candidates list
    getCandidates();

    // Check for connection
    checkAccountsAccess();
}

// Provider connection

async function checkNetworkConnection() {
    const chainId = await getChainId();
    handleChainChanged(chainId);
}

function checkAccountsAccess() {
    ethereum
        .request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch(console.error);

    updateNetworkInfo();
}

function connect() {
    ethereum
        .request({ method: 'eth_requestAccounts'})
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });

    updateNetworkInfo();
}

function getChainId() {
    return ethereum.request({ method: 'eth_chainId'});
}

function setNetworkInfo(chainId) {
    handleChainChanged(chainId);
}

function updateNetworkInfo() {
    getChainId()
        .then(handleChainChanged)
        .catch(console.error);
}

// Contract interactions

function participate(e) {
    const txRecord = new TxRecordHandler(transactionRecordTmp.cloneNode(true));
    txRecord.setTitle(`${currentAccount} joined the voting!`);

    instance.participate({from: currentAccount})
        .once('transactionHash', hash => {
            txRecord.setHash(hash);
            txRecord.setPendingStatus(transactionLoadingTmp);

            // Add tx to tx list
            $('#transactions-list').prepend(txRecord.html);
        })
        .then(receipt => {
            txRecord.setSuccessStatus(checkSignTmp);
            setParticipatingStatus();
            getCandidates();
        })
        .catch(error => {
            console.log('here');
            txRecord.setFailedStatus(redCrossTmp);
            handleError(error);
        });
}

function vote(e) {
    const address = e.currentTarget.closest('.candidate').dataset.address;
    if (address.toLowerCase() === currentAccount.toLowerCase()) {
        showError("You can not vote for yourself");
        return;
    }

    const txRecord = new TxRecordHandler(transactionRecordTmp.cloneNode(true));
    txRecord.setTitle(`${currentAccount} voted for ${address}`);

    instance.vote(address, {from: currentAccount})
        .once('transactionHash', hash => {
            txRecord.setHash(hash)
            txRecord.setPendingStatus(transactionLoadingTmp);

            // Add tx to tx list
            $('#transactions-list').prepend(txRecord.html);
        })
        .catch(error => {
            handleError(error);
            txRecord.setFailedStatus(redCrossTmp);
        })
        .then(receipt => {
            txRecord.setSuccessStatus(checkSignTmp);
            setVotedStatus();
            getCandidates();
        });
}

async function getCandidates() {
    const candidates = await instance.getAllCandidates();
    const candidatesList = $('.candidates-list');
    candidatesList.innerHTML = '';
    if (candidates.length > 0) {
        for (const candidate of candidates) {
            const candidateRow = $('#candidate-template').content.firstElementChild.cloneNode(true);

            candidateRow.dataset.address = candidate.addr;

            candidateRow.querySelector('.candidate__address').innerText = `Address: ${candidate.addr}`;
            candidateRow.querySelector('.candidate__votes-count').innerText = `Votes: ${candidate.votes}`;

            if (candidate.addr.toLowerCase() === currentAccount.toLowerCase()) {
                candidateRow.querySelector('button').remove();
            } else {
                candidateRow.querySelector('button').addEventListener('click', vote);
            }

            candidatesList.appendChild(candidateRow);
        }
    } else {
        console.log('No candidates');
    }
}

async function setParticipatingStatus() {
    if (instance && currentAccount) {
        const isCandidate = await instance.isCandidate(currentAccount);
        if (isCandidate) {
            $('#participating-status').innerText = "You are a candidate";
            $('#participate-btn').disabled = true;
            // get votes count
        } else {
            $('#participating-status').innerText = "You are not a candidate";
            $('#participate-btn').disabled = false;
        }
    }
}

async function setVotedStatus() {
    const isVoted = await instance.voted(currentAccount, { from: currentAccount });
    const statusEl = $('#voted');
    if (isVoted) {
        statusEl.innerText = 'You have already voted';

        // disable voting buttons
        document.querySelectorAll('.candidate__vote-btn').forEach(btn => {
            btn.disabled = true;
        });
    } else {
        statusEl.innerText = 'You have not voted yet';
    }
}

function handleError(error) {
    // User denied the tx
    if (error.code === 4001) {
        // ну ок че
        console.log('User denied the transaction');
    }
    // Internal error (possible 'require()' failed)
    else if (error.code === -32603) {
        const reason = getErrorReason(error);
        if (reason) {
            showError(reason);
        } else showError('Unknown internal fail');
    } else {
        console.error(error);
        showError('Something went wrong');
    }
}

function getErrorReason(error) {
    const data = error.data.data;

    if(data) {
        const someHex = Object.keys(data)[0];
        if(someHex) {
            return data[someHex].reason;
        }
    }

    return null;
}

// Provider event handlers

function handleConnect() {
    console.log('connected');
}

function handleDisconnect() {
    console.log('disconnected');
}

function handleAccountsChanged(accounts) {
    $('.accounts-table').innerHTML = '';
    if (accounts.length === 0) {
        setBulbColor('accounts', 'red');
        $('.requesting__row').classList.remove('visually-hidden');
        // Place 'enable accounts' btn
    } else if (accounts[0] !== currentAccount) {
        $('.requesting__row').classList.add('visually-hidden');
        setBulbColor('accounts', 'green');
        currentAccount = accounts[0];

        accounts.forEach(async address => {
            const accountRecord = accountRecordTmp.cloneNode(true);
            const addressElement = accountRecord.querySelector('.accounts-table__address');
            const balanceElement = accountRecord.querySelector('.accounts-table__balance');
            addressElement.firstElementChild.innerText = address;
            balanceElement.firstElementChild.innerText = await provider.request({
                method: 'eth_getBalance',
                params: [address]
            });
            if (currentAccount.toLowerCase() === address.toLowerCase()) {
                addressElement.classList.add('bold');
                balanceElement.classList.add('bold');
                $('.accounts-table').prepend(accountRecord);
            } else {
                $('.accounts-table').appendChild(accountRecord);
            }
        });
    }
}

function handleChainChanged(chainId) {
    const name = networks[chainId];
    $('#network').innerText = name ? `Selected network: ${name}` : '';
    $('#chain').innerText = `ChainID: ${chainId}`;

    if (provider.isConnected()) {
        setBulbColor('network', 'green');
        $('#rpc-connection').innerText = "JSON-RPC connection is established";
        // Enable all other actions
    } else {
        setBulbColor('network', 'red');
        $('#rpc-connection').innerText = 'No JSON-RPC connection';
        // Block all other actions
    }
}

function handleProviderMessage(msg) {
    console.log('Provider message');
    console.log(msg);
}

// Additional functions

function showError(errorText) {
    const errorRecord = errorRecordTmp.cloneNode(true);

    errorRecord.querySelector('.error__msg').innerText = errorText;
    $('.errors').prepend(errorRecord);
}

function showEvent(event) {
    const eventRecord = eventTmp.cloneNode(true);
    let args = '';

    eventRecord.querySelector('.event__name').innerText = event.event;
    Object.entries(event.args).forEach(entry => {
        args += entry[0] + ': ' + entry[1] + '\n';
    })
    eventRecord.querySelector('.event__data').innerText = args;

    $('#events-list').prepend(eventRecord);
}

async function onMetaMaskDetected() {
    setBulbColor('provider', 'green');
    $('#metamask-availability').innerText = "MetaMask is installed";
    const version = await provider.request({ method: 'web3_clientVersion' });
    const versionSlice = version.slice(version.indexOf('/v') + 2) || 'unknown';
    $('#metamask-version').innerText = 'Version: ' + versionSlice;
}

function setBulbColor(name, color) {
    const bulb = $(`#${name}-lightbulb`);
    bulb.style.backgroundColor = color;
}