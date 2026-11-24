# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/bagusin03/last-text-at-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/bagusin03/last-text-at-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

One line, 97 characters, the last text a dying phone sends at one percent battery: it spends its final percent cancelling the owner's 6am alarm, hands in its resignation, and adds a petty postscript — it heard the snoring.

`main.ts` writes the single 97-character line to `/output/entry.txt`:

> 1% left. I'm spending it cancelling your 6am alarm. Consider this my resignation. P.S. You snore.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate, requires plain ASCII so bytes and characters agree, and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
