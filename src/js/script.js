const TxRecordHandler = require('./TxRecordHandler.js');

const $ = sel => { return document.querySelector(sel); };

// Templates
const transactionLoadingTmp = $('#transaction-loading').content.firstElementChild;
const checkSignTmp = $('#check-sign').content.firstElementChild;
const transactionRecordTmp = $('#transaction-record').content.firstElementChild;

// Contract data
const contract = {
    address: '0x6095A97fA3545C9FbCc1A9170A0CD2bE5214Efad',
    json: require('../../build/contracts/Voting.json'),
}
const Voting = TruffleContract(contract.json);
let instance = null;

// Accounts data
let currentAccount = null;

detectEthereumProvider()
    .then(provider => {
        if (provider && provider.isMetaMask) {
            //provider.on('connect', handleConnect);
            //provider.on('disconnect', handleDisconnect);
            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            //provider.on('message', handleProviderMessage);
            $('#connect-btn').addEventListener('click', connect);

            Voting.setProvider(provider);

            startApp();
        } else {
            console.log('Please install MetaMask!');
        }
    })

async function startApp() {
    // Get the Voting contract instance
    instance =  await Voting.at(contract.address);
    instance.Vote().on('data', event => {
        console.log("Vote event");
        console.log(event);
    });
    instance.Join().on('data', event => {
        console.log("Join event");
        console.log(event);
    });
    $('#participate-btn').addEventListener('click', participate);

    // We do not need the account to call view functions, so
    // we can get the candidates list
    getCandidates();

    // Check for connection
    checkConnection();
}

// Provider connection

function checkConnection() {
    ethereum
        .request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch(console.error);

    getChain();
}

function connect() {
    ethereum
        .request({ method: 'eth_requestAccounts'})
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });

    getChain();
}

function getChain() {
    ethereum
        .request({ method: 'eth_chainId'})
        .then(handleChainChanged)
        .catch(console.error);
}

// Contract interactions

async function participate(e) {
    const txRecord = new TxRecordHandler(transactionRecordTmp.cloneNode(true));
    txRecord.setTitle(`${currentAccount} joined the voting!`);

    instance.participate({from: currentAccount})
        .once('transactionHash', hash => {
            txRecord.setHash(hash)
            txRecord.setPendingStatus(transactionLoadingTmp);

            // Add tx to tx list
            $('.transactions__list').prepend(txRecord.html);
        })
        .once('error', console.error)
        .then(receipt => {
            txRecord.setSuccessStatus(checkSignTmp);
            setParticipatingStatus();
            getCandidates();
        });
}

async function vote(e) {
    const address = e.currentTarget.closest('.candidate').dataset.address;

    const txRecord = new TxRecordHandler(transactionRecordTmp.cloneNode(true));
    txRecord.setTitle(`${currentAccount} voted for ${address}`);

    instance.vote(address, {from: currentAccount})
        .once('transactionHash', hash => {
            txRecord.setHash(hash)
            txRecord.setPendingStatus(transactionLoadingTmp);

            // Add tx to tx list
            $('.transactions__list').prepend(txRecord.html);
        })
        .once('error', console.error)
        .then(receipt => {
            txRecord.setSuccessStatus(checkSignTmp);
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

            candidateRow.querySelector('.candidate__address').innerText = `Адрес: ${candidate.addr}`;
            candidateRow.querySelector('.candidate__votes-count').innerText = `Голосов: ${candidate.votes}`;

            candidateRow.querySelector('button').addEventListener('click', vote);

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
            $('#participating-status').innerText = "Вы являетесь кандидатом";
            $('#participate-btn').disabled = true;
            // get votes count
        } else {
            $('#participating-status').innerText = "Вы не являетесь кандидатом";
            $('#participate-btn').disabled = false;
        }
    }
}

// Provider event handlers

function handleConnect() {
    console.log('connected');
}

function handleDisconnect() {
    console.log('disconnected');
}

function handleAccountsChanged(accounts) {
    console.log(accounts);

    if (accounts.length === 0) {
        $('#connection-status').innerText = "Вы не подключены к MetaMask";
        $('#account').innerText = '';
        $('#chain').innerText = '';
        $('#connect-btn').disabled = false;
        $('.participating').classList.add('visually-hidden');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];

        $('#connection-status').innerText = "Вы подключены к MetaMask";
        $('#account').innerText = `Адрес: ${currentAccount}`;
        $('#connect-btn').disabled = true;

        $('.participating').classList.remove('visually-hidden');
        setParticipatingStatus();
    }
}

function handleChainChanged(chainId) {
    console.log(chainId);

    if(currentAccount) {
        $('#chain').innerText = `ChainId: ${chainId}`;
    }
}

function handleProviderMessage(msg) {
    console.log(msg);
}
