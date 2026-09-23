---
description: Gild international workflow
---

GILD International — Website Blueprint
A build-ready plan for Antigravity. Not code — a spec you feed to the agent, phase by phase.
0. How to use this
Antigravity plans best from a clear brief rather than a vague one. Don't paste this whole
document into the agent at once — work through Section 6.3 below, handing it one phase at a
time, pointing back at the relevant blueprint section each time. Section 1 (brand tokens) is the
one part you'll want to give it up front, since every phase depends on it.
1. Brand Foundation
1.1 Color system — sampled directly from your logo file
I ran a pixel-level color extraction on ChatGPT_Image_Sep_7_2026...png rather than eyeballing
it, so these are real values from your mark, not approximations.
Token Hex Source Use
navy-
950
#000814 sampled (vignette edge) Page background, footer, deepest sections
navy-
900
#001030 sampled (dominant bg
color, ~17% of image)
Primary background — hero, nav
navy-
800
#001B45 sampled Elevated surfaces — cards on dark, scrolled
header
navy-
700
#0B2F63 derived (lightened step) Borders/dividers on dark, hover state
gold-
600
#C07820 sampled Shadow-side gold, pressed button state
gold-
500
#D89030 sampled — matches the
"GILD" wordmark
Primary brand gold — headings, borders, icon
strokes
gold-
400
#E8A840 sampled Secondary gold, hover state
gold-
300
#F0C050 sampled Primary CTA fill, links on navy
gold-
200
#F8D870 sampled (specular
highlight)
Hover glow, active state — use sparingly
azure-
700
#002888 sampled (globe deep
water)
Deep accent — globe/map base tones
azure-
500
#0048C0 sampled Mid accent — map pins, secondary links
azure-
400
#0090D8 sampled (globe highlight) Bright accent — reserved for functional signals
(live indicators, active map pin)
white #F8F8F8 sampled Text on navy, reversed logotype color
paper #FAF9F6 derived Light-section background (About, Programs)
Token Hex Source Use
ink #14213D derived (navy-tinted, not
pure black)
Body text on paper sections
Weighting: keep navy ≈ 55–60% of visual weight, paper/white ≈ 30%, gold ≈ 10%, azure < 5%.
Gold and navy carry the brand's emotional register; azure is a functional accent only (map,
"live" states) — it should never compete with gold for attention.
1.2 Typography
Display — Cormorant Garamond. Headlines, page titles, pull quotes. A high-contrast
serif that echoes the engraved gold lettering in your mark.
Ceremonial accent — Cinzel. Reserved only for: the wordmark itself, title plates under
leadership portraits ("HIGH COMMISSIONER"), class mottoes, seals. Used a handful of
times per page — never as a boilerplate label sitting above every section heading. That
restraint is what makes it feel ceremonial instead of templated.
Body — Inter. Paragraphs, nav, buttons, forms, data. 16–18px base, 1.6 line-height (a taller
line-height than the serif needs, since sans-serif body text reads better with more air).
Scale: 14 / 16 / 20 / 26 / 34 / 46 / 64px, applied consistently rather than ad hoc.
1.3 Visual motifs (grounded in your actual mark, not generic decoration)
Laurel wreath — frames milestones: a summit's host year, a class's graduation stat.
Globe + longitude grid — the hero's interactive centerpiece; also a low-opacity
watermark on section backgrounds.
Open book — motif for Programs/Academy content and the footer divider.
Compass star (top of your mark) — a section-break glyph, replacing plain horizontal
rules.
Wax-seal / medallion shape — leadership portrait frames, diplomat credential cards,
certificate touches.
Avoid the generic "SaaS card" treatment — identical rounded corners and the same soft grey
drop-shadow on everything. Use the seal/plate/medallion frames above instead, and vary the
card shape by content type (portrait vs. stat vs. roster card) so nothing reads as a stock
component kit.
1.4 Voice
Institutional but human. Buttons say exactly what happens ("Apply for the 2027 Class," not
"Submit"). Save the formal, ceremonial register for the moments that actually are ceremonial
— the tagline, a class motto, the induction oath — not for ordinary UI copy.
2. Sitemap
3. Page Blueprints
3.1 Home
Job: establish global gravitas in one screen, then route visitors to Apply, Summits, or the Class
roster.
1. Nav — transparent over the hero; solidifies to navy-800 with a gold hairline on scroll.
2. Hero — full-bleed navy-900 . Left-aligned headline built from your real tagline (not
invented copy). Right side: the interactive globe (Section 4).
3. Credibility strip — separate stat tiles, not a dotted string: "Incorporated Institution" ·
shown as its own tile, "X Nationalities Represented" as its own tile, etc.
4. What We Do — 3–4 seal-framed cards mirroring your tagline's three pillars (Leadership
Development, Diplomatic Simulation, Global Summits).
5. Meet the Leadership (teaser) — High Commissioner portrait, one line, link to the full
Leadership page.
6. Upcoming Summit teaser — live countdown, host city, Register CTA.
7. Class of 2026 teaser — a strip of diplomat portraits, "Meet the Founding Class."
8. Testimonials carousel — quotes from delegates/diplomats.
9. Footer — navy-950 , laurel divider, sitemap columns, socials, newsletter field.
Home
About Us Leadership Organizational Structure Programs — optional Summits Diplomat Classes Gallery Apply Contact
High Commissioner Executive Council Global Advisory Board Regional Ambassadors Upcoming Summit Past Summits Archive Class of 2026 — Founding
Class
┌──────────────────────────────────────────────────────────┐
│ [crest] GILD INTERNATIONAL About Leadership Structure │
│ Summits Classes [Apply] │
├──────────────────────────────────────────────────────────┤
│ DEVELOPING LEADERS. ● interactive │
│ ADVANCING DIPLOMACY. globe, gold │
│ CONNECTING NATIONS. pins mark │
│ chapters + │
│ [Learn About GILD] [Apply for the 2027 Class] summits │
└──────────────────────────────────────────────────────────┘
3.2 About Us
Who We Are · Mission & Vision · Credibility & Recognition (incorporation, standards you hold
yourselves to) · Research–Dialogue–Action pillars (if that framing fits GILD) · Institutions
you've partnered with.
3.3 Leadership
Job: put faces and titles to the institute, led by the High Commissioner.
Placeholders needed: High Commissioner (name, photo, ~150-word bio, one quote); Deputy
High Commissioner / Secretary-General; Directors; Advisory Board members; Regional
Ambassadors — see the content checklist in Section 7.
3.4 Organizational Structure
Job: show the reporting chain the way you'd explain it in person, not like generic org-chart
software.
┌──────────────────────────────────────────────┐
│ OUR LEADERSHIP │
│ │
│ ┌───────────┐ THE HIGH COMMISSIONER │
│ │ large │ [Name] │
│ │ portrait │ "One-line mission quote" │
│ │ (seal │ [Read full profile] │
│ │ frame) │ │
│ └───────────┘ │
│ │
│ Executive Council │
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐ (staggered heights, │
│ └──┘ └──┘ └──┘ └──┘ not a uniform grid) │
│ │
│ Global Advisory Board Regional Ambassadors │
│ (smaller grid) (grouped by continent) │
└──────────────────────────────────────────────────────┘
On the page, render this as a stepped pyramid narrowing toward the crest at top, not a flat
flowchart box-and-line diagram — it should visually read as "few leaders, many diplomats,"
which is the actual shape of the institute. Each tier is clickable: tapping a tier expands into
small cards (photo + one-line role) for that tier's people. Provide a plain expandable-list
fallback for screen readers and no-JS.
3.5 Programs (recommended addition, not explicitly requested — cut if it doesn't fit)
Leadership Academy · Diplomacy & Negotiation Labs · Global Policy Fellowship · Summit
Simulation Training — matches the "Masterclass" / "Programs & Initiatives" pattern both your
reference sites use.
High Commissioner
Deputy High Commissioner
/ Secretary-General
Director, Summits &
Programs
Director, Global
Partnerships
Director, Communications
& Media
Director, Operations &
Finance
Regional Ambassadors —
by continent
Diplomat Corps — the
Classes (e.g. Class of 2026)
3.6 Summits
3.7 Diplomat Classes — Class of 2026
Each diplomat card: photo, name, country (flag rendered from a country code, not a hand-
picked image), committee/role. Card taps like an ID badge to flip and show a short bio.
Structure this page's data as JSON (Section 6.2) so adding Class of 2027 next year is a data
change, not a redesign.
┌──────────────────────────────────────────┐
│ NEXT SUMMIT: [Name] — [City], [Dates] │
│ ⏱ 42d : 11h : 06m [Register] │
├──────────────────────────────────────────┤
│ What is a GILD Summit? (short explainer) │
├──────────────────────────────────────────┤
│ Past Summits [interactive map │
│ ┌───┐┌───┐┌───┐ of host cities] │
│ │ ││ ││ │ │
│ └───┘└───┘└───┘ │
├──────────────────────────────────────────┤
│ Delegate testimonials │
└──────────────────────────────────────────┘
┌───────────────────────────────────────────┐
│ CLASS OF 2026 │
│ GILD's founding cohort of diplomats │
│ [banner photo] │
│ │
│ ┌────────┐ ┌────────────┐ ┌──────────┐ │
│ │48 │ │22 │ │6 │ │ ← three separate
│ │Diplomats│ │Countries │ │Committees │ │ stat tiles, not
│ └────────┘ └────────────┘ └──────────┘ │ a dotted string
│ │
│ [search] [filter: country] [filter: role] │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│ │ID │ │ID │ │ID │ │ID │ │ID │ │ID │ │ ← credential-card
│ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ │ style, tap to flip
│ │
│ The Induction Oath · Class Motto │
│ [Apply for the Class of 2027] │
└───────────────────────────────────────────┘
3.8 Gallery / Media
Masonry grid of event photography and press mentions, filterable by summit/year.
3.9 Apply / Admissions
Eligibility · four tracks mirroring your reference site's pattern (Individual Delegate /
Educational Institution / Government Partner / Corporate Partner) · a genuinely sequential 4-
step process (Application → Review → Interview → Induction — numbering is earned here,
since it's a real sequence) · application form.
3.10 Contact
Regional offices (HQ + any others), a contact form, social links, map embed.
4. The "lively" layer
Pick one signature moment and let everything else stay calm — that's what makes the
signature moment land.
Signature moment (Home hero): an interactive globe, gently rotating, with gold pins marking
GILD's chapters and summit host cities. Visitors can drag to rotate it; clicking a pin surfaces
the summit name and date. This is functional, not decorative — it's a literal rendering of
"Connecting Nations."
Supporting interactions (respond to user action, not to scrolling):
Nav: a gold underline slides beneath the active link on hover.
Org chart: tapping a tier expands it, with connecting lines drawing in once.
Leadership cards: tap/press to flip the seal frame and reveal a short bio.
Diplomat credential cards: tap flips the card like an ID badge.
Summit countdown: a genuinely live-updating timer.
Apply form: on submit, a gold wax-seal stamps onto the confirmation screen.
prefers-reduced-motion is respected everywhere — every animation has a static
equivalent.
5. Design guardrails — what to tell Antigravity to avoid
These are the tells that make AI-generated sites look interchangeable. Worth pasting into your
build prompts directly:
No cream-background-plus-terracotta-accent template — irrelevant here anyway, but
stay disciplined about navy/gold/paper.
No identical rounded-corner cards with the same soft grey shadow on every section —
use the seal/plate/medallion frames from 1.3, varied by content type.
No tracked-out ALL-CAPS label above every section heading — reserve Cinzel/caps for
genuinely ceremonial moments only.
No stats joined by middle dots ("120+ · 50+ · 10,000+") — use separate stat tiles.
No arrow (→) glued onto every button — say exactly what happens instead.
No monospace font standing in for "data" labels — this isn't a technical dashboard.
No fade-and-slide-up animation on every section as you scroll — one signature entrance
(the globe) beats twelve small ones.
6. Technical plan for Antigravity
6.1