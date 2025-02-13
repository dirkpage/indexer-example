import { http, webSocket } from "viem";
import { ExtendedNetworkConfig, Networks } from "./types";

export const ALL_NETWORKS: Record<Networks, ExtendedNetworkConfig> = {
  mainnet: {
    chainId: 1,
    transport: webSocket(process.env.PONDER_RPC_URL_1),
    pollingInterval: 5_000,
    protocolStartBlock: 21700000
  },
  optimism: {
    chainId: 10,
    transport: webSocket(process.env.PONDER_RPC_URL_10),
    pollingInterval: 5_000,
    protocolStartBlock: 128000000
  },
  polygon: {
    chainId: 137,
    transport: webSocket(process.env.PONDER_RPC_URL_137),
    pollingInterval: 5_000,
    protocolStartBlock: 67000000
  },
  // abstract: {
  //   chainId: 2741,
  //   transport: webSocket(process.env.PONDER_RPC_URL_2741),
  //   pollingInterval: 5_000,
  //   protocolStartBlock: ,
  // },
  mantle: {
    chainId: 5000,
    transport: http(process.env.PONDER_RPC_URL_5000),
    pollingInterval: 5_000,
    protocolStartBlock: 71000000
  },
  base: {
    chainId: 8453,
    transport: webSocket(process.env.PONDER_RPC_URL_8453),
    pollingInterval: 5_000,
    protocolStartBlock: 22000000
  },
  arbitrum: {
    chainId: 42161,
    transport: webSocket(process.env.PONDER_RPC_URL_42161),
    pollingInterval: 5_000,
    protocolStartBlock: 268000000
  },
};
