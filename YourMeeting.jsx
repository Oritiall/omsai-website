import { useState } from 'react';

const ACCENT = '#22c55e';

const features = [
  {
    title: 'תיאום אוטומטי',
    desc: 'קבעו פגישות מול לקוחות, אפשרו ניהול יומן ישיר ואוטומטי. אפס מאמץ מצדכם.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="32" rx="4"/><line x1="6" y1="20" x2="42" y2="20"/>
        <line x1="16" y1="6" x2="16" y2="14"/><line x1="32" y1="6" x2="32" y2="14"/>
        <rect x="14" y="26" width="6" height="5" rx="1"/><rect x="26" y="26" width="6" height="5" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'לוח שנה מתקדם',
    desc: 'צפייה בפגישות, ניהול זמן, עדכון שעות פעילות ומעקב אחר לקוחות. הכל במקום אחד.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="16" height="18" rx="3"/><rect x="26" y="6" width="16" height="10" rx="3"/>
        <rect x="26" y="20" width="16" height="18" rx="3"/><rect x="6" y="28" width="16" height="14" rx="3"/>
      </svg>
    ),
  },
  {
    title: 'עצמאי ובעל עסק',
    desc: 'בנינו אותה בשבילך, בצורה שמשקפת את הזהות שלך ואת אופי העסק שלך.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10"/><line x1="24" y1="6" x2="24" y2="12"/>
        <line x1="24" y1="28" x2="24" y2="34"/><line x1="10" y1="20" x2="16" y2="20"/>
        <line x1="32" y1="20" x2="38" y2="20"/><path d="M12 34 C12 28 36 28 36 34 L36 42 L12 42 Z"/>
      </svg>
    ),
  },
  {
    title: 'מעקב ונתונים',
    desc: 'ראה כמה פגישות נקבעו, מה שיעורי ההמרה, ואיפה יש פרצות צמיחה בעסק שלך.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 16,26 24,32 34,16 42,22"/>
        <line x1="6" y1="38" x2="42" y2="38"/><line x1="6" y1="6" x2="6" y2="38"/>
        <circle cx="16" cy="26" r="2.5"/><circle cx="24" cy="32" r="2.5"/><circle cx="34" cy="16" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'מתאים לכולם',
    desc: 'יועצים, קואצ׳ים, מספרות, עסקים קטנים ובינוניים. כל מי שרוצה לנהל זמן ולעבוד מסודר.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="16" r="8"/><path d="M4 40 C4 30 32 30 32 40"/>
        <circle cx="36" cy="18" r="6"/><path d="M30 40 C30 32 44 32 44 40"/>
      </svg>
    ),
  },
];

const steps = [
  { num: 1, title: 'השאירו פרטים', desc: 'מלאו את הטופס, ונציג יצור קשר ויבין את הצרכים שלכם.' },
  { num: 2, title: 'תקבלו הדגמה', desc: 'נציג יציג לכם את המערכת עם שעות הפעילות שלכם, מותאמת אישית.' },
  { num: 3, title: 'התחילו לקבל פגישות', desc: 'המערכת עולה לשידור, 24/7, בלי שתצטרכו לעשות דבר נוסף.' },
];

const pricingFeatures = [
  'תיאום אוטומטי ופשוט ללקוחות',
  'עצמאי ובוס של עצמך',
  'לוח שנה מלא ומנוהל',
  'תמיכה ואימון מהיר',
  'ללא עמלות נוספות לצד ג\'',
];

export default function YourMeeting() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendWhatsApp = () => {
    if (!form.name || !form.phone) { alert('נא למלא שם וטלפון.'); return; }
    const lines = [
      `שלום! אני מעוניין/ת בשירות Your Meeting 🗓️`,
      `שם: ${form.name}`,
      `טלפון: ${form.phone}`,
      ...(form.email   ? [`אימייל: ${form.email}`]   : []),
      ...(form.message ? [`הודעה: ${form.message}`] : []),
    ];
    window.open(`https://wa.me/972544555461?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Heebo', sans-serif", background: '#0d1b3e', color: '#f8faff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: ACCENT, padding: '6px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 28 }}>
          ✦ ניהול פגישות פשוט ומקצועי
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 32 }}>
          {['👩‍💻 קואצ׳ים', '💼 יועצים', '✂️ נותני שירות', '🏢 עסקים קטנים ובינוניים', '🔧 מנהלים'].map(t => (
            <span key={t} style={{ background: '#1e3a6e', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 18px', borderRadius: 100, fontSize: 14, fontWeight: 600 }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: ACCENT, padding: '5px 16px', borderRadius: 6, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
          ⚡ הגדרה פשוטה ממש בדקות
        </div>

        <h1 style={{ fontSize: 'clamp(34px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 22, maxWidth: 780 }}>
          ניהול פגישות חכם<br /><em style={{ fontStyle: 'normal', color: ACCENT }}>שעובד בשבילך</em>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', color: '#b0c4de', maxWidth: 580, lineHeight: 1.75, marginBottom: 38 }}>
          בלי טרחה ובלי בלבול. מערכת פגישות אוטומטית שקובעת, מזכירה ושומרת פרטים — כדי שתתמקדי בעסק שלך, לא בלוגיסטיקה.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#form" style={{ background: ACCENT, color: '#fff', padding: '14px 34px', borderRadius: 10, fontSize: 16, fontWeight: 700 }}>רוצה לשמוע יותר</a>
          <a href="#features" style={{ background: 'transparent', color: '#f8faff', padding: '14px 32px', borderRadius: 10, fontSize: 16, fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>איך זה עובד?</a>
        </div>

        <div style={{ marginTop: 48, display: 'inline-flex', alignItems: 'center', gap: 16, background: '#112040', border: '1px solid rgba(34,197,94,0.3)', padding: '16px 32px', borderRadius: 14 }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: ACCENT }}>₪695</div>
          <div style={{ fontSize: 14, color: '#b0c4de', lineHeight: 1.6 }}>תשלום חד פעמי בלבד<br />ללא דמי מנוי · ללא עמלות</div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ width: 52, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 20 }} />
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase', marginBottom: 14 }}>יתרונות המערכת</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, marginBottom: 14 }}>מה כל עסק מודרני צריך</h2>
        <p style={{ color: '#b0c4de', fontSize: 17, lineHeight: 1.75, maxWidth: 580 }}>מערכת מתקדמת, פשוטה לשימוש ואוטומטית שמאפשרת ללקוחות לקבוע פגישות באופן מקצועי, בלחיצת כפתור.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 48 }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#112040', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 28 }}>
              <div style={{ width: 52, height: 52, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: '#b0c4de', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div style={{ background: '#0a1530', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ width: 52, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 20 }} />
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase', marginBottom: 14 }}>איך זה עובד</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, marginBottom: 14 }}>שלושה צעדים פשוטים</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 28, marginTop: 48 }}>
            {steps.map(s => (
              <div key={s.num} style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, margin: '0 auto 16px', color: '#fff' }}>{s.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#b0c4de', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 52, height: 3, background: ACCENT, borderRadius: 2, margin: '0 auto 16px' }} />
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase', marginBottom: 14 }}>מחיר</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900 }}>פשוט. שקוף. חד פעמי.</h2>
        </div>
        <div style={{ background: '#112040', border: '1px solid rgba(34,197,94,0.35)', borderRadius: 24, padding: 48, maxWidth: 560, margin: '48px auto 0', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: ACCENT, borderRadius: '24px 24px 0 0' }} />
          <div style={{ fontSize: 15, color: '#b0c4de' }}>מחיר לעסק</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: ACCENT, lineHeight: 1, margin: '16px 0 8px' }}>₪695</div>
          <div style={{ color: '#b0c4de', fontSize: 15, marginBottom: 32 }}>תשלום חד פעמי · ללא מנוי · ללא הפתעות · ללא עמלות</div>
          <ul style={{ listStyle: 'none', textAlign: 'right', marginBottom: 32 }}>
            {pricingFeatures.map(f => (
              <li key={f} style={{ padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span>{f}
              </li>
            ))}
          </ul>
          <a href="#form" style={{ display: 'block', textAlign: 'center', background: ACCENT, color: '#fff', padding: 16, borderRadius: 10, fontSize: 17, fontWeight: 700 }}>אני רוצה להתחיל</a>
        </div>
      </section>

      {/* FORM */}
      <div id="form" style={{ background: '#0a1530', padding: '80px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ width: 52, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 20 }} />
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase', marginBottom: 14 }}>צור קשר</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, marginBottom: 14 }}>נשמח לשמוע ממך</h2>
          <p style={{ color: '#b0c4de', lineHeight: 1.75 }}>השאירו פרטים ונחזור אליכם בהקדם, ישירות בוואטסאפ.</p>
          <div style={{ background: '#112040', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 40, marginTop: 40 }}>
            {[
              { label: 'שם מלא', name: 'name', type: 'text', placeholder: 'הכניסו את שמכם' },
              { label: 'טלפון', name: 'phone', type: 'tel', placeholder: '050-0000000' },
              { label: 'אימייל (אופציונלי)', name: 'email', type: 'email', placeholder: 'name@example.com' },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{f.label}</label>
                <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                  style={{ width: '100%', background: '#0a1530', border: '1px solid rgba(255,255,255,0.1)', color: '#f8faff', padding: '12px 16px', borderRadius: 10, fontFamily: 'Heebo, sans-serif', fontSize: 15, outline: 'none', direction: 'rtl' }} />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>הודעה</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="ספרו לנו קצת על הצרכים שלכם..."
                style={{ width: '100%', minHeight: 100, background: '#0a1530', border: '1px solid rgba(255,255,255,0.1)', color: '#f8faff', padding: '12px 16px', borderRadius: 10, fontFamily: 'Heebo, sans-serif', fontSize: 15, resize: 'vertical', outline: 'none', direction: 'rtl' }} />
            </div>
            <button onClick={sendWhatsApp} style={{ width: '100%', background: ACCENT, color: '#fff', border: 'none', padding: 16, borderRadius: 10, fontFamily: 'Heebo, sans-serif', fontSize: 17, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <span>שלח בוואטסאפ</span><span>💬</span>
            </button>
            <p style={{ textAlign: 'center', color: '#b0c4de', fontSize: 13, marginTop: 14 }}>לחיצה תפתח את הוואטסאפ עם הפרטים שלך מוכנים לשליחה</p>
          </div>
        </div>
      </div>

    </div>
  );
}
