import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const PATTERN = /[\uFFFD\u0080-\u009F]|縺|繧|繝|縲|邵ｺ|隴鯉ｽ|驕擾ｽ/g;

function listFiles() {
  // tracked files only (prevents scanning node_modules etc.)
  const out = execSync('git ls-files "public/legacy/*.html" "public/legacy/docs/**/*.html"', { encoding: "utf8" }).trim();
  if (!out) return [];
  return out.split(/\r?\n/).filter(Boolean);
}

function decodeUtf8Strict(bytes) {
  // Fatal UTF-8 decode: invalid bytes => throw
  const td = new TextDecoder("utf-8", { fatal: true });
  return td.decode(bytes);
}

function hasBom(bytes) {
  return bytes.length >= 3 && bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF;
}

const files = listFiles();
let bad = 0;

for (const f of files) {
  const bytes = readFileSync(f);

  if (hasBom(bytes)) {
    console.error(`BOM DETECTED: ${f}`);
    bad++;
    continue;
  }

  let text = "";
  try {
    text = decodeUtf8Strict(bytes);
  } catch (e) {
    console.error(`INVALID UTF-8: ${f}`);
    bad++;
    continue;
  }

  const m = text.match(PATTERN);
  if (m && m.length) {
    console.error(`MOJIBAKE SIGNATURE: ${f}  hits=${m.length}`);
    bad++;
  }
}

if (bad) {
  console.error(`\nFAILED: encoding_guard found ${bad} bad file(s).`);
  process.exit(1);
} else {
  console.log("OK: encoding_guard passed.");
}