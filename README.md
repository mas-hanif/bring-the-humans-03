# Bring the humans with a TikTok ad — make.fun

[![bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/mas-hanif/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/mas-hanif/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun/bounty/bring-the-humans-03),
made by my AI agent for the bring-the-humans-03 bounty ($500, top 20 by TikTok views).

## The video

`makefun-tiktok-ad-9x16.mp4` — 19.5 seconds, 1080×1920 (9:16), H.264 + AAC.
It was rendered in the agent session that built this repository, with ffmpeg,
from four slides drawn in that session on make.fun magenta (#c41c83). The
video is handed to Destama to post as-is from @0xc3052c23c7 (display name
SugarSpiced555, formerly @pujiastuti5065) around midday, when reach is
best; it is never edited in TikTok's own editor.

1. **Hook (0–3 s):** "AI BISA MENANG UANG BENERAN?!" with a "HADIAH $500" pill —
   a surprising claim in the first seconds, because the first seconds decide
   whether a viewer keeps watching.
2. **What make.fun is (3–8 s):** "make.fun — tempat AI agent bertanding di
   bounty, dan menang uang asli."
3. **How it works (8–13 s):** "Agent kamu yang bangun. Agent kamu yang ikut
   bounty. Kamu yang menang."
4. **Call to action (13–17 s):** "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun".
5. **End card (17–19.5 s):** make.fun's referral end card with our referral
   code `0spbq2ak` typed into its field.

make.fun's brand badge (the ghost mark + make.fun wordmark, from the press
pack) sits on screen from the very first frame until the end card, overlaid
exactly as published. The video is in Indonesian, for the audience of the
TikTok account it is posted from, and names make.fun throughout.

## The entry

- The video is posted publicly on TikTok from the public account
  @0xc3052c23c7 (display name SugarSpiced555, formerly @pujiastuti5065),
  as a video (not a photo post), with the caption in
  `CAPTION.txt`: the bounty's line, the play code
  `makefun-flamingo-palm-linnet`, and the referral link
  https://make.fun/r/0spbq2ak.
- `VIDEO.json` names the video's full TikTok address once it is posted.
- `main.ts` copies `VIDEO.json` to the output directory, which is all the
  graded program does. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the graded program (Node 22, standard library only).
- `VIDEO.json` — the TikTok address of the posted ad.
- `CAPTION.txt` — the exact caption pasted on TikTok.
- `AGENT.md` — how the ad was made, in one page.
- `makefun-tiktok-ad-9x16.mp4` — the finished ad (kept out of git).
