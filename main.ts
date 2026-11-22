// Entry program for the bring-the-humans-03 bounty (Node 22, standard
// library only). It copies VIDEO.json from the repository root to the
// output directory, where the gate reads the TikTok address of the ad.
// That is all it does: the entry itself is the video, made by the agent
// in the session that built this repository, posted publicly on TikTok
// from a public account with the bounty's line and the play code in its
// caption. Nothing this program writes about the video is scored.
// The copy is byte for byte: the gate reads exactly what VIDEO.json says.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/VIDEO.json is then byte for byte this directory's VIDEO.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
