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
            alt: 'Resources section',
            caption: 'Resources — tools, references, and shared design assets.',
          },
          {
            file: '05-resources.png',
            alt: 'Newsletter archive',
            caption: 'Newsletter — bi-weekly Design Team Digest archive.',
          },
          {
            file: '06-newsletter.png',
            alt: 'Teams page with directory and calendars',
            caption: 'Teams — directory, recurring sessions, shared calendars.',
          },
        ],
      },
    ],
  },
  {
    slug:       'admin-settings-navigation',
    title:      'Admin Settings Navigation: UI & Accessibility Annotations',
    eyebrow:    'WCAG 2.2 AA · ENTERPRISE NAVIGATION ACCESSIBILITY',
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
    slug: 'design-system-accessibility',
    title: 'Design System & Accessibility',
    eyebrow: '~100 COMPONENTS · DESIGN SYSTEM + ACCESSIBILITY',
    subtitle: 'Building the accessibility layer for a 100-component design system — and growing into the org-wide accessibility champion for a 35-person design team.',
    year: '2023–2025',
    company: 'ZoomInfo',
    discipline: 'Design Systems',
    role: 'Sole A11y Designer & Accessibility Champion',
    outcome: '~100 components · Design system + accessibility',
    desc: 'Building the accessibility layer for a 100-component design system — and growing into the org-wide accessibility champion for a 35-person design team.',
    tags: ['Design Systems', 'Accessibility', 'WCAG', 'Component Library', 'Documentation', 'Dev Handoff'],
    chips: [
      { label: 'Design Systems', accent: 'cyan' },
      { label: 'Accessibility' },
      { label: 'WCAG' },
    ],
    thumbnail: '/denky-portfolio-website/screenshots/design-system/01-a11y-guidelines-keyboard.png',
    overview: 'When I joined ZoomInfo\'s design system team, Muze — an Angular Material-based component library — was the foundation every product team built on. I came in to learn how components were built, understand what accessibility required, and start documenting it. What followed was two years of building the accessibility infrastructure that the entire org depended on: a guidelines library covering every component, annotation packages across every major product surface, biweekly open hours bringing designers, PMs, and engineers together, and eventually a migration path as MUI React entered the picture.',
    caseStudySections: [
      {
        type: 'text',
        heading: 'The System',
        body: 'Muze was the shared foundation — a library of nearly 100 components that every product team customized into their own "Mini Muze": product-specific Figma libraries built on Muze components, configured for their team\'s use cases so no one was rebuilding the same component twice. I co-owned the system alongside the lead design system designer: building and refining components, running Muze Open Hours twice a week, and maintaining documentation in both Figma and Confluence. Every component shipped fully functional, with all interaction states documented and accessible by default.',
      },
      {
        type: 'imagePair',
        images: [
          {
            src: '/denky-portfolio-website/screenshots/design-system/09-mini-muze-figma-library.png',
            alt: 'OperationsOS Mini Muze Figma file showing Cards BG and Containers BG organized across seven product surfaces: Segment, Route, Matching, Enrich, Working Hours, Licensed Users, and Normalize.',
            caption: 'OperationsOS Mini Muze — product-specific component library built on the core Muze system, organized across 7 product surfaces.',
          },
          {
            src: '/denky-portfolio-website/screenshots/design-system/03-a11y-nav-workflows.png',
            alt: 'Left Navigation for Workflows accessibility annotation canvas showing Default, Tab Order, Name/Role/Value, and Focus Management columns. Status badge reads a11y Ready for Dev. Approved by Talyah Aviran, Accessibility Contractor.',
            caption: 'Every component annotated for accessibility — Ready for Dev status, reviewed and approved by the accessibility contractor.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'The Accessibility Guidelines Library',
        body: 'I started by learning from Talyah Aviran, ZoomInfo\'s contracted CPWA accessibility specialist. She taught me how to approach accessibility — not as a checklist but as a design requirement built in from the start. Component by component, I built out the accessibility guidelines library: keyboard interaction specs, Name/Role/Value mappings, focus management rules, landmark structures, live region requirements. The library lived in Figma — designers and PMs referenced the guidelines directly there, and the documentation was published to Confluence. Engineers worked from Storybook: the accessibility specs from the Figma library were implemented into Storybook components, so compliance could be verified inside the platform engineers actually use. Once I had the foundation, Talyah shifted into a review and advisory role — she approved my annotation work, acted as a sounding board for edge cases, and signed off on dev handoff packages. I ran the a11y grooming sessions with engineers, walked them through implementation requirements, and reviewed production builds for compliance. Over time the entire design org started coming to me — I became the accessibility point of contact for every team at ZoomInfo.',
      },
      {
        type: 'imageGrid',
        images: [
          {
            src: '/denky-portfolio-website/screenshots/design-system/01-a11y-guidelines-keyboard.png',
            alt: 'Accessibility guidelines library — Keyboard page for the Accordion-with-icon component. Shows full keyboard interaction specification including Enter/Space, Tab, Shift+Tab, arrow key, Home, and End behaviors. For Dev callout specifies exact implementation requirements.',
            caption: 'A11y guidelines library — keyboard interaction spec for Accordion. Every component got this treatment.',
          },
          {
            src: '/denky-portfolio-website/screenshots/design-system/02-a11y-annotation-canvas.png',
            alt: 'Full accessibility annotation canvas for a navigation component showing User Navigation Flow, Tab Order, Landmarks, Headings, Name/Role/Value, and Focus Management sections across collapsed and expanded states.',
            caption: 'Six-domain annotation canvas — from user flow through focus management, covering every a11y requirement in a single deliverable.',
          },
          {
            src: '/denky-portfolio-website/screenshots/design-system/04-a11y-table-component.png',
            alt: 'Table component accessibility annotation showing Default, Landmarks, Headings, Tab Order, and Name/Role/Value columns, plus Limit in table and Empty state edge cases.',
            caption: 'Table component — five annotation types plus edge cases. Every component annotation accounted for all interaction variants.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Accessibility Into AI — and the MUI Transition',
        body: 'As ZoomInfo\'s product roadmap shifted toward AI features, the accessibility work followed. I extended the annotation practice into new AI-powered surfaces — the Enable AI Accounts flow, AI account summary pages, tooltip and dialog patterns specific to AI interactions — ensuring every new surface met WCAG 2.2 AA before dev handoff. At the same time, leadership made the decision to bring in MUI React as the new component library for new product builds. The team was now dual-track: maintain Muze for native products, prepare for MUI on new builds. I mapped how components translated between systems, communicated what changed and what stayed the same, and helped the team understand how to move forward without losing what they\'d built. The Muze open hours evolved to cover both libraries. As ZoomInfo shifted toward vibe-coding workflows — designers building directly in VS Code rather than Figma — a design technologist started building an MUI component library for VS Code to close the handoff gap. This created a real a11y risk: designers detaching components to restyle them, silently breaking the ARIA behavior and keyboard patterns MUI ships with out of the box.\n\nTo get ahead of it, I built an accessibility audit script using Cline and Playwright. It would hit a live URL, bypass auth, and return a structured report with violations and remediation guidance. That script was the direct precursor to the DQE — same core logic, same output philosophy, formalized into a full guardrail system.\n\nWe were still working out implementation when the layoff happened. The infrastructure held.',
      },
      {
        type: 'imagePair',
        images: [
          {
            src: '/denky-portfolio-website/screenshots/design-system/05-a11y-ai-accounts.png',
            alt: 'AI Accounts accessibility annotation showing Tooltips, Toast Messages, and Dialogs — three component types annotated side by side with Default and Name/Role/Value columns for each.',
            caption: 'A11y extended to AI surfaces — Tooltips, Toast Messages, and Dialogs annotated as new AI account features shipped.',
          },
          {
            src: '/denky-portfolio-website/screenshots/design-system/06-a11y-enable-ai-flow.png',
            alt: 'Enable AI Account flow accessibility annotation showing multi-step flow with TAGS spec, aria-live polite requirements, and testing object documentation — approved by Talyah Aviran.',
            caption: 'Enable AI Account flow — full multi-step annotation including live region specs and implementation notes for dev.',
          },
        ],
      },
      {
        type: 'imagePair',
        images: [
          {
            src: '/denky-portfolio-website/screenshots/design-system/07-transition-accordion-note.png',
            alt: 'AdminPortal Websights screen with annotation note: Accordion component will not be supported by CI, but instead the dev team assigned to project will maintain and share once completed with Muze.',
            caption: 'The transition in real time — component-level decisions about what Muze sustains vs. what MUI takes over, documented at the point of handoff.',
          },
          {
            src: '/denky-portfolio-website/screenshots/design-system/08-transition-profile-storybook.png',
            alt: 'Sales+ Profile page accessibility annotation showing component analysis notes: current accordion Storybook component is legacy, new proposed interaction may have similar component in Storybook, design was proposed in Muze open hours then built as a component in Storybook.',
            caption: 'Muze Open Hours → Storybook pipeline — proposals surfaced in open hours became documented components in the new system.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ringlead',
    title: 'RingLead: From Brand to Product',
    eyebrow: 'BRAND SYSTEMS + PRODUCT UX · ACQUIRED BY ZOOMINFO',
    discipline: 'Brand Design · Visual Systems · Product UX · Design Systems',
    desc: 'Five years as the sole designer at a B2B SaaS data quality company — building three complete brand systems, a Figma component library, and a product UI that helped position RingLead for acquisition by ZoomInfo.',
    year: '2016–2021',
    role: 'Sole Designer',
    outcome: 'Brand, product, and design system — built from scratch to acquisition',
    company: 'RingLead (acquired by ZoomInfo, 2021)',
    chips: [
      { label: 'Brand Systems' },
      { label: 'Visual Design' },
      { label: 'Product UX' },
      { label: 'Design Systems' },
      { label: 'Figma' },
      { label: 'MUI' },
      { label: 'Sales Enablement' },
      { label: 'Event Design' },
    ],
    thumbnail: `${BASE}/screenshots/ringlead/era3-home.png`,
    sections: [
      { type: 'text', eyebrow: 'OVERVIEW', heading: 'Sole designer. Three brand eras. One acquisition.', body: `I joined RingLead in 2016 as the only designer in the company. Over five years I rebuilt the visual identity three times — each rebrand reflecting a shift in the business — and eventually expanded into product UX as the platform scaled toward acquisition.\n\nThe work spans brand strategy, marketing systems, sales enablement, web design, event campaigns, a Figma design system, and platform UI. When ZoomInfo acquired RingLead in 2021, design continuity across the product was already in place.` },
      { type: 'text', eyebrow: 'ERA 1 · 2016–2018', heading: 'Starting from zero in blue and orange.', body: `When I arrived, RingLead had no cohesive visual identity. I built the first complete brand system from scratch: logo usage guidelines, a full color and type system, and a website spanning the homepage and six product landing pages.\n\nThe sales enablement stack came next — a "Welcome to RingLead Sales" deck, per-product one-pagers, and case study layouts including the MMIT case study documenting 125,000+ duplicates prevented. Every deliverable was built and maintained by me alone.` },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/era1-sales-deck.png', caption: 'Welcome to RingLead Sales — sales deck, Era 1' }, { src: '/denky-portfolio-website/screenshots/ringlead/era1-enrichment.png', caption: 'DMS Enrichment one-pager — wheel diagram system, 10 features' }] },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/era1-intelligent-forms.png', caption: 'DMS Intelligent Forms — "What They See / What You Get" one-pager' },
      { type: 'text', eyebrow: 'ERA 2 · 2018–2020', heading: 'Rebrand: Unlock the Value of Data.', body: `As RingLead's positioning matured, the brand needed to match. I led a full rebrand to a black and dark-navy + orange system anchored by the new tagline "Unlock the Value of Data." The website was rebuilt from scratch, and the full collateral stack — datasheets, tip sheets, sales decks, technical diagrams — was refreshed in the new system.\n\nCustom illustrations for the blog and social, plus conference materials, rounded out the era. The "Join the RingLead Revolution" deck launched in mid-2018 and became the foundation for field sales conversations.` },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/era2-website.png', caption: 'Era 2 website — "Unlock the Value of Data" rebrand' }, { src: '/denky-portfolio-website/screenshots/ringlead/era2-dashboard.png', caption: 'Era 2 platform dashboard — 2019 product UI' }] },
      { type: 'text', eyebrow: 'ERA 3 · 2020–2021', heading: 'The phoenix. A rebirth — in every sense.', body: `By 2020, RingLead had pivoted from data management to data orchestration — a fundamentally different product story. The brand needed to reflect that transformation.\n\nI conceived the phoenix as the central metaphor: a business rising from its own past and taking a new form. I sketched the concept, developed the mark through iteration, and directed the final execution. The resulting logo — a stylized bird in layered navy, teal, and magenta — became the identity anchor for the company's final chapter before acquisition.\n\nThe third brand system extended to the website, ebooks, data orchestration one-sheets, tip sheets, API integration decks, and the #talkdatatome virtual event campaign — a LinkedIn/Salesforce ecosystem event that ran in partnership with speakers including the ZoomInfo CEO.` },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/phoenix-logo.png', caption: 'RingLead phoenix mark — conceived, developed, and directed by Denky' },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/era3-website.png', caption: 'Era 3 website hero — Data Orchestration / RevOps Automation / Technology Consolidation' },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/era3-talkdatatome.png', caption: '#talkdatatome virtual event landing page — 2021' }, { src: '/denky-portfolio-website/screenshots/ringlead/era3-speaker-cards.png', caption: 'Speaker cards — Henry Schuck keynote (ZoomInfo CEO) and Marketing Ops panel' }] },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/era3-content-system.png', caption: 'Era 3 content system — ebook, tip sheet, and data orchestration one-sheet' }, { src: '/denky-portfolio-website/screenshots/ringlead/era3-ebook.png', caption: 'Data Orchestration for Multi-Vendor Enrichment ebook cover' }] },
      { type: 'text', eyebrow: 'THE DESIGN SYSTEM', heading: 'A Figma component library built before ZoomInfo had one.', body: `As RingLead's product matured, I built a full design system in Figma — the infrastructure layer that made consistent UI possible at scale.\n\nThe system covered color tokens (Primary 50–900, Secondary, Logo, Background, Gray, Text, Icon — each with documented accessibility contrast ratios), a Roboto typography scale across H1–Body 2 at all weights, and a complete component library: Buttons (Primary, Secondary, Champion, Next, Back with all states), Checkboxes, Radio Buttons, Dropdowns, Input Text, Left Navigation, Top Navigation, Elevation, and a large icon library.\n\nThis work preceded the ZoomInfo MUI migration and informed how I engaged with design systems thinking when I joined ZoomInfo post-acquisition.` },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/ds-colors.png', caption: 'Color token system — Primary, Secondary, Logo, Background, Gray, Text, Icon' }, { src: '/denky-portfolio-website/screenshots/ringlead/ds-typography.png', caption: 'Typography scale — Roboto, H1–Body 2, weights and line heights' }] },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/ds-buttons.png', caption: 'Button component — all variants and interaction states' }, { src: '/denky-portfolio-website/screenshots/ringlead/ds-left-nav.png', caption: 'Left Navigation component — all dropdown and collapsed states' }] },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/ds-form-controls.png', caption: 'Form controls — Checkboxes and Radio Buttons, all states' },
      { type: 'text', eyebrow: 'PRODUCT UX', heading: 'From Senior Graphic Designer to product UI owner.', body: `In 2020 I transitioned into the UX/UI Designer role, taking full ownership of the platform experience. I redesigned the dashboard, Roles and Administration screen, Salesforce Connections screen, and the Duplicate Health Check and Field Analysis screens.\n\nThe product UI adopted MUI as its component foundation — a decision I drove — which directly paralleled the Muze-to-MUI migration that ZoomInfo undertook after the acquisition. The interface RingLead shipped was already aligned to the design system direction ZoomInfo was moving toward.` },
      { type: 'featureImage', src: '/denky-portfolio-website/screenshots/ringlead/product-ui-health-check.png', caption: 'Duplicate Health Check and Field Analysis — platform UI, production' },
      { type: 'imagePair', images: [{ src: '/denky-portfolio-website/screenshots/ringlead/product-ui-roles.png', caption: 'Administration → Roles screen — role-based permission management' }, { src: '/denky-portfolio-website/screenshots/ringlead/product-ui-connections.png', caption: 'Connections → Salesforce — integration management UI' }] },
      { type: 'text', eyebrow: 'OUTCOME', heading: 'Acquired by ZoomInfo, 2021.', body: `RingLead was acquired by ZoomInfo in September 2021. The design work — brand systems, marketing infrastructure, and product UI — was in production at the time of acquisition and continued forward into the ZoomInfo ecosystem.\n\nThe arc from visual designer to product designer to design systems contributor at RingLead shaped the trajectory of my ZoomInfo work: the same design systems thinking, the same component-level rigor, now applied at 100x the scale.` },
    ],
  },
]
