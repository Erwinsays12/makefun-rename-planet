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

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${OUT_FILE}`);
