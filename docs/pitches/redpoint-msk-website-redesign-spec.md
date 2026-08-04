# RedPoint (redpoint.msk.ru) — Site Audit & Redesign Spec

**Client:** ООО «Ред Поинт» / скалодром RedPoint  
**URL:** http://redpoint.msk.ru/  
**Address:** Москва, ул. Вятская, д. 27, корп. 12 (фитнес-клуб Megapolis), ~7 мин от м. Савёловская  
**Phone:** +7 985 351 56 03 · **Email:** tbr@baurock.ru  
**Prepared for:** sales pitch / redesign proposal  
**Audit date:** 2026-08-04  
**Site platform (current):** custom baurock.ru CMS, XHTML + PHP on Apache

---

## 1. Executive pitch (what to tell them)

RedPoint has a real product advantage: a rare 12.5 m arch wall unique in Moscow, a certified 10 m speed wall, a separate boulder hall, kids school, adult coaching (including elite coaches), parties, and trips. The website does not sell that.

Today the site behaves like an internal bulletin board from ~2012: fixed desktop layout, outdated news, complex price tables, no booking path, weak mobile experience, and insecure hosting. New visitors who find RedPoint via Maps / 2GIS / search get friction instead of a clear path: **who we are → first visit → price → call / book**.

**Proposed offer:** replace the site with a conversion-focused marketing site that keeps their strongest content (FAQ, safety, coaches, walls), modernizes presentation, and turns phone/SMS into measurable leads (callback, trial booking, party inquiry).

**Business outcomes to sell:**
- More first-time trial bookings (“Я — новичок!” / intro lesson)
- Higher conversion from Maps / search to call or form
- Clearer upsell: kids school, adult school, parties, gift certificates
- Lower staff time answering the same FAQ questions
- Brand that matches a gym that has existed ~14+ years and hosts competitions

---

## 2. Current site inventory

### 2.1 Information architecture (as found)

| Menu item (RU) | Path | Role |
| --- | --- | --- |
| На главную | `/` | News feed + photo slideshow |
| О скалодроме | `/menu/about` | Facility description (strong content) |
| Правила и безопасность | `/menu/safetyandregulations` | Legal / safety rules (long) |
| Цены и расписание | `/menu/ratesandhours` | Hours + full price matrix |
| ЧаВо для новичков | `/menu/faq` | Excellent first-visit content |
| Занятия с детьми | `/menu/childrenschool` | Kids school + coaches |
| Взрослая школа | `/menu/adultschool` | Adult coaching + coaches |
| Выезды на скалы | `/menu/climbingtrips` | Trips |
| Соревнования | `/menu/competitions` | Old event posts |
| Детские и семейные праздники | `/menu/parties` | Birthday / family events |
| Каталог трасс | `/menu/guidebook` | Route catalog |
| Фотоальбомы | `/menu/galleries` | Photo albums |
| Контакты и схема проезда | `/menu/contactus` | Phone, email, maps |

Homepage is primarily a **news blog**. Most posts are 2018–2020 (COVID reopen, festivals). The only recent item noted in audit: price change notice dated **28 Feb 2025**.

### 2.2 Product / offer summary (from site)

**Hours**
- Mon–Fri 09:00–22:50
- Sat–Sun 09:00–21:50
- Kids sessions: weekdays 16:00–18:00; weekends 10:00–12:00
- Ice climbing practice: Sundays 09:00–12:00 (internal overhang restricted)

**Facilities (unique selling points)**
- Lead/speed gym height **12.5 m**
- Unique **arch** structure (claimed unique in Moscow)
- Six modules: overhang, mild overhang, vertical/positive, “скворечник”, “каньон” (harmonica / chimney training), certified **10 m speed wall**
- Separate **boulder hall** (~4 m over 40 cm mats) with warm-up zone
- ~50% of big wall aimed at beginners
- Optional Megapolis locker rooms with shower/sauna vs gym lockers without
- Free parking for regulars (per site)

**Pricing model (post March 2025 site tables)**  
Dual columns: gym lockers vs fitness lockers (shower/sauna). Examples:
- Adult peak single: **900 / 1100 ₽**
- Child / morning single: **700 / 850 ₽**
- Passes: 10/20 visits and 1/3/6/12 month unlimited
- Intro group lesson 1.5h (entry + coach + gear): **2000 / 2150 ₽**
- “Я — новичок!” Sat 16:00 / Sun 14:00: **1700 / 1850 ₽**
- Personal / pair coaching, kids packages, gear rental à la carte
- Parties: **2500–3000 ₽**/person (group size tiers), 2 hours

**Audience segments already implied by content**
1. Absolute beginners (FAQ-heavy)
2. Regular adult climbers (passes, guidebook)
3. Parents / kids (school + parties)
4. Intermediate–advanced (elite coaches, competitions, trips)
5. Corporate / group (phone-only today)

---

## 3. Critique

### 3.1 Strategic failures

1. **Homepage sells the past, not the visit.** A visitor’s first screen is old news (quarantine, 2019 festivals), not walls, first-timer path, or CTA.
2. **No primary conversion path.** Contact is “call or SMS.” No booking, no callback form, no WhatsApp/Telegram deep link, no “first visit” wizard.
3. **Price page is a spreadsheet dump.** Correct for staff; hostile for newcomers. Dual locker columns + many pass variants without recommended path (“start here”).
4. **Brand is invisible as experience.** Product is dramatic (height, arch, movement). Site is gray `#e6e6e6`, Arial, 960px fixed grid, GIF banners — looks like a forum skin, not a climbing gym.
5. **Trust signals are stale.** Reviews on parties page from 2013; competitions list ends ~2019; Maps/2GIS exist externally but are not leveraged on-site.

### 3.2 UX / IA problems

- Left sidebar with **13 items** equals equal weight; no hierarchy for “Новичок / Цены / Записаться”.
- Multiple `<h1>` on pages (menu headings + article titles) — bad for accessibility and SEO.
- “Акции” and “Расскажите друзьям” chrome with little useful promo content.
- Broken / empty URLs return **HTTP 200 with empty body** (e.g. invented paths, `robots.txt`, `sitemap.xml`) — bad for SEO and monitoring.
- Photo slideshow exists, but photos are not structured as hero storytelling (facility → emotion → CTA).
- Mobile: **no `viewport` meta**; layout is 960-grid era desktop. Phone users (majority of local-service traffic) get pinch-zoom UX.

### 3.3 Technical / security debt (strong pitch lever)

Observed response headers / markup:
- `Server: Apache/2.2.14 (Ubuntu)`
- `X-Powered-By: PHP/5.3.2-1ubuntu4.7`
- Doctype: **XHTML 1.0 Strict**
- Analytics: legacy `_gaq` / `dc.js`
- VK SDK loaded over **http://**
- Site served primarily over **HTTP** (no modern TLS posture for a commercial venue)
- Mixed absolute `http://www.redpoint.msk.ru/...` image URLs

This stack is years past end-of-life. Even if the gym is careful operationally, the public site signals neglect and carries real risk (compromised CMS → spam / phishing on their domain).

### 3.4 Content quality (keep vs rewrite)

| Keep / refine | Rewrite / retire |
| --- | --- |
| About: wall modules, arch, speed wall facts | Homepage-as-blog |
| FAQ for beginners (tone is warm and useful) | Ancient news as primary surface |
| Safety rules (legal need) — shorten + link full PDF | Dense tables as only price UX |
| Coach bios (esp. named elite coaches) | Obsolete promo GIFs / dead partners |
| Parties offer + process | Competing H1 / left-nav dump |
| Hours and visit rules (ID, clean shoes, kid party closures) | Empty 200 responses / missing sitemap |

### 3.5 Competitive context (positioning angle)

Moscow climbing has modern gym brands with Instagram-native sites, online schedules, and trial funnels. RedPoint’s differentiation should be **character + structure uniqueness + coaching lineage**, not “we also have a wall.” The current site fails to make uniqueness scannable in 5 seconds.

---

## 4. Goals & success metrics

### 4.1 Business goals

1. Increase qualified first-visit inquiries (intro lesson / “Я — новичок!” / kids trial).
2. Make prices understandable without a phone call for 80%+ of common cases.
3. Capture party and kids-school leads with structured forms.
4. Present RedPoint as a serious, living venue (not a frozen archive).

### 4.2 KPIs (propose in pitch)

| KPI | Baseline | Target after launch (90 days) |
| --- | --- | --- |
| Mobile traffic share usable without pinch-zoom | ~broken UX | 100% responsive |
| CTA click rate on homepage (Call / Book trial) | n/a | Track; aim ≥8–12% of sessions |
| Form submits (callback / trial / party) | 0 | Steady weekly volume (agree number with client) |
| Bounce on `/prices` | unknown | Reduce via simplified pricing UX |
| Time-to-first-key-info (hours, address, first-visit CTA) | multi-scroll | <5 seconds above the fold |
| Core Web Vitals (LCP/INP/CLS) | unmeasured | “Good” on mobile |

Instrument with modern analytics (e.g. Yandex Metrika + goals) — replace legacy GA.

---

## 5. Recommended approach (3 options)

### Option A — Marketing site rebuild (recommended)

Static or lightly dynamic site (Next.js / Astro / plain Vite) + CMS for news/prices/coaches. Forms → email/Telegram. No full booking engine in v1.

- **Pros:** Fast, affordable, huge UX/brand jump, easy to maintain  
- **Cons:** Online payment / capacity booking later  
- **Best when:** Goal is pitch-and-close redesign, not full ops platform

### Option B — Site + booking MVP

Option A plus calendar holds for intro lessons / personal training / parties (admin confirm manually).

- **Pros:** Higher conversion, less phone tag  
- **Cons:** More product/ops design; needs staff workflow  
- **Best when:** Front desk is overloaded with SMS

### Option C — Visual refresh on old CMS

Restyle baurock templates only.

- **Pros:** Cheapest on paper  
- **Cons:** Keeps PHP 5.3 / Apache 2.2 risk; poor foundation  
- **Recommendation:** Do **not** sell this; it fails the trust/security conversation

**Pitch recommendation:** Lead with **Option A**, present **Option B** as Phase 2 upsell.

---

## 6. Redesign specification

### 6.1 Brand & visual direction

**Positioning line (working):**  
«RedPoint — скалодром с аркой, которой нет больше в Москве. Высота, школа, сообщество.»

**Visual principles**
- One composition per viewport; brand name hero-level (not only a tiny logo in a sidebar).
- Full-bleed photography of real walls/climbers as the primary visual plane (not inset cards).
- Expressive typography (avoid Inter/Arial/system defaults); pair a strong display face with a readable text face.
- Atmosphere via depth (photo + subtle grain/gradient overlays), not flat gray panels.
- Motion: 2–3 intentional moments (e.g. hero image ken-burns or slow parallax, CTA hover, scroll-reveal of wall stats) — not noise.
- Color system: define CSS variables. Avoid generic purple SaaS gradients; lean into chalk, steel, rope, warm concrete, and a decisive accent (likely a true “red point” red used sparingly).
- No card-grid hero; cards only where interaction needs a container (pricing toggle, form).

**Voice**
- Keep the friendly FAQ tone; cut exclamation-spam and outdated COVID framing.
- Safety content: calm, clear, authoritative.

### 6.2 Primary user journeys

1. **Newbie:** Land → understand “first time is coached” → see intro price → book/call → FAQ reassure.
2. **Parent:** Land → Kids / Parties → schedule & age rules → inquiry form.
3. **Regular:** Prices / passes → hours → guidebook updates → contacts.
4. **Local SEO visitor:** NAP consistency → map → call button → hours open-now.

### 6.3 Site map (v1)

```
/                     Home
/first-visit          Первый визит (FAQ distilled + CTA)
/walls                Залы и стенки (arch, speed, boulder)
/prices               Цены (simplified + full table toggle)
/coaching             Тренировки (adult + kids tabs)
/parties              Праздники
/trips                Выезды (optional if still active)
/rules                Правила и безопасность
/routes               Каталог трасс (or link to living doc/IG)
/gallery              Фото
/news                 Новости (sparse; only if maintained)
/contacts             Контакты
/legal/privacy        Политика ПДн
```

Secondary: gift certificate landing (can be section on prices).

### 6.4 Page-level requirements

#### Home
**Job:** Convert curiosity → first visit action.

Above the fold:
- Brand: **RedPoint**
- One headline about the unique arch / height
- One supporting sentence (boulder + lead + school)
- CTA group: **Записаться на вводное** · **Цены** · **Позвонить**
- Full-bleed real gym photo (not collage)

Below fold (one job each):
1. Three proofs: 12.5 m · арка · скорость 10 m  
2. Paths: Новичкам / Детям / Свой уровень  
3. Social proof (2GIS/Yandex rating widget or curated quotes)  
4. Hours + metro + map teaser  
5. Footer NAP + messengers

**Do not** put news, old festivals, or full price tables in the first viewport.

#### First visit
- Step list: what to bring, ID rule, clean shoes, rental gear, intro lesson.
- Link to full FAQ accordion (migrate best Q&As).
- Strong CTA + phone.

#### Prices
- Default **simplified chooser**: Who? (adult/child) · When? (morning/peak) · Lockers? (gym/fitness) · Goal? (single/pass/with coach).
- Show 1–3 recommended offers, then “Полный прайс” expandable table (migrate current numbers).
- Note validity rules for multi-person passes.
- Gift certificate callout.

#### Coaching
- Tabs: Adults / Kids.
- Coach cards with schedule (update with client).
- Highlight intro and “Я — новичок!” schedule.
- Personal / pair booking CTA.

#### Parties
- Offer, price tiers, duration, what’s included.
- Availability inquiry form (date, kids count, age, contacts).
- Fresh photo set mandatory.

#### Contacts
- Click-to-call, email, messengers.
- Embedded map + entrance photo (they already mention entrance looks “like this”).
- Open hours with timezone Moscow.

### 6.5 Components (design system lite)

- Header: logo, compact nav (Новичкам, Цены, Тренировки, Праздники, Контакты), phone, primary CTA
- Footer: NAP, hours, legal, social (VK; drop or verify Facebook)
- PriceChip / PassCard
- CoachCard
- FAQ accordion
- Lead forms: Trial, Callback, Party
- AlertBar for temporary closures (kids parties occupying canyon, ice session, comps)

### 6.6 Content migration plan

1. Export all `/menu/*` pages and active articles.  
2. Fact-check prices with client against March 2025+ actuals (2GIS still showed older figures at audit time — **risk of public inconsistency**).  
3. Rewrite About into scannable wall story + diagram/photo labels.  
4. Compress Rules into summary + downloadable full text.  
5. Refresh coach list and schedules.  
6. Archive pre-2022 news unless historically important.  
7. New photo shoot brief: arch exterior/interior, boulder cave, speed wall, kids class, front desk, entrance from street/Megapolis.

### 6.7 SEO & local discovery

- Unique titles/descriptions per page (currently generic sitewide title).
- `robots.txt` + XML sitemap with real 404s (not empty 200).
- Schema.org `SportsActivityLocation` / `LocalBusiness` JSON-LD (NAP, hours, phone).
- HTTPS + redirect HTTP→HTTPS.
- Consistent NAP with 2GIS / Yandex / Google Business.
- Alt text on facility photos; compress images (WebP/AVIF).
- Optional: blog only if someone will post monthly; otherwise don’t fake freshness.

### 6.8 Accessibility & quality bar

- One `<h1>` per page.
- Focus states, sufficient contrast, keyboard forms.
- Touch targets ≥44px on mobile.
- Language: `ru` primary; optional EN later for expats (not v1 unless requested).

### 6.9 Tech recommendation (implementation-ready)

**v1 stack (fits Option A)**
- Frontend: Vite + React or Astro (static-first)
- Hosting: HTTPS CDN (e.g. Render static / Pages / S3+CloudFront)
- Forms: Form endpoint → email + Telegram bot to admin phone
- CMS: lightweight (Sanity/Decap/Notion-sync) for prices, coaches, alerts
- Analytics: Yandex Metrika goals on CTA + forms
- Domain: keep `redpoint.msk.ru`; force TLS; HSTS after verification

**Non-goals for v1**
- Full POS / membership wallet
- Online payment for all pass types (can add YooKassa later)
- Live route-setting CMS unless staff will maintain it

### 6.10 Admin / editorial requirements

Client must be able to update without a developer:
- Prices and hours
- Temporary closure alerts
- Coach schedules
- News (optional)
- Party gallery

Train one staff owner; provide a 1-page “how to update prices” checklist.

---

## 7. Pitch packaging (how to sell the work)

### 7.1 One-liner

«Мы не просто “обновим дизайн” — мы сделаем сайт, который приводит новичков на вводное занятие и снимает нагрузку с телефона.»

### 7.2 Problem → proof → plan

1. **Show screenshots:** homepage news from 2020 vs modern gym sites; phone DevTools with no viewport.  
2. **Show headers:** Apache 2.2 / PHP 5.3 as risk talking point (factual, non-alarmist).  
3. **Show their own strengths:** quote About page USPs they already wrote.  
4. **Present wire home + prices chooser** (2 screens enough for first meeting).  
5. **Offer Option A fixed scope + Option B phase 2.**

### 7.3 Suggested commercial packages

| Package | Scope | Deliverables |
| --- | --- | --- |
| **Audit (done)** | This document | Findings + roadmap |
| **Brand site** | Option A | Design system, 8–10 pages, forms, CMS, HTTPS launch, Metrika |
| **Growth** | Option B add-on | Trial/party booking calendar, SMS/Telegram confirmations |
| **Care** | Monthly | Price updates, photo swaps, small experiments |

### 7.4 Discovery questions for the client (first meeting)

1. What share of new guests comes from Maps vs friends vs Instagram/VK?  
2. Who answers +7 985 351 56 03 and what are the top 5 repeated questions?  
3. Are intro lessons capacity-constrained (need booking) or walk-in friendly?  
4. Is the route guidebook still maintained?  
5. Which coaches/schedules are current?  
6. Do they want online payment in year one?  
7. Who will update content monthly?

---

## 8. Delivery phases

### Phase 0 — Alignment
- Confirm prices, coaches, active services (trips/comps).
- Analytics access + domain DNS access.
- Photo audit / shoot plan.

### Phase 1 — UX & content
- IA final, wireframes (home, first-visit, prices, contacts).
- Content rewrite in RU.
- Visual direction approval (1 moodboard + 1 home mock).

### Phase 2 — Build
- Responsive implementation, forms, CMS, SEO basics, redirects from old `/menu/*` URLs.

### Phase 3 — Launch
- TLS, Metrika goals, 404 monitoring, staff training, compare Maps NAP.

### Phase 4 — Iterate (optional)
- Booking MVP, paid ads landing, certificate e-gift flow.

---

## 9. Redirect map (preserve equity)

Keep old URLs working:

| Old | New |
| --- | --- |
| `/menu/about` | `/walls` or `/about` |
| `/menu/ratesandhours` | `/prices` |
| `/menu/faq` | `/first-visit` |
| `/menu/childrenschool` | `/coaching#kids` |
| `/menu/adultschool` | `/coaching#adults` |
| `/menu/parties` | `/parties` |
| `/menu/contactus` | `/contacts` |
| `/menu/safetyandregulations` | `/rules` |
| `/menu/guidebook` | `/routes` |
| `/menu/galleries` | `/gallery` |
| `/article/*` | `/news/*` or archive |

Return proper **404** for unknown paths (fix empty 200 behavior).

---

## 10. Risks & open facts

- Public price inconsistency risk between site and 2GIS listings observed during research — must reconcile before launch.
- Some services (trips, competitions, specific coaches) may be inactive; do not redesign around dead offers.
- Party pricing on site may be outdated relative to ops — confirm.
- Facebook page link may be dead weight; verify VK as primary social.
- Legal pages (privacy / offer) needed for forms under RU personal-data expectations.

---

## 11. Acceptance criteria (definition of done)

- [ ] Mobile homepage communicates brand + USP + CTA without horizontal scroll
- [ ] First-visit path understandable in under 1 minute
- [ ] Prices: simplified path + full table available
- [ ] Click-to-call and at least one lead form email/Telegram delivery tested
- [ ] HTTPS live; old menu URLs redirect
- [ ] Metrika goals firing on CTA + forms
- [ ] Client can update prices without developer
- [ ] No EOL server stack exposed for the new site

---

## 12. Appendix — raw observations from audit

- Title everywhere: `RedPoint - скалодром в Москве`
- CSS: `reset.css`, `960.css`, `appearance.css`, `scroller.css`, `content.css`
- Body background `#e6e6e6`; UI fonts Arial
- Slideshow script `slides.js`; photos under `/photos/*`
- Footer credit: «создано в baurock.ru»
- Related property/tooling ecosystem: baurock.ru
- External listings: 2GIS firm card references appointment-oriented hours messaging — align site copy with real admission rules

---

*End of spec. Use sections 1, 5, 6, and 7 as the client-facing pitch core; keep sections 2–3 as appendix proof.*
