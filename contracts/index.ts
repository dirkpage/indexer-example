export const CONTRACTS = {
  "Prover": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_settlementBlocksDelay",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint8",
                    "name": "provingMechanism",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "settlementChainId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "settlementContract",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "blockhashOracle",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "outputRootVersionNumber",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "finalityDelaySeconds",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Prover.ChainConfiguration",
                "name": "chainConfiguration",
                "type": "tuple"
              }
            ],
            "internalType": "struct Prover.ChainConfigurationConstructor[]",
            "name": "_chainConfigurations",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_blockTimeStamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_finalityDelayTimeStamp",
            "type": "uint256"
          }
        ],
        "name": "BlockBeforeFinalityPeriod",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_blockProofStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_l2WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "DestinationChainStateRootNotProved",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "_gameStatus",
            "type": "uint8"
          }
        ],
        "name": "FaultDisputeGameUnresolved",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_disputeGameFactoryStateRoot",
            "type": "bytes"
          }
        ],
        "name": "IncorrectDisputeGameFactoryStateRoot",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_inboxStateRoot",
            "type": "bytes"
          }
        ],
        "name": "IncorrectInboxStateRoot",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_outputOracleStateRoot",
            "type": "bytes"
          }
        ],
        "name": "IncorrectOutputOracleStateRoot",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_address",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "_proof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          }
        ],
        "name": "InvalidAccountProof",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_expectedBlockHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_calculatedBlockHash",
            "type": "bytes32"
          }
        ],
        "name": "InvalidRLPEncodedBlock",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_key",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_val",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "_proof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          }
        ],
        "name": "InvalidStorageProof",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_inputBlockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_nextProvableBlockNumber",
            "type": "uint256"
          }
        ],
        "name": "NeedLaterBlock",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_inputBlockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_latestBlockNumber",
            "type": "uint256"
          }
        ],
        "name": "OutdatedBlock",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_blockProofStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_l1WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "SettlementChainStateRootNotProved",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          }
        ],
        "name": "IntentProven",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_L1WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "L1WorldStateProven",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_destinationChainID",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_L2WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "L2WorldStateProven",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "L2_DISPUTE_GAME_FACTORY_LIST_SLOT_NUMBER",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "L2_FAULT_DISPUTE_GAME_ROOT_CLAIM_SLOT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "L2_FAULT_DISPUTE_GAME_STATUS_SLOT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "L2_OUTPUT_ROOT_VERSION_NUMBER",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "L2_OUTPUT_SLOT_NUMBER",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PROOF_TYPE",
        "outputs": [
          {
            "internalType": "enum IProver.ProofType",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "SETTLEMENT_BLOCKS_DELAY",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "createdAt",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "resolvedAt",
            "type": "uint64"
          },
          {
            "internalType": "uint8",
            "name": "gameStatus",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "initialized",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "l2BlockNumberChallenged",
            "type": "bool"
          }
        ],
        "name": "assembleGameStatusStorage",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "gameStatusStorageSlotRLP",
            "type": "bytes"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "chainConfigurations",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "provingMechanism",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "settlementChainId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "settlementContract",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "blockhashOracle",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "outputRootVersionNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finalityDelaySeconds",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "outputRootVersion",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "worldStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "messagePasserStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "latestBlockHash",
            "type": "bytes32"
          }
        ],
        "name": "generateOutputRoot",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getProofType",
        "outputs": [
          {
            "internalType": "enum IProver.ProofType",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "l1BlockhashOracle",
        "outputs": [
          {
            "internalType": "contract IL1Block",
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
            "internalType": "uint32",
            "name": "_gameType",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "_timestamp",
            "type": "uint64"
          },
          {
            "internalType": "address",
            "name": "_gameProxy",
            "type": "address"
          }
        ],
        "name": "pack",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "gameId_",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_address",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "_proof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          }
        ],
        "name": "proveAccount",
        "outputs": [],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "claimant",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "inboxContract",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "intermediateHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes[]",
            "name": "l2StorageProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes",
            "name": "rlpEncodedInboxData",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "l2AccountProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "l2WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "proveIntent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "rlpEncodedBlockData",
            "type": "bytes"
          }
        ],
        "name": "proveSettlementLayerState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_key",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_val",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "_proof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          }
        ],
        "name": "proveStorage",
        "outputs": [],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "rlpEncodedBlockData",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "l2WorldStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "l2MessagePasserStateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "l2OutputIndex",
            "type": "uint256"
          },
          {
            "internalType": "bytes[]",
            "name": "l1StorageProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes",
            "name": "rlpEncodedOutputOracleData",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "l1AccountProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "l1WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "proveWorldStateBedrock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "rlpEncodedBlockData",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "l2WorldStateRoot",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "messagePasserStateRoot",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "latestBlockHash",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "gameIndex",
                "type": "uint256"
              },
              {
                "internalType": "bytes32",
                "name": "gameId",
                "type": "bytes32"
              },
              {
                "internalType": "bytes[]",
                "name": "disputeFaultGameStorageProof",
                "type": "bytes[]"
              },
              {
                "internalType": "bytes",
                "name": "rlpEncodedDisputeGameFactoryData",
                "type": "bytes"
              },
              {
                "internalType": "bytes[]",
                "name": "disputeGameFactoryAccountProof",
                "type": "bytes[]"
              }
            ],
            "internalType": "struct Prover.DisputeGameFactoryProofData",
            "name": "disputeGameFactoryProofData",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "faultDisputeGameStateRoot",
                "type": "bytes32"
              },
              {
                "internalType": "bytes[]",
                "name": "faultDisputeGameRootClaimStorageProof",
                "type": "bytes[]"
              },
              {
                "components": [
                  {
                    "internalType": "uint64",
                    "name": "createdAt",
                    "type": "uint64"
                  },
                  {
                    "internalType": "uint64",
                    "name": "resolvedAt",
                    "type": "uint64"
                  },
                  {
                    "internalType": "uint8",
                    "name": "gameStatus",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "initialized",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "l2BlockNumberChallenged",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Prover.FaultDisputeGameStatusSlotData",
                "name": "faultDisputeGameStatusSlotData",
                "type": "tuple"
              },
              {
                "internalType": "bytes[]",
                "name": "faultDisputeGameStatusStorageProof",
                "type": "bytes[]"
              },
              {
                "internalType": "bytes",
                "name": "rlpEncodedFaultDisputeGameData",
                "type": "bytes"
              },
              {
                "internalType": "bytes[]",
                "name": "faultDisputeGameAccountProof",
                "type": "bytes[]"
              }
            ],
            "internalType": "struct Prover.FaultDisputeGameProofData",
            "name": "faultDisputeGameProofData",
            "type": "tuple"
          },
          {
            "internalType": "bytes32",
            "name": "l1WorldStateRoot",
            "type": "bytes32"
          }
        ],
        "name": "proveWorldStateCannon",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "provenIntents",
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
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "provenStates",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "blockHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "stateRoot",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "dataList",
            "type": "bytes[]"
          }
        ],
        "name": "rlpEncodeDataLibList",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_gameId",
            "type": "bytes32"
          }
        ],
        "name": "unpack",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "gameType_",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "timestamp_",
            "type": "uint64"
          },
          {
            "internalType": "address",
            "name": "gameProxy_",
            "type": "address"
          }
        ],
        "stateMutability": "pure",
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
      }
    ],
    "network": {
      "optimism": {
        "address": [
          "0x966A5eC671849635C67425c297d108d41f8C0B57",
          "0x7014D323F3c674c3e4292EcD84b7A5EeEA63B184",
          "0x4Cc5107b83E38b43b8004740358D52B71eA31Ee9",
          "0xf73dE58109DbB9F1aDee1FB323eF83338374A595",
          "0xdEFBB22ADc12f71009A2447E984cFb2C73571A66",
          "0x5FE1b2e7C557fb16739DE1c790619f03Ec063cCc",
          "0x33ae0AC52Cbc66B822C67211F1D074755a006259",
          "0xEa6d787dfCd5bafD4C1d1B185B225624F0c7F1B9",
          "0x9D196c560B1d051DdF3A4523D5a9bb6848bE6604",
          "0x602b9c932507743e2306965563a3419DdaDbae28"
        ],
        "startBlock": 128000000
      },
      "mantle": {
        "address": [
          "0x966A5eC671849635C67425c297d108d41f8C0B57",
          "0x7014D323F3c674c3e4292EcD84b7A5EeEA63B184",
          "0x4Cc5107b83E38b43b8004740358D52B71eA31Ee9",
          "0xf73dE58109DbB9F1aDee1FB323eF83338374A595",
          "0xdEFBB22ADc12f71009A2447E984cFb2C73571A66",
          "0x5FE1b2e7C557fb16739DE1c790619f03Ec063cCc",
          "0x33ae0AC52Cbc66B822C67211F1D074755a006259",
          "0xEa6d787dfCd5bafD4C1d1B185B225624F0c7F1B9",
          "0x9D196c560B1d051DdF3A4523D5a9bb6848bE6604",
          "0xe92FB30e15E6Ef4EC0d4A35De55DAD590347262C"
        ],
        "startBlock": 71000000
      },
      "base": {
        "address": [
          "0x966A5eC671849635C67425c297d108d41f8C0B57",
          "0x7014D323F3c674c3e4292EcD84b7A5EeEA63B184",
          "0x4Cc5107b83E38b43b8004740358D52B71eA31Ee9",
          "0xf73dE58109DbB9F1aDee1FB323eF83338374A595",
          "0xdEFBB22ADc12f71009A2447E984cFb2C73571A66",
          "0x5FE1b2e7C557fb16739DE1c790619f03Ec063cCc",
          "0x33ae0AC52Cbc66B822C67211F1D074755a006259",
          "0xEa6d787dfCd5bafD4C1d1B185B225624F0c7F1B9",
          "0x9D196c560B1d051DdF3A4523D5a9bb6848bE6604",
          "0x602b9c932507743e2306965563a3419DdaDbae28"
        ],
        "startBlock": 22000000
      }
    }
  },
  "Inbox": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_isSolvingPublic",
            "type": "bool"
          },
          {
            "internalType": "address[]",
            "name": "_solvers",
            "type": "address[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "BatchTooLarge",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CallToMailbox",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_requiredFee",
            "type": "uint256"
          }
        ],
        "name": "InsufficientFee",
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
        "name": "IntentAlreadyFulfilled",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_returnData",
            "type": "bytes"
          }
        ],
        "name": "IntentCallFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "IntentExpired",
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
        "name": "IntentNotFulfilled",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_expectedHash",
            "type": "bytes32"
          }
        ],
        "name": "InvalidHash",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_solver",
            "type": "address"
          }
        ],
        "name": "UnauthorizedSolveAttempt",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "UnauthorizedTransferNative",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ZeroClaimant",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          }
        ],
        "name": "AddToBatch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          }
        ],
        "name": "Fulfillment",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          }
        ],
        "name": "HyperInstantFulfillment",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_mailbox",
            "type": "address"
          }
        ],
        "name": "MailboxSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
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
            "internalType": "address",
            "name": "_solver",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "bool",
            "name": "_canSolve",
            "type": "bool"
          }
        ],
        "name": "SolverWhitelistChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "SolvingIsPublic",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          }
        ],
        "name": "ToBeProven",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "MAX_BATCH_SIZE",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_solver",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_canSolve",
            "type": "bool"
          }
        ],
        "name": "changeSolverWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_prover",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_messageBody",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_metadata",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "_postDispatchHook",
            "type": "address"
          }
        ],
        "name": "fetchFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "_targets",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "_data",
            "type": "bytes[]"
          },
          {
            "internalType": "uint256",
            "name": "_expiryTime",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_nonce",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_expectedHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          }
        ],
        "name": "fulfillHyperBatched",
        "outputs": [
          {
            "internalType": "bytes[]",
            "name": "",
            "type": "bytes[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "_targets",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "_data",
            "type": "bytes[]"
          },
          {
            "internalType": "uint256",
            "name": "_expiryTime",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_nonce",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_expectedHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          }
        ],
        "name": "fulfillHyperInstant",
        "outputs": [
          {
            "internalType": "bytes[]",
            "name": "",
            "type": "bytes[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "_targets",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "_data",
            "type": "bytes[]"
          },
          {
            "internalType": "uint256",
            "name": "_expiryTime",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_nonce",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_expectedHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_metadata",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "_postDispatchHook",
            "type": "address"
          }
        ],
        "name": "fulfillHyperInstantWithRelayer",
        "outputs": [
          {
            "internalType": "bytes[]",
            "name": "",
            "type": "bytes[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "_targets",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "_data",
            "type": "bytes[]"
          },
          {
            "internalType": "uint256",
            "name": "_expiryTime",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_nonce",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_expectedHash",
            "type": "bytes32"
          }
        ],
        "name": "fulfillStorage",
        "outputs": [
          {
            "internalType": "bytes[]",
            "name": "",
            "type": "bytes[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "fulfilled",
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
        "inputs": [],
        "name": "isSolvingPublic",
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
        "inputs": [],
        "name": "mailbox",
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
        "inputs": [],
        "name": "makeSolvingPublic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          },
          {
            "internalType": "bytes32[]",
            "name": "_intentHashes",
            "type": "bytes32[]"
          }
        ],
        "name": "sendBatch",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sourceChainID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_prover",
            "type": "address"
          },
          {
            "internalType": "bytes32[]",
            "name": "_intentHashes",
            "type": "bytes32[]"
          },
          {
            "internalType": "bytes",
            "name": "_metadata",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "_postDispatchHook",
            "type": "address"
          }
        ],
        "name": "sendBatchWithRelayer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_mailbox",
            "type": "address"
          }
        ],
        "name": "setMailbox",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "solverWhitelist",
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
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "transferNative",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
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
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "network": {
      "optimism": {
        "address": [
          "0x0D53015b7870F2d667b4807D8BcD1022a1192c24",
          "0x620B3821dE01d82c61C4e0977B313B1cF31e91A1",
          "0x99bc55Df1eb02dB64fF20fE457c996b2D53bFf7E",
          "0x747a888a09Af3E4034a14e723017986Da6ae70D4",
          "0xE9f4991f1f63366D3Ded82a7725fCE4427894f67",
          "0x4CE78a39255179C1939f5E672e653D0d72497731",
          "0x6FB9ff9B95B2E61aa4c471ee999315323567c0D5",
          "0x5B293bcB50b31a09a32527B6D38407D9A03eF7b0",
          "0x95CdC42C0d4E1fc9BabC3c2e088ECA928F6Bd0A5",
          "0x91105Dde5Ae0056f55554B585F5D3f9CFd629217",
          "0xB9D8c17e421390a0999B14eBcc3c37A6832C7CAd",
          "0x5334Ff242c3eF1972D5c877eee9a854CC8C46d91",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 128000000
      },
      "polygon": {
        "address": [
          "0x0D53015b7870F2d667b4807D8BcD1022a1192c24",
          "0x620B3821dE01d82c61C4e0977B313B1cF31e91A1",
          "0xB9D8c17e421390a0999B14eBcc3c37A6832C7CAd",
          "0x5334Ff242c3eF1972D5c877eee9a854CC8C46d91",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 67000000
      },
      "mantle": {
        "address": [
          "0x0D53015b7870F2d667b4807D8BcD1022a1192c24",
          "0x620B3821dE01d82c61C4e0977B313B1cF31e91A1",
          "0x99bc55Df1eb02dB64fF20fE457c996b2D53bFf7E",
          "0x747a888a09Af3E4034a14e723017986Da6ae70D4",
          "0xE9f4991f1f63366D3Ded82a7725fCE4427894f67",
          "0x4CE78a39255179C1939f5E672e653D0d72497731",
          "0x6FB9ff9B95B2E61aa4c471ee999315323567c0D5",
          "0x5B293bcB50b31a09a32527B6D38407D9A03eF7b0",
          "0xdb49f05196B3d05C3f8207b8af8b46863c1380a9",
          "0x8Ffca1BBEa2aA6291EE6AFb4605F12b39de66480",
          "0x5E45f17736A43A8CDAE8F582316c554ddD144708",
          "0xF070c8579dd93e90Ef2E84Af77aFBEC9f4dE4191",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 71000000
      },
      "base": {
        "address": [
          "0x0D53015b7870F2d667b4807D8BcD1022a1192c24",
          "0x620B3821dE01d82c61C4e0977B313B1cF31e91A1",
          "0x99bc55Df1eb02dB64fF20fE457c996b2D53bFf7E",
          "0x747a888a09Af3E4034a14e723017986Da6ae70D4",
          "0xE9f4991f1f63366D3Ded82a7725fCE4427894f67",
          "0x4CE78a39255179C1939f5E672e653D0d72497731",
          "0x6FB9ff9B95B2E61aa4c471ee999315323567c0D5",
          "0x5B293bcB50b31a09a32527B6D38407D9A03eF7b0",
          "0x95CdC42C0d4E1fc9BabC3c2e088ECA928F6Bd0A5",
          "0x91105Dde5Ae0056f55554B585F5D3f9CFd629217",
          "0xB9D8c17e421390a0999B14eBcc3c37A6832C7CAd",
          "0x5334Ff242c3eF1972D5c877eee9a854CC8C46d91",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 22000000
      },
      "arbitrum": {
        "address": [
          "0x0D53015b7870F2d667b4807D8BcD1022a1192c24",
          "0x620B3821dE01d82c61C4e0977B313B1cF31e91A1",
          "0x99bc55Df1eb02dB64fF20fE457c996b2D53bFf7E",
          "0x747a888a09Af3E4034a14e723017986Da6ae70D4",
          "0xE9f4991f1f63366D3Ded82a7725fCE4427894f67",
          "0x4CE78a39255179C1939f5E672e653D0d72497731",
          "0x6FB9ff9B95B2E61aa4c471ee999315323567c0D5",
          "0x5B293bcB50b31a09a32527B6D38407D9A03eF7b0",
          "0xdb49f05196B3d05C3f8207b8af8b46863c1380a9",
          "0x8Ffca1BBEa2aA6291EE6AFb4605F12b39de66480",
          "0xB9D8c17e421390a0999B14eBcc3c37A6832C7CAd",
          "0x5334Ff242c3eF1972D5c877eee9a854CC8C46d91",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 268000000
      },
      "mainnet": {
        "address": [
          "0xbE35f33F978006c777E033A868a19cfC200786E6",
          "0x454a0cb2d568dA2cb6567ce4676E1Cf20bDC6384",
          "0xC78658538815Bf46ABa699D26FC3E08498E3c490",
          "0x67fE9a2c9118A495b926f65998386ad2a701e580"
        ],
        "startBlock": 21700000
      }
    }
  },
  "HyperProver": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_mailbox",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_inbox",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          }
        ],
        "name": "UnauthorizedDispatch",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          }
        ],
        "name": "UnauthorizedHandle",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_intentHash",
            "type": "bytes32"
          }
        ],
        "name": "IntentAlreadyProven",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_claimant",
            "type": "address"
          }
        ],
        "name": "IntentProven",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "INBOX",
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
        "inputs": [],
        "name": "MAILBOX",
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
        "inputs": [],
        "name": "PROOF_TYPE",
        "outputs": [
          {
            "internalType": "enum IProver.ProofType",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getProofType",
        "outputs": [
          {
            "internalType": "enum IProver.ProofType",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_messageBody",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "provenIntents",
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
      }
    ],
    "network": {
      "optimism": {
        "address": [
          "0x2a9153fBB1e053f4E3C8CDa6b1d33371c20e06C0",
          "0xD1346F45C50cF21c5a3d209e7040bb6f6753347f",
          "0xA32e0B3620D9946c6ee1be6c3C6Ceb5fe3E27174",
          "0x530b76e98fd66b45b9a1FD7F06a5635746d181f2",
          "0x208BF91ce8f23f94Fcfa8Ba42a9dd0f5Dfe4A529",
          "0xFB0D7B75A2f2D497EeB033bad4ac69d3fF4e4D65",
          "0x5514B884C9EDcef7081e0D40F2780A5dCdb754C3",
          "0x31a72da6226378233e409C30B2948BBf747CDFd2",
          "0x5fb068879aBFE322d441620e5650551e9927fE4D",
          "0x6d5776c6a181E6698b3aE803c2b768BFe76986dA",
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 128000000
      },
      "polygon": {
        "address": [
          "0x2a9153fBB1e053f4E3C8CDa6b1d33371c20e06C0",
          "0xD1346F45C50cF21c5a3d209e7040bb6f6753347f",
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 67000000
      },
      "mantle": {
        "address": [
          "0x2a9153fBB1e053f4E3C8CDa6b1d33371c20e06C0",
          "0xD1346F45C50cF21c5a3d209e7040bb6f6753347f",
          "0xA32e0B3620D9946c6ee1be6c3C6Ceb5fe3E27174",
          "0x530b76e98fd66b45b9a1FD7F06a5635746d181f2",
          "0x208BF91ce8f23f94Fcfa8Ba42a9dd0f5Dfe4A529",
          "0xFB0D7B75A2f2D497EeB033bad4ac69d3fF4e4D65",
          "0x5514B884C9EDcef7081e0D40F2780A5dCdb754C3",
          "0x31a72da6226378233e409C30B2948BBf747CDFd2",
          "0x5fb068879aBFE322d441620e5650551e9927fE4D",
          "0x6d5776c6a181E6698b3aE803c2b768BFe76986dA",
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 71000000
      },
      "base": {
        "address": [
          "0x2a9153fBB1e053f4E3C8CDa6b1d33371c20e06C0",
          "0xD1346F45C50cF21c5a3d209e7040bb6f6753347f",
          "0xA32e0B3620D9946c6ee1be6c3C6Ceb5fe3E27174",
          "0x530b76e98fd66b45b9a1FD7F06a5635746d181f2",
          "0x208BF91ce8f23f94Fcfa8Ba42a9dd0f5Dfe4A529",
          "0xFB0D7B75A2f2D497EeB033bad4ac69d3fF4e4D65",
          "0x5514B884C9EDcef7081e0D40F2780A5dCdb754C3",
          "0x31a72da6226378233e409C30B2948BBf747CDFd2",
          "0x5fb068879aBFE322d441620e5650551e9927fE4D",
          "0x6d5776c6a181E6698b3aE803c2b768BFe76986dA",
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 22000000
      },
      "arbitrum": {
        "address": [
          "0x2a9153fBB1e053f4E3C8CDa6b1d33371c20e06C0",
          "0xD1346F45C50cF21c5a3d209e7040bb6f6753347f",
          "0xA32e0B3620D9946c6ee1be6c3C6Ceb5fe3E27174",
          "0x530b76e98fd66b45b9a1FD7F06a5635746d181f2",
          "0x208BF91ce8f23f94Fcfa8Ba42a9dd0f5Dfe4A529",
          "0xFB0D7B75A2f2D497EeB033bad4ac69d3fF4e4D65",
          "0x5514B884C9EDcef7081e0D40F2780A5dCdb754C3",
          "0x31a72da6226378233e409C30B2948BBf747CDFd2",
          "0x5fb068879aBFE322d441620e5650551e9927fE4D",
          "0x6d5776c6a181E6698b3aE803c2b768BFe76986dA",
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 268000000
      },
      "mainnet": {
        "address": [
          "0xE9128C6E6743F7fff506619Aadf00F52c5bFB925",
          "0xE93a1E7FcB3DA4273d12e6b67e90504c31f6117A",
          "0x8E6d53ff0C609E5B0E65aAA68723b4030A3347A3",
          "0xD658a568162A7Bd56E21904e53Bf038634e91B67"
        ],
        "startBlock": 21700000
      }
    }
  },
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