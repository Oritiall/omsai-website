---
format: 1080x1920
duration: 30s
message: "ככה נראה OMS AI - חברת AI Native ישראלית, מהרעיון ועד השירותים."
arc: "Site tour (show-it-as-is): Hero -> AI Native -> Comparison -> Services -> CTA"
audience: "בעל/ת עסק קטן-בינוני בישראל, סקפטי/ת לגבי AI, לא בטוח/ה מה זה נותן לו/ה בפועל"
mode: autonomous
music: "calm confident minimal tech underscore, quiet subtle pulse, no aggressive drops, restrained corporate synth pad"
---

## Video direction

- **Palette** (from `frame.md`, shared with omsai-promo for brand continuity): canvas `{colors.bg}` dark navy `#0B2447` on every frame; `{colors.primary}` teal `#00BFB3` is the ONE accent; `{colors.text}` near-white for headlines; `{colors.text-muted}` translucent white for secondary lines. No second accent color.
- **Type** — Rubik throughout, by role from `frame.md`.
- **Motion grammar + reveal model** — long-tail `power3` settle everywhere (smooth over bouncy); this is a **silent film** (no VO — same network-policy block on HeyGen/MusicGen documented in BRIEF.md), so each frame's reveal is paced to an even internal rhythm, never all at once at t=0.
- **Rhythm / held-frame allocation** — Frame 3 (comparison) and the back half of Frame 5 (CTA) are the deliberate held/breather beats; Frames 1, 2, 4 carry the reveal energy.
- **Negative list** — no invented AI clichés beyond what the site's own real images already show (the traditional-team/ai-team photos ARE the site's established visual metaphor — used as-is, not recolored or distorted); no bouncy/elastic overshoot entrances; no lazy breathing loops; no camera pan/push in the back half of any shot; the logo always sits on its light backing plate (established in omsai-promo) — never recolored.

## Frame 1 — Hero: OMS AI

- scene: לוגו נפתח על הרקע הכהה, ומתחתיו תמצית ה-hero - "AI Native. מהיסוד. לעסקים קטנים ובינוניים."
- duration: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hero.html
- type: product_intro
- persuasion: Authority by association (הכרזת קטגוריה - AI Native מהיסוד, לא הוסיפו את זה)
- beat: curiosity + trust
- blueprint: titlecard-reveal (Reproduce - Product_Intro title-card prelude)
- focal: assets/logo.png
- roles: assets/logo.png = cutout (hero mark on a light plate, upper-middle)
- sfx:
- asset_candidates: assets/logo.png — לוגו OMS AI, שקוף

Scene 1 (0.0–1.8s): dark-navy field; לוגו ה-OMS AI (על כרטיס לבן) פופ-אין חלק במרכז-עליון, spring-pop settle חלק ללא bounce, עם glow טורקיז עדין מאחוריו; מחזיק.
Scene 2 (1.8–5.0s): hard cut - הכיתוב נכנס מתחתיו מילה-אחר-מילה: "AI Native." → "מהיסוד." → "לעסקים קטנים ובינוניים." כל שורה נוחתת בתורה, מתפרסת על שארית החלון; מחזיק סטטי עד הסוף. המעבר לפריים 2 (crossfade) הוא היציאה.

narrativeRole: פותח את הסיור עם זהות המותג לפני התוכן.
keyMessage: OMS AI היא חברת AI Native ישראלית שנבנתה מהיסוד, בשביל עסקים קטנים ובינוניים.

## Frame 2 — מה זה AI Native

- scene: כותרת "מה זה AI Native?" ואז שלושה עמודי ערך נכנסים לרשימה - ארכיטקטורה, החלטות, מוצרים
- duration: 6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-ai-native.html
- type: feature_showcase
- persuasion: Feature-to-benefit translation
- beat: clarity + intrigue
- blueprint: grid-card-assemble (Reproduce - Benefits accumulating value list)
- focal: (typography only, no asset)
- roles: (none)
- sfx:
- asset_candidates:

Scene 1 (0.0–1.6s): dark-navy field; הכותרת "מה זה AI Native?" נכנסת מרכז-עליון, per-word reveal, ומתחתיה קו טורקיז דק.
Scene 2 (1.6–3.4s): העמוד הראשון "ארכיטקטורת AI-First" נוחת בשורה הראשונה של רשימה אנכית, פופ-אין קל.
Scene 3 (3.4–5.0s): העמוד השני "החלטות מבוססות AI" נוחת מתחתיו, אותה מנגנון פופ-אין, הרשימה מצטברת (לא מתחלפת).
Scene 4 (5.0–6.0s): העמוד השלישי "מוצרים מונעי AI" נוחת אחרון, שלושת העמודים מוחזקים יחד עד הסוף - settle only. המעבר לפריים 3 (zoom-through) הוא היציאה.

narrativeRole: מתרגם את הסלוגן "AI Native" לשלושה יסודות קונקרטיים.
keyMessage: AI Native = ארכיטקטורה, החלטות ומוצרים שנבנו מהיסוד סביב AI.

## Frame 3 — ההשוואה

- scene: תמונת traditional-team.png מול ai-team.png בחצי-מסך, עם הכיתוב "70%+ פחות בעלויות" בסוף
- duration: 7s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/03-comparison.html
- type: benefit_highlight
- persuasion: Negative contrast + Statistical proof
- beat: relief + confidence
- blueprint: comparison-split (Reproduce - Key_Feature two paired capabilities side by side)
- focal: assets/ai-team.png
- roles: assets/traditional-team.png = supporting (חצי שמאל) · assets/ai-team.png = cutout (חצי ימין, התשובה)
- sfx:
- asset_candidates: assets/traditional-team.png — צוות מסורתי סביב שולחן ישיבות, כולם עם לפטופים; assets/ai-team.png — אותו שולחן, רוב הצוות הוחלף ברובוטים אנושיים, שני בני אדם נותרו בראש השולחן

Scene 1 (0.0–0.8s): dark-navy field עם שני glow עדינים (טורקיז בכל צד); הכותרת "אותה עבודה?" נכנסת ממרכז-עליון בהחלקה קלה כלפי מטה.
Scene 2 (0.4–1.9s, signature move): שתי התמונות נכנסות יחד מהכנפיים הנגדיות עם הטיית "ספר נפתח" הפוכה זו-לזו (traditional-team.png משמאל, ai-team.png מימין, ~0.2s הפרש) וסקייל 0.85→1 - נחתות זו מול זו, צל יוצא כלפי חוץ מכל צד.
Scene 3 (1.9–2.6s): תגית pill "היום" נוחתת בקצה הפנימי של התמונה השמאלית, ואז תגית "עם AI Native" בקצה הפנימי של הימנית (spring-pop, ~0.3s הפרש) - התגיות הן ה-overshoot היחיד בפריים.
Scene 4 (2.6–7.0s): הכיתוב "70%+ פחות בעלויות פיתוח ותפעול." נכנס מתחת לשתי התמונות; הקומפוזיציה מוחזקת עד הסוף - camera-static, float עדין ולא מסונכרן בין שתי התמונות. המעבר לפריים 4 (crossfade) הוא היציאה.

narrativeRole: ההוכחה החזותית של הבריף - הניגוד הישיר בין הישן לחדש, עם ההוכחה המספרית.
keyMessage: אותה עבודה, בלי הצוות הגדול - וב-70%+ פחות עלויות.

## Frame 4 — השירותים

- scene: כותרת "הפתרונות שלנו" ואז רשת של 6 כרטיסי שירות מתאספת
- duration: 6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-services.html
- type: feature_showcase
- persuasion: Value stacking (מבחר רחב, לא רק פתרון אחד)
- beat: confidence + aspiration
- blueprint: grid-card-assemble (Reproduce - Key_Feature tile grid self-assembles)
- focal: (typography only, no asset)
- roles: (none)
- sfx:
- asset_candidates:

Scene 1 (0.0–1.4s): dark-navy field; הכותרת "הפתרונות שלנו" נכנסת מרכז-עליון.
Scene 2 (1.4–3.2s): שלושת הכרטיסים הראשונים (אתרים ואפליקציות AI / מערכות אוטומציה עסקית / עיצוב UX/UI מונע AI) מתאספים לשורה עליונה ברשת 3x2, staggered pop-in.
Scene 3 (3.2–5.0s): שלושת הכרטיסים הנותרים (ייעוץ אסטרטגי AI / פיתוח מוצרים דיגיטליים / AI לעסקים קטנים ובינוניים) מתאספים לשורה התחתונה, אותו מנגנון.
Scene 4 (5.0–6.0s): הרשת המלאה מוחזקת - settle only, subtle jitter לכל היותר. המעבר לפריים 5 (crossfade) הוא היציאה.

narrativeRole: מראה את מלוא ההיקף - לא פתרון בודד, מערך שלם.
keyMessage: שישה תחומי פתרון, כולם AI Native מהיסוד.

## Frame 5 — סגירה

- scene: ציטוט החזון, ואז לוגו (על כרטיס בהיר) עם "נשמח לשמוע ממך"
- duration: 6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-closing.html
- type: cta
- persuasion: Future pacing (המהפכה כבר כאן) + Risk reversal (נשמח לשמוע ממך, לא מכירה אגרסיבית)
- beat: inevitability + motivation
- blueprint: logo-assemble-lockup (Reproduce - CTA text-clears-mark-blooms-lockup)
- focal: assets/logo.png
- roles: assets/logo.png = cutout (hero mark על כרטיס בהיר, מרכז)
- sfx:
- asset_candidates: assets/logo.png — לוגו OMS AI, שקוף

Scene 1 (0.0–2.0s): dark-navy field; הציטוט "המהפכה כבר כאן. האם העסק שלך יוביל אותה, או יישאר מאחור?" נכנס per-word, מוחזק רגע.
Scene 2 (2.0–2.9s): הציטוט מתפוגג (shrink-toward-center + fade), משאיר מסך כהה ריק לרגע.
Scene 3 (2.9–4.3s): לוגו ה-OMS AI (על כרטיס לבן) spring-bloom מאפס במרכז, settle חלק ללא bounce.
Scene 4 (4.3–6.0s): הכיתוב "נשמח לשמוע ממך" מתיישב מתחת ללוגו, הקומפוזיציה מוחזקת עד הפריים האחרון - dead static (זו היציאה של הסרטון עצמו, אין מעבר נוסף).

narrativeRole: סוגר את הסיור בקריאה לפעולה שקטה, לא אגרסיבית.
keyMessage: המהפכה כבר כאן - דברו עם OMS AI.
