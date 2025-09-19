#!/usr/bin/env node
import fs from "node:fs";

const lock = fs.readFileSync("pnpm-lock.yaml", "utf8");

// families seen in the current npm worm reports
const PATTERNS = [
  /@ctrl\//,
  /@nativescript-community\//,
  /@teselagen\//
];

const hits = PATTERNS
  .map((re) => ({ re, match: lock.match(re) }))
  .filter((x) => x.match);

if (hits.length) {
  console.error("❌ Suspicious families found in pnpm-lock.yaml:");
  hits.forEach((h) => console.error(`  - ${h.re}`));
  process.exit(2);
} else {
  console.log("✅ No flagged families found in pnpm-lock.yaml");
}