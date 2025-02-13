import { index, onchainTable, relations } from "ponder";

function getSharedAttributes(t: any) {
  return {
    version: t.text().notNull(),

    from: t.hex().notNull(),
    to: t.hex(),
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
    prover: t.hex().notNull(),
    destinationChainId: t.integer().notNull(),

    params: t.json().notNull(),

    ...getSharedAttributes(t),
  }),
  (table) => ({
    hash_index: index().on(table.hash),
    creator_index: index().on(table.creator),
  }),
);

export const intent_relations = relations(intent, ({ one }) => ({
  add_to_batch: one(add_to_batch, {
    fields: [intent.hash],
    references: [add_to_batch.hash],
  }),
  fulfillment: one(fulfillment, {
    fields: [intent.hash],
    references: [fulfillment.hash],
  }),
  proven: one(intent_proven, {
    fields: [intent.hash],
    references: [intent_proven.hash],
  }),
  withdrawal: one(withdrawal, {
    fields: [intent.hash],
    references: [withdrawal.hash],
  }),
}));

export const fulfillment = onchainTable("fulfillment", (t) => ({
  hash: t.hex().primaryKey(),
  claimant: t.hex().notNull(),

  params: t.json().notNull(),

  ...getSharedAttributes(t),
}));

export const fulfillment_relations = relations(fulfillment, ({ one }) => ({
  intent: one(intent, {
    fields: [fulfillment.hash],
    references: [intent.hash],
  }),
}));

export const add_to_batch = onchainTable("add_to_batch", (t) => ({
  hash: t.hex().primaryKey(),

  params: t.json().notNull(),

  ...getSharedAttributes(t),
}));

export const add_to_batch_relations = relations(add_to_batch, ({ one }) => ({
  intent: one(intent, {
    fields: [add_to_batch.hash],
    references: [intent.hash],
  }),
}));

export const intent_proven = onchainTable("intent_proven", (t) => ({
  hash: t.hex().primaryKey(),

  params: t.json().notNull(),

  ...getSharedAttributes(t),
}));

export const intent_proven_relations = relations(intent_proven, ({ one }) => ({
  intent: one(intent, {
    fields: [intent_proven.hash],
    references: [intent.hash],
  }),
}));

export const withdrawal = onchainTable("withdrawal", (t) => ({
  hash: t.hex().primaryKey(),

  params: t.json().notNull(),

  ...getSharedAttributes(t),
}));

export const withdrawal_relations = relations(withdrawal, ({ one }) => ({
  intent: one(intent, { fields: [withdrawal.hash], references: [intent.hash] }),
}));
