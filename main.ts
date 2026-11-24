// Last Text at One Percent — the dying phone's final text.
// One line, written to /output/entry.txt. Offline, deterministic:
// no network, no clock, no randomness, no secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "1% left. I'm spending it cancelling your 6am alarm. Consider this my resignation. P.S. You snore.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip check failed: written file differs from the line");
}
console.log(`wrote ${[...back].length} characters to /output/entry.txt`);
