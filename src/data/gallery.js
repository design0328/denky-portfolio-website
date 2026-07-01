// ─────────────────────────────────────────────
//  GALLERY DATA
//  Reverse chronological — newest visual work appears first
//  Categories: 'Brand & Visual' | 'Print & Packaging' | 'Web & Marketing'
//            | 'UI & Screens' | 'Design Systems' | 'AI & Governance'
//  `year` is kept for sorting only — it is not rendered on cards.
// ─────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const galleryItems = [
  // ── 2025 ───────────────────────────────────────────────────────────────

  {
    id: 'operations-os',
    year: '2025',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'OperationsOS',
    subtitle: 'Rebranding RingLead into the ZoomInfo platform — feature UI with the Tel Aviv team, plus Discover and Enrich Premium+ Beta launch collateral',
    description:
      'Rebranding RingLead into the ZoomInfo platform — feature UI with the Tel Aviv team, plus Discover and Enrich Premium+ Beta launch collateral',
    tags: ['Design Ops', 'Rebrand', 'Product UI'],
    image: `${BASE}/gallery/zoominfo/operations-os.png`,
  },

  // ── 2024 — Design systems and AI/governance comms ─────────────────────────

  {
    id: 'design-comms-bot',
    year: '2024',
    category: 'AI & Governance',
    company: 'ZoomInfo',
    title: 'Design Comms Bot',
    subtitle: 'Slack Block Kit system broadcasting design org news, CHAI training, AI workshops, and Design Hub updates',
    description:
      'Slack Block Kit system broadcasting design org news, CHAI training, AI workshops, and Design Hub updates',
    tags: ['AI/UX', 'Design Ops', 'Notifications'],
    image: `${BASE}/gallery/zoominfo/comms-bot-blockkit.png`,
  },
  {
    id: 'muze-design-system',
    year: '2024',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'Muze Component Sheets',
    subtitle: 'Buttons, dropdowns, navigation, and icon system — visual specs from the Muze library',
    description:
      'Buttons, dropdowns, navigation, and icon system — visual specs from the Muze library',
    tags: ['Design Systems', 'Component Library', 'Visual Specs'],
    image: `${BASE}/gallery/placeholder.svg`,
    link: '/work/design-system-accessibility',
  },

  // ── RingLead ─────────────────────────────────────────────────────────────

  {
    id: 'ringlead-platform-ui',
    year: '2021',
    category: 'UI & Screens',
    company: 'RingLead',
    title: 'RingLead Platform UI',
    subtitle: 'Data quality platform — duplicate health checks, field analysis, and report card dashboards',
    description:
      'Data quality platform — duplicate health checks, field analysis, and report card dashboards',
    tags: ['Product Design', 'Design Systems', 'Dashboards'],
    image: `${BASE}/gallery/ringlead/ringlead-platform-ui.png`,
    link: '/work/ringlead',
  },
  {
    id: 'ringlead-product-dashboard',
    year: '2021',
    category: 'UI & Screens',
    company: 'RingLead',
    title: 'Product Dashboard',
    subtitle: 'Cleanse, prevent, and enrichment metrics at a glance',
    description:
      'The RingLead product dashboard — surfacing cleanse, prevention, and enrichment activity across connected data sources in a single admin view.',
    tags: ['dashboard', 'product design', 'data quality'],
    image: `${BASE}/screenshots/ringlead/era3-dashboard.png`,
  },
  {
    id: 'ringlead-content-system',
    year: '2020',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: 'Content System — Data Orchestration',
    subtitle: 'Ebook, tip sheet, and datasheet templates from the rebrand',
    description:
      'Phoenix-era content templates — ebook covers, tip sheets, and infographics — built on the new navy/teal/magenta system for consistent collateral across sales and marketing.',
    tags: ['content design', 'templates', 'rebrand'],
    image: `${BASE}/screenshots/ringlead/era3-content-system.png`,
  },
  {
    id: 'ringlead-talkdatatome-speaker-cards',
    year: '2021',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: '#talkdatatome — Event Promo',
    subtitle: 'Speaker cards for the virtual event series',
    description:
      'Promotional graphics for RingLead\'s #talkdatatome virtual event series, built on the phoenix-era visual system.',
    tags: ['campaign', 'event design', 'social'],
    image: `${BASE}/screenshots/ringlead/era3-speaker-cards.png`,
  },
  {
    id: 'ringlead-talkdatatome-landing',
    year: '2021',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: '#talkdatatome — Landing Page',
    subtitle: 'Campaign hub for the virtual event series',
    description:
      'Landing page for the #talkdatatome campaign, extending the event promo system into a signup and content hub.',
    tags: ['landing page', 'campaign', 'web design'],
    image: `${BASE}/screenshots/ringlead/era3-talkdatatome.png`,
  },
  {
    id: 'ringlead-data-orchestration',
    year: '2019',
    category: 'Web & Marketing',
    company: 'RingLead',
    title: 'RingLead.com — Data Orchestration',
    subtitle: 'Site redesign for the RevOps automation platform era',
    description:
      'Site redesign for the RevOps automation platform era',
    tags: ['Web Design', 'Branding', 'RevOps'],
    image: `${BASE}/gallery/ringlead/ringlead-site-blue.png`,
  },
  {
    id: 'dms-product-suite',
    year: '2018',
    category: 'Web & Marketing',
    company: 'RingLead',
    title: 'DMS Product Suite & Campaigns',
    subtitle: 'Enrichment 360° product system, Intelligent Forms, and ringlead.com',
    description:
      'Enrichment 360° product system, Intelligent Forms, and ringlead.com',
    tags: ['Product Marketing', 'Campaign', 'Web Design'],
    image: `${BASE}/gallery/ringlead/dms-enrichment.png`,
    link: '/work/ringlead',
  },
  {
    id: 'talkdatatome',
    year: '2018',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: '#talkdatatome Event Series',
    subtitle: 'Virtual event brand and promotion system',
    description:
      'Virtual event brand and promotion system',
    tags: ['Event Branding', 'Campaign', 'Social'],
    image: `${BASE}/gallery/ringlead/talkdatatome.png`,
  },
  {
    id: 'ringlead-sales-enablement',
    year: '2017',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: 'Sales Enablement Content System',
    subtitle: 'Ebooks, tip sheets, API integration decks, and Data Hero gamification',
    description:
      'Ebooks, tip sheets, API integration decks, and Data Hero gamification',
    tags: ['Sales Enablement', 'Print', 'Gamification'],
    image: `${BASE}/gallery/ringlead/content-enablement.png`,
  },
  {
    id: 'ringlead-sales-deck',
    year: '2016',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: 'RingLead Sales Enablement Deck',
    subtitle: '"Welcome to RingLead Sales" — the first complete sales deck, built solo to give a growing sales team a shared story.',
    description:
      '"Welcome to RingLead Sales" — the first complete sales deck, built solo to give a growing sales team a shared story.',
    tags: ['Sales Enablement', 'Print', 'Branding'],
    image: `${BASE}/screenshots/ringlead/era1-sales-deck.png`,
    link: '/work/ringlead',
  },
  {
    id: 'ringlead-enrichment-onepager',
    year: '2016',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: 'DMS Enrichment One-Pager',
    subtitle: 'A wheel-diagram system breaking down 10 product features into one scannable sales asset.',
    description:
      'A wheel-diagram system breaking down 10 product features into one scannable sales asset.',
    tags: ['Sales Enablement', 'Print', 'Product Marketing'],
    image: `${BASE}/screenshots/ringlead/era1-enrichment.png`,
    link: '/work/ringlead',
  },
  {
    id: 'ringlead-intelligent-forms-onepager',
    year: '2016',
    category: 'Brand & Visual',
    company: 'RingLead',
    title: 'DMS Intelligent Forms One-Pager',
    subtitle: '"What They See / What You Get" — a before-and-after framing for a product feature that\'s hard to explain in a sentence.',
    description:
      '"What They See / What You Get" — a before-and-after framing for a product feature that\'s hard to explain in a sentence.',
    tags: ['Sales Enablement', 'Print', 'Product Marketing'],
    image: `${BASE}/screenshots/ringlead/era1-intelligent-forms.png`,
    link: '/work/ringlead',
  },

  // ── Total Defense ────────────────────────────────────────────────────────

  {
    id: 'td-product-web-ux',
    year: '2014',
    category: 'UI & Screens',
    company: 'Total Defense',
    title: 'Total Defense — Product & Web UX',
    subtitle: 'Activation flows, in-product experiences, and totaldefense.com',
    description:
      'Activation flows, in-product experiences, and totaldefense.com',
    tags: ['UI Design', 'Product', 'Web Design'],
    image: `${BASE}/gallery/total-defense/td-product-site.png`,
  },
  {
    id: 'bot-scanner-xfinity',
    year: '2014',
    category: 'UI & Screens',
    company: 'Total Defense / Xfinity',
    title: 'Xfinity BotScanner',
    subtitle: 'Malware Scanner UI',
    description:
      "End-to-end UI design for a co-branded malware scanning tool shipped inside Xfinity's customer portal, powered by Total Defense. Designed 12+ screen states covering onboarding, scan progress, threat detection, and resolution flows — all within strict Xfinity brand guidelines.",
    tags: ['UI Design', 'Product', 'Security'],
    image: `${BASE}/gallery/placeholder.svg`,
  },
  {
    id: 'td-brand-campaigns',
    year: '2013',
    category: 'Brand & Visual',
    company: 'Total Defense',
    title: 'Total Defense — Brand & Campaigns',
    subtitle: 'Go Beyond Protection celebrity campaigns, NCMEC partnership, retail presence',
    description:
      'Go Beyond Protection celebrity campaigns, NCMEC partnership, retail presence',
    tags: ['Campaign', 'Brand', 'Retail'],
    image: `${BASE}/gallery/total-defense/td-go-beyond-protection.png`,
  },

  // ── Earlier print and packaging systems ───────────────────────────────────

  {
    id: 'ca-packaging-product',
    year: '2007',
    category: 'Print & Packaging',
    company: 'CA Technologies',
    title: 'CA Internet Security — Packaging & Product',
    subtitle: 'Retail packaging systems (ISS 2007–2010, K9), ISBU marketing, and in-product UI',
    description:
      'Retail packaging systems (ISS 2007–2010, K9), ISBU marketing, and in-product UI',
    tags: ['Packaging', 'Print', 'Retail'],
    image: `${BASE}/gallery/ca-technologies/ca-packaging.png`,
  },
]

export const categories = [
  'All',
  'Brand & Visual',
  'Print & Packaging',
  'Web & Marketing',
  'UI & Screens',
  'Design Systems',
  'AI & Governance',
]
