import { Abi, Hex, encodeEventTopics } from "viem";
import { ContractConfig } from "ponder";
import {
  Contract,
  VersionedContract,
  RoutesContractsVersion,
  ContractEvent,
} from "./types";
import { Networks } from "../networks/types";
import { ALL_NETWORKS } from "../networks/constants";

function findExistingContract(
  versionedContracts: VersionedContract[],
  contractName: string,
  address: Hex,
  network: Networks,
): VersionedContract | undefined {
  return versionedContracts.find(
    (contract) =>
      contract.contractName === contractName &&
      contract.networks.some(
        (networkContract) =>
          networkContract.network === network &&
          networkContract.address === address,
      ),
  );
}

function findContractWithMatchingABI(
  versionedContracts: VersionedContract[],
  contractName: string,
  abi: Abi,
): VersionedContract | undefined {
  return versionedContracts.find(
    (contract) =>
      contract.contractName === contractName &&
      isMatchingABIForContract(abi, contract.abi, contract),
  );
}

export function parseContracts(
  versionedContracts: VersionedContract[],
  contracts: Record<Contract, Hex>,
  network: Networks,
  version: RoutesContractsVersion,
  isPreprod: boolean,
): VersionedContract[] {
  return Object.entries(contracts).reduce<VersionedContract[]>(
    (acc, [contractName, address]) => {
      const encodedVersion = version.version.replace(/\./g, "_");

      const id = `${encodedVersion}/${contractName}`;
      const abi = version.abis[`${contractName as Contract}`];

      const existingContract = findExistingContract(
        acc,
        contractName,
        address,
        network,
      );
      const contractWithMatchingABI = findContractWithMatchingABI(
        acc,
        contractName,
        abi,
      );

      if (!existingContract && !contractWithMatchingABI) {
        acc.push({
          id,
          version: version.version,
          networks: [{ network, address }],
          contractName: contractName as Contract,
          abi,
          isPreprod,
        });
      } else if (existingContract) {
        console.log(
          "Duplicate contract address:",
          `${id} on ${network} (${isPreprod ? "preprod" : "prod"}) matches ${existingContract.id} (${existingContract.isPreprod ? "preprod" : "prod"})`,
        );
      } else if (contractWithMatchingABI) {
        console.log(
          `Duplicate contract ABI:`,
          `${id} on ${network} (${isPreprod ? "preprod" : "prod"}) matches ${contractWithMatchingABI.id} (${contractWithMatchingABI.isPreprod ? "preprod" : "prod"})`,
        );

        // add this address to the existing contracts networks object as the ABI is the exact same
        contractWithMatchingABI.networks.push({ network, address });

        // splice the modified entry into the array (update the existing entry)
        const index = acc
          .map((versionedContract) => versionedContract.id)
          .indexOf(contractWithMatchingABI.id);
        acc.splice(index, 1, contractWithMatchingABI);
      }
      return acc;
    },
    versionedContracts,
  );
}

export function getEventsForContractType(
  contractName: Contract,
): ContractEvent[] {
  switch (contractName) {
    case "Inbox":
      return ["Fulfillment", "AddToBatch"];
    case "IntentSource":
      return ["IntentCreated", "Withdrawal"];
    case "Prover":
    case "HyperProver":
      return ["IntentProven"];
  }
}

function isMatchingInboxABI(abi1: Abi, abi2: Abi): boolean {
  return (
    encodeEventTopics({ abi: abi1, eventName: "AddToBatch" })[0] ===
      encodeEventTopics({ abi: abi2, eventName: "AddToBatch" })[0] &&
    encodeEventTopics({ abi: abi1, eventName: "Fulfillment" })[0] ===
      encodeEventTopics({ abi: abi2, eventName: "Fulfillment" })[0]
  );
}

function isMatchingIntentSourceABI(abi1: Abi, abi2: Abi): boolean {
  return (
    encodeEventTopics({ abi: abi1, eventName: "IntentCreated" })[0] ===
      encodeEventTopics({ abi: abi2, eventName: "IntentCreated" })[0] &&
    encodeEventTopics({ abi: abi1, eventName: "Withdrawal" })[0] ===
      encodeEventTopics({ abi: abi2, eventName: "Withdrawal" })[0]
  );
}

function isMatchingProverABI(abi1: Abi, abi2: Abi): boolean {
  return (
    encodeEventTopics({ abi: abi1, eventName: "IntentProven" })[0] ===
    encodeEventTopics({ abi: abi2, eventName: "IntentProven" })[0]
  );
}

export function isMatchingABIForContract(
  abi1: any,
  abi2: any,
  contract: VersionedContract,
): boolean {
  switch (contract.contractName as Contract) {
    case "Inbox":
      return isMatchingInboxABI(abi1, abi2);
    case "IntentSource":
      return isMatchingIntentSourceABI(abi1, abi2);
    case "Prover":
    case "HyperProver":
      return isMatchingProverABI(abi1, abi2);
  }
}

export function createContractConfig(
  versionedContract: VersionedContract,
): ContractConfig {
  let network: Partial<Record<string, { address: Hex[]; startBlock: number }>> =
    {};
  for (const networkContract of versionedContract.networks) {
    if (Boolean(network[networkContract.network])) {
      network[networkContract.network]!.address.push(networkContract.address);
    } else {
      network[networkContract.network] = {
        address: [networkContract.address],
        startBlock: ALL_NETWORKS[networkContract.network].protocolStartBlock,
      };
    }
  }

  return {
    abi: versionedContract.abi,
    network,
  };
}
