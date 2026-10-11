// Shared header, footer and policy popup for every page except the homepage.
// Usage: <script src="policies.js"></script><script src="site.js"></script> at the end of <body>.
// Menu items are the same as the homepage; the current page is highlighted.
(function () {
  const MENU = [
    ['/#hero', 'ראשי'],
    ['/#ainative', 'AI Native'],
    ['/#compare', 'השוואה'],
    ['/#about', 'אודות'],
    ['/#services', 'שירותים'],
    ['/#vision', 'חזון'],
    ['/jobot', 'Jobot'],
    ['/your-meeting', 'Your Meeting'],
    ['/seder-yom', 'סדר יום'],
  ];
  const POLICY_LINKS = [
    ['/pay', 'תשלום מאובטח', null],
    ['/terms', 'תנאי שימוש ומדיניות ביטולים', 'terms'],
    ['/privacy', 'מדיניות פרטיות', 'privacy'],
    ['/#accessibility', 'הצהרת נגישות', 'accessibility'],
  ];
  const SLOGAN_SUB = 'בניית מוצרים - מערכות, אפליקציות ואתרים באמצעות יכולות הבינה המלאכותית. AI-NATIVE';
  const here = location.pathname.replace(/\.html$/, '').replace(/\/$/, '');

  const css = `
    :root { --nav-h: 96px; }
    #sh-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: var(--nav-h);
      background: rgba(255,255,255,0.92); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(255,255,255,0.25);
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      padding: 0 36px; direction: ltr; font-family: 'Rubik', sans-serif;
      transition: background 0.3s, box-shadow 0.3s;
    }
    #sh-nav.scrolled { background: rgba(255,255,255,0.98); box-shadow: 0 2px 24px rgba(0,0,0,0.1); }
    #sh-nav .sh-brand { display: flex; align-items: center; gap: 18px; flex-shrink: 0; }
    #sh-nav .sh-brand > a { display: flex; align-items: center; }
    #sh-nav .sh-brand img { height: 84px; object-fit: contain; }
    #sh-nav .sh-slogan { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
    #sh-nav .sh-slogan-main { font-size: 20px; font-weight: 300; color: #0B2447; letter-spacing: 0.5px; line-height: 1; }
    #sh-nav .sh-slogan-main b { font-weight: 700; }
    #sh-nav .sh-slogan-sub { font-size: 11.5px; color: rgba(0,0,0,0.6); font-weight: 300; white-space: nowrap; }
    #sh-nav ul { display: flex; align-items: center; gap: 22px; list-style: none; direction: rtl; margin: 0; padding: 0; }
    #sh-nav ul a { font-size: 14px; font-weight: 400; color: rgba(0,0,0,0.7); white-space: nowrap; text-decoration: none; transition: color 0.2s; }
    #sh-nav ul a:hover, #sh-nav ul a.active { color: #000; }
    #sh-nav ul a.active { font-weight: 600; }
    #sh-nav ul a.sh-cta { background: #0B2447; color: #fff; padding: 9px 20px; border-radius: 10px; font-weight: 500; }
    #sh-nav ul a.sh-cta:hover { background: #1A3A6B; }
    #sh-nav .sh-mobile-cta { display: none; background: #0B2447; color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 500; text-decoration: none; }
    #sh-burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
    #sh-burger span { display: block; width: 24px; height: 2px; background: rgba(0,0,0,0.7); border-radius: 2px; transition: all 0.3s; }
    #sh-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    #sh-burger.open span:nth-child(2) { opacity: 0; }
    #sh-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    #sh-menu {
      position: fixed; top: var(--nav-h); left: 0; right: 0; z-index: 99;
      background: rgba(255,255,255,0.97); backdrop-filter: blur(18px);
      padding: 20px; display: none; flex-direction: column; gap: 4px;
      border-bottom: 1px solid rgba(0,0,0,0.08); direction: rtl; font-family: 'Rubik', sans-serif;
    }
    #sh-menu.open { display: flex; }
    #sh-menu a { font-size: 17px; color: rgba(0,0,0,0.75); padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.06); text-decoration: none; }
    #sh-menu a:last-child { border-bottom: none; }

    #sh-footer { background: #060E1F; border-top: 1px solid rgba(255,255,255,0.08); padding: 48px 40px; text-align: center; font-family: 'Rubik', sans-serif; direction: rtl; }
    #sh-footer .sh-f-head { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 24px; }
    #sh-footer .sh-f-main { font-size: 20px; font-weight: 300; color: rgba(255,255,255,0.85); letter-spacing: 0.5px; direction: ltr; }
    #sh-footer .sh-f-main b { font-weight: 700; color: #fff; }
    #sh-footer .sh-f-sub { font-size: 12px; color: rgba(255,255,255,0.45); font-weight: 300; }
    #sh-footer .sh-f-links { display: flex; gap: 12px 28px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap; }
    #sh-footer .sh-f-links a { font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
    #sh-footer .sh-f-links a:hover { color: #fff; }
    #sh-footer .sh-f-sep { color: rgba(255,255,255,0.15); }
    #sh-footer p { font-size: 12px; color: rgba(255,255,255,0.25); line-height: 1.6; margin: 0; animation: none; }
    #sh-footer p a { color: inherit; }

    #sh-policy { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 9000; align-items: center; justify-content: center; padding: 20px; font-family: 'Rubik', sans-serif; direction: rtl; }
    #sh-policy.open { display: flex; }
    #sh-policy .sh-box { background: #0f2d52; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 36px 32px; max-width: 680px; width: 100%; position: relative; max-height: 90vh; overflow-y: auto; animation: shModalIn 0.25s ease; text-align: right; }
    @keyframes shModalIn { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: none; } }
    #sh-policy .sh-close { position: absolute; top: 16px; inset-inline-end: 16px; background: rgba(255,255,255,0.08); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
    #sh-policy .sh-close:hover { background: rgba(255,255,255,0.18); }
    #sh-policy h2 { font-size: 22px; font-weight: 700; margin: 0 0 12px; color: #fff; padding-inline-end: 40px; }
    #sh-policy .sh-body { font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.9; font-weight: 300; }
    #sh-policy .sh-body h3 { font-size: 15px; font-weight: 600; color: #00BFB3; margin: 24px 0 8px; }
    #sh-policy .sh-body h3:first-child { margin-top: 0; }
    #sh-policy .sh-body p { font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.9; margin: 0 0 10px; animation: none; text-align: right; }
    #sh-policy .sh-body ul { padding-inline-start: 20px; margin-bottom: 10px; }
    #sh-policy .sh-body li { margin-bottom: 6px; }
    #sh-policy .sh-body .policy-date { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 28px; }

    @media (max-width: 1600px) { #sh-nav .sh-slogan { display: none; } }
    @media (max-width: 1150px) {
      #sh-nav ul { display: none; }
      #sh-nav .sh-mobile-cta { display: inline-block; }
      #sh-burger { display: flex; }
    }
    @media (max-width: 900px) {
      :root { --nav-h: 76px; }
      #sh-nav { padding: 0 14px; }
      #sh-nav .sh-brand img { height: 64px; }
      #sh-nav ul { display: none; }
      #sh-nav .sh-mobile-cta { display: inline-block; }
      #sh-burger { display: flex; }
    }
    @media (max-width: 600px) { #sh-footer { padding: 36px 16px; } #sh-policy .sh-box { padding: 28px 20px; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const isActive = href => href !== '/#hero' && here === href;
  const menuLinks = MENU.map(([href, label]) => `<a href="${href}"${isActive(href) ? ' class="active"' : ''}>${label}</a>`);
  const sloganMain = '<b>O</b>ne <b>M</b>an <b>S</b>ystem <b>AI</b>';

  // Header
  const nav = document.createElement('nav');
  nav.id = 'sh-nav';
  nav.innerHTML = `
    <div class="sh-brand">
      <a href="/"><img src="logo.png" alt="OMS AI" /></a>
      <div class="sh-slogan"><span class="sh-slogan-main">${sloganMain}</span><span class="sh-slogan-sub">${SLOGAN_SUB}</span></div>
    </div>
    <ul>${menuLinks.map(a => `<li>${a}</li>`).join('')}<li><a href="/#contact" class="sh-cta">צור קשר</a></li></ul>
    <div style="display:flex;align-items:center;gap:8px;">
      <a href="/#contact" class="sh-mobile-cta">צור קשר</a>
      <button id="sh-burger" aria-label="תפריט"><span></span><span></span><span></span></button>
    </div>`;
  const menu = document.createElement('div');
  menu.id = 'sh-menu';
  menu.innerHTML = menuLinks.join('') + '<a href="/#contact">צור קשר</a>';
  document.body.prepend(menu);
  document.body.prepend(nav);

  const burger = document.getElementById('sh-burger');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); });
  menu.addEventListener('click', () => { burger.classList.remove('open'); menu.classList.remove('open'); });
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10));

  // Footer
  const policyLinks = POLICY_LINKS.map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join('<span class="sh-f-sep">·</span>');
  const footer = document.createElement('footer');
  footer.id = 'sh-footer';
  footer.innerHTML = `
    <div class="sh-f-head"><span class="sh-f-main">${sloganMain}</span><span class="sh-f-sub">${SLOGAN_SUB}</span></div>
    <div class="sh-f-links">${menuLinks.join('')}<a href="/#contact">צור קשר</a></div>
    <div class="sh-f-links" style="margin-bottom:16px;">${policyLinks}</div>
    <p>© 2026 OMS AI · כל הזכויות שמורות · ישראל</p>
    <p style="margin-top:8px;">הדודאים 5, חדרה · <a href="tel:+972554606718">055-4606718</a> · <a href="mailto:info@omsai.ai">info@omsai.ai</a></p>`;
  const firstScript = [...document.body.children].find(el => el.tagName === 'SCRIPT');
  document.body.insertBefore(footer, firstScript || null);

  // Policy popup on the current page
  const modal = document.createElement('div');
  modal.id = 'sh-policy';
  modal.innerHTML = '<div class="sh-box"><button class="sh-close" aria-label="סגירה">&#x2715;</button><h2></h2><div class="sh-body"></div></div>';
  document.body.appendChild(modal);
  const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  modal.querySelector('.sh-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  window.openPolicy = function (type) {
    if (typeof policyContent === 'undefined' || !policyContent.he[type]) return false;
    modal.querySelector('h2').textContent = policyContent.he[type].title;
    modal.querySelector('.sh-body').innerHTML = policyContent.he[type].body;
    modal.querySelector('.sh-box').scrollTop = 0;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    return true;
  };

  // Any link to the terms / privacy / accessibility opens the popup instead of leaving the page
  const POLICY_PATHS = { '/terms': 'terms', '/#terms': 'terms', '/privacy': 'privacy', '/#privacy': 'privacy', '/#accessibility': 'accessibility' };
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const type = POLICY_PATHS[a.getAttribute('href')];
    if (type && window.openPolicy(type)) e.preventDefault();
  });
})();
