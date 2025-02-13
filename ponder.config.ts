import { createConfig } from "ponder";

import { ALL_NETWORKS } from "./networks";
import { CONTRACTS } from "./contracts";

export default createConfig({
  networks: ALL_NETWORKS,
  contracts: CONTRACTS,
});
