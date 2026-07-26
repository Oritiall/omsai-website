---
workflow: product-launch-video
flow: automation
storyboard: yes
message: "ככה נראה OMS AI - חברת AI Native ישראלית, מהרעיון ועד השירותים."
destination: reels
aspect: 1080x1920
language: he
length: 30s
angle: "site tour (show-it-as-is) - סיור כרונולוגי בתמונות ובטקסטים האמיתיים של האתר"
---

## Intent

סיור אתר (site tour / showcase) ל-OMS AI (omsai.ai) - בניגוד לפרויקט הקודם (omsai-promo,
טיפוגרפיה מופשטת בלבד), הסרטון הזה **מציג את האתר עצמו**: התמונות והטקסטים האמיתיים
שכבר קיימים בריפו. סדר כרונולוגי לפי מבנה האתר: Hero → מה זה AI Native → השוואה
(traditional-team.png מול ai-team.png) → שירותים → CTA/יצירת קשר. הקהל וההודעה זהים
לפרויקט הקודם (בעל/ת עסק קטן-בינוני בישראל, סקפטי/ת לגבי AI), אבל הפעם ההוכחה היא
ויזואלית - נכסי המותג עצמם, לא רק טיפוגרפיה קינטית.

## Assets

- logo.png - לוגו המותג, לשילוב במיתוג/סגירה (עם כרטיס בהיר מאחוריו על רקע כהה, כפי
  שנקבע בפרויקט הקודם).
- content.json - טקסטים רשמיים (עברית) של האתר - hero-sub, ainative-title/sub,
  pillar1-3, impact-title, movers-title/sub, svc1-6, contact-title/sub.
- traditional-team.png / ai-team.png - תמונות ההשוואה של האתר בין צוות מסורתי לצוות
  AI Native - הנכס המרכזי שהיה "עתידי" בפרויקט הקודם, בשימוש מלא כאן.
- website.html - מבנה האתר המלא, מקור לזיהוי מבנה הסקשנים (hero, ainative, impact,
  compare, about, movers, advantages, services, vision, jobot, contact) וטוקנים.
- JOBOT.png - מסקוט המותג - נכס אופציונלי, לשקול לפריים קליל אם מתאים לקצב.

## Customizations

- מקור התוכן הוא קבצי האתר המקומיים בריפו (logo.png, content.json,
  traditional-team.png, ai-team.png בשורש הריפו) - **אין** לגלוש ל-omsai.ai החי
  (חסום ברמת מדיניות הרשת של הסביבה, כפי שנתגלה בפרויקט הקודם) - כל מה שצריך כבר
  קיים מקומית.
- ללא capture אוטומטי מהאתר החי - זהו "no-capture path" לפי הבריף, עם תמונות אמיתיות
  מהריפו במקום screenshots.
- לשמור על מערכת העיצוב הכהה/טורקיז מהפרויקט הקודם (frame.md, preset
  blue-professional מותאם) להמשכיות מותגית בין שני הסרטונים.
- שימוש חוזר בלוגו עם כרטיס בהיר (white plate) - לקח שנלמד בפרויקט הקודם.

## Notes

- זהו פרויקט **נפרד** מ-omsai-promo (videos/omsai-promo/) - לא עריכה של הסרטון הקיים.
- אין קריינה מתוכננת כברירת מחדל (אותה מגבלת רשת חלה: HeyGen ו-MusicGen המקומי חסומים
  שניהם) - הטקסטים האמיתיים מהאתר על גבי התמונות נושאים את המסר, בדומה לפרויקט הקודם.
  אם ייפתח החיבור ל-HeyGen בעתיד, אפשר להריץ מחדש את שלב האודיו.
