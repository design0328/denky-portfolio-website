// ─────────────────────────────────────────────
//  GALLERY DATA
//  Reverse chronological — newest visual work appears first
//  Categories: 'Brand & Visual' | 'Print & Packaging' | 'UI & Screens' | 'Design Systems'
// ─────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const galleryItems = [
  {
    id: 'aiui-pattern-library',
    year: '2026',
    category: 'Design Systems',
    company: 'ZoomInfo',
    title: 'AIUI Pattern Library',
    subtitle: 'AI Interaction Standards',
    description:
      'Governance-focused pattern library defining trustworthy, accessible, human-in-the-loop interaction guidance for AI-assisted product experiences. Built as a reusable reference for designers, product partners, engineers, and reviewers.',
    tags: ['AI/UX', 'Governance', 'Accessibility'],
    image: `${BASE}/thumbnails/aiui-pattern-library.svg`,
  },

  // ── Earlier brand and visual systems ────────────────────────────────────

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
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },
  {
    id: 'untangle-banners',
    year: '2013',
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
    category: 'Print & Packaging',
    company: 'CA Technologies',
    title: 'CA ISBU Collateral',
    subtitle: 'Print & Digital Media',
    description:
      'In-house print and online media design for CA Technologies\' Internet Security Business Unit. Created promotional materials across Home, Home Office, and B2B product lines, working in collaboration with external agencies to maintain visual consistency across campaigns.',
    tags: ['Print', 'B2B', 'Campaign'],
    image: `${BASE}/thumbnails/gallery/placeholder.svg`,
  },

  // ── Digital product and design operations work ───────────────────────────

  {
    id: 'design-portal-home',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Hub Portal',
    subtitle: 'Internal Design Platform',
    description:
      'Homepage and navigation system for ZoomInfo\'s internal Design Hub — a Google Sites-based knowledge platform serving 30+ designers and cross-functional stakeholders. Designed information architecture, visual layout, and wayfinding across all major sections.',
    tags: ['DesignOps', 'Information Architecture', 'Internal Tools'],
    image: `${BASE}/screenshots/design-hub/design-hub-home.png`,
  },
  {
    id: 'design-portal-onboarding',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Designer Onboarding',
    subtitle: 'Design Hub — Onboarding Section',
    description:
      'Structured onboarding flow for new designers joining ZoomInfo. Organized tooling access, team introductions, process documentation, and first-week checklists into a scannable, self-service experience. Reduced onboarding load on design leads.',
    tags: ['DesignOps', 'Onboarding', 'Documentation'],
    image: `${BASE}/screenshots/design-hub/design-hub-onboarding.png`,
  },
  {
    id: 'design-portal-repos',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Product Repos',
    subtitle: 'Design Hub — Repository Directory',
    description:
      'Directory of all product design repositories, organized by product area and build process. Gave designers a single source of truth for finding Figma files, component libraries, and engineering handoff docs across a complex multi-product org.',
    tags: ['DesignOps', 'Repositories', 'Navigation'],
    image: `${BASE}/screenshots/design-hub/design-hub-repos.png`,
  },
  {
    id: 'design-portal-resources',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Resources',
    subtitle: 'Design Hub — Resources Section',
    description:
      'Centralized resources section for templates, brand assets, tooling guides, and external references. Designed for quick scanning — grouped by type with visual hierarchy that surfaces the most-needed items without burying others.',
    tags: ['DesignOps', 'Resources', 'Documentation'],
    image: `${BASE}/screenshots/design-hub/design-hub-resources.png`,
  },
  {
    id: 'design-portal-newsletter',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Newsletter',
    subtitle: 'Design Hub — Newsletter Archive',
    description:
      'Archive and layout system for the ZoomInfo design team newsletter. Standardized the format for recurring design updates, spotlights, and announcements — making the newsletter consistent and easy to produce on a recurring cadence.',
    tags: ['DesignOps', 'Communication', 'Content'],
    image: `${BASE}/screenshots/design-hub/design-hub-newsletter.png`,
  },
  {
    id: 'design-portal-team',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Design Team Directory',
    subtitle: 'Design Hub — Team Section',
    description:
      'Team-facing directory providing organizational context and a more connected view of the distributed design organization within the shared Design Hub.',
    tags: ['DesignOps', 'Team', 'Internal Tools'],
    image: `${BASE}/screenshots/design-hub/design-hub-team.png`,
  },
  {
    id: 'design-portal-bet2build',
    year: '2022',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Bet2Build Program',
    subtitle: 'Design Hub — Initiative Page',
    description:
      'Initiative content page extending Design Hub to support shared team programs, with resources and context gathered into a discoverable destination.',
    tags: ['DesignOps', 'Programs', 'Resources'],
    image: `${BASE}/screenshots/design-hub/design-hub-bet2build.png`,
  },
  {
    id: 'sales-hub-playbook',
    year: '2023',
    category: 'UI & Screens',
    company: 'ZoomInfo',
    title: 'Sales Hub Playbook',
    subtitle: 'Monorepo Component Showcase',
    description:
      'Visual playbook and component documentation site for the SalesHub product UI library. Built to communicate the component catalog to design and engineering, supporting adoption of the shared monorepo design system across product teams.',
    tags: ['Design Systems', 'Documentation', 'Components'],
    image: `${BASE}/thumbnails/gallery/sales-hub-playbook.png`,
  },

  // ── Operational UX and AI systems ───────────────────────────────────────

  {
    id: 'design-system-1',
    year: '2024',
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
    id: 'slack-notifications',
    year: '2024',
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

export const categories = ['All', 'Brand & Visual', 'Print & Packaging', 'UI & Screens', 'Design Systems']
