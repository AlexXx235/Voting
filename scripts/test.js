module.exports = async function(callback) {
    const Web3 = require("web3")
    const provider = new Web3.providers.HttpProvider('http://localhost:7545')
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()

    const instance = await artifacts.require("Voting").new()
    const tx1 = await instance.participate({from: accounts[0]})
    console.log(tx1)
    try {
        const tx2 = await instance.getAllCandidates()
        console.log(tx2)
        console.log(tx2[0])
        console.log(tx2[0][0])
        console.log(tx2[0][1])
        console.log(tx2[0].addr)
        console.log(tx2[0].votes)
    } catch (err) {
        console.log(`Transaction failed. Reason: ${err.reason}`)
    }

    callback()
}