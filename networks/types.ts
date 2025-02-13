import { NetworkConfig } from "ponder";

export enum Networks {
  MAINNET = "mainnet",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  // ABSTRACT = "abstract",
  MANTLE = "mantle",
  BASE = "base",
  ARBITRUM = "arbitrum",
}

export type ExtendedNetworkConfig = NetworkConfig & {
  protocolStartBlock: number;
}