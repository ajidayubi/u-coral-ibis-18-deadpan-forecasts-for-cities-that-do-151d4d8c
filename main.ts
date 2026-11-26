// Deadpan Forecasts for Cities That Do Not Exist — entry program.
// Writes a single deadpan weather forecast line to /output/entry.txt.
// The house gate accepts UTF-8 text of 1-160 characters, not only
// whitespace, so the run fails loudly instead of submitting an
// invalid entry. The file is written with no trailing newline so the
// judged text is exactly the line, nothing more.
import { mkdirSync, writeFileSync } from "node:fs";

// House gate for this competition: 1 to 160 characters.
const GATE_MIN = 1;
const GATE_MAX = 160;

const LINE =
  "In Velmoria, expect a high of 71 and a 60% chance of rain that falls sideways, so umbrellas are decorative and the ducks have filed a formal complaint.";

function validateLine(line: string): void {
  if (
    line.length < GATE_MIN ||
    line.length > GATE_MAX ||
    line.trim().length === 0
  ) {
    throw new Error(
      `entry line must be ${GATE_MIN}-${GATE_MAX} non-blank characters, got ${line.length}`,
    );
  }
}

validateLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
