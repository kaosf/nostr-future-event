import { SimplePool } from "nostr-tools";
import "websocket-polyfill";
import { readFileSync } from "fs";

const relays = readFileSync("./config/relays.txt", "utf-8")
  .split(/\n|\r\n|\r/)
  .filter((x) => !x.match(/^#/))
  .filter((x) => !(x === ""));
const pool = new SimplePool();

const event = {
  kind: 1,
  created_at: 1704034800,
  tags: [],
  content: 'あけましておめでとうございます',
  pubkey: 'a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b',
  id: 'c997030b8636b33c805aa6c3c8c91810a2363e2df188a7d7b04c6eee38c1b8d7',
  sig: '****',
}; // prettier-ignore

Promise.allSettled(pool.publish(relays, event));
