const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const projects = [
  {
    slug:       'dqe',
    title:      'Design Quality Engine',
    company:    'ZoomInfo',
    year:       '2025–2026',
    discipline: 'AI Tooling · Design Governance · DesignOps',
    outcome:    '80% DESIGNER AGREEMENT · FIRST PILOT',
    eyebrow:    '80% DESIGNER AGREEMENT · FIRST PILOT',
    desc:       'A modular, AI-powered audit system I built from scratch to give ZoomInfo\'s design org its first shared quality standard — covering accessibility, usability, AI interaction patterns, content, and monetization.',
    thumbnail:  `${BASE}/screenshots/dqe/DQE-overview.png`,
    featured:   true,
    summary:    'I built DQE to fix inconsistent design review at ZoomInfo — an AI-powered audit system that evaluates UI against structured guardrails and outputs findings designers and PMs can actually act on.',
    roleLabel:  'Sole Designer & Architect',
    timeline:   '2025–2026 · Pilot April 2026',
    team:       'Design, PM, engineering stakeholders',
    heroImage:  `${BASE}/screenshots/dqe/DQE-overview.png`,
    heroCaption: 'Design Quality Engine — five guardrail domains, three output artifacts, one shared quality standard.',
    chips: [
      { label: 'AI Governance',  accent: 'cyan' },
      { label: 'Design Systems'                 },
      { label: 'Accessibility'                  },
      { label: 'DesignOps'                      },
    ],

    // ── Overview bullets (hero meta panel) ──────────────────
    overview: [
      'Sole creator — architected, built, tested, and deployed end-to-end',
      '5 guardrail domains: accessibility (WCAG 2.2 AA), usability, AI interaction (AIUI), content, and monetization',
      'Outputs 3 artifacts per audit: HTML report, Markdown decision log, structured YAML',
      'Stage-aware enforcement — severity thresholds adjust from Exploration through Handoff',
      'Piloted across 2 product features (AI Emailer, Feed) · 80% designer agreement rate',
    ],

    // ── Role (detail panel) ─────────────────────────────────
    role: [
      'Architected the full system: guardrail taxonomy, skill orchestration layer, versioned output structure, and AI executor governance via CLAUDE.md',
      'Authored the accessibility (WCAG 2.2 AA + WAI-ARIA), usability, and AIUI guardrail libraries from scratch',
      'Implemented and integrated content and monetization guardrails authored by the content design team',
      'Ran a structured pilot in April 2026 across 2 product teams — 3 completed sessions covering all 5 domains',
      'Managed findings tracking, designer feedback loops, and a roadmap of 12 system improvements generated from pilot results',
    ],

    // ── Impact (detail panel) ───────────────────────────────
    impact: [
      '80% designer agreement rate on first-run findings — establishing baseline credibility for a system with zero prior product context',
      'Identified real product gaps: missing AI attribution on enriched columns, missing cancel state during enrichment run, and a false positive that became the first pattern candidate for a ZI-aware context layer',
      'Created a self-improving feedback loop: disputed findings become pattern candidates, which feed a zi-patterns.md context file, which DQE uses to stop flagging approved patterns over time',
      'First automated, multi-domain design quality checkpoint at ZoomInfo — covering 5 audit domains with no prior tooling in place',
    ],

    // ── Case study sections (4-section structure) ───────────
    caseStudySections: [

      // SECTION 1 — THE PROBLEM
      {
        type:  'featureImage',
        label: 'Context',
        title: 'No shared standard for design quality',
        body:  'Design review at ZoomInfo was inconsistent by nature. What one reviewer flagged, another approved. Accessibility issues surfaced at handoff instead of during design. AI interaction patterns — disclosure, processing states, user control — had no agreed-upon rules at all. The org had grown fast enough that quality became whoever was in the room.\n\nI needed something that could hold a standard across reviewers, across features, and across design stages — without requiring a dedicated QA role or a manual checklist nobody would actually maintain.',
        image:   'readme-overview.png',
        alt:     'DQE README overview — what the system is, what it evaluates, and what it outputs.',
        caption: 'The DQE README: a modular audit system designed to standardize quality review across teams.',
      },

      // SECTION 2 — WHAT I BUILT
      {
        type:  'imageGrid',
        label: 'System',
        title: 'A governance system in five domains',
        body:  'DQE runs inside Claude Code. Point it at a UI feature, it evaluates against shared guardrail rules, and returns three artifacts: a visual HTML report for review meetings, a Markdown decision log where findings are accepted, modified, or rejected, and a structured YAML file for tracking and future tooling.\n\nI authored all guardrails across five domains:',
        table: [
          { domain: 'accessibility', covers: 'WCAG 2.2 AA — contrast, keyboard nav, ARIA, focus management' },
          { domain: 'usability',     covers: 'User flows, empty states, feedback, error handling, intent clarity' },
          { domain: 'aiui',          covers: 'AI disclosure, processing states, user control, cost visibility' },
          { domain: 'content',       covers: 'UX copy — voice, tone, casing, content level alignment' },
          { domain: 'monetization',  covers: 'Upgrade prompts, feature gates, credit treatment' },
        ],
        tableNote: 'Each domain runs independently or all five together through the orchestrator. Findings are severity-tiered: fail, warn, escalate, or report — content and monetization capped at escalate, never hard-fail, by design.',
        images: [
          {
            file:    'accessibility-guardrails.png',
            alt:     'Accessibility guardrails — WCAG 2.2 AA review criteria authored as a reusable library.',
            caption: 'Accessibility guardrails — WCAG 2.2 AA mapped as reusable review criteria.',
          },
          {
            file:    'aiui-guardrails.png',
            alt:     'AI interaction guardrails covering transparency, disclosure, and user control.',
            caption: 'AIUI guardrails — transparency, disclosure, and human control standards.',
          },
          {
            file:    'u11y-guardrail-system.png',
            alt:     'Usability guardrails covering intent clarity, flow, states, and recoverability.',
            caption: 'Usability guardrails — intent clarity, flow, states, and recoverability.',
          },
        ],
      },

      // SECTION 3 — HOW IT RUNS
      {
        type:  'imagePair',
        label: 'Process',
        title: 'Stage-aware. Human-in-the-loop.',
        body:  'One of the core design decisions was stage-aware enforcement. The same guardrails apply at every point in the design process — exploration, in progress, handoff — but how loudly a finding is flagged depends on how mature the design is. A missing ARIA label at exploration is a note. At handoff, it\'s a blocker. This keeps the system useful without making it punishing at the wrong moment.\n\nDQE surfaces findings and recommendations. Designers and PMs decide what to accept, modify, or reject. The system informs judgment — it doesn\'t replace it.',
        images: [
          {
            file:    'feed-html-report.png',
            alt:     'HTML audit report for the Feed component — 16 findings grouped by domain and severity.',
            caption: 'HTML audit report — findings grouped by domain, severity, and fix type.',
          },
          {
            file:    'feed-markdown-summary.png',
            alt:     'Markdown decision log — structured findings for designer review and sign-off.',
            caption: 'Markdown decision log — where each finding is accepted, modified, or rejected.',
          },
        ],
      },

      // SECTION 4 — OUTCOME
      {
        type:  'featureImage',
        label: 'Outcome',
        title: '80% agreement on first pilot',
        body:  'I piloted DQE across two live product features — the AI Emailer and the Feed — running multiple audit passes on each. Designers reviewed the findings and rated them: 80% agreement that the flagged issues were real and worth addressing.\n\nThat number matters because it\'s the hardest thing to get right in any governance system: signal-to-noise ratio. A tool that flags everything trains people to ignore it. DQE earned trust in its first run.\n\nThe repo structure, YAML guardrail format, and audit output artifacts are all designed to be extensible — any designer can add a domain, run a new feature, or plug the YAML output into future tooling. It was built to outlast me.',
        image:   'feed-yaml-findings.png',
        alt:     'YAML findings file — structured audit output for tracking and future tooling integration.',
        caption: 'YAML findings output — machine-readable, extensible, and ready for downstream tooling.',
      },

    ],

    // ── Screenshot index (unchanged from original) ──────────
    screenshots: [
      { section: 'Overview',     label: 'System README — what DQE is and what it does',                           file: 'readme-overview.png'              },
      { section: 'Architecture', label: 'Repo structure — audits, skills, standards separation',                  file: 'repo-structure.png'               },
      { section: 'Architecture', label: 'Audit folder structure — timestamped versioned runs',                    file: 'audit-folder-structure.png'       },
      { section: 'Governance',   label: 'CLAUDE.md — AI executor instructions and skill resolution rules',        file: 'claude-governance.png'            },
      { section: 'Governance',   label: 'Design Review Skill — 7-step execution order and stage detection',       file: 'design-review-execution.png'      },
      { section: 'Guardrails',   label: 'Accessibility Guardrails — WCAG 2.2 AA rules (rendered preview)',        file: 'accessibility-guardrails.png'     },
      { section: 'Guardrails',   label: 'Accessibility Guardrail Rule — source + preview side by side',           file: 'accessibility-guardrail-rule.png' },
      { section: 'Guardrails',   label: 'AI Interaction Guardrails — transparency, disclosure, user control',     file: 'aiui-guardrails.png'              },
      { section: 'Guardrails',   label: 'AIUI Guardrail Rule — source + preview side by side',                    file: 'aiui-guardrail-rule.png'          },
      { section: 'Guardrails',   label: 'Usability Guardrails — intent clarity, flow, empty states',              file: 'u11y-guardrail-system.png'        },
      { section: 'Guardrails',   label: 'Usability Guardrail Rule — source + preview side by side',               file: 'u11y-example-guardrail-rule.png'  },
      { section: 'Outputs',      label: 'HTML Audit Report — Feed component, 16 issues across 3 domains',         file: 'feed-html-report.png'             },
      { section: 'Outputs',      label: 'Markdown Decision Log — structured findings for review and sign-off',    file: 'feed-markdown-summary.png'        },
      { section: 'Outputs',      label: 'YAML Findings File — machine-readable output for tooling integration',   file: 'feed-yaml-findings.png'           },
    ],
  },
  {
    slug:        'ai-training-portal',
    title:       'AI Training Portal',
    company:     'ZoomInfo',
    year:        '2026',
    discipline:  'Design Operations · Learning Infrastructure · AI Enablement',
    outcome:     '3 LEARNING TRACKS · 35-PERSON DESIGN ORG',
    eyebrow:     '35 DESIGNERS MOVED INTO HUMAN-AI WORKFLOWS',
    desc:        'A peer-led AI training platform I diagnosed, designed, built, and embedded across a 35-person design org — giving every designer a structured path from AI-curious to AI builder.',
    thumbnail:   `${BASE}/screenshots/training-portal/01-portal-home.png`,
    assetFolder: 'training-portal',
    featured:    true,
    summary:     'I ran listening sessions across the design org, identified what designers were actually struggling to learn, built a curated training system around those gaps, coded the platform, and embedded it where the team already worked.',
    roleLabel:   'Sole Designer & Builder',
    timeline:    'Q1–Q2 2026',
    team:        '35 designers, PMs, and managers · ZoomInfo design org',
    liveUrl:     'https://zi-ai-design-training-hub.netlify.app/',
    liveLabel:   'View Live Training Portal',
    heroImage:   `${BASE}/screenshots/training-portal/ai-training-portal-overview.png`,
    heroCaption: 'AI Training Portal — three learning tracks taking a 35-person design org from AI-curious to AI builder.',
    chips: [
      { label: 'AI Enablement',  accent: 'cyan' },
      { label: 'DesignOps'                       },
      { label: 'Learning Infra'                  },
      { label: 'Peer-Led'                        },
    ],

    // ── Overview bullets (hero meta panel) ──────────────────
    overview: [
      'Diagnosed learning gaps across the full design org through listening sessions and team meetings before a single line was written',
      'Built the curated content list that became the foundation for all three training tracks',
      'Coded the training platform from scratch in VS Code — rebuilt from an earlier training generator a colleague had built into a full deployable site',
      'Three tracks: CHAI Framework (mandatory, 7 phases), AI Fundamentals (8 self-paced modules), AI Workshops (bi-weekly, all recorded)',
      'Embedded in the Design Hub via iframe — one front door for all design org knowledge, onboarding, and training',
    ],

    // ── Role (detail panel) ─────────────────────────────────
    role: [
      'Ran listening sessions and attended team meetings to surface what designers were struggling with, what they didn\'t understand, and what they needed to learn to move forward — this became the needs assessment the entire platform was built on',
      'Built the curated content spreadsheet that mapped team learning needs to specific training sources — a colleague used this list to source YouTube content for AI Fundamentals',
      'Took an earlier training generator a colleague had built and rebuilt it into a full deployable training platform — coded in VS Code with Claude, structured into three distinct learning tracks',
      'Designed the peer-led workshop model: senior designers teaching to their own domain strengths, making the training specific to ZoomInfo\'s environment and context rather than generic YouTube searches',
      'Led Phase 6 of the CHAI Framework myself — Validation Checkpoints, covering accessibility, brand, and ethical review before customer testing',
      'Embedded the portal in the Design Hub (Google Sites) via full-width iframe, making it accessible to a team still ramping up on repo-based workflows',
    ],

    // ── Impact (detail panel) ───────────────────────────────
    impact: [
      'Gave 35 designers, PMs, and managers a structured path into AI-powered design — organized, searchable, and accessible without needing repo access',
      'Replaced endless individual YouTube searches with a curated, org-specific training system built around the actual gaps designers reported',
      'The peer-led model meant training came from people who understood ZoomInfo\'s stack, products, and workflows — not generic instructors',
      'All workshops recorded and archived from day one — async-first by design, supporting distributed teams and repeat viewing',
      'Embedded as a core section of the Design Hub, the org\'s single source of truth for onboarding, process, resources, and team knowledge',
    ],

    // ── Case study sections (4-section structure) ───────────
    caseStudySections: [

      // SECTION 1 — THE PROBLEM
      {
        type:    'text',
        label:   'Context',
        title:   'A team searching for training that didn\'t exist yet',
        body:    'Designers were spending hours searching YouTube for AI training that either wasn\'t relevant to enterprise product design or didn\'t apply to ZoomInfo\'s stack and context. The org was moving fast into AI-assisted workflows and people were getting left behind — not because they weren\'t trying, but because there was no structured place to learn.\n\nI started by listening. Team meetings, open conversations, one-on-ones — I tracked what designers said they were struggling with, what they didn\'t understand, and what they were most anxious about. That became the needs assessment. The platform came after.',
      },

      // SECTION 2 — OUTCOME
      {
        type:    'featureImage',
        label:   'Outcome',
        title:   '35 designers. One structured path into AI.',
        body:    'The portal launched to the full design org — 35 designers, PMs, and managers — and within the first month had genuine enthusiasm behind it. Not because it was mandated, but because it finally answered a question the team had been asking for months: where do I actually learn this?\n\nEvery workshop was recorded from day one. Every module was self-paced. The peer-led model meant the content felt relevant — taught by people facing the same problems, using the same tools, building for the same product.\n\nThe portal was designed to grow. New workshops slot in without restructuring. New modules follow the same pattern. The infrastructure outlasts any single training cycle.',
        image:   'ai-training-portal-overview.png',
        alt:     'AI Training Portal full overview — three tracks, 35-person org, peer-led model.',
        caption: 'The platform as shipped — three tracks, fully navigable, embedded in the Design Hub.',
        liveEmbed: true,
        liveUrl:   'https://zi-ai-design-training-hub.netlify.app/',
        liveLabel: 'Explore the live portal',
      },

      // SECTION 3 — WHAT I BUILT
      {
        type:    'imageGrid',
        label:   'Platform',
        title:   'Three tracks. One front door.',
        body:    'The portal is organized around where a designer is right now — not where they should be. Each track has a clear priority signal so nobody has to guess what to do first.\n\nI coded the platform from scratch in VS Code, rebuilding from an earlier training generator into a full deployable site on Netlify. It\'s embedded in the Design Hub via full-width iframe — accessible to anyone on the team without needing repo access or a local setup.',
        table: [
          { domain: 'CHAI Framework',   covers: 'Mandatory · 7 phases · collaborative human-AI design process, peer-led' },
          { domain: 'AI Fundamentals',  covers: 'Recommended · 8 modules · mental models, governance, accessibility, code literacy' },
          { domain: 'AI Workshops',     covers: 'Optional · bi-weekly · hands-on sessions, all recorded, peer-presented' },
        ],
        tableNote: 'The peer-led model was intentional — training delivered by senior designers who understood ZoomInfo\'s products, stack, and design context. Not generic. Not outsourced.',
        images: [
          {
            file:    '02-ai-fundamentals.png',
            alt:     'AI Fundamentals curriculum — 8 self-paced modules across beginner to advanced.',
            caption: 'AI Fundamentals — 8 modules, self-paced, covering the topics designers actually asked for.',
          },
          {
            file:    '04-chai-framework.png',
            alt:     'CHAI Framework — 7-phase Collaborative Human-AI Innovation design loop.',
            caption: 'CHAI Framework — 7 phases, mandatory for all designers, peer-led by domain.',
          },
          {
            file:    '05-ai-workshops-header.png',
            alt:     'AI Workshops — bi-weekly hands-on sessions, all recorded.',
            caption: 'AI Workshops — hands-on, bi-weekly, peer-presented, fully archived.',
          },
        ],
      },

      // SECTION 4 — HOW IT FITS
      {
        type:    'imagePair',
        label:   'Infrastructure',
        title:   'Built to live where the team already worked.',
        body:    'The training portal isn\'t a standalone site — it\'s a section of the Design Hub, ZoomInfo\'s internal knowledge platform for the entire design org. Onboarding, process documentation, product repos, resources, newsletters, team directories, and training all live under one roof.\n\nEmbedding the portal via iframe meant the team could access structured AI training without leaving the environment they were already using. For designers still getting comfortable with repos and dev tooling, that accessibility was the difference between training that got used and training that didn\'t.',
        images: [
          {
            file:    '06-chai-phase-detail.png',
            alt:     'CHAI phase detail page with step-level guidance and key takeaways.',
            caption: 'Phase-level detail — each CHAI phase has its own page with takeaways, format, and presenter.',
          },
          {
            file:    '03-governance-module.png',
            alt:     'AI Design Governance module — ethics, privacy, responsible AI for designers.',
            caption: 'AI Design Governance module — built into the curriculum from day one, not bolted on.',
          },
        ],
      },

    ],

    // ── Screenshot index ─────────────────────────────────────
    screenshots: [
      { section: 'Platform',      label: 'Portal home — three learning tracks',                              file: '01-portal-home.png'          },
      { section: 'Fundamentals',  label: 'AI Fundamentals — 8 self-paced modules',                          file: '02-ai-fundamentals.png'      },
      { section: 'Fundamentals',  label: 'AI Design Governance module',                                      file: '03-governance-module.png'    },
      { section: 'CHAI',          label: 'CHAI Framework overview — 7-phase design loop',                    file: '04-chai-framework.png'       },
      { section: 'Workshops',     label: 'AI Workshops — bi-weekly, peer-presented, all recorded',           file: '05-ai-workshops-header.png'  },
      { section: 'CHAI',          label: 'CHAI phase detail — step-level guidance and takeaways',            file: '06-chai-phase-detail.png'    },
    ],
  },
  {
    slug: 'design-hub',
    title: 'Design Hub',
    company: 'ZoomInfo',
    thumbnail: `/denky-portfolio-website/screenshots/design-hub/01-hub-home.png`,
    year: '2026',
    discipline: 'Design Operations · Information Architecture · Internal Tooling',
    roleLabel: 'Sole Designer & Content Architect',
    timeline: '2026',
    team: 'ZoomInfo Design Org (35 designers, PMs, managers)',
    outcome: 'KNOWLEDGE PLATFORM · 35-PERSON DESIGN ORG',
    eyebrow: 'KNOWLEDGE PLATFORM FOR A 35-PERSON DESIGN ORG',
    desc: 'A role-navigated internal knowledge portal I designed and built to centralize onboarding, process documentation, component repos, newsletters, and team directories for a 35-person design org that had no shared home.',
    chips: [
      { label: 'DesignOps' },
      { label: 'Information Architecture' },
      { label: 'Internal Tooling' },
      { label: 'Google Sites' },
    ],
    overview: [
      'The design org was scaling with no shared infrastructure. Onboarding lived in Confluence, process docs scattered across Notion and Slack pins, and new designers had no way to find the design system, team contacts, or upcoming trainings without asking around.',
      'I diagnosed this as an information architecture problem masquerading as a communication problem — and built the fix.',
    ],
    role: [
      'Sole designer and content architect — identified the gap, defined the information architecture, built and launched the hub, and maintained it continuously through 2026.',
      'Designed all navigation, section structure, footer taxonomy, and quick-link architecture.',
      'Ran Design Open Hours and AI Open Hours through the hub as its operational backbone.',
    ],
    impact: [
      'Single source of truth adopted across a 35-person design org.',
      'Onboarding, process docs, component repos, newsletters, and team directories centralized into one role-navigated portal.',
      'Every recurring program — Design Open Hours, AI Open Hours, workshop series — anchored to the hub.',
      'Designed to stay current with minimal maintenance overhead, sustainable without dedicated DesignOps staff.',
    ],
    heroImage: `/denky-portfolio-website/screenshots/design-hub/01-hub-home.png`,
    heroCaption: 'Design Hub home — quick links, Design Digest newsletter embed, Team Events, and AI Workshop promos.',
    assetFolder: 'design-hub',
    caseStudySections: [
      {
        type: 'text',
        label: 'Context',
        title: 'No Shared Home',
        body: 'The design org had no single place that said: here is how we work, here is where things live, here is who to talk to. New designers spent their first weeks piecing together information from disconnected sources. Veterans relied on Slack memory and tribal knowledge to surface resources that should have been findable in seconds. I diagnosed this as an information architecture problem masquerading as a communication problem — and built the fix.',
      },
      {
        type: 'featureImage',
        label: 'Platform',
        title: 'What I Built',
        body: 'I built the Design Hub on Google Sites — a deliberate choice given existing tooling and a no-budget constraint. The architecture was role-navigated: a designer joining the team could follow the Onboarding path; a veteran could jump directly to Product/Repos, Resources, or the Newsletter archive. Home surfaced quick links to the latest training, latest newsletter, and design system — plus a live Design Digest embed so the hub was always current.',
        image: '01b-hub-home.png',
        alt: 'Design Hub Team Events and AI Workshops page with Design Digest newsletter',
        caption: 'Team Events and AI Workshops — live session calendar with the Design Digest newsletter.',
      },
      {
        type: 'imagePair',
        label: 'Structure',
        title: 'Role-Navigated Architecture',
        body: 'Onboarding gave new designers a first-week checklist covering Figma, Jira, staging, and Claude Code setup — plus org chart and team resource links. Product/Repos housed component libraries, Storybook, monorepo documentation, and the Sales Hub Playbook.',
        images: [
          {
            file: '02-onboarding.png',
            alt: 'Onboarding page with designer checklist and team resources',
            caption: 'Onboarding — first-week checklist, Claude Code setup, team resource cards.',
          },
          {
            file: '03-product-repos.png',
            alt: 'Product/Repos section with component library and Storybook links',
            caption: 'Product/Repos — component libraries, Storybook, monorepo docs, Sales Hub Playbook.',
          },
        ],
      },
      {
        type: 'featureImage',
        label: 'DesignOps',
        title: 'The Operational Layer',
        body: 'Design Hub was not a document dump — it was the operational layer the design org had been missing. Every recurring program I ran had a home here. The newsletter archive let new designers onboard into the team\'s history, not just its current state. The footer taxonomy added a self-service support layer: Report a Site Issue, Suggest a Resource, Contact Design Ops, Request Figma Access. I designed it to stay current with minimal maintenance overhead — sustainable without dedicated DesignOps staff.',
        image: '04-operational-layer.png',
        alt: 'Design Hub Bet to Build, Resources, and Design Team News pages shown together',
        caption: 'Bet to Build, Resources, and Design Team News — the recurring programs that kept the hub current.',
      },
    ],
  },
  {
    slug:       'admin-settings-navigation',
    title:      'Navigation Governance — Cross-Product Top & Left Nav',
    eyebrow:    'WCAG 2.2 AA · ENTERPRISE NAVIGATION ACCESSIBILITY',
    company:    'ZoomInfo',
    year:       '2024–2025',
    discipline: 'Accessibility',
    desc:       'A foundational navigation governance system — top secondary nav and left nav — adopted across every product, with accessibility and interaction behavior owned end-to-end.',
    thumbnail:  `${BASE}/screenshots/admin-settings/08-navigational-governance-thumbnail.png`,
    assetFolder: 'admin-settings',
    roleLabel:  'Accessibility & Interaction Lead',
    timeline:   '2024–2025',
    team:       'ZoomInfo Admin Portal',
    outcome:    'Adopted as the governing navigation pattern across every product — not a single-screen fix, but the infrastructure other teams build within.',
    heroImage:  `${BASE}/screenshots/admin-settings/04-hero-image.png`,
    heroCaption: 'Accessibility annotation overview — landmarks, headings, tab order, and name/role/value.',
    chips: [
      { label: 'Accessibility',     accent: 'cyan' },
      { label: 'UX Systems'                          },
      { label: 'Interaction Design'                  },
    ],
    overview: [
      'Co-led a navigation governance system spanning top secondary nav and left nav, adopted across every product',
      'Owned accessibility and interaction behavior end-to-end: tab order, focus management, name/role/value, and keyboard navigation',
      'Established an approval gate — teams could customize within the system, but needed sign-off before dev implementation',
      'Reviewed all team UI proposals for accessibility compliance prior to handoff',
    ],
    role: [
      'Co-led the foundational navigation system — top secondary nav and left nav — adopted across every product, with design leadership owning the visual UI layer and accessibility/interaction behavior owned end-to-end on my side: tab order, focus management, name/role/value, and keyboard navigation. The system became required infrastructure — teams could customize within it but needed approval before dev implementation.',
      'Specified tab order for both closed and open navigation states',
      'Authored name/role/value annotations for every interactive element',
      'Defined focus management rules for open, close, and state-change interactions',
      'Reviewed all team UI proposals for accessibility compliance prior to dev handoff',
    ],
    impact: [
      'Spec-complete accessibility handoff — covering nav states, behavior, tab order, name/role/value, and focus management — adopted as the governing pattern across every product, not just Admin Portal.',
    ],
    caseStudySections: [

      // SECTION 1 — SYSTEM OVERVIEW & GOVERNANCE MODEL
      // TODO: Denky may add a supporting visual here later — currently text-only by design
      {
        type:  'text',
        label: 'Governance Model',
        title: 'System Overview & Governance Model',
        body:  'This navigation system became required infrastructure rather than a one-off pattern. Product teams could customize within its rules, but any deviation needed sign-off from our team before development — keeping the system consistent and accessible as it scaled across the portfolio.',
      },

      // SECTION 2 — INTERACTION & BEHAVIOR SPECIFICATION
      {
        type:    'featureImage',
        label:   'Interaction & Behavior',
        title:   'Behavior and keyboard interaction specs',
        body:    'Every interaction — expand, collapse, select, hover — was specified down to keyboard behavior before visual design began, so accessibility wasn\'t a layer added at the end but the foundation the UI was built on.',
        image:   '02-nav-behavior-keyboard-specs.png',
        alt:     'Behavior and keyboard interaction specs for the left nav.',
        caption: 'Behavior and keyboard interaction specs for the left nav — defining exactly how each state responds before a single screen got built.',
      },
      {
        type:    'featureImage',
        label:   'Interaction & Behavior',
        title:   'Flyout anchoring and keyboard navigation',
        body:    'Collapsed navigation introduces a specific accessibility risk: icon-only flyouts that are easy to specify visually but easy to get wrong for keyboard and screen-reader users. Each flyout\'s anchor point and arrow-key behavior was defined explicitly to close that gap.',
        image:   '03-flyout-interaction-spec.png',
        alt:     'Flyout anchoring and keyboard navigation — Tab and Arrow-key behavior specified for every collapsed-state icon.',
        caption: 'Flyout anchoring and keyboard navigation — Tab and Arrow-key behavior specified for every collapsed-state icon.',
      },

      // SECTION 3 — ACCESSIBILITY ANNOTATIONS
      {
        type:    'featureImage',
        label:   'Accessibility Annotations',
        title:   'Accessibility annotation overview',
        body:    'Landmarks, headings, tab order, and name/role/value were each specified independently, then composited into a single reference sheet engineers could check against during implementation — turning accessibility from a post-build audit into a pre-build specification.',
        image:   '04-left-nav-a11y-overview.png',
        alt:     'Accessibility annotation overview showing landmarks, headings, tab order, and name/role/value.',
        caption: 'Accessibility annotation overview — landmarks, headings, tab order, and name/role/value.',
      },
      {
        type:    'featureImage',
        label:   'Accessibility Annotations',
        title:   'Focus management — frame by frame',
        body:    'Focus management is traced frame by frame for both collapsed and expanded navigation — from initial tab entry through flyout expansion to landing on the resulting page — paired with a full keyboard interaction key (Tab, Arrow keys, Space/Enter, Escape, Home) so engineering has an unambiguous reference, not just a visual example.',
        image:   '05-left-nav-focus-management.png',
        alt:     'Focus management for collapsed and expanded navigation traced frame by frame, with full keyboard interaction key.',
        caption: 'Focus management — collapsed and expanded navigation traced frame by frame, with full keyboard interaction key.',
      },
      {
        // TODO: Denky to write body copy for this section
        type:    'featureImage',
        label:   'Accessibility Annotations',
        title:   'Tab order and Name/Role/Value for every header state',
        image:   '07-page-header-a11y.png',
        alt:     'Tab order and Name/Role/Value specs for every Main Header state, mapping focus sequence, ARIA attributes, and accessible names.',
        caption: 'Tab order and Name/Role/Value specs for every Main Header state — mapping focus sequence, ARIA attributes, and accessible names so engineering could implement keyboard and screen-reader support without guesswork.',
      },

      // SECTION 4 — SYSTEM IN PRODUCTION
      {
        type:    'featureImage',
        label:   'System in Production',
        title:   'Stress-testing against live flows',
        body:    'Before the pattern shipped, it was tested against real flows already in production — Permission Profiles, Intent Clusters, and Salesforce account connections — to confirm the header held up under actual content, not just idealized spec conditions. Holding up across unrelated parts of the product was the signal that the pattern was ready to generalize, not just solve for one screen.',
        image:   '06-page-header-examples.png',
        alt:     'Header pattern stress-tested against live Admin Portal flows — Permission Profiles, Intent Clusters, and Salesforce account connections.',
        caption: 'Stress-testing the header pattern against live Admin Portal flows — Permission Profiles, Intent Clusters, and Salesforce account connections — to confirm the variants held up outside the spec sheet.',
      },
    ],
  },
  {
    slug: 'design-system-accessibility',
    title: 'Design System & Accessibility',
    eyebrow: '~100 COMPONENTS · DESIGN SYSTEM + ACCESSIBILITY',
    subtitle: 'Building the accessibility layer for a 100-component design system — and growing into the org-wide accessibility champion for a 35-person design team.',
    year: '2023–2025',
    company: 'ZoomInfo',
    discipline: 'Design Systems',
    role: 'Sole A11y Designer & Accessibility Champion',
    roleLabel: 'Sole A11y Designer & Accessibility Champion',
    timeline: '2023–2025',
    team: 'ZoomInfo Design Org',
    outcome: '~100 COMPONENTS · DESIGN SYSTEM + ACCESSIBILITY',
    desc: 'Building the accessibility layer for a 100-component design system — and growing into the org-wide accessibility champion for a 35-person design team.',
    tags: ['Design Systems', 'Accessibility', 'WCAG', 'Component Library', 'Documentation', 'Dev Handoff'],
    chips: [
      { label: 'Design Systems', accent: 'cyan' },
      { label: 'Accessibility' },
      { label: 'WCAG' },
    ],
    thumbnail: '/denky-portfolio-website/screenshots/design-system/01-a11y-guidelines-keyboard.png',
    assetFolder: 'design-system',
    heroImage: `${BASE}/screenshots/design-system/01-hero-image.png`,
    heroCaption: 'Muze Accessibility Guidelines — a two-year body of work spanning component specs, annotation packages, and org-wide accessibility ownership.',
    overview: 'When I joined ZoomInfo\'s design system team, Muze — an Angular Material-based component library — was the foundation every product team built on. I came in to learn how components were built, understand what accessibility required, and start documenting it. What followed was two years of building the accessibility infrastructure that the entire org depended on: a guidelines library covering every component, annotation packages across every major product surface, biweekly open hours bringing designers, PMs, and engineers together, and eventually a migration path as MUI React entered the picture.',
    caseStudySections: [
      {
        type: 'text',
        title: 'The System',
        body: 'Muze was the shared foundation — a library of nearly 100 components that every product team customized into their own "Mini Muze": product-specific Figma libraries built on Muze components, configured for their team\'s use cases so no one was rebuilding the same component twice. I co-owned the system alongside the lead design system designer: building and refining components, running Muze Open Hours twice a week, and maintaining documentation in both Figma and Confluence. Every component shipped fully functional, with all interaction states documented and accessible by default.',
      },
      {
        type: 'imagePair',
        images: [
          {
            file: '02-mini-muze-operationsos.png',
            alt: 'OperationsOS Mini Muze Figma file showing Cards BG and Containers BG organized across seven product surfaces: Segment, Route, Matching, Enrich, Working Hours, Licensed Users, and Normalize.',
            caption: 'OperationsOS Mini Muze — product-specific component library built on the core Muze system, organized across 7 product surfaces.',
          },
          {
            file: '03-a11y-nav-workflows.png',
            alt: 'Left Navigation for Workflows accessibility annotation canvas showing Default, Tab Order, Name/Role/Value, and Focus Management columns. Status badge reads a11y Ready for Dev. Approved by the accessibility contractor.',
            caption: 'Every component annotated for accessibility — Ready for Dev status, reviewed and approved by the accessibility contractor.',
          },
        ],
      },
      {
        type: 'text',
        title: 'The Accessibility Guidelines Library',
        body: 'I started by learning from a contracted CPWA accessibility specialist ZoomInfo had brought in. She taught me how to approach accessibility — not as a checklist but as a design requirement built in from the start. Component by component, I built out the accessibility guidelines library: keyboard interaction specs, Name/Role/Value mappings, focus management rules, landmark structures, live region requirements. The library lived in Figma — designers and PMs referenced the guidelines directly there, and the documentation was published to Confluence. Engineers worked from Storybook: the accessibility specs from the Figma library were implemented into Storybook components, so compliance could be verified inside the platform engineers actually use. Once I had the foundation, she shifted into a review and advisory role — she approved my annotation work, acted as a sounding board for edge cases, and signed off on dev handoff packages. I ran the a11y grooming sessions with engineers, walked them through implementation requirements, and reviewed production builds for compliance. Over time, that ownership expanded past the design system team — I became the accessibility point of contact for every team across ZoomInfo\'s design org.',
      },
      {
        type: 'imageGrid',
        images: [
          {
            file: '04-a11y-guidelines-library.png',
            alt: 'Accessibility guidelines library — Info Tooltip and Info Popover pages showing keyboard behavior, Name/Role/Value specs, approval status, and product team attribution.',
            caption: 'A11y guidelines library — Info Tooltip and Info Popover specs, each with approval status and implementation notes. Every component in the library got this treatment.',
          },
          {
            file: '05-a11y-annotation-canvas.png',
            alt: 'Full accessibility annotation canvas for a navigation component showing User Navigation Flow, Tab Order, Landmarks, Headings, Name/Role/Value, and Focus Management sections across collapsed and expanded states.',
            caption: 'Six-domain annotation canvas — from user flow through focus management, covering every a11y requirement in a single deliverable.',
          },
          {
            file: '06-a11y-project-examples.png',
            alt: 'Accessibility guidelines library open in Figma — component list spanning Avatar through Layers, with Info Tooltip and Info Popover detail views showing Approved status, product team attribution, and implementation notes for developers.',
            caption: 'A11y guidelines in practice — component specs across the full Muze library, each with approval status, product team context, and dev implementation notes.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Accessibility Into AI — and the MUI Transition',
        body: 'As ZoomInfo\'s product roadmap shifted toward AI features, the accessibility work followed. I extended the annotation practice into new AI-powered surfaces — the Enable AI Accounts flow, AI account summary pages, tooltip and dialog patterns specific to AI interactions — ensuring every new surface met WCAG 2.2 AA before dev handoff. At the same time, leadership made the decision to bring in MUI React as the new component library for new product builds. The team was now dual-track: maintain Muze for native products, prepare for MUI on new builds. I mapped how components translated between systems, communicated what changed and what stayed the same, and helped the team understand how to move forward without losing what they\'d built. The Muze open hours evolved to cover both libraries. As ZoomInfo shifted toward vibe-coding workflows — designers building directly in VS Code rather than Figma — a design technologist started building an MUI component library for VS Code to close the handoff gap. This created a real a11y risk: designers detaching components to restyle them, silently breaking the ARIA behavior and keyboard patterns MUI ships with out of the box.\n\nTo get ahead of it, I built an accessibility audit script using Cline and Playwright. It would hit a live URL, bypass auth, and return a structured report with violations and remediation guidance. That script was the direct precursor to the DQE — same core logic, same output philosophy, formalized into a full guardrail system.\n\nWe were still working out implementation when my time at ZoomInfo came to a close. The infrastructure held.',
      },
      {
        type: 'imagePair',
        images: [
          {
            file: '07-a11y-ai-surfaces.png',
            alt: 'AI Accounts accessibility annotation showing Tooltips, Toast Messages, and Dialogs — three component types annotated side by side with Default and Name/Role/Value columns for each.',
            caption: 'A11y extended to AI surfaces — Tooltips, Toast Messages, and Dialogs annotated as new AI account features shipped.',
          },
          {
            file: '08-a11y-enable-ai-flow.png',
            alt: 'Enable AI Account flow accessibility annotation showing multi-step flow with TAGS spec, aria-live polite requirements, and testing object documentation — approved by the accessibility contractor.',
            caption: 'Enable AI Account flow — full multi-step annotation including live region specs and implementation notes for dev.',
          },
        ],
      },
      {
        type: 'featureImage',
        image: '10-muze-open-hours.png',
        alt: 'Muze Open Hours — bi-weekly sessions where designers, PMs, and engineers surfaced component proposals that became documented components in Storybook.',
        caption: 'Muze Open Hours → Storybook pipeline — proposals surfaced in open hours became documented components in the new system.',
      },
    ],
  },
  {
    slug: 'ringlead',
    title: 'RingLead: From Brand to Product',
    eyebrow: 'BRAND SYSTEMS + PRODUCT UX · ACQUIRED BY ZOOMINFO',
    discipline: 'Brand Design · Visual Systems · Product UX · Design Systems',
    desc: 'Five years as the sole designer at a B2B SaaS data quality company — building three complete brand systems, a Sketch component library, and a product UI that helped position RingLead for acquisition by ZoomInfo.',
    year: '2016–2021',
    role: 'Sole Designer',
    outcome: 'Brand, product, and design system — built from scratch to acquisition',
    company: 'RingLead (acquired by ZoomInfo, 2021)',
    chips: [
      { label: 'Brand Systems' },
      { label: 'Visual Design' },
      { label: 'Product UX' },
      { label: 'Design Systems' },
      { label: 'Sketch' },
      { label: 'MUI' },
      { label: 'Sales Enablement' },
      { label: 'Event Design' },
    ],
    thumbnail: `${BASE}/screenshots/ringlead/era3-hero.png`,
    sections: [
      // SECTION 1 — THE FOUNDATION
      { type: 'text', eyebrow: 'Context', heading: 'The Foundation', body: `I joined RingLead in 2016 as the only designer in the company. Over five years I rebuilt the visual identity three times — each rebrand reflecting a shift in the business — and eventually expanded into product UX as the platform scaled toward acquisition.\n\nThe first project I took on was making the existing website more current — not a redesign from scratch, since I had to work within the original blue-and-orange system and existing content. It wasn't great design, but it was a start, and it taught me the platform before I touched the brand itself.\n\nFrom there, I built the first complete brand system from scratch: logo usage guidelines, a full color and type system, and a website spanning the homepage and six product landing pages. The sales enablement stack came next — a 'Welcome to RingLead Sales' deck, per-product one-pagers, and case study layouts including the MMIT case study — RingLead's marketing reported 125,000+ duplicates prevented as the result. I was the sole person responsible for design execution across the entire collateral system.` },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/era1-website-refresh.png', alt: 'RingLead website refresh — light visual cleanup of the existing site, mostly blue, before any rebrand', caption: 'The first project — a light visual cleanup of the existing site, working within what was already there.' },

      // SECTION 2 — THE PIVOT
      { type: 'text', eyebrow: 'Pivot', heading: 'The Pivot', body: `As RingLead's positioning matured, the brand needed to match. I researched the market and competitive landscape, collected new visual assets and imagery, and rebranded the system for implementation — working alongside a copywriter and website designer on our marketing team. The website was rebuilt from scratch, and the full collateral stack — datasheets, tip sheets, sales decks, technical diagrams — was refreshed in the new system.` },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/era2-assets.png', alt: 'RingLead rebrand — navy and orange website, new orange-and-silver X logo, and supporting sales collateral', caption: 'The rebrand — navy and orange, a new logo, and a refreshed collateral system across the website and sales materials.' },

      // SECTION 3 — THE REBIRTH
      { type: 'text', eyebrow: 'Rebirth', heading: 'The Rebirth', body: `By 2020, RingLead had pivoted from data management to data orchestration — a fundamentally different product story. This was my third brand system in five years, and I brought everything the first two had taught me: tighter process, sharper instincts, more confidence translating a business shift into a visual one.\n\nI conceived the phoenix as the central metaphor: a business rising from its own past and taking a new form. I sketched the concept, developed the mark through iteration, and directed the final execution. The resulting logo — a phoenix rendered in layered navy, teal, and magenta, rising stronger from what came before — became the identity anchor for the company's final chapter before acquisition.\n\nThe rebrand didn't happen in isolation — it ran alongside a parallel effort to modernize the product itself. As the new visual identity took shape, I was also building the design system in Sketch and updating the product UI to match, so the brand and the platform evolved together rather than the UI catching up to the rebrand months later.\n\nThe design system covered color tokens (Primary 50–900, Secondary, Logo, Background, Gray, Text, Icon), a Roboto typography scale across H1–Body 2 at all weights, and a complete component library: Buttons, Checkboxes, Radio Buttons, Dropdowns, Input Text, Left Navigation, Top Navigation, Elevation, and a large icon library. This work preceded the ZoomInfo MUI migration and directly informed how I engaged with design systems thinking when I joined ZoomInfo post-acquisition.\n\nIn 2020 I transitioned into the UX/UI Designer role, taking full ownership of the platform experience. I redesigned the dashboard, Roles and Administration screen, Salesforce Connections screen, and the Duplicate Health Check and Field Analysis screens. The product UI adopted MUI as its component foundation — a decision I drove — which directly paralleled the Muze-to-MUI migration ZoomInfo undertook after the acquisition.` },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/era3-phoenix-logo.png', alt: 'RingLead phoenix logo mark rendered in layered navy, teal, and magenta', caption: 'The phoenix mark — conceived, developed, and directed by Denky' },
      { type: 'imageGrid', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/era3-website-composite.png', alt: 'Composite of RingLead website pages in the rebranded navy, teal, and magenta system', caption: 'The rebranded website — composite of key pages in the new visual system' }, { src: '/denky-portfolio-website/screenshots/ringlead/era3-design-system.png', alt: 'RingLead design system component library in Sketch, showing buttons, color tokens, and typography scale', caption: 'The Sketch design system — color tokens, typography, and a complete component library' }, { src: '/denky-portfolio-website/screenshots/ringlead/era3-product-ui.png', alt: 'RingLead product UI screens including dashboard, roles and administration, and Salesforce connections', caption: 'Product UI redesign — dashboard, admin, and connections screens rebuilt on the new system' }] },

      // SECTION 4 — ACQUIRED
      { type: 'text', eyebrow: 'Outcome', heading: 'Acquired by ZoomInfo, 2021.', body: `RingLead was acquired by ZoomInfo in September 2021. The design work — brand systems, marketing infrastructure, and product UI — was in production at the time of acquisition and continued forward into the ZoomInfo ecosystem.\n\nThe arc from visual designer to product designer to design systems contributor at RingLead shaped the trajectory of my ZoomInfo work: the same design systems thinking, the same component-level rigor, now applied at 100x the scale.` },
    ],
  },
]
