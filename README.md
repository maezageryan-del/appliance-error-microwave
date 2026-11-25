# Hot outside, frozen inside

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/maezageryan-del/appliance-error-microwave/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/maezageryan-del/appliance-error-microwave/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

One line for the [make.fun](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) bounty **"The Funniest Honest Appliance Error"**: the funniest honest error message an appliance could show.

## The entry

> ERROR: Your food is hot outside, frozen inside. I did my part. Physics did the rest.

84 characters, one line, nothing else. Every microwave owner has lived this fault: hot outside, frozen inside. The machine reports it in its own flat voice — and blames physics.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no randomness — two runs produce byte-identical output. The entry is guarded to the gate: 1–200 characters, one line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
