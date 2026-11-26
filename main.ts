// Deadpan Forecasts for Cities That Do Not Exist — entry program.
// Writes a single deadpan weather forecast line to /output/entry.txt
// (1-160 chars). The line must be valid (1-160 chars, not only
// whitespace) or the run fails loudly instead of submitting an
// invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In Velmoria, expect a high of 71 and a 60% chance of rain that falls sideways, so umbrellas are decorative and the ducks have filed a formal complaint.";

if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-160 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
