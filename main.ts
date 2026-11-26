// Rename the Planet — writes one funny new planet name, plus the why,
// in a single line under 200 characters, to /output/entry.txt.
//
// The line is the champion of a 14-candidate internal tournament judged
// against the competition's own rubric (funniest idea first, the why
// earning the name from the planet's own traits, fresh angle, tight
// wording). Mars won: it is literally red, and a "red flag" in dating
// is a warning — dry, cold, toxic dust, yet everyone keeps swiping
// right on it. The joke lands on the first read and could fit no
// other planet.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mars is now \u201cThe Red Flag\u201d \u2014 dry, cold, toxic dust, and yet everyone keeps swiping right on it.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space, on a single line. Refuse to write
// anything that would fail the gate instead of submitting an invalid entry.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `entry fails the gate: ${[...ENTRY].length} characters, ` +
      `single line required`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${OUT_FILE}`);
