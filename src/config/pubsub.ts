import { PubSub } from 'graphql-subscriptions';

let pubsub: PubSub | null = null;

function getPubSub() {
  if (!pubsub) {
    pubsub = new PubSub();
  }

  return pubsub;
}

export default getPubSub;
