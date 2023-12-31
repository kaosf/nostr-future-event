import { DateTime } from "luxon";
import { finalizeEvent, nip19 } from "nostr-tools";
import { readFileSync } from "fs";

const privKey = nip19.decode(
  readFileSync("./config/nsec.txt", "utf-8").trim()
).data;

const created_at = DateTime.fromISO(
  "2024-01-01T00:00:00+09:00"
).toUnixInteger();
const event = finalizeEvent(
  {
    kind: 1,
    created_at,
    tags: [],
    content: "あけましておめでとうございます",
  },
  privKey
);
console.log(event);
console.log(JSON.stringify(event));
