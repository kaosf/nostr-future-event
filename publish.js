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
  sig: '42048255fc63a11ec313b02ba24a74eea42ad5fa6ef29cfbe0d7010eb7a27da55fc91e4ba39433d77d2cfbb780635e6d6eb4d28e50c4bfb9dd1435368431e586',
}; // prettier-ignore

Promise.allSettled(pool.publish(relays, event));
