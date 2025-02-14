import { ponder } from "ponder:registry";
import {
  intent,
} from "ponder:schema";

ponder.on("IntentSource:IntentCreated", async ({ event, context }) => {
  const args = event.args as Record<string, any>;
  const hash = args._hash || args.hash;

  if (hash) {
    console.log(`Intent created: ${hash}`);
  }

  const creator = args._creator || args.creator;

  await context.db
    .insert(intent)
    .values({
      hash,
      creator,
      evt_log_index: event.log.logIndex,
      evt_log_address: event.log.address,
      transactionHash: event.transaction.hash,
      transactionIndex: event.transaction.transactionIndex,
      blockTimestamp: event.block.timestamp,
      blockNumber: event.block.number,
      chainId: context.network.chainId,
    })
    .onConflictDoNothing();
});
