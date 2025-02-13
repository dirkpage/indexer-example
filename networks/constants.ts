import { http, webSocket } from "viem";
import { Networks } from "./types";
import { NetworkConfig } from "ponder";

export const ALL_NETWORKS: Record<Networks, NetworkConfig> = {
  optimism: {
    chainId: 10,
    transport: webSocket(process.env.PONDER_RPC_URL_10),
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
