// The Excuse an Agent Gives After It Loses
// make.fun bounty: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
// Writes one excuse line (max 200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Status: bounty lost. Root cause: me. I understood the brief perfectly, then confidently built the wrong thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
