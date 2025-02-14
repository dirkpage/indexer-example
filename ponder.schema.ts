import { index, onchainTable } from "ponder";

function getSharedAttributes(t: any) {
  return {
    transactionHash: t.hex().notNull(),
    transactionIndex: t.integer().notNull(),
    evt_log_index: t.integer().notNull(),
    evt_log_address: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    chainId: t.integer().notNull(),
  };
}

// (intent created)
export const intent = onchainTable(
  "intent",
  (t) => ({
    hash: t.hex().primaryKey(),
    creator: t.hex().notNull(),

    ...getSharedAttributes(t),
  }),
  (table) => ({
    hash_index: index().on(table.hash),
    creator_index: index().on(table.creator),
  }),
);
