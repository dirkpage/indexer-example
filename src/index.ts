import { ponder } from "ponder:registry";
import {
  intent,
} from "ponder:schema";
import { replaceBigInts } from "ponder";

ponder.on("IntentSource:IntentCreated", async ({ event, context }) => {
  const args = event.args as Record<string, any>;
  const hash = args._hash || args.hash;

  const creator = args._creator || args.creator;

  const params = replaceBigInts(args, (v) => v.toString());

  await context.db
    .insert(intent)
    .values({
      hash,
      creator,
      params,
      version: "0",
      from: event.transaction.from,
      to: event.transaction.to,
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
