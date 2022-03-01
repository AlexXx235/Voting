(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "Voting",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "Join",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "Vote",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "participate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidateAddress",
          "type": "address"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllCandidates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "votes",
              "type": "uint256"
            }
          ],
          "internalType": "struct Voting.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isCandidate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "findCandidate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"candidate\",\"type\":\"address\"}],\"name\":\"Join\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"voter\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"candidate\",\"type\":\"address\"}],\"name\":\"Vote\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"findCandidate\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllCandidates\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"}],\"internalType\":\"struct Voting.Candidate[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isCandidate\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"participate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"vote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"voted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"findCandidate(address)\":{\"params\":{\"addr\":\"Checking address\"},\"returns\":{\"_0\":\"True if found else false\",\"_1\":\"Index of the candidate or array length if not found\"}},\"getAllCandidates()\":{\"returns\":{\"_0\":\"List of all candidates\"}},\"isCandidate(address)\":{\"params\":{\"addr\":\"Checking address\"},\"returns\":{\"_0\":\"True if the address is a candidate else false\"}},\"vote(address)\":{\"params\":{\"candidateAddress\":\"Address of your candidate\"}}},\"title\":\"Simple voting contract\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"findCandidate(address)\":{\"notice\":\"Look for a candidate with given address\"},\"getAllCandidates()\":{\"notice\":\"Getter for a candidate list\"},\"isCandidate(address)\":{\"notice\":\"Check if the address is already a candidate\"},\"participate()\":{\"notice\":\"Join the voting as a candidate\"},\"vote(address)\":{\"notice\":\"Vote for some candidate\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Voting.sol\":\"Voting\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Voting.sol\":{\"keccak256\":\"0x4644e685fbff3a6770ed45b9bfd249c40f93e7ee4dd75ce5b5a64b34d634d970\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://068a8d9a899341354d53da582f93b540bdc01d36bb219b15911f24e6d1753ad6\",\"dweb:/ipfs/QmaFxYS8DF6mi47HKhudLxBjTYCJU9mPPHFGou7s5TdbVf\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610da8806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063aec2ccae1161005b578063aec2ccae146100ed578063d11711a21461011d578063d51b9e9314610127578063dbf7be47146101575761007d565b80632e6997fe146100825780633477ee2e146100a05780636dd7d8ea146100d1575b600080fd5b61008a610188565b60405161009791906108cb565b60405180910390f35b6100ba60048036038101906100b5919061091e565b610247565b6040516100c8929190610969565b60405180910390f35b6100eb60048036038101906100e691906109be565b61029b565b005b610107600480360381019061010291906109be565b6104d7565b6040516101149190610a06565b60405180910390f35b6101256104f7565b005b610141600480360381019061013c91906109be565b610623565b60405161014e9190610a06565b60405180910390f35b610171600480360381019061016c91906109be565b6106d7565b60405161017f929190610a21565b60405180910390f35b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561023e57838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050815260200190600101906101ac565b50505050905090565b6000818154811061025757600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561030a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030190610aa7565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038e90610b13565b60405180910390fd5b6000806103a3836106d7565b91509150816103e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103de90610ba5565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000828154811061045457610453610bc5565b5b9060005260206000209060020201600101546104709190610c23565b6000828154811061048457610483610bc5565b5b9060005260206000209060020201600101819055507fa54b4b55bf59d86099f37de5d683b7e560a961171658f51a65b6de1d0d31ccd633846040516104ca929190610c79565b60405180910390a1505050565b60016020528060005260406000206000915054906101000a900460ff1681565b61050033610623565b15610540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053790610cee565b60405180910390fd5b600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550507f0764c80c4165f118547b301a0b4b91eac21bd2f2d9b61d0ac723ff0aab27bb79336040516106199190610d0e565b60405180910390a1565b600080600090505b6000805490508110156106cc578273ffffffffffffffffffffffffffffffffffffffff166000828154811061066357610662610bc5565b5b906000526020600020906002020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106bb5760019150506106d2565b806106c590610d29565b905061062b565b50600090505b919050565b60008060005b600080549050811015610781578373ffffffffffffffffffffffffffffffffffffffff166000828154811061071557610714610bc5565b5b906000526020600020906002020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561077057600181925092505061078e565b8061077a90610d29565b90506106dd565b5060008080549050915091505b915091565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ea826107bf565b9050919050565b6107fa816107df565b82525050565b6000819050919050565b61081381610800565b82525050565b60408201600082015161082f60008501826107f1565b506020820151610842602085018261080a565b50505050565b60006108548383610819565b60408301905092915050565b6000602082019050919050565b600061087882610793565b610882818561079e565b935061088d836107af565b8060005b838110156108be5781516108a58882610848565b97506108b083610860565b925050600181019050610891565b5085935050505092915050565b600060208201905081810360008301526108e5818461086d565b905092915050565b600080fd5b6108fb81610800565b811461090657600080fd5b50565b600081359050610918816108f2565b92915050565b600060208284031215610934576109336108ed565b5b600061094284828501610909565b91505092915050565b610954816107df565b82525050565b61096381610800565b82525050565b600060408201905061097e600083018561094b565b61098b602083018461095a565b9392505050565b61099b816107df565b81146109a657600080fd5b50565b6000813590506109b881610992565b92915050565b6000602082840312156109d4576109d36108ed565b5b60006109e2848285016109a9565b91505092915050565b60008115159050919050565b610a00816109eb565b82525050565b6000602082019050610a1b60008301846109f7565b92915050565b6000604082019050610a3660008301856109f7565b610a43602083018461095a565b9392505050565b600082825260208201905092915050565b7f596f752063616e206e6f7420766f746520666f7220796f757273656c66000000600082015250565b6000610a91601d83610a4a565b9150610a9c82610a5b565b602082019050919050565b60006020820190508181036000830152610ac081610a84565b9050919050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6000610afd601683610a4a565b9150610b0882610ac7565b602082019050919050565b60006020820190508181036000830152610b2c81610af0565b9050919050565b7f5468657265206973206e6f2063616e646964617465207769746820737563682060008201527f7468652061646472657373000000000000000000000000000000000000000000602082015250565b6000610b8f602b83610a4a565b9150610b9a82610b33565b604082019050919050565b60006020820190508181036000830152610bbe81610b82565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c2e82610800565b9150610c3983610800565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c6e57610c6d610bf4565b5b828201905092915050565b6000604082019050610c8e600083018561094b565b610c9b602083018461094b565b9392505050565b7f596f752061726520616c726561647920612063616e6469646174650000000000600082015250565b6000610cd8601b83610a4a565b9150610ce382610ca2565b602082019050919050565b60006020820190508181036000830152610d0781610ccb565b9050919050565b6000602082019050610d23600083018461094b565b92915050565b6000610d3482610800565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d6757610d66610bf4565b5b60018201905091905056fea264697066735822122052decfa5434f65c7dbbe8667db441b5a9e297a0e42babbbb795b993a4f81bacf64736f6c634300080a0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063aec2ccae1161005b578063aec2ccae146100ed578063d11711a21461011d578063d51b9e9314610127578063dbf7be47146101575761007d565b80632e6997fe146100825780633477ee2e146100a05780636dd7d8ea146100d1575b600080fd5b61008a610188565b60405161009791906108cb565b60405180910390f35b6100ba60048036038101906100b5919061091e565b610247565b6040516100c8929190610969565b60405180910390f35b6100eb60048036038101906100e691906109be565b61029b565b005b610107600480360381019061010291906109be565b6104d7565b6040516101149190610a06565b60405180910390f35b6101256104f7565b005b610141600480360381019061013c91906109be565b610623565b60405161014e9190610a06565b60405180910390f35b610171600480360381019061016c91906109be565b6106d7565b60405161017f929190610a21565b60405180910390f35b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561023e57838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050815260200190600101906101ac565b50505050905090565b6000818154811061025757600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561030a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030190610aa7565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038e90610b13565b60405180910390fd5b6000806103a3836106d7565b91509150816103e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103de90610ba5565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000828154811061045457610453610bc5565b5b9060005260206000209060020201600101546104709190610c23565b6000828154811061048457610483610bc5565b5b9060005260206000209060020201600101819055507fa54b4b55bf59d86099f37de5d683b7e560a961171658f51a65b6de1d0d31ccd633846040516104ca929190610c79565b60405180910390a1505050565b60016020528060005260406000206000915054906101000a900460ff1681565b61050033610623565b15610540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053790610cee565b60405180910390fd5b600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550507f0764c80c4165f118547b301a0b4b91eac21bd2f2d9b61d0ac723ff0aab27bb79336040516106199190610d0e565b60405180910390a1565b600080600090505b6000805490508110156106cc578273ffffffffffffffffffffffffffffffffffffffff166000828154811061066357610662610bc5565b5b906000526020600020906002020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106bb5760019150506106d2565b806106c590610d29565b905061062b565b50600090505b919050565b60008060005b600080549050811015610781578373ffffffffffffffffffffffffffffffffffffffff166000828154811061071557610714610bc5565b5b906000526020600020906002020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561077057600181925092505061078e565b8061077a90610d29565b90506106dd565b5060008080549050915091505b915091565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ea826107bf565b9050919050565b6107fa816107df565b82525050565b6000819050919050565b61081381610800565b82525050565b60408201600082015161082f60008501826107f1565b506020820151610842602085018261080a565b50505050565b60006108548383610819565b60408301905092915050565b6000602082019050919050565b600061087882610793565b610882818561079e565b935061088d836107af565b8060005b838110156108be5781516108a58882610848565b97506108b083610860565b925050600181019050610891565b5085935050505092915050565b600060208201905081810360008301526108e5818461086d565b905092915050565b600080fd5b6108fb81610800565b811461090657600080fd5b50565b600081359050610918816108f2565b92915050565b600060208284031215610934576109336108ed565b5b600061094284828501610909565b91505092915050565b610954816107df565b82525050565b61096381610800565b82525050565b600060408201905061097e600083018561094b565b61098b602083018461095a565b9392505050565b61099b816107df565b81146109a657600080fd5b50565b6000813590506109b881610992565b92915050565b6000602082840312156109d4576109d36108ed565b5b60006109e2848285016109a9565b91505092915050565b60008115159050919050565b610a00816109eb565b82525050565b6000602082019050610a1b60008301846109f7565b92915050565b6000604082019050610a3660008301856109f7565b610a43602083018461095a565b9392505050565b600082825260208201905092915050565b7f596f752063616e206e6f7420766f746520666f7220796f757273656c66000000600082015250565b6000610a91601d83610a4a565b9150610a9c82610a5b565b602082019050919050565b60006020820190508181036000830152610ac081610a84565b9050919050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6000610afd601683610a4a565b9150610b0882610ac7565b602082019050919050565b60006020820190508181036000830152610b2c81610af0565b9050919050565b7f5468657265206973206e6f2063616e646964617465207769746820737563682060008201527f7468652061646472657373000000000000000000000000000000000000000000602082015250565b6000610b8f602b83610a4a565b9150610b9a82610b33565b604082019050919050565b60006020820190508181036000830152610bbe81610b82565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c2e82610800565b9150610c3983610800565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c6e57610c6d610bf4565b5b828201905092915050565b6000604082019050610c8e600083018561094b565b610c9b602083018461094b565b9392505050565b7f596f752061726520616c726561647920612063616e6469646174650000000000600082015250565b6000610cd8601b83610a4a565b9150610ce382610ca2565b602082019050919050565b60006020820190508181036000830152610d0781610ccb565b9050919050565b6000602082019050610d23600083018461094b565b92915050565b6000610d3482610800565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d6757610d66610bf4565b5b60018201905091905056fea264697066735822122052decfa5434f65c7dbbe8667db441b5a9e297a0e42babbbb795b993a4f81bacf64736f6c634300080a0033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:12057:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "106:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "117:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "133:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "127:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "127:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "117:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "89:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "99:6:2",
                "type": ""
              }
            ],
            "src": "7:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "288:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "305:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "298:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "298:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "298:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "326:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "345:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "350:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "341:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "341:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "326:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "260:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "265:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "276:11:2",
                "type": ""
              }
            ],
            "src": "152:209:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "464:60:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "474:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "482:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "474:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "495:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "507:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "512:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "503:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "503:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "495:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "451:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "459:4:2",
                "type": ""
              }
            ],
            "src": "367:157:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "575:81:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "585:65:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "600:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "607:42:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "596:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "596:54:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "585:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "557:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "567:7:2",
                "type": ""
              }
            ],
            "src": "530:126:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "707:51:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "717:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "746:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "728:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "728:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "717:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "689:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "699:7:2",
                "type": ""
              }
            ],
            "src": "662:96:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "819:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "836:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "859:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "841:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "841:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "829:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "829:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "829:37:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "807:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "814:3:2",
                "type": ""
              }
            ],
            "src": "764:108:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "923:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "933:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "944:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "933:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "905:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "915:7:2",
                "type": ""
              }
            ],
            "src": "878:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1016:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1033:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1056:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1038:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1038:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1026:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1026:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1026:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1004:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1011:3:2",
                "type": ""
              }
            ],
            "src": "961:108:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1239:392:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1249:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1265:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1270:4:2",
                        "type": "",
                        "value": "0x40"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1261:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1261:14:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1253:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1285:164:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1320:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1350:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1357:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1346:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1346:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1340:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1340:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "1324:12:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "1410:12:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "1428:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1433:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1424:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1424:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1376:33:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1376:63:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1376:63:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1459:165:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1495:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1525:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1532:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1521:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1521:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1515:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1515:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "1499:12:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "1585:12:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "1603:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1608:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1599:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1599:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1551:33:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1551:63:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1551:63:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1226:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1233:3:2",
                "type": ""
              }
            ],
            "src": "1133:498:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1767:149:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1861:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1869:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1777:83:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1777:96:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1777:96:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1882:28:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1900:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1905:4:2",
                        "type": "",
                        "value": "0x40"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1896:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1896:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updatedPos",
                      "nodeType": "YulIdentifier",
                      "src": "1882:10:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encodeUpdatedPos_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1740:6:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1748:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updatedPos",
                "nodeType": "YulTypedName",
                "src": "1756:10:2",
                "type": ""
              }
            ],
            "src": "1637:279:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2022:38:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2032:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2044:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2049:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2040:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2040:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "next",
                      "nodeType": "YulIdentifier",
                      "src": "2032:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_nextElement_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "2009:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "next",
                "nodeType": "YulTypedName",
                "src": "2017:4:2",
                "type": ""
              }
            ],
            "src": "1922:138:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2302:758:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2312:93:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2399:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2326:72:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2326:79:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2316:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2414:118:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2520:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2525:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2421:98:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2421:111:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2414:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2541:96:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2631:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_dataslot_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2556:74:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2556:81:2"
                  },
                  "variables": [
                    {
                      "name": "baseRef",
                      "nodeType": "YulTypedName",
                      "src": "2545:7:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2646:21:2",
                  "value": {
                    "name": "baseRef",
                    "nodeType": "YulIdentifier",
                    "src": "2660:7:2"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "2650:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2736:299:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2750:34:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2777:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2771:5:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2771:13:2"
                        },
                        "variables": [
                          {
                            "name": "elementValue0",
                            "nodeType": "YulTypedName",
                            "src": "2754:13:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2797:120:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulIdentifier",
                              "src": "2898:13:2"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2913:3:2"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encodeUpdatedPos_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "2804:93:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2804:113:2"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2797:3:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2930:95:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "3018:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_nextElement_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "2940:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2940:85:2"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2930:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2698:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2701:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2695:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2695:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2709:18:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2711:14:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2720:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2723:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2716:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2716:9:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2711:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2680:14:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2682:10:2",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2691:1:2",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "2686:1:2",
                            "type": ""
                          }
                        ]
                      }
                    ]
                  },
                  "src": "2676:359:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3044:10:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "3051:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3044:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2281:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2288:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2297:3:2",
                "type": ""
              }
            ],
            "src": "2128:932:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3264:275:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3274:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3286:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3297:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3282:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3282:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3274:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3321:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3332:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3317:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3317:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3340:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3346:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3336:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3336:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3310:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3310:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3366:166:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3518:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3527:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3374:143:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3374:158:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3366:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3236:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3248:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3259:4:2",
                "type": ""
              }
            ],
            "src": "3066:473:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3585:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3595:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3611:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "3605:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3605:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "3595:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "3578:6:2",
                "type": ""
              }
            ],
            "src": "3545:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3715:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3732:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3735:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3725:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3725:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3725:12:2"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "3626:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3838:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3855:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3858:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3848:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3848:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3848:12:2"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "3749:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3915:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3972:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3981:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3984:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3974:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3974:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3974:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3938:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3963:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3945:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3945:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3935:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3935:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3928:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3928:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3925:63:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3908:5:2",
                "type": ""
              }
            ],
            "src": "3872:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4052:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4062:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4084:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4071:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4071:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4062:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4127:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "4100:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4100:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4100:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4030:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4038:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4046:5:2",
                "type": ""
              }
            ],
            "src": "4000:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4211:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4257:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4259:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4259:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4259:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4232:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4241:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4228:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4228:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4253:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4224:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4224:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4221:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4350:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4365:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4379:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4369:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4394:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4429:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4440:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4425:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4425:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4449:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4404:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4404:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4394:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4181:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4192:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4204:6:2",
                "type": ""
              }
            ],
            "src": "4145:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4545:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4562:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4585:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4567:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4567:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4555:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4555:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4555:37:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4533:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4540:3:2",
                "type": ""
              }
            ],
            "src": "4480:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4669:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4686:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4709:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4691:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4691:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4679:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4679:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4679:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4657:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4664:3:2",
                "type": ""
              }
            ],
            "src": "4604:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4854:206:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4864:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4876:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4887:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4872:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4872:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4864:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4944:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4957:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4968:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4953:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4953:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4900:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4900:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4900:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5025:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5038:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5049:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5034:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5034:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4981:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4981:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4981:72:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4818:9:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4830:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4838:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4849:4:2",
                "type": ""
              }
            ],
            "src": "4728:332:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5109:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5166:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5175:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5178:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5168:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5168:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5168:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5132:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "5157:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "5139:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5139:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "5129:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5129:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5122:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5122:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5119:63:2"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5102:5:2",
                "type": ""
              }
            ],
            "src": "5066:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5246:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5256:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5278:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5265:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5265:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5256:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5321:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "5294:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5294:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5294:33:2"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "5224:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5232:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5240:5:2",
                "type": ""
              }
            ],
            "src": "5194:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5405:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5451:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5453:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5453:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5453:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5426:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5435:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5422:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5422:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5447:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5418:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5418:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5415:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5544:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5559:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5573:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5563:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5588:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5623:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5634:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5619:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5619:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5643:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5598:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5598:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5588:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5375:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5386:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5398:6:2",
                "type": ""
              }
            ],
            "src": "5339:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5716:48:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5726:32:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5751:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "5744:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5744:13:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5737:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5737:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5726:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5698:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5708:7:2",
                "type": ""
              }
            ],
            "src": "5674:90:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5829:50:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5846:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5866:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "5851:14:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5851:21:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5839:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5839:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5839:34:2"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5817:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5824:3:2",
                "type": ""
              }
            ],
            "src": "5770:109:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5977:118:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5987:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5999:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6010:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5995:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5995:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5987:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6061:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6074:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6085:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6070:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6070:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6023:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6023:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6023:65:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5949:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5961:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5972:4:2",
                "type": ""
              }
            ],
            "src": "5885:210:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6221:200:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6231:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6243:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6254:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6239:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6239:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6231:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6305:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6318:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6329:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6314:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6314:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6267:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6267:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6267:65:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "6386:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6399:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6410:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6395:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6395:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6342:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6342:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6342:72:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6185:9:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6197:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6205:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6216:4:2",
                "type": ""
              }
            ],
            "src": "6101:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6523:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6540:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6545:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6533:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6533:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6533:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6561:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6580:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6585:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6576:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6576:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "6561:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6495:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6500:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "6511:11:2",
                "type": ""
              }
            ],
            "src": "6427:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6708:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6730:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6738:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6726:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6726:14:2"
                      },
                      {
                        "hexValue": "596f752063616e206e6f7420766f746520666f7220796f757273656c66",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6742:31:2",
                        "type": "",
                        "value": "You can not vote for yourself"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6719:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6719:55:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6719:55:2"
                }
              ]
            },
            "name": "store_literal_in_memory_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "6700:6:2",
                "type": ""
              }
            ],
            "src": "6602:179:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6933:220:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6943:74:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7009:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7014:2:2",
                        "type": "",
                        "value": "29"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6950:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6950:67:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6943:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7115:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
                      "nodeType": "YulIdentifier",
                      "src": "7026:88:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7026:93:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7026:93:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7128:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7139:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7144:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7135:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7135:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7128:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6921:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6929:3:2",
                "type": ""
              }
            ],
            "src": "6787:366:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7330:248:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7340:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7352:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7363:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7348:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7348:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7340:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7387:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7398:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7383:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7383:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7406:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7412:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7402:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7402:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7376:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7376:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7376:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7432:139:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7566:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7440:124:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7440:131:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7432:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7310:9:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7325:4:2",
                "type": ""
              }
            ],
            "src": "7159:419:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7690:66:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7712:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7720:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7708:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7708:14:2"
                      },
                      {
                        "hexValue": "596f75206861766520616c726561647920766f746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7724:24:2",
                        "type": "",
                        "value": "You have already voted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7701:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7701:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7701:48:2"
                }
              ]
            },
            "name": "store_literal_in_memory_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7682:6:2",
                "type": ""
              }
            ],
            "src": "7584:172:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7908:220:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7918:74:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7984:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7989:2:2",
                        "type": "",
                        "value": "22"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7925:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7925:67:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7918:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8090:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
                      "nodeType": "YulIdentifier",
                      "src": "8001:88:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8001:93:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8001:93:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8103:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8114:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8119:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8110:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8110:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8103:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7896:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7904:3:2",
                "type": ""
              }
            ],
            "src": "7762:366:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8305:248:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8315:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8327:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8338:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8323:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8323:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8315:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8362:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8373:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8358:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8358:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8381:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8387:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8377:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8377:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8351:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8351:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8351:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8407:139:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8541:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8415:124:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8415:131:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8407:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8285:9:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8300:4:2",
                "type": ""
              }
            ],
            "src": "8134:419:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8665:124:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8687:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8695:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8683:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8683:14:2"
                      },
                      {
                        "hexValue": "5468657265206973206e6f2063616e6469646174652077697468207375636820",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8699:34:2",
                        "type": "",
                        "value": "There is no candidate with such "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8676:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8676:58:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8676:58:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8755:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8763:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8751:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8751:15:2"
                      },
                      {
                        "hexValue": "7468652061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8768:13:2",
                        "type": "",
                        "value": "the address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8744:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8744:38:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8744:38:2"
                }
              ]
            },
            "name": "store_literal_in_memory_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "8657:6:2",
                "type": ""
              }
            ],
            "src": "8559:230:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8941:220:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8951:74:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9017:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9022:2:2",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8958:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8958:67:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8951:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9123:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
                      "nodeType": "YulIdentifier",
                      "src": "9034:88:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9034:93:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9034:93:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9136:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9147:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9152:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9143:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9143:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9136:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8929:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8937:3:2",
                "type": ""
              }
            ],
            "src": "8795:366:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9338:248:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9348:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9360:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9371:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9356:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9356:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9348:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9395:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9406:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9391:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9391:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9414:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9420:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9410:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9410:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9384:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9384:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9384:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9440:139:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9574:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9448:124:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9448:131:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9440:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9318:9:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9333:4:2",
                "type": ""
              }
            ],
            "src": "9167:419:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9620:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9637:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9640:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9630:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9630:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9630:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9734:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9737:4:2",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9727:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9727:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9727:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9758:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9761:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9751:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9751:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9751:15:2"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "9592:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9806:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9823:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9826:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9816:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9816:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9816:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9920:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9923:4:2",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9913:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9913:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9913:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9944:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9947:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9937:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9937:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9937:15:2"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "9778:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10008:261:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10018:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10041:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10023:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10023:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "10018:1:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10052:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10075:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10057:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10057:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "10052:1:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10215:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "10217:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10217:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10217:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10136:1:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10143:66:2",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "10211:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10139:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10139:74:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "10133:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10133:81:2"
                  },
                  "nodeType": "YulIf",
                  "src": "10130:107:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10247:16:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10258:1:2"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10261:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10254:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10254:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "10247:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9995:1:2",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9998:1:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "10004:3:2",
                "type": ""
              }
            ],
            "src": "9964:305:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10401:206:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10411:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10423:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10434:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10419:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10419:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10411:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10491:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10504:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10515:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10500:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10500:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10447:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10447:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10447:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10572:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10585:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10596:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10581:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10581:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10528:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10528:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10528:72:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10365:9:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10377:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10385:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10396:4:2",
                "type": ""
              }
            ],
            "src": "10275:332:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10719:71:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "10741:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10749:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10737:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10737:14:2"
                      },
                      {
                        "hexValue": "596f752061726520616c726561647920612063616e646964617465",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10753:29:2",
                        "type": "",
                        "value": "You are already a candidate"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10730:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10730:53:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10730:53:2"
                }
              ]
            },
            "name": "store_literal_in_memory_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "10711:6:2",
                "type": ""
              }
            ],
            "src": "10613:177:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10942:220:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10952:74:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11018:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11023:2:2",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10959:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10959:67:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10952:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11124:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
                      "nodeType": "YulIdentifier",
                      "src": "11035:88:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11035:93:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11035:93:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11137:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11148:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11153:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11144:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11144:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11137:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10930:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10938:3:2",
                "type": ""
              }
            ],
            "src": "10796:366:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11339:248:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11349:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11361:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11372:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11357:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11357:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11349:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11396:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11407:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11392:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11392:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11415:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11421:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11411:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11411:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11385:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11385:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11385:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11441:139:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11575:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11449:124:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11449:131:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11441:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11319:9:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11334:4:2",
                "type": ""
              }
            ],
            "src": "11168:419:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11691:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11701:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11713:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11724:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11709:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11709:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11701:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "11781:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11794:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11805:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11790:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11790:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11737:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11737:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11737:71:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11663:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11675:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11686:4:2",
                "type": ""
              }
            ],
            "src": "11593:222:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11864:190:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11874:33:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11901:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "11883:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11883:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "11874:5:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11997:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11999:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11999:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11999:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11922:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11929:66:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "11919:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11919:77:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11916:103:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12028:20:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12039:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12046:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12035:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12035:13:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "12028:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "11850:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "11860:3:2",
                "type": ""
              }
            ],
            "src": "11821:233:2"
          }
        ]
      },
      "contents": "{\n\n    function array_length_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    // struct Voting.Candidate -> struct Voting.Candidate\n    function abi_encode_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr(value, pos)  {\n        let tail := add(pos, 0x40)\n\n        {\n            // addr\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_address_to_t_address(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // votes\n\n            let memberValue0 := mload(add(value, 0x20))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x20))\n        }\n\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr(value0, pos) -> updatedPos {\n        abi_encode_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr(value0, pos)\n        updatedPos := add(pos, 0x40)\n    }\n\n    function array_nextElement_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // struct Voting.Candidate[] -> struct Voting.Candidate[]\n    function abi_encode_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_struct$_Candidate_$40_memory_ptr_to_t_struct$_Candidate_$40_memory_ptr(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr(srcPtr)\n        }\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70(memPtr) {\n\n        mstore(add(memPtr, 0), \"You can not vote for yourself\")\n\n    }\n\n    function abi_encode_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a(memPtr) {\n\n        mstore(add(memPtr, 0), \"You have already voted\")\n\n    }\n\n    function abi_encode_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109(memPtr) {\n\n        mstore(add(memPtr, 0), \"There is no candidate with such \")\n\n        mstore(add(memPtr, 32), \"the address\")\n\n    }\n\n    function abi_encode_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44(memPtr) {\n\n        mstore(add(memPtr, 0), \"You are already a candidate\")\n\n    }\n\n    function abi_encode_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 27)\n        store_literal_in_memory_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "102:2515:1:-:0;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "102:2515:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1325:367;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;202:29;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;730:502;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;238:37;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;421:201;;;:::i;:::-;;1862:252;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2328:286;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;1325:367;1374:18;1674:10;1667:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1325:367;:::o;202:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;730:502::-;812:16;798:30;;:10;:30;;;;790:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;882:5;:17;888:10;882:17;;;;;;;;;;;;;;;;;;;;;;;;;881:18;873:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;940:11;953:10;967:31;981:16;967:13;:31::i;:::-;939:59;;;;1017:6;1009:62;;;;;;;;;;;;:::i;:::-;;;;;;;;;1104:4;1084:5;:17;1090:10;1084:17;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;;;;;;;1171:1;1145:10;1156:5;1145:17;;;;;;;;:::i;:::-;;;;;;;;;;;;:23;;;:27;;;;:::i;:::-;1119:10;1130:5;1119:17;;;;;;;;:::i;:::-;;;;;;;;;;;;:23;;:53;;;;1190:34;1195:10;1207:16;1190:34;;;;;;;:::i;:::-;;;;;;;;779:453;;730:502;:::o;238:37::-;;;;;;;;;;;;;;;;;;;;;;:::o;421:201::-;473:23;485:10;473:11;:23::i;:::-;472:24;464:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;539:10;555:24;;;;;;;;565:10;555:24;;;;;;577:1;555:24;;;539:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:16;603:10;598:16;;;;;;:::i;:::-;;;;;;;;421:201::o;1862:252::-;1918:4;1940:6;1949:1;1940:10;;1935:149;1956:10;:17;;;;1952:1;:21;1935:149;;;2021:4;1999:26;;:10;2010:1;1999:13;;;;;;;;:::i;:::-;;;;;;;;;;;;:18;;;;;;;;;;;;:26;;;1995:78;;;2053:4;2046:11;;;;;1995:78;1975:3;;;;:::i;:::-;;;1935:149;;;;2101:5;2094:12;;1862:252;;;;:::o;2328:286::-;2386:4;2392;2414:6;2409:154;2430:10;:17;;;;2426:1;:21;2409:154;;;2495:4;2473:26;;:10;2484:1;2473:13;;;;;;;;:::i;:::-;;;;;;;;;;;;:18;;;;;;;;;;;;:26;;;2469:83;;;2528:4;2534:1;2520:16;;;;;;;2469:83;2449:3;;;;:::i;:::-;;;2409:154;;;;2581:5;2588:10;:17;;;;2573:33;;;;2328:286;;;;:::o;7:139:2:-;99:6;133:5;127:12;117:22;;7:139;;;:::o;152:209::-;276:11;310:6;305:3;298:19;350:4;345:3;341:14;326:29;;152:209;;;;:::o;367:157::-;459:4;482:3;474:11;;512:4;507:3;503:14;495:22;;367:157;;;:::o;530:126::-;567:7;607:42;600:5;596:54;585:65;;530:126;;;:::o;662:96::-;699:7;728:24;746:5;728:24;:::i;:::-;717:35;;662:96;;;:::o;764:108::-;841:24;859:5;841:24;:::i;:::-;836:3;829:37;764:108;;:::o;878:77::-;915:7;944:5;933:16;;878:77;;;:::o;961:108::-;1038:24;1056:5;1038:24;:::i;:::-;1033:3;1026:37;961:108;;:::o;1133:498::-;1270:4;1265:3;1261:14;1357:4;1350:5;1346:16;1340:23;1376:63;1433:4;1428:3;1424:14;1410:12;1376:63;:::i;:::-;1285:164;1532:4;1525:5;1521:16;1515:23;1551:63;1608:4;1603:3;1599:14;1585:12;1551:63;:::i;:::-;1459:165;1239:392;1133:498;;:::o;1637:279::-;1756:10;1777:96;1869:3;1861:6;1777:96;:::i;:::-;1905:4;1900:3;1896:14;1882:28;;1637:279;;;;:::o;1922:138::-;2017:4;2049;2044:3;2040:14;2032:22;;1922:138;;;:::o;2128:932::-;2297:3;2326:79;2399:5;2326:79;:::i;:::-;2421:111;2525:6;2520:3;2421:111;:::i;:::-;2414:118;;2556:81;2631:5;2556:81;:::i;:::-;2660:7;2691:1;2676:359;2701:6;2698:1;2695:13;2676:359;;;2777:6;2771:13;2804:113;2913:3;2898:13;2804:113;:::i;:::-;2797:120;;2940:85;3018:6;2940:85;:::i;:::-;2930:95;;2736:299;2723:1;2720;2716:9;2711:14;;2676:359;;;2680:14;3051:3;3044:10;;2302:758;;;2128:932;;;;:::o;3066:473::-;3259:4;3297:2;3286:9;3282:18;3274:26;;3346:9;3340:4;3336:20;3332:1;3321:9;3317:17;3310:47;3374:158;3527:4;3518:6;3374:158;:::i;:::-;3366:166;;3066:473;;;;:::o;3626:117::-;3735:1;3732;3725:12;3872:122;3945:24;3963:5;3945:24;:::i;:::-;3938:5;3935:35;3925:63;;3984:1;3981;3974:12;3925:63;3872:122;:::o;4000:139::-;4046:5;4084:6;4071:20;4062:29;;4100:33;4127:5;4100:33;:::i;:::-;4000:139;;;;:::o;4145:329::-;4204:6;4253:2;4241:9;4232:7;4228:23;4224:32;4221:119;;;4259:79;;:::i;:::-;4221:119;4379:1;4404:53;4449:7;4440:6;4429:9;4425:22;4404:53;:::i;:::-;4394:63;;4350:117;4145:329;;;;:::o;4480:118::-;4567:24;4585:5;4567:24;:::i;:::-;4562:3;4555:37;4480:118;;:::o;4604:::-;4691:24;4709:5;4691:24;:::i;:::-;4686:3;4679:37;4604:118;;:::o;4728:332::-;4849:4;4887:2;4876:9;4872:18;4864:26;;4900:71;4968:1;4957:9;4953:17;4944:6;4900:71;:::i;:::-;4981:72;5049:2;5038:9;5034:18;5025:6;4981:72;:::i;:::-;4728:332;;;;;:::o;5066:122::-;5139:24;5157:5;5139:24;:::i;:::-;5132:5;5129:35;5119:63;;5178:1;5175;5168:12;5119:63;5066:122;:::o;5194:139::-;5240:5;5278:6;5265:20;5256:29;;5294:33;5321:5;5294:33;:::i;:::-;5194:139;;;;:::o;5339:329::-;5398:6;5447:2;5435:9;5426:7;5422:23;5418:32;5415:119;;;5453:79;;:::i;:::-;5415:119;5573:1;5598:53;5643:7;5634:6;5623:9;5619:22;5598:53;:::i;:::-;5588:63;;5544:117;5339:329;;;;:::o;5674:90::-;5708:7;5751:5;5744:13;5737:21;5726:32;;5674:90;;;:::o;5770:109::-;5851:21;5866:5;5851:21;:::i;:::-;5846:3;5839:34;5770:109;;:::o;5885:210::-;5972:4;6010:2;5999:9;5995:18;5987:26;;6023:65;6085:1;6074:9;6070:17;6061:6;6023:65;:::i;:::-;5885:210;;;;:::o;6101:320::-;6216:4;6254:2;6243:9;6239:18;6231:26;;6267:65;6329:1;6318:9;6314:17;6305:6;6267:65;:::i;:::-;6342:72;6410:2;6399:9;6395:18;6386:6;6342:72;:::i;:::-;6101:320;;;;;:::o;6427:169::-;6511:11;6545:6;6540:3;6533:19;6585:4;6580:3;6576:14;6561:29;;6427:169;;;;:::o;6602:179::-;6742:31;6738:1;6730:6;6726:14;6719:55;6602:179;:::o;6787:366::-;6929:3;6950:67;7014:2;7009:3;6950:67;:::i;:::-;6943:74;;7026:93;7115:3;7026:93;:::i;:::-;7144:2;7139:3;7135:12;7128:19;;6787:366;;;:::o;7159:419::-;7325:4;7363:2;7352:9;7348:18;7340:26;;7412:9;7406:4;7402:20;7398:1;7387:9;7383:17;7376:47;7440:131;7566:4;7440:131;:::i;:::-;7432:139;;7159:419;;;:::o;7584:172::-;7724:24;7720:1;7712:6;7708:14;7701:48;7584:172;:::o;7762:366::-;7904:3;7925:67;7989:2;7984:3;7925:67;:::i;:::-;7918:74;;8001:93;8090:3;8001:93;:::i;:::-;8119:2;8114:3;8110:12;8103:19;;7762:366;;;:::o;8134:419::-;8300:4;8338:2;8327:9;8323:18;8315:26;;8387:9;8381:4;8377:20;8373:1;8362:9;8358:17;8351:47;8415:131;8541:4;8415:131;:::i;:::-;8407:139;;8134:419;;;:::o;8559:230::-;8699:34;8695:1;8687:6;8683:14;8676:58;8768:13;8763:2;8755:6;8751:15;8744:38;8559:230;:::o;8795:366::-;8937:3;8958:67;9022:2;9017:3;8958:67;:::i;:::-;8951:74;;9034:93;9123:3;9034:93;:::i;:::-;9152:2;9147:3;9143:12;9136:19;;8795:366;;;:::o;9167:419::-;9333:4;9371:2;9360:9;9356:18;9348:26;;9420:9;9414:4;9410:20;9406:1;9395:9;9391:17;9384:47;9448:131;9574:4;9448:131;:::i;:::-;9440:139;;9167:419;;;:::o;9592:180::-;9640:77;9637:1;9630:88;9737:4;9734:1;9727:15;9761:4;9758:1;9751:15;9778:180;9826:77;9823:1;9816:88;9923:4;9920:1;9913:15;9947:4;9944:1;9937:15;9964:305;10004:3;10023:20;10041:1;10023:20;:::i;:::-;10018:25;;10057:20;10075:1;10057:20;:::i;:::-;10052:25;;10211:1;10143:66;10139:74;10136:1;10133:81;10130:107;;;10217:18;;:::i;:::-;10130:107;10261:1;10258;10254:9;10247:16;;9964:305;;;;:::o;10275:332::-;10396:4;10434:2;10423:9;10419:18;10411:26;;10447:71;10515:1;10504:9;10500:17;10491:6;10447:71;:::i;:::-;10528:72;10596:2;10585:9;10581:18;10572:6;10528:72;:::i;:::-;10275:332;;;;;:::o;10613:177::-;10753:29;10749:1;10741:6;10737:14;10730:53;10613:177;:::o;10796:366::-;10938:3;10959:67;11023:2;11018:3;10959:67;:::i;:::-;10952:74;;11035:93;11124:3;11035:93;:::i;:::-;11153:2;11148:3;11144:12;11137:19;;10796:366;;;:::o;11168:419::-;11334:4;11372:2;11361:9;11357:18;11349:26;;11421:9;11415:4;11411:20;11407:1;11396:9;11392:17;11385:47;11449:131;11575:4;11449:131;:::i;:::-;11441:139;;11168:419;;;:::o;11593:222::-;11686:4;11724:2;11713:9;11709:18;11701:26;;11737:71;11805:1;11794:9;11790:17;11781:6;11737:71;:::i;:::-;11593:222;;;;:::o;11821:233::-;11860:3;11883:24;11901:5;11883:24;:::i;:::-;11874:33;;11929:66;11922:5;11919:77;11916:103;;;11999:18;;:::i;:::-;11916:103;12046:1;12039:5;12035:13;12028:20;;11821:233;;;:::o",
  "source": "// SPDX-License-Identifier: UNLICENSED\r\npragma solidity ^0.8.0;\r\n\r\n/// @title Simple voting contract\r\ncontract Voting {\r\n    struct Candidate {\r\n        address addr;\r\n        uint votes;\r\n    }\r\n\r\n    Candidate[] public candidates;\r\n    mapping(address => bool) public voted;\r\n\r\n    event Join(address candidate);\r\n    event Vote(address voter, address candidate);\r\n\r\n    /// @notice Join the voting as a candidate\r\n    function participate() external {\r\n        require(!isCandidate(msg.sender), \"You are already a candidate\");\r\n        candidates.push(Candidate(msg.sender, 0));\r\n\r\n        emit Join(msg.sender);\r\n    }\r\n\r\n    /// @notice Vote for some candidate\r\n    /// @param candidateAddress Address of your candidate\r\n    function vote(address candidateAddress) external {\r\n        require(msg.sender != candidateAddress, \"You can not vote for yourself\");\r\n        require(!voted[msg.sender], \"You have already voted\");\r\n\r\n        (bool exists, uint index) = findCandidate(candidateAddress);\r\n        require(exists, \"There is no candidate with such the address\");\r\n\r\n        voted[msg.sender] = true;\r\n        candidates[index].votes = candidates[index].votes + 1;\r\n\r\n        emit Vote(msg.sender, candidateAddress);\r\n    }\r\n\r\n    /// @notice Getter for a candidate list\r\n    /// @return List of all candidates\r\n    function getAllCandidates() public view returns (Candidate[] memory) {\r\n//        Candidate[] memory candidatesArray = new Candidate[](candidates.length);\r\n//        for (uint i = 0; i < candidates.length; ++i) {\r\n//            Candidate storage candidate = candidates[i];\r\n//            candidatesArray[i] = candidate;\r\n//        }\r\n        return candidates;\r\n    }\r\n\r\n    /// @notice Check if the address is already a candidate\r\n    /// @param addr Checking address\r\n    /// @return True if the address is a candidate else false\r\n    function isCandidate(address addr) public view returns (bool) {\r\n        for (uint i = 0; i < candidates.length; ++i) {\r\n            if (candidates[i].addr == addr) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    /// @notice Look for a candidate with given address\r\n    /// @param addr Checking address\r\n    /// @return True if found else false\r\n    /// @return Index of the candidate or array length if not found\r\n    function findCandidate(address addr) public view returns (bool, uint) {\r\n        for (uint i = 0; i < candidates.length; ++i) {\r\n            if (candidates[i].addr == addr) {\r\n                return (true, i);\r\n            }\r\n        }\r\n        return (false, candidates.length);\r\n    }\r\n}\r\n",
  "sourcePath": "C:\\Projects\\Ethereum\\Truffle\\voting\\contracts\\Voting.sol",
  "ast": {
    "absolutePath": "project:/contracts/Voting.sol",
    "exportedSymbols": {
      "Voting": [
        236
      ]
    },
    "id": 237,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "40:23:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Voting",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 35,
          "nodeType": "StructuredDocumentation",
          "src": "67:35:1",
          "text": "@title Simple voting contract"
        },
        "fullyImplemented": true,
        "id": 236,
        "linearizedBaseContracts": [
          236
        ],
        "name": "Voting",
        "nameLocation": "111:6:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Voting.Candidate",
            "id": 40,
            "members": [
              {
                "constant": false,
                "id": 37,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "161:4:1",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "153:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 36,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "153:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 39,
                "mutability": "mutable",
                "name": "votes",
                "nameLocation": "181:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "176:10:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 38,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "176:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Candidate",
            "nameLocation": "132:9:1",
            "nodeType": "StructDefinition",
            "scope": 236,
            "src": "125:69:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "3477ee2e",
            "id": 44,
            "mutability": "mutable",
            "name": "candidates",
            "nameLocation": "221:10:1",
            "nodeType": "VariableDeclaration",
            "scope": 236,
            "src": "202:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
              "typeString": "struct Voting.Candidate[]"
            },
            "typeName": {
              "baseType": {
                "id": 42,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 41,
                  "name": "Candidate",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40,
                  "src": "202:9:1"
                },
                "referencedDeclaration": 40,
                "src": "202:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Candidate_$40_storage_ptr",
                  "typeString": "struct Voting.Candidate"
                }
              },
              "id": 43,
              "nodeType": "ArrayTypeName",
              "src": "202:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr",
                "typeString": "struct Voting.Candidate[]"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "aec2ccae",
            "id": 48,
            "mutability": "mutable",
            "name": "voted",
            "nameLocation": "270:5:1",
            "nodeType": "VariableDeclaration",
            "scope": 236,
            "src": "238:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 47,
              "keyType": {
                "id": 45,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "246:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "238:24:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 46,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "257:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 52,
            "name": "Join",
            "nameLocation": "290:4:1",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "candidate",
                  "nameLocation": "303:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "295:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "294:19:1"
            },
            "src": "284:30:1"
          },
          {
            "anonymous": false,
            "id": 58,
            "name": "Vote",
            "nameLocation": "326:4:1",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "voter",
                  "nameLocation": "339:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "331:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "candidate",
                  "nameLocation": "354:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "346:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "330:34:1"
            },
            "src": "320:45:1"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "453:169:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "472:24:1",
                        "subExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 64,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "485:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 65,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "485:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 63,
                            "name": "isCandidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "473:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "473:23:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f752061726520616c726561647920612063616e646964617465",
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "498:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
                          "typeString": "literal_string \"You are already a candidate\""
                        },
                        "value": "You are already a candidate"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
                          "typeString": "literal_string \"You are already a candidate\""
                        }
                      ],
                      "id": 62,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "464:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "464:64:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "464:64:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 75,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "565:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "565:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "hexValue": "30",
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "577:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 74,
                          "name": "Candidate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "555:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Candidate_$40_storage_ptr_$",
                            "typeString": "type(struct Voting.Candidate storage pointer)"
                          }
                        },
                        "id": 78,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "555:24:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$40_memory_ptr",
                          "typeString": "struct Voting.Candidate memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Candidate_$40_memory_ptr",
                          "typeString": "struct Voting.Candidate memory"
                        }
                      ],
                      "expression": {
                        "id": 71,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "539:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 73,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "539:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr_$_t_struct$_Candidate_$40_storage_$returns$__$bound_to$_t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Voting.Candidate storage ref[] storage pointer,struct Voting.Candidate storage ref)"
                      }
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "539:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "539:41:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 82,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "603:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "603:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 81,
                      "name": "Join",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "598:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "598:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "EmitStatement",
                  "src": "593:21:1"
                }
              ]
            },
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "373:42:1",
              "text": "@notice Join the voting as a candidate"
            },
            "functionSelector": "d11711a2",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "participate",
            "nameLocation": "430:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:2:1"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:1"
            },
            "scope": 236,
            "src": "421:201:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 148,
              "nodeType": "Block",
              "src": "779:453:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 94,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "798:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 95,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "798:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 96,
                          "name": "candidateAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 90,
                          "src": "812:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "798:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f752063616e206e6f7420766f746520666f7220796f757273656c66",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "830:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
                          "typeString": "literal_string \"You can not vote for yourself\""
                        },
                        "value": "You can not vote for yourself"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
                          "typeString": "literal_string \"You can not vote for yourself\""
                        }
                      ],
                      "id": 93,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "790:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "790:72:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "790:72:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "881:18:1",
                        "subExpression": {
                          "baseExpression": {
                            "id": 102,
                            "name": "voted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48,
                            "src": "882:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 105,
                          "indexExpression": {
                            "expression": {
                              "id": 103,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "888:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "888:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "882:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206861766520616c726561647920766f746564",
                        "id": 107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "901:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
                          "typeString": "literal_string \"You have already voted\""
                        },
                        "value": "You have already voted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
                          "typeString": "literal_string \"You have already voted\""
                        }
                      ],
                      "id": 101,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "873:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:53:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "873:53:1"
                },
                {
                  "assignments": [
                    111,
                    113
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 111,
                      "mutability": "mutable",
                      "name": "exists",
                      "nameLocation": "945:6:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 148,
                      "src": "940:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 110,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "940:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 113,
                      "mutability": "mutable",
                      "name": "index",
                      "nameLocation": "958:5:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 148,
                      "src": "953:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 112,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "953:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 117,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 115,
                        "name": "candidateAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "981:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 114,
                      "name": "findCandidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 235,
                      "src": "967:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$_t_uint256_$",
                        "typeString": "function (address) view returns (bool,uint256)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "967:31:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                      "typeString": "tuple(bool,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "939:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 119,
                        "name": "exists",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 111,
                        "src": "1017:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5468657265206973206e6f2063616e64696461746520776974682073756368207468652061646472657373",
                        "id": 120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1025:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
                          "typeString": "literal_string \"There is no candidate with such the address\""
                        },
                        "value": "There is no candidate with such the address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
                          "typeString": "literal_string \"There is no candidate with such the address\""
                        }
                      ],
                      "id": 118,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1009:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1009:62:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 122,
                  "nodeType": "ExpressionStatement",
                  "src": "1009:62:1"
                },
                {
                  "expression": {
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 123,
                        "name": "voted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "1084:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 126,
                      "indexExpression": {
                        "expression": {
                          "id": 124,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1090:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1090:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1084:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1104:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1084:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "1084:24:1"
                },
                {
                  "expression": {
                    "id": 140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 130,
                          "name": "candidates",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1119:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                            "typeString": "struct Voting.Candidate storage ref[] storage ref"
                          }
                        },
                        "id": 132,
                        "indexExpression": {
                          "id": 131,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 113,
                          "src": "1130:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1119:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$40_storage",
                          "typeString": "struct Voting.Candidate storage ref"
                        }
                      },
                      "id": 133,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "votes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "1119:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "baseExpression": {
                            "id": 134,
                            "name": "candidates",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "1145:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                              "typeString": "struct Voting.Candidate storage ref[] storage ref"
                            }
                          },
                          "id": 136,
                          "indexExpression": {
                            "id": 135,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "1156:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1145:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Candidate_$40_storage",
                            "typeString": "struct Voting.Candidate storage ref"
                          }
                        },
                        "id": 137,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "votes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39,
                        "src": "1145:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1171:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1145:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1119:53:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 141,
                  "nodeType": "ExpressionStatement",
                  "src": "1119:53:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 143,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1195:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1195:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 145,
                        "name": "candidateAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "1207:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 142,
                      "name": "Vote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58,
                      "src": "1190:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:34:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "EmitStatement",
                  "src": "1185:39:1"
                }
              ]
            },
            "documentation": {
              "id": 88,
              "nodeType": "StructuredDocumentation",
              "src": "630:94:1",
              "text": "@notice Vote for some candidate\n @param candidateAddress Address of your candidate"
            },
            "functionSelector": "6dd7d8ea",
            "id": 149,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vote",
            "nameLocation": "739:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "candidateAddress",
                  "nameLocation": "752:16:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 149,
                  "src": "744:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "743:26:1"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "779:0:1"
            },
            "scope": 236,
            "src": "730:502:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 159,
              "nodeType": "Block",
              "src": "1394:298:1",
              "statements": [
                {
                  "expression": {
                    "id": 157,
                    "name": "candidates",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1674:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                      "typeString": "struct Voting.Candidate storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 156,
                  "id": 158,
                  "nodeType": "Return",
                  "src": "1667:17:1"
                }
              ]
            },
            "documentation": {
              "id": 150,
              "nodeType": "StructuredDocumentation",
              "src": "1240:79:1",
              "text": "@notice Getter for a candidate list\n @return List of all candidates"
            },
            "functionSelector": "2e6997fe",
            "id": 160,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllCandidates",
            "nameLocation": "1334:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1350:2:1"
            },
            "returnParameters": {
              "id": 156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 160,
                  "src": "1374:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Voting.Candidate[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 153,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 152,
                        "name": "Candidate",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 40,
                        "src": "1374:9:1"
                      },
                      "referencedDeclaration": 40,
                      "src": "1374:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Candidate_$40_storage_ptr",
                        "typeString": "struct Voting.Candidate"
                      }
                    },
                    "id": 154,
                    "nodeType": "ArrayTypeName",
                    "src": "1374:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr",
                      "typeString": "struct Voting.Candidate[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1373:20:1"
            },
            "scope": 236,
            "src": "1325:367:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 193,
              "nodeType": "Block",
              "src": "1924:190:1",
              "statements": [
                {
                  "body": {
                    "id": 189,
                    "nodeType": "Block",
                    "src": "1980:104:1",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 179,
                                "name": "candidates",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "1999:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                                  "typeString": "struct Voting.Candidate storage ref[] storage ref"
                                }
                              },
                              "id": 181,
                              "indexExpression": {
                                "id": 180,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 169,
                                "src": "2010:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1999:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$40_storage",
                                "typeString": "struct Voting.Candidate storage ref"
                              }
                            },
                            "id": 182,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addr",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 37,
                            "src": "1999:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 183,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 163,
                            "src": "2021:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1999:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 188,
                        "nodeType": "IfStatement",
                        "src": "1995:78:1",
                        "trueBody": {
                          "id": 187,
                          "nodeType": "Block",
                          "src": "2027:46:1",
                          "statements": [
                            {
                              "expression": {
                                "hexValue": "74727565",
                                "id": 185,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2053:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 167,
                              "id": 186,
                              "nodeType": "Return",
                              "src": "2046:11:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 172,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "1952:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 173,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "1956:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1956:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1952:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 190,
                  "initializationExpression": {
                    "assignments": [
                      169
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 169,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1945:1:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 190,
                        "src": "1940:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 168,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1940:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 171,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1940:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "1975:3:1",
                      "subExpression": {
                        "id": 176,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 169,
                        "src": "1977:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "1975:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1935:149:1"
                },
                {
                  "expression": {
                    "hexValue": "66616c7365",
                    "id": 191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2101:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 167,
                  "id": 192,
                  "nodeType": "Return",
                  "src": "2094:12:1"
                }
              ]
            },
            "documentation": {
              "id": 161,
              "nodeType": "StructuredDocumentation",
              "src": "1700:156:1",
              "text": "@notice Check if the address is already a candidate\n @param addr Checking address\n @return True if the address is a candidate else false"
            },
            "functionSelector": "d51b9e93",
            "id": 194,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isCandidate",
            "nameLocation": "1871:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 163,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1891:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 194,
                  "src": "1883:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1883:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1882:14:1"
            },
            "returnParameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 166,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 194,
                  "src": "1918:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:6:1"
            },
            "scope": 236,
            "src": "1862:252:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 234,
              "nodeType": "Block",
              "src": "2398:216:1",
              "statements": [
                {
                  "body": {
                    "id": 227,
                    "nodeType": "Block",
                    "src": "2454:109:1",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 215,
                                "name": "candidates",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "2473:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                                  "typeString": "struct Voting.Candidate storage ref[] storage ref"
                                }
                              },
                              "id": 217,
                              "indexExpression": {
                                "id": 216,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 205,
                                "src": "2484:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2473:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$40_storage",
                                "typeString": "struct Voting.Candidate storage ref"
                              }
                            },
                            "id": 218,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addr",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 37,
                            "src": "2473:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 219,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 197,
                            "src": "2495:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2473:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 226,
                        "nodeType": "IfStatement",
                        "src": "2469:83:1",
                        "trueBody": {
                          "id": 225,
                          "nodeType": "Block",
                          "src": "2501:51:1",
                          "statements": [
                            {
                              "expression": {
                                "components": [
                                  {
                                    "hexValue": "74727565",
                                    "id": 221,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2528:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  {
                                    "id": 222,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 205,
                                    "src": "2534:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 223,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2527:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                                  "typeString": "tuple(bool,uint256)"
                                }
                              },
                              "functionReturnParameters": 203,
                              "id": 224,
                              "nodeType": "Return",
                              "src": "2520:16:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 208,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 205,
                      "src": "2426:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 209,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2430:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2430:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2426:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 228,
                  "initializationExpression": {
                    "assignments": [
                      205
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 205,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2419:1:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 228,
                        "src": "2414:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 204,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2414:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 207,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2423:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2414:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 213,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "2449:3:1",
                      "subExpression": {
                        "id": 212,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 205,
                        "src": "2451:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 214,
                    "nodeType": "ExpressionStatement",
                    "src": "2449:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2409:154:1"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "66616c7365",
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2581:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "expression": {
                          "id": 230,
                          "name": "candidates",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "2588:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                            "typeString": "struct Voting.Candidate storage ref[] storage ref"
                          }
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2588:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 232,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2580:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                      "typeString": "tuple(bool,uint256)"
                    }
                  },
                  "functionReturnParameters": 203,
                  "id": 233,
                  "nodeType": "Return",
                  "src": "2573:33:1"
                }
              ]
            },
            "documentation": {
              "id": 195,
              "nodeType": "StructuredDocumentation",
              "src": "2122:200:1",
              "text": "@notice Look for a candidate with given address\n @param addr Checking address\n @return True if found else false\n @return Index of the candidate or array length if not found"
            },
            "functionSelector": "dbf7be47",
            "id": 235,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "findCandidate",
            "nameLocation": "2337:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 197,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2359:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2351:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2351:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2350:14:1"
            },
            "returnParameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2386:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2386:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 202,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2392:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2392:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2385:12:1"
            },
            "scope": 236,
            "src": "2328:286:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 237,
        "src": "102:2515:1",
        "usedErrors": []
      }
    ],
    "src": "40:2579:1"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/Voting.sol",
    "exportedSymbols": {
      "Voting": [
        236
      ]
    },
    "id": 237,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "40:23:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Voting",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 35,
          "nodeType": "StructuredDocumentation",
          "src": "67:35:1",
          "text": "@title Simple voting contract"
        },
        "fullyImplemented": true,
        "id": 236,
        "linearizedBaseContracts": [
          236
        ],
        "name": "Voting",
        "nameLocation": "111:6:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Voting.Candidate",
            "id": 40,
            "members": [
              {
                "constant": false,
                "id": 37,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "161:4:1",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "153:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 36,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "153:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 39,
                "mutability": "mutable",
                "name": "votes",
                "nameLocation": "181:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "176:10:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 38,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "176:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Candidate",
            "nameLocation": "132:9:1",
            "nodeType": "StructDefinition",
            "scope": 236,
            "src": "125:69:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "3477ee2e",
            "id": 44,
            "mutability": "mutable",
            "name": "candidates",
            "nameLocation": "221:10:1",
            "nodeType": "VariableDeclaration",
            "scope": 236,
            "src": "202:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
              "typeString": "struct Voting.Candidate[]"
            },
            "typeName": {
              "baseType": {
                "id": 42,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 41,
                  "name": "Candidate",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40,
                  "src": "202:9:1"
                },
                "referencedDeclaration": 40,
                "src": "202:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Candidate_$40_storage_ptr",
                  "typeString": "struct Voting.Candidate"
                }
              },
              "id": 43,
              "nodeType": "ArrayTypeName",
              "src": "202:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr",
                "typeString": "struct Voting.Candidate[]"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "aec2ccae",
            "id": 48,
            "mutability": "mutable",
            "name": "voted",
            "nameLocation": "270:5:1",
            "nodeType": "VariableDeclaration",
            "scope": 236,
            "src": "238:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 47,
              "keyType": {
                "id": 45,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "246:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "238:24:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 46,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "257:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 52,
            "name": "Join",
            "nameLocation": "290:4:1",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "candidate",
                  "nameLocation": "303:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "295:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "294:19:1"
            },
            "src": "284:30:1"
          },
          {
            "anonymous": false,
            "id": 58,
            "name": "Vote",
            "nameLocation": "326:4:1",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "voter",
                  "nameLocation": "339:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "331:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "candidate",
                  "nameLocation": "354:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "346:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "330:34:1"
            },
            "src": "320:45:1"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "453:169:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "472:24:1",
                        "subExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 64,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "485:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 65,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "485:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 63,
                            "name": "isCandidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "473:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "473:23:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f752061726520616c726561647920612063616e646964617465",
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "498:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
                          "typeString": "literal_string \"You are already a candidate\""
                        },
                        "value": "You are already a candidate"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5d0513bd5a6fba7af1d342ea4d21a3b2a53e0309bdd49cfd855dd1b27fc4ea44",
                          "typeString": "literal_string \"You are already a candidate\""
                        }
                      ],
                      "id": 62,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "464:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "464:64:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "464:64:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 75,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "565:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "565:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "hexValue": "30",
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "577:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 74,
                          "name": "Candidate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "555:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Candidate_$40_storage_ptr_$",
                            "typeString": "type(struct Voting.Candidate storage pointer)"
                          }
                        },
                        "id": 78,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "555:24:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$40_memory_ptr",
                          "typeString": "struct Voting.Candidate memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Candidate_$40_memory_ptr",
                          "typeString": "struct Voting.Candidate memory"
                        }
                      ],
                      "expression": {
                        "id": 71,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "539:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 73,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "539:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr_$_t_struct$_Candidate_$40_storage_$returns$__$bound_to$_t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Voting.Candidate storage ref[] storage pointer,struct Voting.Candidate storage ref)"
                      }
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "539:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "539:41:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 82,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "603:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "603:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 81,
                      "name": "Join",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "598:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "598:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "EmitStatement",
                  "src": "593:21:1"
                }
              ]
            },
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "373:42:1",
              "text": "@notice Join the voting as a candidate"
            },
            "functionSelector": "d11711a2",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "participate",
            "nameLocation": "430:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:2:1"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:1"
            },
            "scope": 236,
            "src": "421:201:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 148,
              "nodeType": "Block",
              "src": "779:453:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 94,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "798:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 95,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "798:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 96,
                          "name": "candidateAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 90,
                          "src": "812:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "798:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f752063616e206e6f7420766f746520666f7220796f757273656c66",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "830:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
                          "typeString": "literal_string \"You can not vote for yourself\""
                        },
                        "value": "You can not vote for yourself"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_42dc722bac493d467f51e37e70737efd7a4110710083aa1b135d189624ecab70",
                          "typeString": "literal_string \"You can not vote for yourself\""
                        }
                      ],
                      "id": 93,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "790:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "790:72:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "790:72:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "881:18:1",
                        "subExpression": {
                          "baseExpression": {
                            "id": 102,
                            "name": "voted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48,
                            "src": "882:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 105,
                          "indexExpression": {
                            "expression": {
                              "id": 103,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "888:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "888:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "882:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206861766520616c726561647920766f746564",
                        "id": 107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "901:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
                          "typeString": "literal_string \"You have already voted\""
                        },
                        "value": "You have already voted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f717c48f565c1f6c8c7139cf54f577e481ac65760eb92c077a08597c622f2a8a",
                          "typeString": "literal_string \"You have already voted\""
                        }
                      ],
                      "id": 101,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "873:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:53:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "873:53:1"
                },
                {
                  "assignments": [
                    111,
                    113
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 111,
                      "mutability": "mutable",
                      "name": "exists",
                      "nameLocation": "945:6:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 148,
                      "src": "940:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 110,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "940:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 113,
                      "mutability": "mutable",
                      "name": "index",
                      "nameLocation": "958:5:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 148,
                      "src": "953:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 112,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "953:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 117,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 115,
                        "name": "candidateAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "981:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 114,
                      "name": "findCandidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 235,
                      "src": "967:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$_t_uint256_$",
                        "typeString": "function (address) view returns (bool,uint256)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "967:31:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                      "typeString": "tuple(bool,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "939:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 119,
                        "name": "exists",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 111,
                        "src": "1017:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5468657265206973206e6f2063616e64696461746520776974682073756368207468652061646472657373",
                        "id": 120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1025:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
                          "typeString": "literal_string \"There is no candidate with such the address\""
                        },
                        "value": "There is no candidate with such the address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_91c6aad9161c435787a6a93540d33e42bf59a331d9f8bb5208b6c2d5a24e7109",
                          "typeString": "literal_string \"There is no candidate with such the address\""
                        }
                      ],
                      "id": 118,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1009:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1009:62:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 122,
                  "nodeType": "ExpressionStatement",
                  "src": "1009:62:1"
                },
                {
                  "expression": {
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 123,
                        "name": "voted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "1084:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 126,
                      "indexExpression": {
                        "expression": {
                          "id": 124,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1090:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1090:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1084:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1104:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1084:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "1084:24:1"
                },
                {
                  "expression": {
                    "id": 140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 130,
                          "name": "candidates",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1119:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                            "typeString": "struct Voting.Candidate storage ref[] storage ref"
                          }
                        },
                        "id": 132,
                        "indexExpression": {
                          "id": 131,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 113,
                          "src": "1130:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1119:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$40_storage",
                          "typeString": "struct Voting.Candidate storage ref"
                        }
                      },
                      "id": 133,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "votes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "1119:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "baseExpression": {
                            "id": 134,
                            "name": "candidates",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "1145:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                              "typeString": "struct Voting.Candidate storage ref[] storage ref"
                            }
                          },
                          "id": 136,
                          "indexExpression": {
                            "id": 135,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "1156:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1145:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Candidate_$40_storage",
                            "typeString": "struct Voting.Candidate storage ref"
                          }
                        },
                        "id": 137,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "votes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39,
                        "src": "1145:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1171:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1145:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1119:53:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 141,
                  "nodeType": "ExpressionStatement",
                  "src": "1119:53:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 143,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1195:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1195:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 145,
                        "name": "candidateAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "1207:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 142,
                      "name": "Vote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58,
                      "src": "1190:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:34:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "EmitStatement",
                  "src": "1185:39:1"
                }
              ]
            },
            "documentation": {
              "id": 88,
              "nodeType": "StructuredDocumentation",
              "src": "630:94:1",
              "text": "@notice Vote for some candidate\n @param candidateAddress Address of your candidate"
            },
            "functionSelector": "6dd7d8ea",
            "id": 149,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vote",
            "nameLocation": "739:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "candidateAddress",
                  "nameLocation": "752:16:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 149,
                  "src": "744:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "743:26:1"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "779:0:1"
            },
            "scope": 236,
            "src": "730:502:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 159,
              "nodeType": "Block",
              "src": "1394:298:1",
              "statements": [
                {
                  "expression": {
                    "id": 157,
                    "name": "candidates",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1674:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                      "typeString": "struct Voting.Candidate storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 156,
                  "id": 158,
                  "nodeType": "Return",
                  "src": "1667:17:1"
                }
              ]
            },
            "documentation": {
              "id": 150,
              "nodeType": "StructuredDocumentation",
              "src": "1240:79:1",
              "text": "@notice Getter for a candidate list\n @return List of all candidates"
            },
            "functionSelector": "2e6997fe",
            "id": 160,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllCandidates",
            "nameLocation": "1334:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1350:2:1"
            },
            "returnParameters": {
              "id": 156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 160,
                  "src": "1374:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Candidate_$40_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Voting.Candidate[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 153,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 152,
                        "name": "Candidate",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 40,
                        "src": "1374:9:1"
                      },
                      "referencedDeclaration": 40,
                      "src": "1374:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Candidate_$40_storage_ptr",
                        "typeString": "struct Voting.Candidate"
                      }
                    },
                    "id": 154,
                    "nodeType": "ArrayTypeName",
                    "src": "1374:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage_ptr",
                      "typeString": "struct Voting.Candidate[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1373:20:1"
            },
            "scope": 236,
            "src": "1325:367:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 193,
              "nodeType": "Block",
              "src": "1924:190:1",
              "statements": [
                {
                  "body": {
                    "id": 189,
                    "nodeType": "Block",
                    "src": "1980:104:1",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 179,
                                "name": "candidates",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "1999:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                                  "typeString": "struct Voting.Candidate storage ref[] storage ref"
                                }
                              },
                              "id": 181,
                              "indexExpression": {
                                "id": 180,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 169,
                                "src": "2010:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1999:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$40_storage",
                                "typeString": "struct Voting.Candidate storage ref"
                              }
                            },
                            "id": 182,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addr",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 37,
                            "src": "1999:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 183,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 163,
                            "src": "2021:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1999:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 188,
                        "nodeType": "IfStatement",
                        "src": "1995:78:1",
                        "trueBody": {
                          "id": 187,
                          "nodeType": "Block",
                          "src": "2027:46:1",
                          "statements": [
                            {
                              "expression": {
                                "hexValue": "74727565",
                                "id": 185,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2053:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 167,
                              "id": 186,
                              "nodeType": "Return",
                              "src": "2046:11:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 172,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "1952:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 173,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "1956:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1956:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1952:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 190,
                  "initializationExpression": {
                    "assignments": [
                      169
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 169,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1945:1:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 190,
                        "src": "1940:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 168,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1940:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 171,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1940:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "1975:3:1",
                      "subExpression": {
                        "id": 176,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 169,
                        "src": "1977:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "1975:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1935:149:1"
                },
                {
                  "expression": {
                    "hexValue": "66616c7365",
                    "id": 191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2101:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 167,
                  "id": 192,
                  "nodeType": "Return",
                  "src": "2094:12:1"
                }
              ]
            },
            "documentation": {
              "id": 161,
              "nodeType": "StructuredDocumentation",
              "src": "1700:156:1",
              "text": "@notice Check if the address is already a candidate\n @param addr Checking address\n @return True if the address is a candidate else false"
            },
            "functionSelector": "d51b9e93",
            "id": 194,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isCandidate",
            "nameLocation": "1871:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 163,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1891:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 194,
                  "src": "1883:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1883:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1882:14:1"
            },
            "returnParameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 166,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 194,
                  "src": "1918:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:6:1"
            },
            "scope": 236,
            "src": "1862:252:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 234,
              "nodeType": "Block",
              "src": "2398:216:1",
              "statements": [
                {
                  "body": {
                    "id": 227,
                    "nodeType": "Block",
                    "src": "2454:109:1",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 215,
                                "name": "candidates",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "2473:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                                  "typeString": "struct Voting.Candidate storage ref[] storage ref"
                                }
                              },
                              "id": 217,
                              "indexExpression": {
                                "id": 216,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 205,
                                "src": "2484:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2473:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$40_storage",
                                "typeString": "struct Voting.Candidate storage ref"
                              }
                            },
                            "id": 218,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addr",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 37,
                            "src": "2473:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 219,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 197,
                            "src": "2495:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2473:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 226,
                        "nodeType": "IfStatement",
                        "src": "2469:83:1",
                        "trueBody": {
                          "id": 225,
                          "nodeType": "Block",
                          "src": "2501:51:1",
                          "statements": [
                            {
                              "expression": {
                                "components": [
                                  {
                                    "hexValue": "74727565",
                                    "id": 221,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2528:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  {
                                    "id": 222,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 205,
                                    "src": "2534:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 223,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2527:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                                  "typeString": "tuple(bool,uint256)"
                                }
                              },
                              "functionReturnParameters": 203,
                              "id": 224,
                              "nodeType": "Return",
                              "src": "2520:16:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 208,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 205,
                      "src": "2426:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 209,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2430:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                          "typeString": "struct Voting.Candidate storage ref[] storage ref"
                        }
                      },
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2430:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2426:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 228,
                  "initializationExpression": {
                    "assignments": [
                      205
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 205,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2419:1:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 228,
                        "src": "2414:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 204,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2414:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 207,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2423:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2414:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 213,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "2449:3:1",
                      "subExpression": {
                        "id": 212,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 205,
                        "src": "2451:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 214,
                    "nodeType": "ExpressionStatement",
                    "src": "2449:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2409:154:1"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "66616c7365",
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2581:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "expression": {
                          "id": 230,
                          "name": "candidates",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "2588:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Candidate_$40_storage_$dyn_storage",
                            "typeString": "struct Voting.Candidate storage ref[] storage ref"
                          }
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2588:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 232,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2580:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                      "typeString": "tuple(bool,uint256)"
                    }
                  },
                  "functionReturnParameters": 203,
                  "id": 233,
                  "nodeType": "Return",
                  "src": "2573:33:1"
                }
              ]
            },
            "documentation": {
              "id": 195,
              "nodeType": "StructuredDocumentation",
              "src": "2122:200:1",
              "text": "@notice Look for a candidate with given address\n @param addr Checking address\n @return True if found else false\n @return Index of the candidate or array length if not found"
            },
            "functionSelector": "dbf7be47",
            "id": 235,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "findCandidate",
            "nameLocation": "2337:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 197,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2359:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2351:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2351:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2350:14:1"
            },
            "returnParameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2386:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2386:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 202,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 235,
                  "src": "2392:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2392:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2385:12:1"
            },
            "scope": 236,
            "src": "2328:286:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 237,
        "src": "102:2515:1",
        "usedErrors": []
      }
    ],
    "src": "40:2579:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.10+commit.fc410830.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xE7130C868E2C86C56255564deB54ED9bc1A22152",
      "transactionHash": "0x7aa43f2dbab4271b3ff5b717ce5676d9262367330d17888e4fe93e2b67df06f9"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0x69ABab51e6f9910a35F9203466220c122b698dcF",
      "transactionHash": "0x26988889d8d6d01444aeb26270fa7e888014ab6c3db38f13f0d51c599914664d"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-03-01T07:30:59.414Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "findCandidate(address)": {
        "params": {
          "addr": "Checking address"
        },
        "returns": {
          "_0": "True if found else false",
          "_1": "Index of the candidate or array length if not found"
        }
      },
      "getAllCandidates()": {
        "returns": {
          "_0": "List of all candidates"
        }
      },
      "isCandidate(address)": {
        "params": {
          "addr": "Checking address"
        },
        "returns": {
          "_0": "True if the address is a candidate else false"
        }
      },
      "vote(address)": {
        "params": {
          "candidateAddress": "Address of your candidate"
        }
      }
    },
    "title": "Simple voting contract",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "findCandidate(address)": {
        "notice": "Look for a candidate with given address"
      },
      "getAllCandidates()": {
        "notice": "Getter for a candidate list"
      },
      "isCandidate(address)": {
        "notice": "Check if the address is already a candidate"
      },
      "participate()": {
        "notice": "Join the voting as a candidate"
      },
      "vote(address)": {
        "notice": "Vote for some candidate"
      }
    },
    "version": 1
  }
}
},{}],2:[function(require,module,exports){
module.exports = class TxRecordHandler {
    constructor(html) {
        this.html = html;
    }

    setTitle(title) {
        this.html.querySelector('.transaction__title').innerText = title;
    }

    setHash(hash) {
        this.html.querySelector('.transaction__hash').innerText = `Hash: ${hash}`;
    }

    setPendingStatus(txLoadingTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = '';
        this.html.querySelector('.transaction__status-img').appendChild(
            txLoadingTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Pending...";

        this.count = 0;
        this.timer = setInterval(() =>{
            this.html.querySelector('.transaction__timer').innerText = this.count;
            ++this.count;
        }, 1000);
    }

    setSuccessStatus(txSuccessTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = ''
        this.html.querySelector('.transaction__status-img').appendChild(
            txSuccessTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Success";

        clearInterval(this.timer);
    }

    setFailedStatus(txFailTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = ''
        this.html.querySelector('.transaction__status-img').appendChild(
            txFailTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Fail";

        clearInterval(this.timer);
    }
}
},{}],3:[function(require,module,exports){
// Faced errors
// 4001 (EIP-1193) - User denied the transaction (clicked deny in popup or closed it)
// -32603 (JSON-RPC) - Internal JSON-RPC error (mostly possible gas estimation failed)
// how to get the reason from require???
// -32000 - -32099 Reserved for implementation-defined errors
// here I can find the reason

const TxRecordHandler = require('./TxRecordHandler.js');

const $ = sel => { return document.querySelector(sel); };

// Templates
const transactionLoadingTmp = $('#transaction-loading').content.firstElementChild;
const checkSignTmp = $('#check-sign').content.firstElementChild;
const transactionRecordTmp = $('#transaction-record').content.firstElementChild;
const errorRecordTmp = $('#error-tmp').content.firstElementChild;
const redCrossTmp = $('#red-cross-tmp').content.firstElementChild;
const eventTmp = $('#event-tmp').content.firstElementChild;

// Contract data
const contract = {
    address: '0x69ABab51e6f9910a35F9203466220c122b698dcF',
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
    instance = await Voting.at(contract.address);

    instance.Vote().on('data', showEvent);
    instance.Join().on('data', showEvent);

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
    if (accounts.length === 0) {
        $('#connection-status').innerText = "You are not connected to MetaMask";
        $('#account').innerText = '';
        $('#chain').innerText = '';
        $('#connect-btn').disabled = false;
        $('.participating').classList.add('visually-hidden');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];

        $('#connection-status').innerText = "You are connected to MetaMask";
        $('#account').innerText = `Address: ${currentAccount}`;
        $('#connect-btn').disabled = true;

        $('.participating').classList.remove('visually-hidden');
        getCandidates();
        setParticipatingStatus();
        setVotedStatus();
    }
}

function handleChainChanged(chainId) {
    if(currentAccount) {
        $('#chain').innerText = `ChainId: ${chainId}`;
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
},{"../../build/contracts/Voting.json":1,"./TxRecordHandler.js":2}]},{},[3]);
