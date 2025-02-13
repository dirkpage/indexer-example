import { ponder } from "ponder:registry";
import { CONTRACTS } from "../contracts";
import { getEventsForContractType } from "../contracts/utils";
import {
  intent,
  add_to_batch,
  fulfillment,
  intent_proven,
  withdrawal,
} from "ponder:schema";
import { Contract, ContractEvent } from "../contracts/types";
import { replaceBigInts } from "ponder";

function getSchemaForEvent(event: ContractEvent) {
  switch (event) {
    case "IntentCreated":
      return intent;
    case "AddToBatch":
      return add_to_batch;
    case "Fulfillment":
      return fulfillment;
    case "IntentProven":
      return intent_proven;
    case "Withdrawal":
      return withdrawal;
    default:
      throw new Error(`Unknown event: ${event}`);
  }
}

function getCustomColumns(event: ContractEvent, args: Record<string, string>) {
  switch (event) {
    case "IntentCreated":
      return {
        prover: args._prover || args.prover,
        destinationChainId: args._destinationChain || args.destination,
      };
    case "Fulfillment":
      return {
        claimant: args._claimant || args.claimant,
      };
    default:
      return {};
  }
}

for (const contractKey in CONTRACTS) {
  const events = getEventsForContractType(contractKey as Contract);

  for (const eventName of events) {
    // @ts-ignore-next-line
    ponder.on(`${contractKey}:${eventName}`, async ({ event, context }) => {
      const args = event.args as Record<string, any>;
      const hash = args._hash || args.hash;

      // for intent creation, get the creator from the args (undefined when not applicable)
      const creator = args._creator || args.creator;

      const params = replaceBigInts(args, (v) => v.toString());
      const customColumns = getCustomColumns(eventName, args);

      await context.db
        .insert(getSchemaForEvent(eventName))
        .values({
          hash,
          creator,
          params,
          ...customColumns,
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
  }
}
