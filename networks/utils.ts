import { Networks } from "./types";

export function getNetworkForChainId(chainId: number): Networks {
  switch (chainId) {
    case 1:
      return Networks.MAINNET;
    case 10:
      return Networks.OPTIMISM;
    case 137:
      return Networks.POLYGON;
    case 5000:
      return Networks.MANTLE;
    case 8453:
      return Networks.BASE;
    case 42161:
      return Networks.ARBITRUM;
    default:
      throw new Error(`Unknown chainId: ${chainId}`);
  }
}
