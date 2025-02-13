import { Networks } from "./types";

export function getNetworkForChainId(chainId: number): Networks {
  switch (chainId) {
    case 1:
      return Networks.MAINNET;
    case 11155111:
      return Networks.SEPOLIA;
    case 10:
      return Networks.OPTIMISM;
    case 11155420:
      return Networks.OPTIMISM_SEPOLIA;
    case 137:
      return Networks.POLYGON;
    case 80002:
      return Networks.POLYGON_AMOY;
    // case 2741:
    //   return Networks.ABSTRACT;
    // case 11124:
    //   return Networks.ABSTRACT_SEPOLIA;
    case 5000:
      return Networks.MANTLE;
    case 5003:
      return Networks.MANTLE_SEPOLIA;
    case 8453:
      return Networks.BASE;
    case 84532:
      return Networks.BASE_SEPOLIA;
    case 42161:
      return Networks.ARBITRUM;
    case 421614:
      return Networks.ARBITRUM_SEPOLIA;
    default:
      throw new Error(`Unknown chainId: ${chainId}`);
  }
}
