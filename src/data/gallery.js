// ─────────────────────────────────────────────
//  GALLERY DATA
//  Chronological — tells the career story
//  Categories: 'Brand & Visual' | 'Print & Packaging' | 'UI & Screens' | 'Design Systems'
// ─────────────────────────────────────────────

const BASE = '/denky-portfolio-website'

export const galleryItems = [

  // ── ERA 1 · Visual & Brand Systems (2001–2016) ──────────────────────────

  {
    id: 'bot-scanner-xfinity',
    year: '2014',
    era: 'Era 01 — Visual & Brand',
    eraShort: '01',
    category: 'UI & Screens',
    company: 'Total Defense / Xfinity',
    title: 'Xfinity BotScanner',
    subtitle: 'Malware Scanner UI',
    description:
      "End-to-end UI design for a co-branded malware scanning tool shipped inside Xfinity's customer portal, powered by Total Defense. Designed 12+ screen states covering onboarding, scan progress, threat detection, and resolution flows — all within strict Xfinity brand guidelines.",
    tags: ['UI Design', 'Product', 'Security'],
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },
  {
    id: 'untangle-banners',
    year: '2013',
    era: 'Era 01 — Visual & Brand',
    eraShort: '01',
    category: 'Brand & Visual',
    company: 'Total Defense / Untangle',
    title: 'Untangle Campaign',
    subtitle: 'Digital & Print Banners',
    description:
      'Digital ad campaign and print collateral for Untangle network security software. Designed web banners, email headers, and trade show assets across co-branded product lines. Balanced two brand voices in a single campaign system.',
    tags: ['Campaign', 'Print', 'Digital'],
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },
  {
    id: 'nsi-packaging',
    year: '2005',
    era: 'Era 01 — Visual & Brand',
    eraShort: '01',
    category: 'Print & Packaging',
    company: 'NSI International',
    title: 'NSI Toy Packaging',
    subtitle: 'Consumer Product Packaging',
    description:
      'Retail packaging design for consumer toy products at NSI International. Designed end-to-end from concept to mechanical — front panels, back copy, regulatory icons, UPC placement, and dieline setup for print production.',
    tags: ['Packaging', 'Print', 'Retail'],
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },
  {
    id: 'ca-isbu-print',
    year: '2007',
    era: 'Era 01 — Visual & Brand',
    eraShort: '01',
    category: 'Print & Packaging',
    company: 'CA Technologies',
    title: 'CA ISBU Collateral',
    subtitle: 'Print & Digital Media',
    description:
      'In-house print and online media design for CA Technologies\' Internet Security Business Unit. Created promotional materials across Home, Home Office, and B2B product lines, working in collaboration with external agencies to maintain visual consistency across campaigns.',
    tags: ['Print', 'B2B', 'Campaign'],
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },

  // ── ERA 2 · Hybrid Digital/Product Transition (2016–2021) ───────────────

  {
    id: 'design-portal-home',
    year: '2022',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Hub Portal',
    subtitle: 'Internal Design Platform',
    description:
      'Homepage and navigation system for ZoomInfo\'s internal Design Hub — a Google Sites-based knowledge platform serving 30+ designers and cross-functional stakeholders. Designed information architecture, visual layout, and wayfinding across all major sections.',
    tags: ['DesignOps', 'Information Architecture', 'Internal Tools'],
    image: `${BASE}/thumbnails/gallery/design-portal-home.png`,
  },
  {
    id: 'design-portal-onboarding',
    year: '2022',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Designer Onboarding',
    subtitle: 'Design Hub — Onboarding Section',
    description:
      'Structured onboarding flow for new designers joining ZoomInfo. Organized tooling access, team introductions, process documentation, and first-week checklists into a scannable, self-service experience. Reduced onboarding load on design leads.',
    tags: ['DesignOps', 'Onboarding', 'Documentation'],
    image: `${BASE}/thumbnails/gallery/design-portal-onboarding.png`,
  },
  {
    id: 'design-portal-repos',
    year: '2022',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Product Repos',
    subtitle: 'Design Hub — Repository Directory',
    description:
      'Directory of all product design repositories, organized by product area and build process. Gave designers a single source of truth for finding Figma files, component libraries, and engineering handoff docs across a complex multi-product org.',
    tags: ['DesignOps', 'Repositories', 'Navigation'],
    image: `${BASE}/thumbnails/gallery/design-portal-repos.png`,
  },
  {
    id: 'design-portal-resources',
    year: '2022',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Resources',
    subtitle: 'Design Hub — Resources Section',
    description:
      'Centralized resources section for templates, brand assets, tooling guides, and external references. Designed for quick scanning — grouped by type with visual hierarchy that surfaces the most-needed items without burying others.',
    tags: ['DesignOps', 'Resources', 'Documentation'],
    image: `${BASE}/thumbnails/gallery/design-portal-resources.png`,
  },
  {
    id: 'design-portal-newsletter',
    year: '2022',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Newsletter',
    subtitle: 'Design Hub — Newsletter Archive',
    description:
      'Archive and layout system for the ZoomInfo design team newsletter. Standardized the format for recurring design updates, spotlights, and announcements — making the newsletter consistent and easy to produce on a recurring cadence.',
    tags: ['DesignOps', 'Communication', 'Content'],
    image: `${BASE}/thumbnails/gallery/design-portal-newsletter.png`,
  },
  {
    id: 'sales-hub-playbook',
    year: '2023',
    era: 'Era 02 — Digital Product',
    eraShort: '02',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Sales Hub Playbook',
    subtitle: 'Monorepo Component Showcase',
    description:
      'Visual playbook and component documentation site for the SalesHub product UI library. Built to communicate the component catalog to design and engineering, supporting adoption of the shared monorepo design system across product teams.',
    tags: ['Design Systems', 'Documentation', 'Components'],
    image: `${BASE}/thumbnails/gallery/sales-hub-playbook.png`,
  },

  // ── ERA 3 · Operational UX & AI Systems (2023–present) ──────────────────

  {
    id: 'design-system-1',
    year: '2024',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'Design System — Foundations',
    subtitle: 'Component Library Documentation',
    description:
      'Foundation layer documentation for ZoomInfo\'s design system — covering color tokens, type scale, spacing, and core primitive components. Built as a living reference to unify design decisions across a multi-team product org.',
    tags: ['Design Systems', 'Tokens', 'Documentation'],
    image: `${BASE}/thumbnails/gallery/design-system-1.png`,
  },
  {
    id: 'design-system-2',
    year: '2024',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'Design System — Components',
    subtitle: 'Component States & Variants',
    description:
      'Component-level documentation covering interaction states, variant breakdowns, and usage guidance. Designed to bridge the gap between Figma spec and engineering implementation — reducing handoff friction and component misuse.',
    tags: ['Design Systems', 'Components', 'Figma'],
    image: `${BASE}/thumbnails/gallery/design-system-2.png`,
  },
  {
    id: 'design-system-3',
    year: '2024',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'Design System — Patterns',
    subtitle: 'Interaction Patterns & Compositions',
    description:
      'Pattern library section documenting reusable UI compositions — data tables, filter patterns, empty states, and more. Provided teams with pre-approved, accessible patterns to accelerate design and maintain consistency at scale.',
    tags: ['Design Systems', 'Patterns', 'Accessibility'],
    image: `${BASE}/thumbnails/gallery/design-system-3.png`,
  },
  {
    id: 'ai-fundamentals-portal',
    year: '2025',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'AI Fundamentals',
    subtitle: 'AI Training Portal — Core Modules',
    description:
      'Course hub design for the AI Fundamentals curriculum within ZoomInfo\'s internal AI Training Portal. Each module page covered a distinct AI literacy topic — from LLM basics to design governance. Designed for both dark and light contexts across the org.',
    tags: ['AI/UX', 'Training', 'Education'],
    image: `${BASE}/thumbnails/gallery/ai-fundamentals.png`,
  },
  {
    id: 'ai-workshops',
    year: '2025',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'AI Workshops',
    subtitle: 'AI Training Portal — Workshop Hub',
    description:
      'Workshop directory and recording archive for hands-on AI sessions. Designers could browse upcoming sessions, watch recorded walkthroughs on tools like Claude Code and GitHub for Designers, and access companion resources — all in one place.',
    tags: ['AI/UX', 'Training', 'Workshops'],
    image: `${BASE}/thumbnails/gallery/ai-workshops.png`,
  },
  {
    id: 'chai-framework',
    year: '2025',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'CHAI Framework',
    subtitle: 'AI Training Portal — CHAI Phases',
    description:
      'Multi-phase framework documentation for the CHAI (Collaborative Human-AI Integration) design process. Designed the full phase navigation, content hierarchy, and visual system — covering Discovery, Framing, Ideation, and Convergence across a structured 4-phase process.',
    tags: ['AI/UX', 'Framework', 'Documentation'],
    image: `${BASE}/thumbnails/gallery/chai-framework.png`,
  },
  {
    id: 'slack-notifications',
    year: '2024',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Slack Notification System',
    subtitle: 'Block Kit Builder — Governance Alerts',
    description:
      'Designed Slack notification templates using Block Kit Builder for the DQE governance system. Structured alerts surface design quality findings directly in Slack — keeping teams informed without requiring them to context-switch to a separate tool.',
    tags: ['AI/UX', 'Design Ops', 'Notifications'],
    image: `${BASE}/thumbnails/gallery/slack-notifications.png`,
  },
  {
    id: 'operations-os',
    year: '2025',
    era: 'Era 03 — AI & Systems',
    eraShort: '03',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Operations OS',
    subtitle: 'Mini Muze — Design Ops Dashboard',
    description:
      'Dashboard concept for Mini Muze, ZoomInfo\'s internal design operations tool. Visualized team health, project velocity, and workflow state in a single operational view — helping design leads monitor capacity and prioritize work across multiple product squads.',
    tags: ['Design Ops', 'Dashboard', 'AI Tools'],
    image: `${BASE}/thumbnails/gallery/operations-os.png`,
  },
]

export const eras = [
  { id: 'all',  label: 'All Work' },
  { id: '01',   label: 'Era 01 — Visual & Brand' },
  { id: '02',   label: 'Era 02 — Digital Product' },
  { id: '03',   label: 'Era 03 — AI & Systems' },
]

export const categories = ['All', 'Brand & Visual', 'Print & Packaging', 'UI & Screens', 'Design Systems']
