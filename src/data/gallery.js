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
    image: `${BASE}/thumbnails/gallery/slack-notifications.png`,
  },
  {
    id: 'muze-design-system',
    year: '2024',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'Muze Design System',
    subtitle: 'Component library standards — tokens, states, patterns, WCAG 2.2 AA specs adopted company-wide',
    description:
      'Component library standards — tokens, states, patterns, WCAG 2.2 AA specs adopted company-wide',
    tags: ['Design Systems', 'Tokens', 'Accessibility'],
    image: `${BASE}/gallery/placeholder.svg`,
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
    link: '/work/ringlead-brand-to-product',
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
  {
    id: 'nsi-retail-packaging',
    year: '2005',
    category: 'Print & Packaging',
    company: 'NSI International',
    title: 'NSI — National Retail Packaging',
    subtitle: 'Consumer product packaging sold nationwide in Target, Walmart, and CVS',
    description:
      'Consumer product packaging sold nationwide in Target, Walmart, and CVS',
    tags: ['Packaging', 'Print', 'Retail'],
    image: `${BASE}/gallery/placeholder.svg`,
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
