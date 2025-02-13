export const CONTRACTS = {
  "IntentSource": {
    "abi": [
      {
        "inputs": [],
        "name": "ArrayLengthMismatch",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          }
        ],
        "name": "BadClaimant",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CalldataMismatch",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InsufficientNativeReward",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "intentHash",
            "type": "bytes32"
          }
        ],
        "name": "IntentAlreadyExists",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "IntentAlreadyFunded",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidIntent",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NativeRewardTransferFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PermitCallFailed",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          }
        ],
        "name": "RewardsAlreadyWithdrawn",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "RewardsMismatch",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "TransferFailed",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          }
        ],
        "name": "UnauthorizedWithdrawal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "source",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "destination",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "inbox",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct TokenAmount[]",
            "name": "routeTokens",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "target",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct Call[]",
            "name": "calls",
            "type": "tuple[]"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "prover",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "nativeValue",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct TokenAmount[]",
            "name": "rewardTokens",
            "type": "tuple[]"
          }
        ],
        "name": "IntentCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "intentHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "fundingSource",
            "type": "address"
          }
        ],
        "name": "IntentFunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          }
        ],
        "name": "Refund",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          }
        ],
        "name": "Withdrawal",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32[]",
            "name": "routeHashes",
            "type": "bytes32[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "creator",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "prover",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "nativeValue",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct TokenAmount[]",
                "name": "tokens",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Reward[]",
            "name": "rewards",
            "type": "tuple[]"
          }
        ],
        "name": "batchWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "routeHash",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "creator",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "prover",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "nativeValue",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct TokenAmount[]",
                "name": "tokens",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Reward",
            "name": "reward",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "fundingAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "target",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "internalType": "struct Call[]",
            "name": "permitCalls",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "recoverToken",
            "type": "address"
          }
        ],
        "name": "fundIntent",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "intentHash",
            "type": "bytes32"
          }
        ],
        "name": "getClaim",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "claimant",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "status",
                "type": "uint8"
              }
            ],
            "internalType": "struct IIntentSource.ClaimState",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getFundingSource",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "source",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "destination",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "inbox",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Route",
                "name": "route",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "prover",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "nativeValue",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Reward",
                "name": "reward",
                "type": "tuple"
              }
            ],
            "internalType": "struct Intent",
            "name": "intent",
            "type": "tuple"
          }
        ],
        "name": "getIntentHash",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "intentHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "routeHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "rewardHash",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getRefundToken",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "source",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "destination",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "inbox",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Route",
                "name": "route",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "prover",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "nativeValue",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Reward",
                "name": "reward",
                "type": "tuple"
              }
            ],
            "internalType": "struct Intent",
            "name": "intent",
            "type": "tuple"
          }
        ],
        "name": "intentFunderAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "source",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "destination",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "inbox",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Route",
                "name": "route",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "prover",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "nativeValue",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Reward",
                "name": "reward",
                "type": "tuple"
              }
            ],
            "internalType": "struct Intent",
            "name": "intent",
            "type": "tuple"
          }
        ],
        "name": "intentVaultAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "source",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "destination",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "inbox",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Route",
                "name": "route",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "prover",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "nativeValue",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Reward",
                "name": "reward",
                "type": "tuple"
              }
            ],
            "internalType": "struct Intent",
            "name": "intent",
            "type": "tuple"
          }
        ],
        "name": "isIntentFunded",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "source",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "destination",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "inbox",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Route",
                "name": "route",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "prover",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "nativeValue",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct TokenAmount[]",
                    "name": "tokens",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Reward",
                "name": "reward",
                "type": "tuple"
              }
            ],
            "internalType": "struct Intent",
            "name": "intent",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "fund",
            "type": "bool"
          }
        ],
        "name": "publishIntent",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "intentHash",
            "type": "bytes32"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "routeHash",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "creator",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "prover",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "nativeValue",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct TokenAmount[]",
                "name": "tokens",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Reward",
            "name": "reward",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "refundIntent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "routeHash",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "creator",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "prover",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "nativeValue",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct TokenAmount[]",
                "name": "tokens",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Reward",
            "name": "reward",
            "type": "tuple"
          }
        ],
        "name": "withdrawRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "network": {
      "optimism": {
        "address": [
          "0x6a3F608cc053c51a9C87897Ee376C992EAbF7BDF",
          "0x70DEC727528ffcDaFAC9EF0cc14147E959558168",
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0xC9Ed3d804A604EAdddc8B1313b4293B680Ae2Fe5",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 128000000
      },
      "base": {
        "address": [
          "0x6a3F608cc053c51a9C87897Ee376C992EAbF7BDF",
          "0x70DEC727528ffcDaFAC9EF0cc14147E959558168",
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0xC9Ed3d804A604EAdddc8B1313b4293B680Ae2Fe5",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 22000000
      },
      "mantle": {
        "address": [
          "0x6a3F608cc053c51a9C87897Ee376C992EAbF7BDF",
          "0x26E1E5C42206c07A1f678b18d2ed909EF0abF50b",
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0x7ac9A3f572b5BDC34C1E45685C0A619aEB76665d",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 71000000
      },
      "arbitrum": {
        "address": [
          "0x6a3F608cc053c51a9C87897Ee376C992EAbF7BDF",
          "0x26E1E5C42206c07A1f678b18d2ed909EF0abF50b",
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0xC9Ed3d804A604EAdddc8B1313b4293B680Ae2Fe5",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 268000000
      },
      "polygon": {
        "address": [
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0xC9Ed3d804A604EAdddc8B1313b4293B680Ae2Fe5",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 67000000
      },
      "mainnet": {
        "address": [
          "0xFb26179cF0bcb30bC65eF2f142a418EC66Fa973A",
          "0x38b85A2a3493587DB03afb20da9c22E5c2cf49C3",
          "0x9c279fe3cE3eEc5635F4727586C5DdFd44C0fa34",
          "0x58b9e4d5EC0636ADCdA76DF181fa8f73bF930a13"
        ],
        "startBlock": 21700000
      }
    }
  }
} as const;