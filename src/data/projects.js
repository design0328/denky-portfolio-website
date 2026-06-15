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
    eyebrow:     '3 LEARNING TRACKS · 35-PERSON DESIGN ORG',
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
      'Coded the training platform from scratch in VS Code — rebuilt from Vivek\'s training generator into a full deployable site',
      'Three tracks: CHAI Framework (mandatory, 7 phases), AI Fundamentals (8 self-paced modules), AI Workshops (bi-weekly, all recorded)',
      'Embedded in the Design Hub via iframe — one front door for all design org knowledge, onboarding, and training',
    ],

    // ── Role (detail panel) ─────────────────────────────────
    role: [
      'Ran listening sessions and attended team meetings to surface what designers were struggling with, what they didn\'t understand, and what they needed to learn to move forward — this became the needs assessment the entire platform was built on',
      'Built the curated content spreadsheet that mapped team learning needs to specific training sources — Vivek used this list to source YouTube content for AI Fundamentals',
      'Took Vivek\'s training generator and rebuilt it into a full deployable training platform — coded in VS Code with Claude, structured into three distinct learning tracks',
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
    year: '2026',
    discipline: 'Design Operations · Information Architecture · Internal Tooling',
    roleLabel: 'Sole Designer & Content Architect',
    timeline: '2026',
    team: 'ZoomInfo Design Org (35 designers, PMs, managers)',
    outcome: 'KNOWLEDGE PLATFORM · 35-PERSON DESIGN ORG',
    eyebrow: 'KNOWLEDGE PLATFORM · 35-PERSON DESIGN ORG',
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
      'Sole designer and content architect — identified the gap, defined the IA, built and launched the hub, and maintained it continuously from 2023 through 2026.',
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
        image: '01-hub-home.png',
        alt: 'Design Hub home page',
        caption: 'Home — quick links, live newsletter embed, Team Events calendar, AI Workshop promos.',
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
        type: 'imageGrid',
        label: 'DesignOps',
        title: 'The Operational Layer',
        body: 'Design Hub was not a document dump — it was the operational layer the design org had been missing. Every recurring program I ran had a home here. The newsletter archive let new designers onboard into the team\'s history, not just its current state. The footer taxonomy added a self-service support layer: Report a Site Issue, Suggest a Resource, Contact Design Ops, Request Figma Access. I designed it to stay current with minimal maintenance overhead — sustainable without dedicated DesignOps staff.',
        images: [
          {
            file: '04-build-process.png',
            alt: 'Build process documentation within the hub',
            caption: 'Build Process — how design ships, documented and accessible.',
          },
          {
            file: '05-resources.png',
            alt: 'Resources section',
            caption: 'Resources — tools, references, and shared design assets.',
          },
          {
            file: '06-newsletter.png',
            alt: 'Newsletter archive',
            caption: 'Newsletter — bi-weekly Design Team Digest archive.',
          },
        ],
      },
    ],
  },
  {
    slug:       'admin-settings-navigation',
    title:      'Admin Settings Navigation: UI & Accessibility Annotations',
    company:    'ZoomInfo',
    year:       '2024–2025',
    discipline: 'Accessibility',
    desc:       'A complete redesign and accessibility specification of the Admin Portal\'s collapsed navigation — covering every interaction state, keyboard path, and ARIA semantic before a single line of code was written.',
    thumbnail:  `${BASE}/screenshots/admin-settings/01-nav-states-anatomy.png`,
    assetFolder: 'admin-settings',
    roleLabel:  'Sole designer',
    timeline:   '2024–2025',
    team:       'ZoomInfo Admin Portal',
    outcome:    'Spec-complete accessibility handoff adopted as the reference pattern for Admin Portal design.',
    heroImage:  `${BASE}/screenshots/admin-settings/01-nav-states-anatomy.png`,
    heroCaption: 'Left nav states — collapsed, expanded, active, hover, and selected, with icon system updates.',
    chips: [
      { label: 'Accessibility',     accent: 'cyan' },
      { label: 'UX Systems'                          },
      { label: 'Interaction Design'                  },
    ],
    overview: [
      'Complete redesign and accessibility specification of the Admin Portal\'s collapsed navigation — covering every interaction state, keyboard path, and ARIA semantic before a single line of code was written',
      'Spec set documents nav states and anatomy, expand/collapse behavior, and tab order in both closed and open states',
      'Name/role/value annotations defined for every interactive element, plus focus management rules',
      'Eliminates accessibility guesswork at the engineering handoff',
    ],
    role: [
      'Sole designer for the navigation spec set — interaction states, behavior documentation, and full WCAG-aligned accessibility annotations',
      'Specified tab order for both closed and open navigation states',
      'Authored name/role/value annotations for every interactive element',
      'Defined focus management rules for open, close, and state-change interactions',
    ],
    impact: [
      'Spec-complete accessibility handoff — covering nav states, behavior, tab order, name/role/value, and focus management — adopted as the reference pattern for Admin Portal design',
    ],
    caseStudySections: [
      {
        type: 'featureImage',
        label: 'Navigation States',
        title: 'Every interaction state defined before a line of code',
        body: 'The spec set documents the full anatomy of the Admin Portal\'s collapsed left navigation — collapsed, expanded, active, hover, and selected states — along with an updated icon system, giving engineering a single source of truth for how the nav should look and behave.',
        image: '01-nav-states-anatomy.png',
        alt: 'Admin Portal left navigation states — collapsed, expanded, active, hover, and selected — with icon system updates.',
        caption: 'Left nav states — collapsed, expanded, active, hover, and selected, with icon system updates.',
        notes: [
          'Establishes a shared visual vocabulary for every nav state before implementation begins',
          'Pairs each state with the updated icon system to avoid ambiguity at handoff',
          'Forms the foundation the behavior and accessibility specs build on',
        ],
      },
      {
        type: 'imagePair',
        label: 'Behavior & Information Architecture',
        title: 'How the navigation behaves, and everything it contains',
        body: 'Expand, overlay, and section-selection logic are documented per state, alongside a complete map of every settings section in the expanded menu — giving engineering both the interaction rules and the full content model.',
        images: [
          {
            file: '02-behavior-specs.png',
            alt: 'Behavior specification documenting expand, overlay, and section-selection logic for the Admin Portal navigation.',
            caption: 'Behavior specifications — expand, overlay, and section-selection logic documented per state.',
          },
          {
            file: '05-nav-all-sections.png',
            alt: 'Full information architecture diagram showing every settings section in the expanded Admin Portal navigation menu.',
            caption: 'Full information architecture — every settings section mapped in the expanded menu.',
          },
        ],
      },
      {
        type: 'imageGrid',
        label: 'Accessibility Annotations',
        title: 'WCAG-aligned annotations that remove handoff guesswork',
        body: 'Tab order, name/role/value, and focus management are specified for every interactive element and every navigation state — turning accessibility from a post-build audit into a pre-build specification.',
        images: [
          {
            file: '03-a11y-tab-order.png',
            alt: 'Tab order annotations specifying the full keyboard path for closed and open Admin Portal navigation states.',
            caption: 'Tab order annotations — full keyboard path specified for both closed and open navigation states.',
          },
          {
            file: '04-a11y-name-role-value.png',
            alt: 'Name, role, and value annotations for every interactive element in the Buy More flows.',
            caption: 'Name/Role/Value annotations — accessible names, roles, and states defined for every element in the Buy More flows.',
          },
          {
            file: '06-focus-management.png',
            alt: 'Focus management specification showing where focus lands on open, close, and state changes.',
            caption: 'Focus management spec — where focus lands on open, close, and state changes.',
          },
        ],
      },
    ],
  },
  {
    slug:       'muze-mui-migration',
    title:      'Muze → MUI: Supporting a Design System Migration',
    company:    'ZoomInfo',
    year:       '2026',
    discipline: 'Design Systems',
    desc:       'When leadership moved the design org from Muze — our Angular Material–based design system — to the React-based MUI library, designers and PMs were suddenly navigating two systems at once. I attacked the gap on three fronts: reference, education, and infrastructure.',
    thumbnail:  `${BASE}/screenshots/design-hub/05-resources.png`,
    assetFolder: 'design-hub',
    roleLabel:  'Migration enablement lead',
    timeline:   '2026',
    team:       'ZoomInfo design organization',
    outcome:    'Gave the org a coherent on-ramp to MUI rather than leaving designers to learn component-by-component in isolation.',
    heroImage:  `${BASE}/screenshots/design-hub/05-resources.png`,
    heroCaption: 'Resource directory — MUI-KIT and component repos, Figma starters, and the SalesHub UI collaboration playbook.',
    chips: [
      { label: 'Design Systems',     accent: 'cyan' },
      { label: 'Design Operations'                    },
      { label: 'AI/UX'                                },
    ],
    overview: [
      'Leadership moved the design org from Muze (Angular Material–based) to MUI (React-based), betting on it as the faster path to build with AI — designers and PMs were suddenly navigating two systems at once',
      {
        linkTo: '/work/ringlead-brand-to-product',
        linkLabel: "I'd led an organization onto MUI once before — at RingLead, where I co-championed its adoption and taught myself the system.",
      },
      'Reference: alongside a small group of teammates, began building the AIUI Pattern Library — component usage guidance, Muze-to-MUI mappings, and patterns for building with AI capabilities',
      'Education: ran the workshop infrastructure that taught designers to work directly in repos — GitHub for Designers, repo best practices, and AI-assisted build sessions, all recorded and archived',
      'Infrastructure: built the repo playbooks and resource directory on the Design Hub that gave every designer a clear answer to "which repo, which component, where do I start?"',
    ],
    role: [
      'Migration enablement lead across reference, education, and infrastructure',
      'Co-initiator of the AIUI Pattern Library during its foundational stages',
      'Workshop series organizer — GitHub for Designers, repo best practices, and AI-assisted build sessions',
      'Author of the repo playbooks and resource directory on the Design Hub',
      'Contributed component documentation to Storybook',
    ],
    impact: [
      'Gave the org a coherent on-ramp to MUI rather than leaving designers to learn component-by-component in isolation',
      'The workshop series and repo playbooks became the standing answer to migration questions',
      'The pattern library established the documentation structure for component mapping',
      'The migration was ongoing when my role ended — the enablement system I built was designed to outlast any individual\'s involvement',
    ],
    caseStudySections: [
      {
        type: 'featureImage',
        label: 'Infrastructure',
        title: 'A clear answer to "which repo, which component, where do I start?"',
        body: 'The repo playbooks and resource directory on the Design Hub gave designers a single, maintained map of MUI-KIT and component repos, Figma starters, and collaboration playbooks like SalesHub UI — replacing scattered tribal knowledge with one reference.',
        image: '05-resources.png',
        folder: 'design-hub',
        alt: 'Design Hub resource directory listing MUI-KIT and component repos, Figma starters, and the SalesHub UI collaboration playbook.',
        caption: 'Resource directory — MUI-KIT and component repos, Figma starters, and the SalesHub UI collaboration playbook.',
        notes: [
          'Gave every designer one maintained map of repos, components, and starters',
          'Replaced scattered tribal knowledge with a single reference',
          'Became the standing answer to "where do I start?" during the migration',
        ],
      },
      {
        type: 'featureImage',
        label: 'Education',
        title: 'Workshop infrastructure that taught designers to work in repos',
        body: 'A recurring workshop series — GitHub for Designers, repo best practices, and AI-assisted build sessions — gave designers hands-on practice working directly in the codebases MUI required, with every session recorded and archived for async learning.',
        image: '05-ai-workshops-header.png',
        folder: 'training-portal',
        alt: 'AI Workshops series page covering GitHub for Designers, repo best practices, and AI build sessions.',
        caption: 'Workshop series — GitHub for Designers, repo best practices, and AI build sessions, all recorded.',
        notes: [
          'Taught designers to work directly in repos rather than learning components in isolation',
          'Paired repo fundamentals with hands-on AI-assisted build practice',
          'Recorded and archived sessions supported async, self-paced learning',
        ],
      },
    ],
  },
  {
    slug:       'ringlead-brand-to-product',
    title:      'RingLead: From Brand to Product',
    company:    'RingLead (acquired by ZoomInfo)',
    year:       '2016–2021',
    discipline: 'Product Design',
    desc:       'I joined RingLead in 2016 as its only designer, owning the company\'s entire visual surface — brand, website, marketing, and sales collateral. As the product\'s UI problems outgrew a single hire, I became the sole product designer for its platform team, redesigning the company\'s data quality platform from the ground up through its 2021 acquisition by ZoomInfo.',
    thumbnail:  `${BASE}/gallery/ringlead/ringlead-platform-ui.png`,
    roleLabel:  'Sole designer, brand to product',
    timeline:   '2016–2021',
    team:       'RingLead engineering & PMs — platform team of under 20 developers',
    outcome:    'The redesigned platform was cited as a factor in ZoomInfo\'s 2021 acquisition of RingLead.',
    heroImage:  `${BASE}/gallery/ringlead/ringlead-platform-ui.png`,
    heroCaption: 'The redesigned DMS platform — duplicate health checks, field analysis, and report card dashboards, designed in MUI.',
    chips: [
      { label: 'Product Design', accent: 'cyan' },
      { label: 'Design Systems'                 },
      { label: 'UX-UI'                          },
    ],
    overview: [
      'I joined RingLead in 2016 as its only designer, owning the company\'s entire visual surface — brand, website, marketing collateral, sales presentations, even the office environment. I built the creative function from scratch, bringing in a content writer and a web developer who coded the site I designed.',
      'Meanwhile, the product had a problem: the platform — later rebranded as DMS, the Data Management System — had been built by developers and engineers, and it showed. UI designers were hired to fix it and kept quitting; the work was too much for one person. I was brought in as a stopgap until a replacement arrived. The replacement never needed to.',
      'I worked well with engineering and the PMs, stayed on as the UX/UI designer, and eventually transitioned out of marketing entirely — the sole product designer for a platform team of under twenty developers, through to the company\'s acquisition by ZoomInfo in 2021.',
    ],
    role: [
      'I had no formal product design background — so I treated the engineers as my faculty. They taught me how the platform actually worked; I came back with designs grounded in constant research into best practices and leading patterns. Every design was reviewed with the assigned devs and the PM: they\'d flag when a design didn\'t fully capture a feature\'s behavior, or approve and build. It was genuinely joint contribution, and it was fast — features shipped quickly because design and engineering were never out of sync. User insight flowed through our sales teams and sales managers, which drove which features we built or reworked.',
      'The platform I took over still carried its origins as a Salesforce plugin. Configuration lived in rows of horizontal tabs — General, Map Fields, Filter, Preview — where you could only see one step at a time, with no way to understand how a filter on tab two affected matching rules on tab four. Deduplication setup meant typing criteria field-by-field into static rule tables. Job results came back as flat, text-dense spreadsheet grids. There was no visual feedback anywhere — no progress, no status, no sense of where you were in your own data pipeline. The redesigned DMS platform replaced all of it. A persistent left navigation rail organized the product around its four pillars — Cleanse, Prevent, Enrich, Route — so users could move anywhere in their data architecture in one click. Task configuration became a visual workflow: a numbered circle-tab stepper (① General → ② Filters → ③ Matching Rules → ④ Map Fields) that kept admins grounded in exactly where they were in the pipeline. Rule-building moved from static text rows to modular block builders with drag-and-drop field mapping across Salesforce, Marketo, and HubSpot. And the dashboards finally gave users feedback: progress bars on active tasks, real-time sync status, color-coded exceptions, and the data quality report cards that became the platform\'s signature screens.',
      'The platform\'s deeper problem wasn\'t any single screen — it was that every screen had been built ad hoc. With an engineering ally, I made the case for adopting a design system, and we chose MUI. Then I taught myself to design in it. As my fluency grew, so did the product: the duplicate health checks, field analysis, and data quality report card dashboards represent that later stage — capturing the vision faster, better, and consistently. It was my first time leading an organization onto MUI. It wouldn\'t be my last.',
    ],
    impact: [
      'The redesigned platform was well received — and I was told the redesign was cited as one of the factors that helped push forward the ZoomInfo acquisition in 2021. I remained the sole designer through the acquisition, then carried the platform into ZoomInfo as OperationsOS, working with the Tel Aviv team on its integration into the ZI platform.',
    ],
    caseStudySections: [
      {
        type: 'imageGrid',
        label: 'What I Inherited',
        title: 'What I inherited, and what it became',
        body: 'The redesigned DMS platform replaced ad-hoc, developer-built screens with a navigation system organized around the product\'s four pillars, visual step-by-step configuration, and dashboards that finally gave users feedback.',
        images: [
          {
            file: '/gallery/ringlead/before-01-dashboard-2017.png',
            alt: 'The inherited DMS dashboard, 2017 — default-library charts, no designed hierarchy',
            caption: 'Before — the dashboard I inherited',
          },
          {
            file: '/gallery/ringlead/ringlead-platform-ui.png',
            alt: 'The redesigned DMS platform — report cards, health checks, field analysis in MUI',
            caption: 'After — composed dashboards with real-time feedback, designed in MUI',
          },
          {
            file: '/gallery/ringlead/before-02-config-forms-2017.png',
            alt: 'Legacy task configuration — sequential form fields',
            caption: 'Before — configuration as a wall of fields, one step visible at a time',
          },
          {
            file: '/gallery/ringlead/before-03-list-grid-2017.png',
            alt: 'Legacy list import — flat text grid',
            caption: 'Before — flat grids with no status hierarchy',
          },
        ],
      },
      {
        type: 'imagePair',
        label: 'Brand & Marketing Foundations',
        title: 'Building the creative function from the ground up',
        body: 'Before the product redesign, I built RingLead\'s entire brand and marketing presence — the website, campaign system, and product marketing that carried the company through its RevOps platform era.',
        images: [
          {
            file: '/gallery/ringlead/ringlead-site-blue.png',
            alt: 'RingLead.com Data Orchestration site redesign',
            caption: 'RingLead.com — site redesign for the Data Orchestration era',
          },
          {
            file: '/gallery/ringlead/dms-enrichment.png',
            alt: 'DMS product suite marketing system',
            caption: 'DMS product suite marketing — Enrichment 360°, Intelligent Forms, and ringlead.com',
          },
        ],
      },
      {
        type: 'featureImage',
        label: 'Impact',
        title: 'From RingLead to OperationsOS',
        body: 'The redesigned platform carried forward into ZoomInfo, where it became OperationsOS — built with the Tel Aviv team as part of RingLead\'s integration into the ZoomInfo platform.',
        image: '/gallery/zoominfo/operations-os.png',
        alt: 'OperationsOS — RingLead rebranded into the ZoomInfo platform',
        caption: 'RingLead\'s platform, carried forward into ZoomInfo as OperationsOS',
      },
    ],
  },
]
