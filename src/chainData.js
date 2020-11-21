export const contract = {
    food: {
      address: '0xf3348f43503D35cAD421864d941CD89Bc3A0b797',
      lpAddress: '0x69cfc0b5af7231b316de8681f81a205338e94973',
      rewards: '0x382c3db5f61B581ECFea3446Bbd18909001A551D'
    },
    fusdc: {
      address: '0x6b951017a3212edc6b275976bfdd50969f6e1c62',
      lpAddress: '0x6fc30adedd79ffb4cbb2fdbef1f779bbf3aa8d36',
      pegAddress: '0xbF96804d0e9518EA4Ef2e11d408177abfd06066b',
      rewards: '0xDc3AE2611Dd77985EA71985F99922F7B2303c010',
    },
    feth: {
      address: '0x0a8d64E729F613B3FF58ED4A345459af4E7dc7FE',
      lpAddress: '0x34C4F59FeD483E540770991a6713E4e7f881e27E',
      pegAddress: '0x390Cd0A9aEeC4AbAdaCceD1863e865C226904fB0',
      rewards: '0x516199e60C5BEd1617538Cf75cF2fa1a951E3Dff',
    },
    usdc: {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    },
    weth: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    fToken: {
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
    erc20Token: {
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
    uniswap: {
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      abi: [
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "_factory",
                    'type': "address"
                },
                {
                    'internalType': "address",
                    'name': "_WETH",
                    'type': "address"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "constructor"
        },
        {
            'inputs': [],
            'name': "WETH",
            'outputs': [
                {
                    'internalType': "address",
                    'name': "",
                    'type': "address"
                }
            ],
            'stateMutability': "view",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "tokenA",
                    'type': "address"
                },
                {
                    'internalType': "address",
                    'name': "tokenB",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "amountADesired",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountBDesired",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountAMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountBMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "addLiquidity",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountA",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountB",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "token",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenDesired",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETHMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "addLiquidityETH",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountToken",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETH",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                }
            ],
            'stateMutability': "payable",
            'type': "function"
        },
        {
            'inputs': [],
            'name': "factory",
            'outputs': [
                {
                    'internalType': "address",
                    'name': "",
                    'type': "address"
                }
            ],
            'stateMutability': "view",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveOut",
                    'type': "uint256"
                }
            ],
            'name': "getAmountIn",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                }
            ],
            'stateMutability': "pure",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveOut",
                    'type': "uint256"
                }
            ],
            'name': "getAmountOut",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                }
            ],
            'stateMutability': "pure",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                }
            ],
            'name': "getAmountsIn",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "view",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                }
            ],
            'name': "getAmountsOut",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "view",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountA",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveA",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "reserveB",
                    'type': "uint256"
                }
            ],
            'name': "quote",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountB",
                    'type': "uint256"
                }
            ],
            'stateMutability': "pure",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "tokenA",
                    'type': "address"
                },
                {
                    'internalType': "address",
                    'name': "tokenB",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountAMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountBMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "removeLiquidity",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountA",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountB",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "token",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETHMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "removeLiquidityETH",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountToken",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETH",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "token",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETHMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "removeLiquidityETHSupportingFeeOnTransferTokens",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountETH",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "token",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETHMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                },
                {
                    'internalType': "bool",
                    'name': "approveMax",
                    'type': "bool"
                },
                {
                    'internalType': "uint8",
                    'name': "v",
                    'type': "uint8"
                },
                {
                    'internalType': "bytes32",
                    'name': "r",
                    'type': "bytes32"
                },
                {
                    'internalType': "bytes32",
                    'name': "s",
                    'type': "bytes32"
                }
            ],
            'name': "removeLiquidityETHWithPermit",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountToken",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETH",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "token",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountTokenMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountETHMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                },
                {
                    'internalType': "bool",
                    'name': "approveMax",
                    'type': "bool"
                },
                {
                    'internalType': "uint8",
                    'name': "v",
                    'type': "uint8"
                },
                {
                    'internalType': "bytes32",
                    'name': "r",
                    'type': "bytes32"
                },
                {
                    'internalType': "bytes32",
                    'name': "s",
                    'type': "bytes32"
                }
            ],
            'name': "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountETH",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "address",
                    'name': "tokenA",
                    'type': "address"
                },
                {
                    'internalType': "address",
                    'name': "tokenB",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "liquidity",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountAMin",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountBMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                },
                {
                    'internalType': "bool",
                    'name': "approveMax",
                    'type': "bool"
                },
                {
                    'internalType': "uint8",
                    'name': "v",
                    'type': "uint8"
                },
                {
                    'internalType': "bytes32",
                    'name': "r",
                    'type': "bytes32"
                },
                {
                    'internalType': "bytes32",
                    'name': "s",
                    'type': "bytes32"
                }
            ],
            'name': "removeLiquidityWithPermit",
            'outputs': [
                {
                    'internalType': "uint256",
                    'name': "amountA",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountB",
                    'type': "uint256"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapETHForExactTokens",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "payable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactETHForTokens",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "payable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactETHForTokensSupportingFeeOnTransferTokens",
            'outputs': [],
            'stateMutability': "payable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactTokensForETH",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactTokensForETHSupportingFeeOnTransferTokens",
            'outputs': [],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactTokensForTokens",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountIn",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountOutMin",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            'outputs': [],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountInMax",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapTokensForExactETH",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'inputs': [
                {
                    'internalType': "uint256",
                    'name': "amountOut",
                    'type': "uint256"
                },
                {
                    'internalType': "uint256",
                    'name': "amountInMax",
                    'type': "uint256"
                },
                {
                    'internalType': "address[]",
                    'name': "path",
                    'type': "address[]"
                },
                {
                    'internalType': "address",
                    'name': "to",
                    'type': "address"
                },
                {
                    'internalType': "uint256",
                    'name': "deadline",
                    'type': "uint256"
                }
            ],
            'name': "swapTokensForExactTokens",
            'outputs': [
                {
                    'internalType': "uint256[]",
                    'name': "amounts",
                    'type': "uint256[]"
                }
            ],
            'stateMutability': "nonpayable",
            'type': "function"
        },
        {
            'stateMutability': "payable",
            'type': "receive"
        }
      ],
    },
};

export const wallets = {
  treasury: '0xC4d50A70E0D060fFE9906f670bD4BcDc3769D0c2',
  marketing: '0x8a9a2641140585F21cB15E4b7b1cdC2992dF5d00',
  payroll: '0xBCA493A63c172a6798fEE00958A32682A5a0328B',
  trading: '0x0e9842C3Ee400CDe4691E303e15f78ab418f73ad',
}

export const bigNumberString = '1000000000000000000'