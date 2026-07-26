---
format: 1080x1920
duration: 30s
message: "אתה לא צריך להבין AI. אתה רק צריך שהוא יעבוד בשבילך."
arc: "Reframe (myth → relief) → Pain relief → Solution → Proof → CTA (compound custom arc)"
audience: "בעל/ת עסק קטן-בינוני בישראל, סקפטי/ת לגבי AI, לא בטוח/ה מה זה נותן לו/ה בפועל"
mode: autonomous
music: "calm confident minimal tech underscore, quiet subtle pulse, no aggressive drops, restrained corporate synth pad"
---

## Video direction

- **Palette** (from `frame.md`, hand-tuned to the site's dark system): canvas `{colors.bg}` dark navy `#0B2447` on every frame; `{colors.primary}` teal `#00BFB3` is the ONE accent — underlines, the logo glow, the stat numerals, the progress arc; `{colors.text}` near-white for headlines; `{colors.text-muted}` translucent white for secondary lines. No second accent color, ever.
- **Type** — Rubik throughout, by role from `frame.md` (`h1`/`h2` for the kinetic lines, `stat-num`/`metric-value` teal for the count-up, `tag`/`h4-eyebrow` for small chrome). Headlines near-white, never teal; numerals teal.
- **Motion grammar + reveal model** — long-tail `power3` settle everywhere (smooth over bouncy); this is a **silent film** (no VO), so each frame's reveal is paced to an even internal rhythm instead of a spoken cue — one phrase/element per beat, spread across the frame's duration, **never all at once at t=0**. Aliveness during a hold is subtle jitter at most — no lazy breathing, no back-half camera drift.
- **Rhythm / held-frame allocation** — Frames 3, 6, and the back half of Frame 7 are the deliberate held/breather beats (message lock, the proof stat, the final lockup); Frames 1, 2, 4, 5 carry the reveal energy.
- **Negative list** — no robot hands, no glowing blue/purple "AI" orbs or circuit textures, no floating bokeh, no browser chrome/cursors, no stock tool/expert icons (Frame 4 stays pure typography); no bouncy/elastic overshoot entrances; no lazy breathing loops; no camera pan/push in the back half of any shot.

## Frame 1 — כולם מדברים על זה

- scene: מילים עולות אחת-אחת במרכז המסך על רקע נייבי כהה, בונות מתח בהיפ סביב AI - "ללמוד AI." → "להבין אותו." → "להתמחות בו."
- duration: 5s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hype-list.html
- type: hook
- persuasion: Negative contrast (מכניסים את ההיפ שהקהל כבר שומע כל יום, כדי לפרק אותו בפריים הבא)
- beat: skepticism
- blueprint: kinetic-type-beats (Adapt — Hook escalation)
- focal: (typography only, no asset)
- roles: (none)
- sfx:
- asset_candidates:

Adapt: keep the escalating full-screen-beat-replacement signature (each line hard-cuts in bigger than the last); drop the sub-shape's "payoff element" ending — the punchline lands in Frame 2, not here, so beat 3 simply holds and exits via Frame 2's transition.

Scene 1 (0.0–1.6s): solid dark-navy field; bold near-white line "ללמוד AI." hard-cut FLASHES in dead-center — Centered, ~35% of frame width. Camera static.
Scene 2 (1.6–3.2s): hard cut replaces it — "להבין אותו." lands center, one size step larger (rising intensity) — same flash-cut, no fade/slide.
Scene 3 (3.2–5.0s): hard cut to the climax line — "להתמחות בו." lands largest of the three, centered, and HOLDS to the end (settle only, no scale-out) — Frame 2's zoom-through transition is this frame's exit.

narrativeRole: מציג את הרעש שהקהל כבר שומע על AI ("צריך ללמוד/להבין/להתמחות") - הבסיס שהמסר הבא הופך על פיו.
keyMessage: כולם מדברים על הצורך "להבין" AI.

## Frame 2 — אתה לא צריך את זה

- scene: הרשימה מתפוגגת, ובמקומה נכנס משפט אחד גדול בלבן: "אתה לא צריך את זה." קו מבטא טורקיז מתחתיו.
- duration: 4s
- transition_in: zoom-through
- status: outline
- src: compositions/frames/02-you-dont-need-it.html
- type: hook
- persuasion: Reframe / Risk reversal
- beat: relief
- blueprint: kinetic-type-beats (Adapt — Hook flash)
- focal: (typography only, no asset)
- roles: (none)
- sfx: soft airy swell (on the accent-line draw)
- asset_candidates:

Adapt: keep the big→small scale-down entrance as the myth-deflating gesture; add a drawn accent-line under the resolved line (not in the base sub-shape) to land the teal brand accent early.

Scene 1 (0.0–1.6s): dark-navy field continues from Frame 1's zoom-through arrival; oversized near-white "אתה לא צריך" SCALES DOWN smoothly to centered — Centered, ~45% of frame width.
Scene 2 (1.6–3.2s): as it settles, "את זה." appends via per-word staggered reveal, completing the line centered.
Scene 3 (3.2–4.0s): a teal accent-line draws on left→right beneath the full line; the line HOLDS — settle only, subtle jitter at most. Frame 3's crossfade is this frame's exit.

narrativeRole: מפרק את המתח מפריים 1 - החצי הראשון של המסר הנעול מהבריף.
keyMessage: אתה לא צריך להבין AI.

## Frame 3 — אתה רק צריך שזה יעבוד

- scene: אותה שפה חזותית ממשיכה - משפט שני גדול משלים את המחשבה: "אתה רק צריך שזה יעבוד בשבילך."
- duration: 4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-work-for-you.html
- type: hook
- persuasion: Value reframing (נעילת התזה של הסרטון)
- beat: clarity
- blueprint: kinetic-type-beats (Reproduce — Hook flash / per-word build)
- focal: (typography only, no asset)
- roles: (none)
- sfx:
- asset_candidates:

Scene 1 (0.0–1.4s): dark-navy field carries over (crossfade in from Frame 2); near-white "אתה רק צריך" enters via per-word staggered reveal, centered, same type scale as Frame 2's resolved line — visual continuity, one continuous thought.
Scene 2 (1.4–2.8s): the line completes — "שזה יעבוד בשבילך." staggers in word-by-word, each word landing on its own beat, spread evenly across the window (no VO to time to).
Scene 3 (2.8–4.0s): the full sentence HOLDS centered — settle only, subtle jitter at most. Frame 4's zoom-through transition is this frame's exit.

narrativeRole: משלים את המסר המלא של הבריף עד סוף פריים 3 - התזה נעולה מוקדם, הכל אחריה הוא הוכחה.
keyMessage: אתה רק צריך שה-AI יעבוד בשבילך.

## Frame 4 — מה שאתה לא צריך לעשות

- scene: שלוש שורות נכנסות אחת-אחת ואז מתפזרות/נמחקות שמאלה - "ללמוד כלים חדשים." "לשכור מומחים יקרים." "לנהל את זה לבד."
- duration: 5s
- transition_in: zoom-through
- status: outline
- src: compositions/frames/04-what-you-skip.html
- type: pain_point
- persuasion: Friction reduction
- beat: relief + ease
- blueprint: kinetic-type-beats (Adapt — Problem)
- focal: (typography only, no asset)
- roles: (none)
- sfx:
- asset_candidates:

Adapt: keep the "each pain line lands alone, then the next replaces it" signature; skip `overwhelm-surround`'s tool-icon/avatar imagery entirely (the brief bans exactly this kind of AI-cliché prop) — pure typography on the flat dark field carries the beat instead.

Scene 1 (0.0–1.5s): dark-navy field; "ללמוד כלים חדשים." lands centered via per-word chunk-reveal with a thin teal accent-underline burst; brief hold.
Scene 2 (1.5–3.0s): hard cut — line 1 clears (fast fade + slight leftward slide off), replaced by "לשכור מומחים יקרים." landing centered the same way.
Scene 3 (3.0–5.0s): hard cut — line 2 clears, replaced by "לנהל את זה לבד." landing centered; it HOLDS to the end — settle only. Frame 5's crossfade dissolves the last pain point straight into the brand answer.

narrativeRole: מתרגם את התזה לחיסכון קונקרטי - כל מה שהעסק לא צריך לעשות בעצמו.
keyMessage: כל הנטל התפעולי של אימוץ AI - לא עליך.

## Frame 5 — OMS AI

- scene: לוגו ה-OMS AI מתאסף במרכז על הרקע הכהה, ומתחתיו נכנס הכיתוב "AI Native. מהיסוד. בשבילך."
- duration: 5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-brand-intro.html
- type: product_intro
- persuasion: Authority by association (נולדו AI Native, לא הוסיפו את זה בדיעבד)
- beat: trust
- blueprint: titlecard-reveal (Adapt — Product_Intro title-card prelude)
- focal: assets/logo.png
- roles: assets/logo.png = cutout (hero mark, upper-middle of frame)
- sfx: soft chime (on the logo bloom)
- asset_candidates: assets/logo.png — לוגו OMS AI, שקוף

Adapt: keep the calm logo-pop-then-tagline-card chain from the title-card prelude, but only 2 cards (no version-append beat) — matches the video's restrained, quiet register.

Scene 1 (0.0–1.8s): dark-navy field; the OMS AI logo pops in dead-center (upper-middle, leaving room below) via a smooth spring-pop entrance (long-tail settle, no bouncy overshoot) with one soft teal ambient-glow bloom behind it; holds.
Scene 2 (1.8–5.0s): hard cut — the tagline card enters below the logo via per-word staggered reveal: "AI Native." → "מהיסוד." → "בשבילך." each word landing in turn, spread across the window; final composition HOLDS static to the end. Frame 6's crossfade is this frame's exit.

narrativeRole: מציג את המותג כפתרון - נבנה AI Native מהיסוד, לא ירושה שהודבק לה AI.
keyMessage: OMS AI בנתה את עצמה מהיסוד סביב AI, בשביל עסקים כמו שלך.

## Frame 6 — הנתון

- scene: המספר "70%+" גדל ונמנה בטורקיז במרכז המסך, ומתחתיו כיתוב "פחות בעלויות פיתוח ותפעול."
- duration: 4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-cost-stat.html
- type: benefit_highlight
- persuasion: Statistical proof
- beat: confidence
- blueprint: dataviz-countup (Reproduce — Social_Proof gauge-beat)
- focal: (typography/data-viz only, no asset)
- roles: (none)
- sfx: soft rising tick (synced to the count-up)
- asset_candidates:

Scene 1 (0.0–1.0s): dark-navy field; thin concentric teal arcs radiate from center (static chrome) as a thick teal progress arc begins to draw clockwise.
Scene 2 (1.0–2.8s): as the arc draws, the center number COUNTS UP 0%→70%+ with its transform-scale growing alongside the value; a "+" locks on at the end.
Scene 3 (2.8–4.0s): the caption "פחות בעלויות פיתוח ותפעול." fades up beneath the number; the whole group HOLDS — settle only, subtle jitter at most. Frame 7's crossfade is this frame's exit.

narrativeRole: ההוכחה המספרית היחידה בסרטון - הופכת את התזה למשהו מדיד.
keyMessage: חיסכון של 70%+ בעלויות פיתוח, תפעול ושירות.

## Frame 7 — סגירה

- scene: המסר חוזר בקצרה - "אתה לא צריך להבין AI." ואז "פשוט תן לו לעבוד בשבילך." הלוגו נשאר מוצג עם הכתובת omsai.ai.
- duration: 5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-closing.html
- type: cta
- persuasion: Value stacking / callback לפתיחה
- beat: inevitability + control
- blueprint: logo-assemble-lockup (Reproduce — CTA text-clears-mark-blooms-lockup)
- focal: assets/logo.png
- roles: assets/logo.png = cutout (hero mark, centered)
- sfx: soft chime (on the logo bloom)
- asset_candidates: assets/logo.png — לוגו OMS AI, שקוף

Scene 1 (0.0–1.2s): dark-navy field; centered near-white line "אתה לא צריך להבין AI." arrives via per-word staggered reveal — a direct callback to Frames 1–3's type language — and holds briefly.
Scene 2 (1.2–2.2s): the line CLEARS — shrink-toward-center + fade — leaving a blank dark frame for a beat.
Scene 3 (2.2–3.4s): on the blank frame the OMS AI logo mark spring-BLOOMS from zero at dead center (smooth long-tail settle, minimal overshoot) then slides slightly left as the "OMS AI" wordmark + "omsai.ai" reveal to its right.
Scene 4 (3.4–5.0s): "פשוט תן לו לעבוד בשבילך." settles just below the lockup; the whole composition HOLDS to the final frame — dead static (this frame's own exit; no further transition).

narrativeRole: סוגר מעגל עם המסר הפותח, הופך אותו למסקנה מוכחת, ומעביר ל-CTA שקט.
keyMessage: תן ל-AI לעבוד בשבילך - OMS AI.
