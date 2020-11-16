export const contract = {
    food: {
      address: '0xf3348f43503D35cAD421864d941CD89Bc3A0b797',
      abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "addMinter",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceMinter",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "isMinter",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        }
      ],
    },
    fUSDC: {
      address: '0x6b951017a3212edc6b275976bfdd50969f6e1c62',
      abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "spender",
              "type": "address"
            },
            {
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "from",
              "type": "address"
            },
            {
              "name": "to",
              "type": "address"
            },
            {
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "spender",
              "type": "address"
            },
            {
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "who",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "epoch",
              "type": "uint256"
            },
            {
              "name": "supplyDelta",
              "type": "int256"
            }
          ],
          "name": "rebase",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "monetaryPolicy_",
              "type": "address"
            }
          ],
          "name": "setMonetaryPolicy",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "monetaryPolicy",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "spender",
              "type": "address"
            },
            {
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "to",
              "type": "address"
            },
            {
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "owner_",
              "type": "address"
            },
            {
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_name",
              "type": "string"
            },
            {
              "name": "_symbol",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "epoch",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "LogRebase",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "monetaryPolicy",
              "type": "address"
            }
          ],
          "name": "LogMonetaryPolicyUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        }
      ],
      pegAddress: '0xbF96804d0e9518EA4Ef2e11d408177abfd06066b',
      pegAbi: [
        {
            'constant': true,
            'inputs': [],
            'name': "getData",
            'outputs': [
                {
                    'name': "",
                    'type': "uint256"
                },
                {
                    'name': "",
                    'type': "bool"
                }
            ],
            'payable': false,
            'stateMutability': "view",
            'type': "function"
        },
        {
            'constant': false,
            'inputs': [],
            'name': "renounceOwnership",
            'outputs': [],
            'payable': false,
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'constant': true,
            'inputs': [],
            'name': "owner",
            'outputs': [
                {
                    'name': "",
                    'type': "address"
                }
            ],
            'payable': false,
            'stateMutability': "view",
            'type': "function"
        },
        {
            'constant': true,
            'inputs': [],
            'name': "isOwner",
            'outputs': [
                {
                    'name': "",
                    'type': "bool"
                }
            ],
            'payable': false,
            'stateMutability': "view",
            'type': "function"
        },
        {
            'constant': false,
            'inputs': [
                {
                    'name': "_price",
                    'type': "uint256"
                }
            ],
            'name': "setPrice",
            'outputs': [],
            'payable': false,
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'constant': true,
            'inputs': [],
            'name': "price",
            'outputs': [
                {
                    'name': "",
                    'type': "uint256"
                }
            ],
            'payable': false,
            'stateMutability': "view",
            'type': "function"
        },
        {
            'constant': false,
            'inputs': [
                {
                    'name': "newOwner",
                    'type': "address"
                }
            ],
            'name': "transferOwnership",
            'outputs': [],
            'payable': false,
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'name': "_price",
                    'type': "uint256"
                }
            ],
            'name': "constructor",
            'payable': false,
            'stateMutability': "nonpayable",
            'type': "constructor"
        },
        {
            'anonymous': false,
            'inputs': [
                {
                    'indexed': true,
                    'name': "previousOwner",
                    'type': "address"
                },
                {
                    'indexed': true,
                    'name': "newOwner",
                    'type': "address"
                }
            ],
            'name': "OwnershipTransferred",
            'type': "event"
        }
      ],
    },
    fETH: {
      address: '0x0a8d64E729F613B3FF58ED4A345459af4E7dc7FE',
      abi: [

      ],
    },
    orchestrator: {
      abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "policy",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "destination",
              "type": "address"
            },
            {
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "addTransaction",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "removeTransaction",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "index",
              "type": "uint256"
            },
            {
              "name": "enabled",
              "type": "bool"
            }
          ],
          "name": "setTransactionEnabled",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "transactionsSize",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "transactions",
          "outputs": [
            {
              "name": "enabled",
              "type": "bool"
            },
            {
              "name": "destination",
              "type": "address"
            },
            {
              "name": "data",
              "type": "bytes"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "rebase",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "policy_",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "destination",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "TransactionFailed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        }
      ],
    },
    policy: {
      abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "minRebaseTimeIntervalSec",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "inRebaseWindow",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "minRebaseTimeIntervalSec_",
              "type": "uint256"
            },
            {
              "name": "rebaseWindowOffsetSec_",
              "type": "uint256"
            },
            {
              "name": "rebaseWindowLengthSec_",
              "type": "uint256"
            }
          ],
          "name": "setRebaseTimingParameters",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "negRebaseLag",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "rebaseLag_",
              "type": "uint256"
            }
          ],
          "name": "setRebaseLag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "lastRebaseTimestampSec",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "cpiOracle_",
              "type": "address"
            }
          ],
          "name": "setCpiOracle",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "negRebaseLag_",
              "type": "uint256"
            }
          ],
          "name": "setNegRebaseLag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "deviationThreshold_",
              "type": "uint256"
            }
          ],
          "name": "setDeviationThreshold",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "marketOracle",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "rebaseLag",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "rebaseWindowOffsetSec",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "epoch",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "rebaseWindowLengthSec",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "marketOracle_",
              "type": "address"
            }
          ],
          "name": "setMarketOracle",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "cpiOracle",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "rebase",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "orchestrator",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "orchestrator_",
              "type": "address"
            }
          ],
          "name": "setOrchestrator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "uFrags",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "deviationThreshold",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "uFrags_",
              "type": "address"
            },
            {
              "name": "baseCpi_",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "epoch",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "exchangeRate",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "cpi",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "requestedSupplyAdjustment",
              "type": "int256"
            },
            {
              "indexed": false,
              "name": "timestampSec",
              "type": "uint256"
            }
          ],
          "name": "LogRebase",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        }
      ],
    },
};

export const wallets = {
  treasury: '0xC4d50A70E0D060fFE9906f670bD4BcDc3769D0c2',
  rewards: '0x516199e60C5BEd1617538Cf75cF2fa1a951E3Dff',
  marketing: '0x8a9a2641140585F21cB15E4b7b1cdC2992dF5d00',
  payroll: '0xBCA493A63c172a6798fEE00958A32682A5a0328B',
}