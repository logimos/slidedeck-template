#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

let bad = 0;
const root = "node_modules";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip nested node_modules quickly
      if (entry.name === "node_modules") continue;
      walk(p);
    } else if (entry.name === "package.json") {
      try {
        const pkg = JSON.parse(fs.readFileSync(p, "utf8"));
        const scripts = pkg.scripts || {};
        if (scripts.postinstall || scripts.preinstall || scripts.install) {
          console.error(`❌ install script in ${p}`);
          bad++;
        }
      } catch {}
    }
  }
}
if (fs.existsSync(root)) walk(root);
if (bad) process.exit(3);
console.log("✅ No install/postinstall hooks found in node_modules package.json files");
