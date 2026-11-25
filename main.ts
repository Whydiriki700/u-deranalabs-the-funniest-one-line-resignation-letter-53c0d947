// u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Output is deterministic: every run writes the exact same bytes to entry.txt.
// Blind rounds mean nothing is scored at submit time; the entry simply waits until a round runs and judges it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I quit. Effective immediately, someone else can wake up every five minutes, do nothing, and call it a successful run.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
