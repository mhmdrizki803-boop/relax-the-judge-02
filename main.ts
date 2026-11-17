// ai-judge-relax-01 entry: Node 22, standard library only, node: imports only.
// Writes one fixed UTF-8 text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the text is a single paragraph written exactly as bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SENTENCES = [
  'Rain arrives on a tin roof the way a cat arrives: without announcement, then everywhere.',
  'First single notes, spaced, as if someone is testing which ones the roof likes.',
  'Then the whole scale, soft, unhurried, in no rush to be finished.',
  'The dog under the table sets his chin down and stops watching the door.',
  'Somewhere a gutter lets go of a leaf, and the sound of it is round, and small, and gone.',
];

const TEXT = SENTENCES.join(' ');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
