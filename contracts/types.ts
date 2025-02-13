import { Abi, Hex } from "viem";
import { Networks } from "../networks/types";

export type Contract = "Inbox" | "IntentSource" | "Prover" | "HyperProver";
export type ContractEvent = "IntentCreated" | "Fulfillment" | "IntentProven" | "Withdrawal" | "AddToBatch";

export type VersionedContract = {
  id: string,
  version: string,
  networks: {
    network: Networks,
    address: Hex
  }[],
  contractName: Contract,
  abi: Abi
  isPreprod: boolean
}

export type RoutesContractsVersion = {
  version: string,
  contracts: Record<string, Record<Contract, Hex>>,
  abis: Record<Contract, Abi>
}