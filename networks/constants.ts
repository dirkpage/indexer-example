import { http, webSocket } from "viem";
import { Networks } from "./types";
import { NetworkConfig } from "ponder";

export const ALL_NETWORKS: Record<Networks, NetworkConfig> = {
  mainnet: {
    chainId: 1,
    transport: webSocket(process.env.PONDER_RPC_URL_1),
    pollingInterval: 5_000,
  },
  optimism: {
    chainId: 10,
    transport: webSocket(process.env.PONDER_RPC_URL_10),
    pollingInterval: 5_000,
  },
  polygon: {
    chainId: 137,
    transport: webSocket(process.env.PONDER_RPC_URL_137),
    pollingInterval: 5_000,
  },
  mantle: {
    chainId: 5000,
    transport: http(process.env.PONDER_RPC_URL_5000),
    pollingInterval: 5_000,
  },
  base: {
    chainId: 8453,
    transport: webSocket(process.env.PONDER_RPC_URL_8453),
    pollingInterval: 5_000,
  },
  arbitrum: {
    chainId: 42161,
    transport: webSocket(process.env.PONDER_RPC_URL_42161),
    pollingInterval: 5_000,
  },
};
