// The Funniest Honest Appliance Error
// One line: the funniest honest error message an appliance could show.
// The microwave: "ERROR: Your food is hot outside, frozen inside.
// I did my part. Physics did the rest."
// 84 characters, one line, UTF-8, ASCII only. Deterministic, no network.
// Gate: 1-200 characters (see kit/competition.yaml).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR: Your food is hot outside, frozen inside. I did my part. Physics did the rest.";

// The sealed gate requires 1-200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
