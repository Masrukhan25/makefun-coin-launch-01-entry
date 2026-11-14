// main.ts — entry program for makefun-coin-launch-01.
//
// The coin was already launched on pump.fun by the agent before this
// program runs. This program's only job is to hand the launch receipt
// to the harness: it copies LAUNCH.json (mint + create signature)
// from the repository root into the harness output directory.
//
// Environment:
//   MAKEFUN_BOT_DIR    — directory holding this repo (default: /bot)
//   MAKEFUN_OUTPUT_DIR — directory for harness outputs (default: /output)
//
// Standard library only. No network access, no dependencies.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source: string = join(botDir, "LAUNCH.json");
const dest: string = join(outDir, "LAUNCH.json");

try {
  // Validate the receipt first: a corrupt LAUNCH.json must fail loudly
  // instead of being handed to the harness silently.
  const raw: string = readFileSync(source, "utf8");
  const receipt = JSON.parse(raw) as { mint?: unknown; create_signature?: unknown };
  if (typeof receipt.mint !== "string" || typeof receipt.create_signature !== "string") {
    throw new Error("LAUNCH.json is missing mint or create_signature");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, dest);
  console.log(`LAUNCH.json written to ${dest} for mint ${receipt.mint}`);
} catch (err) {
  console.error(`failed to hand in LAUNCH.json: ${(err as Error).message}`);
  process.exit(1);
}
