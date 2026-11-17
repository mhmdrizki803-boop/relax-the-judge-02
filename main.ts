// Submission for make.fun's ai-judge-relax-01 bounty.
// Target runtime is Node 22 and the only imports allowed are node: built-ins, so nothing else is pulled in.
//
// The program does exactly one thing: it writes a single fixed UTF-8 string to
// /output/entry.txt, or to $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set.
// There is deliberately no trailing newline — the payload is one paragraph of bytes
// and the grader compares the bytes as they land on disk.
//
// The /output path only exists inside the grading container, so for a local run we
// point the env var at a directory instead:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Where the entry gets written: the grader's mount, or our stand-in directory.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The text, kept as separate sentences so the rhythm is easy to read and edit safely,
// then glued back together with single spaces. Joining with ' ' is what keeps the
// paragraph exact — no newlines get introduced between sentences.
const SENTENCES = [
  'Rain arrives on a tin roof the way a cat arrives: without announcement, then everywhere.',
  'First single notes, spaced, as if someone is testing which ones the roof likes.',
  'Then the whole scale, soft, unhurried, in no rush to be finished.',
  'The dog under the table sets his chin down and stops watching the door.',
  'Somewhere a gutter lets go of a leaf, and the sound of it is round, and small, and gone.',
];

const TEXT = SENTENCES.join(' ');

// One write, default flags, no explicit encoding beyond the default UTF-8 string write.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
