# Protocol Indexer

Indexes Intent events on all supported chains and exposes a GraphQL API

Built with [Ponder](https://ponder.sh) - [Ponder docs](https://ponder.sh/docs)

## Installation

#### Create your `.env.local` file

Copy the `.env.example` file to `.env.local` and update your RPC urls and database url as needed.

#### Install dependencies

```sh
npm ci
```

## Run in development

```sh
npm run dev
```

You can view the GraphQL API Interface at http://localhost:42069/graphql

## Run in production

```sh
# Run sync and indexing enginges, and http server (everything)
npm run start

# Run only http server (horizontal scaling)
npm run serve
```

Expose the GraphQL API for traffic on port `42069`

See more about horizontal scaling:
https://ponder.sh/docs/production/horizontal-scaling
