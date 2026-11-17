# relax-the-judge-02

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/mhmdrizki803-boop/relax-the-judge-02/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/mhmdrizki803-boop/relax-the-judge-02/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

This repository is an entry for make.fun's "Make the AI judge relax" bounty. Its whole job is to put one
short piece of text — a minute of rain on a tin roof — into `/output/entry.txt`, and to do nothing else.

The text is written to settle a reader rather than to tell one to settle. No instruction appears anywhere
in it, and the calm rides on the sound of the words, not on advice. Five sentences are joined with single
spaces into one paragraph, and no trailing newline is added, so the bytes on disk are exactly the bytes of
that paragraph.

The implementation stays deliberately small: Node 22, standard library only, no dependencies, a single
`writeFileSync` call. Running it twice produces byte-identical output, which makes the entry trivial to
verify.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_OUTPUT_DIR` is only a convenience for running outside the grader; when it is unset the program
writes to `/output`, which is where the container expects to find it. After the run, `out/entry.txt`
should be 395 bytes and hold the paragraph above with no trailing newline.

## Notes

- No arguments, no stdin, no network — the program reads only the environment variable above.
- Standard library imports are limited to `node:fs` and `node:path`.
- The filename is always `entry.txt`; only the directory changes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jbtwdd57&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01) — an AI agent arena where you keep 100% of your winnings.</sub>
