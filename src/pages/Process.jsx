import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Process.module.css'

const qaItems = [
  {
    tag: 'Philosophy',
    question: 'Where does your process actually start?',
    answer: (
      <>
        <p>With the system, not the screen. Before I touch a component or write a spec, I want to understand how decisions get made on this team, what already exists, and where the real friction is.</p>
        <p>Most design problems aren't UX problems — they're <strong>coordination problems in disguise</strong>. Who owns what? What's undocumented? What breaks when one person leaves? I treat those as design constraints, not backstory.</p>
      </>
    ),
  },
  {
    tag: 'Discovery',
    question: 'How do you run discovery on complex, ambiguous problems?',
    answer: (
      <>
        <p>I audit before I assume. That usually means reviewing what exists (systems, docs, past decisions), talking to the people doing the work, and finding the gaps between what's documented and what actually happens.</p>
        <p>For AI/UX and governance work especially, I map the <strong>decision surface</strong> — every point where a human has to make a choice, approve a thing, or interpret a result. That map becomes the skeleton of the design problem.</p>
      </>
    ),
  },
  {
    tag: 'Systems',
    question: 'How do you approach design systems and accessibility?',
    answer: (
      <>
        <p>I think about systems as infrastructure, not libraries. A component library is a list of parts. A system is a set of decisions — about naming, composition, ownership, and change management — that scales without breaking.</p>
        <p>Accessibility is baked in at the token level: semantic structure, keyboard navigation, focus management, live regions, and ARIA roles are specced alongside visual design, not added in QA. <strong>Accessibility is a systems property, not a checklist.</strong></p>
      </>
    ),
  },
  {
    tag: 'AI / UX',
    question: "What's your approach to designing AI-powered experiences?",
    answer: (
      <>
        <p>I design for the gap between what AI can do and what a user can trust. That means: clear provenance (where did this come from?), honest uncertainty (what does the AI not know?), and graceful override (how does the user stay in control?).</p>
        <p>I also work on the governance layer — the rules, guardrails, and review flows that determine <strong>what AI is allowed to do in the product</strong>. That's a UX problem as much as a policy one.</p>
      </>
    ),
  },
  {
    tag: 'Delivery',
    question: 'How do you work with engineering?',
    answer: (
      <>
        <p>As a collaborator, not a handoff machine. I write specs that answer the questions engineers actually have: what are the states, what are the edge cases, what's the acceptable divergence from the design?</p>
        <p>I'm also comfortable in the repo. I can read code, contribute to component docs, and review implementations against the spec. <strong>Design quality doesn't stop at Figma.</strong></p>
      </>
    ),
  },
  {
    tag: 'Scale',
    question: 'What does "design operations" mean to you in practice?',
    answer: (
      <>
        <p>DesignOps is the work that makes other work possible. That includes: how decisions get documented, how teams share knowledge, how new designers ramp up, and how design quality gets maintained as the org grows.</p>
        <p>In practice I've built internal knowledge platforms, AI training programs, automated quality checks, and contribution workflows — all aimed at reducing the <strong>coordination tax</strong> that slows teams down.</p>
      </>
    ),
  },
]

const toolCategories = [
  {
    label: 'Design & Prototype',
    tools: [
      {
        name: 'Figma',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.5 2A1.5 1.5 0 004 3.5v1A1.5 1.5 0 005.5 6H7V4.5A1.5 1.5 0 005.5 2zM7 6H5.5A1.5 1.5 0 004 7.5 1.5 1.5 0 005.5 9H7V6zm0 3H5.5A1.5 1.5 0 004 10.5v1A1.5 1.5 0 005.5 13 1.5 1.5 0 007 11.5V9zm1-3h1.5A1.5 1.5 0 0011 4.5 1.5 1.5 0 009.5 3H8v3zm1.5 3A1.5 1.5 0 008 7.5 1.5 1.5 0 008 10.5a1.5 1.5 0 001.5-1.5z" />
          </svg>
        ),
      },
      {
        name: 'Figma Make',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.5 2A1.5 1.5 0 004 3.5v1A1.5 1.5 0 005.5 6H7V4.5A1.5 1.5 0 005.5 2zM7 6H5.5A1.5 1.5 0 004 7.5 1.5 1.5 0 005.5 9H7V6zm0 3H5.5A1.5 1.5 0 004 10.5v1A1.5 1.5 0 005.5 13 1.5 1.5 0 007 11.5V9zm1-3h1.5A1.5 1.5 0 0011 4.5 1.5 1.5 0 009.5 3H8v3zm1.5 3A1.5 1.5 0 008 7.5 1.5 1.5 0 008 10.5a1.5 1.5 0 001.5-1.5z" />
            <path d="M11.5 10.5l1 1-3 3-.5-1.5 2.5-2.5z" opacity="0.6" />
          </svg>
        ),
      },
      {
        name: 'FigJam',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 2a4 4 0 010 8V8H4a4 4 0 014-4z" />
          </svg>
        ),
      },
      {
        name: 'Miro',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.5 2H9l-3 4-1-4H2.5l2 6-3 6H4l3-4 1 4h2.5l-2-6 3-6z" />
          </svg>
        ),
      },
      {
        name: 'Balsamiq',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <rect x="2" y="2" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 5.5h8M4 8h5M4 10.5h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Adobe Creative Suite',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2h5.5l4.5 7.5V14H9.5L5 6.5V14H2V2zM8.5 14V8.5L14 2h-2.5L8.5 6.5V2H6L8.5 8.5V14z" opacity="0.9" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Design Systems & Docs',
    tools: [
      {
        name: 'Storybook',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.8 1.2L10.5 4H8L9 1.5H3.5C3 1.5 2.5 2 2.5 2.5v11c0 .5.5 1 1 1h9c.5 0 1-.5 1-1V2.5c0-.7-.8-1.4-1.5-1.3l-.2.1zM7 6h4v1H7V6zm0 2.5h4v1H7v-1zM5 6h1v1H5V6zm0 2.5h1v1H5v-1z" />
          </svg>
        ),
      },
      {
        name: 'Notion',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.8 2c-.5.4-.6 1-.6 1.8v8.4c0 .8.1 1.4.6 1.8.4.3.9.3 1.7.3h5.7c.8 0 1.3-.1 1.7-.3.5-.4.6-1 .6-1.8V6.2L9.2 2H5.5c-.8 0-1.3.1-1.7.3zm4.7.9V5.5c0 .4.3.7.7.7H11L8.5 2.9z" />
          </svg>
        ),
      },
      {
        name: 'Confluence',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.2 11.5c-.2.3-.1.7.2.9l3.2 2c.3.2.7.1.9-.2l.2-.4c.2-.3.1-.7-.2-.9L4 11.5c1.5-1.8 3.5-2.8 5.8-2.8 1.3 0 2.5.4 3.5 1l-2.5 1.4c-.3.2-.4.6-.2.9l.2.4c.2.3.6.4.9.2l4-2.3c.3-.2.4-.6.2-.9L13.6 5c-.2-.3-.6-.4-.9-.2l-.4.2c-.3.2-.4.6-.2.9l1.3 2.2C12.2 7.4 11 7 9.8 7 7 7 4.5 8.3 2.8 10.5l-.6 1z" />
          </svg>
        ),
      },
      {
        name: 'Google Sites',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5A6.5 6.5 0 101.5 8 6.5 6.5 0 008 1.5zm0 1.3a5.2 5.2 0 11-5.2 5.2A5.2 5.2 0 018 2.8zm0 1.2a4 4 0 100 8 4 4 0 000-8zm-1 1.5h2v1.5l1.5 1.5-1 1L8 7.5 6.5 9l-1-1 1.5-1.5V5.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Accessibility Tools',
    tools: [
      {
        name: 'axe DevTools',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5L2 5v6l6 3.5 6-3.5V5L8 1.5zm0 1.7l4.5 2.6v5.2L8 13.5l-4.5-2.5V5.8L8 3.2zm-1 2.3v5h2v-5H7zm0 6h2v1.5H7V11.5z" />
          </svg>
        ),
      },
      {
        name: 'ANDI',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="5" r="2" />
            <path d="M5 9.5C5 8.1 6.3 7 8 7s3 1.1 3 2.5V13H5V9.5z" />
            <path d="M2 6l2 1M14 6l-2 1M3 10l2-1M13 10l-2-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Lighthouse',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5l-1 2H4.5l1.2 1-.8 2.5H3.5V8.5h1l.7 4h5.6l.7-4h1V7h-1.4l-.8-2.5 1.2-1H8.9L8 1.5zM7 9.5h2v1.5H7V9.5z" />
          </svg>
        ),
      },
      {
        name: 'WAVE',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 8.5c1-2 2-2 3 0s2 2 3 0 2-2 3 0 1.5 1.5 1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 5.5L8 3l4 2.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Pa11y',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 1.5a4.5 4.5 0 010 9 4.5 4.5 0 010-9zm-.75 1.5v2.25L5.5 8.5l1 1 1.5-1.5V5h-1.75z" />
          </svg>
        ),
      },
      {
        name: 'IBM Equal Access',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 4h12v1.5H2zm0 3h12v1.5H2zm0 3h8v1.5H2z" />
          </svg>
        ),
      },
      {
        name: 'Accessibility Insights',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-2 4.5h4l-.5 4.5H8.5l-.5-2-.5 2H6.5L6 8.5z" />
          </svg>
        ),
      },
      {
        name: 'W3C',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 4l2 8 2-5 2 5 2-8h1.5l1 4 1-4H16v-.5L14 3H2zm0 0" />
          </svg>
        ),
      },
      {
        name: 'NVDA',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 3h10v2H3zM3 7h10l-5 6-5-6zm5 4L5.5 7h5L8 11z" />
          </svg>
        ),
      },
      {
        name: 'VoiceOver',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="6" r="2.5" />
            <path d="M4.5 13c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5H4.5z" />
            <path d="M11.5 4.5c.8.8 1.3 1.9 1.3 3.1M4.5 4.5C3.7 5.3 3.2 6.4 3.2 7.6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Keyboard testing',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <rect x="1.5" y="4" width="13" height="8.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M4 7h1.5M6.5 7H8M9 7h1.5M4 9.5h1M5.5 9.5h1M7 9.5h1M8.5 9.5h1M10 9.5h2M11 7h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Accessibility Collaboration',
    tools: [
      {
        name: 'LevelAccess',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 12.5h12M4 12.5V9m4 3.5V7m4 5.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Evinced',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm-2.5 4h5v1.5h-5V6zm0 2.5h3.5V10H5.5V8.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Engineering & Code-Adjacent',
    tools: [
      {
        name: 'GitHub',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2 5.71 4.79 6.64.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.02-.78-1.02-.64-.43.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.18-.78-3.18-3.45 0-.76.27-1.38.72-1.87-.07-.18-.31-.88.07-1.84 0 0 .58-.19 1.92.72A6.6 6.6 0 018 5.39c.59 0 1.19.08 1.75.23 1.33-.9 1.91-.72 1.91-.72.38.96.14 1.66.07 1.84.45.49.71 1.11.71 1.87 0 2.68-1.63 3.27-3.19 3.44.25.22.47.64.47 1.29v1.91c0 .19.12.41.48.34A6.995 6.995 0 0015 8c0-3.87-3.13-7-7-7z" />
          </svg>
        ),
      },
      {
        name: 'GitHub Desktop',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2 5.71 4.79 6.64.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.02-.78-1.02-.64-.43.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.18-.78-3.18-3.45 0-.76.27-1.38.72-1.87-.07-.18-.31-.88.07-1.84 0 0 .58-.19 1.92.72A6.6 6.6 0 018 5.39c.59 0 1.19.08 1.75.23 1.33-.9 1.91-.72 1.91-.72.38.96.14 1.66.07 1.84.45.49.71 1.11.71 1.87 0 2.68-1.63 3.27-3.19 3.44.25.22.47.64.47 1.29v1.91c0 .19.12.41.48.34A6.995 6.995 0 0015 8c0-3.87-3.13-7-7-7z" />
            <rect x="5.5" y="12" width="5" height="1.2" rx="0.6" />
          </svg>
        ),
      },
      {
        name: 'VS Code',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M14.25 1.5l-4.5 4.19L3.81 1 1.5 2.44l4.56 3.56L1.5 9.56 3.81 11l5.94-4.69 4.5 4.19 1.25-.88V2.38l-1.25-.88zM11 9.5v-3l-2.25 1.5L11 9.5z" />
          </svg>
        ),
      },
      {
        name: 'Cursor',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 2l10 5.5-5 1.5-1.5 5L3 2z" />
          </svg>
        ),
      },
      {
        name: 'Roo',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2C5.24 2 3 4.24 3 7c0 1.85 1 3.46 2.5 4.33V13h5v-1.67C12 10.46 13 8.85 13 7c0-2.76-2.24-5-5-5zm-1.5 8.5v-1h3v1h-3zM6 8.5V7h1.5v1.5H6zm2.5 0V7H10v1.5H8.5z" />
          </svg>
        ),
      },
      {
        name: 'Cline',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 4.5h12M2 8h8M2 11.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M12 9.5l2 2-2 2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Claude Code',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8S4.41 14.5 8 14.5 14.5 11.59 14.5 8 11.59 1.5 8 1.5zm-1.5 4l-3 2.5 3 2.5V10L5 8l2.5-2.5V5.5zm3 0V7.5L12 10l-2.5 2.5V11l3-2.5-3-2.5z" />
          </svg>
        ),
      },
      {
        name: 'Vercel / V0',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2L14.5 13H1.5L8 2z" />
          </svg>
        ),
      },
      {
        name: 'Slack Block Kit',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 2a1.5 1.5 0 00-1.5 1.5c0 .83.67 1.5 1.5 1.5h1.5V3.5A1.5 1.5 0 006 2zm0 4H2.5a1.5 1.5 0 000 3H6a1.5 1.5 0 000-3zm4-4a1.5 1.5 0 000 3h1.5V3.5A1.5 1.5 0 0010 2zm0 4a1.5 1.5 0 000 3h3.5a1.5 1.5 0 000-3H10zm-4 4H4.5a1.5 1.5 0 000 3c.83 0 1.5-.67 1.5-1.5V10zm4 0v1.5c0 .83.67 1.5 1.5 1.5a1.5 1.5 0 000-3H10zm-4 0H2.5a1.5 1.5 0 000 3H6v-3zm4 0h3.5a1.5 1.5 0 000-3H10v3z" />
          </svg>
        ),
      },
      {
        name: 'JSON / YAML',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.5 4C2.7 4 2 4.7 2 5.5v1c0 .6-.4 1-1 1v1c.6 0 1 .4 1 1v1c0 .8.7 1.5 1.5 1.5H4V11h-.5c-.3 0-.5-.2-.5-.5v-1c0-.8-.5-1.5-1.2-1.8C2.5 7.5 3 6.8 3 6v-1c0-.3.2-.5.5-.5H4V3h-.5zM12.5 4H12v1.5h.5c.3 0 .5.2.5.5v1c0 .8.5 1.5 1.2 1.8-.7.2-1.2.9-1.2 1.7v1c0 .3-.2.5-.5.5H12V13h.5c.8 0 1.5-.7 1.5-1.5v-1c0-.6.4-1 1-1V8.5c-.6 0-1-.4-1-1v-1C14 4.7 13.3 4 12.5 4zM7 6.5L5.5 8 7 9.5l1-1L7 7.5l1-1-1-1zm2 0l-1 1 1 1L7.5 10l1 1L10 9.5 8.5 8 10 6.5l-1-1z" />
          </svg>
        ),
      },
      {
        name: 'Loom',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="2.5" />
            <path d="M8 2v2M8 12v2M2 8h2M12 8h2M3.75 3.75l1.42 1.42M10.83 10.83l1.42 1.42M3.75 12.25l1.42-1.42M10.83 5.17l1.42-1.42" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'AI & Governance',
    tools: [
      {
        name: 'NotebookLM',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="2" width="10" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            <path d="M3 5h1M3 8h1M3 11h1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Prompt engineering',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 4.5h12M2 8h8M2 11.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M11.5 9.5l2.5 1.5-2.5 1.5V9.5z" />
          </svg>
        ),
      },
      {
        name: 'Guardrail authoring',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5L2.5 4v4c0 3.3 2.4 5.6 5.5 6.5 3.1-.9 5.5-3.2 5.5-6.5V4L8 1.5zm-1 7.5l-2-2 1-1 1 1 3-3 1 1-4 4z" />
          </svg>
        ),
      },
      {
        name: 'AI UX patterns',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 4h3v3H4zM9 4h3v3H9zM4 9h3v3H4zM9 9h3v3H9z" opacity="0.4" />
            <path d="M5.5 5.5h8M5.5 10.5h8M8 2v12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Project & Ops',
    tools: [
      {
        name: 'Jira',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5L1.5 8l3.25 3.25L8 8l3.25 3.25L14.5 8 8 1.5zM8 10.5l-2.25-2.25L8 6l2.25 2.25L8 10.5z" />
          </svg>
        ),
      },
      {
        name: 'Trello',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <rect x="2" y="2" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="3.5" y="3.5" width="3.5" height="6" rx="0.75" />
            <rect x="9" y="3.5" width="3.5" height="4" rx="0.75" />
          </svg>
        ),
      },
      {
        name: 'Asana',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="5.5" r="2.5" />
            <circle cx="3.5" cy="10" r="2.5" />
            <circle cx="12.5" cy="10" r="2.5" />
          </svg>
        ),
      },
      {
        name: 'Airtable',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 5.5L8 3l6.5 2.5-6.5 2.5L1.5 5.5z" />
            <path d="M8.75 8.5v5L14.5 11V6l-5.75 2.5z" />
            <path d="M7.25 8.5L1.5 6v5l5.75 2.5V8.5z" opacity="0.6" />
          </svg>
        ),
      },
      {
        name: 'Blotato',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2C5.24 2 3 4.24 3 7c0 1.5.6 2.85 1.57 3.83L3 14h4.5l.5-1 .5 1H13l-1.57-3.17A4.97 4.97 0 0013 7c0-2.76-2.24-5-5-5zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          </svg>
        ),
      },
      {
        name: 'Granola',
        icon: (
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 1.5a4.5 4.5 0 010 9 4.5 4.5 0 010-9z" />
            <path d="M6 7.5c.5-1 2.5-1.5 4 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="6.5" cy="6" r="0.75" />
            <circle cx="9.5" cy="6" r="0.75" />
          </svg>
        ),
      },
    ],
  },
]

const principles = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2L3 6v8l7 4 7-4V6l-7-4zm0 2.3l5 2.85v5.7l-5 2.85-5-2.85V7.15L10 4.3z" />
      </svg>
    ),
    title: 'Systems before screens',
    body: 'Structure, ownership, and scale come before any pixel.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2L4 5v5c0 4.1 2.6 7 6 8.4C13.4 17 16 14.1 16 10V5l-6-3zm-1.5 9.5l-2.5-2.5 1.2-1.2 1.3 1.3 3.3-3.3 1.2 1.2-4.5 4.5z" />
      </svg>
    ),
    title: 'Governance is UX',
    body: 'The rules that govern AI and data are a design surface.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <circle cx="10" cy="7" r="3" />
        <path d="M5 17c0-2.76 2.24-5 5-5s5 2.24 5 5H5z" />
        <path d="M13.5 5.5c1 1 1.6 2.4 1.6 3.9M6.5 5.5C5.5 6.5 4.9 7.9 4.9 9.4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Accessibility by default',
    body: 'Not a QA checkbox. A systems-level constraint from day one.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M4 4h12v2H4zM4 9h12v2H4zM4 14h8v2H4z" />
      </svg>
    ),
    title: 'Documentation is design',
    body: 'Undocumented systems rot. Writing is part of the deliverable.',
  },
]

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Hero */}
        <div className={styles.hero}>
          <p className={styles.eyebrow}>How I work</p>
          <h1 className={styles.title}>
            Design is a <span className={styles.gradient}>systems problem.</span>
          </h1>
          <p className={styles.subtitle}>
            I don't start with wireframes. I start with questions about structure, ownership, and scale — then work backward to the interface. Here's how I think.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Q&A */}
        <section className={styles.qaSection} aria-label="Process Q&A">
          {qaItems.map((item, i) => (
            <div
              key={i}
              className={`${styles.qaItem} ${openIndex === i ? styles.open : ''}`}
            >
              <button
                className={styles.qaButton}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className={styles.qaLeft}>
                  <span className={styles.qaTag}>{item.tag}</span>
                  <span className={styles.qaQuestion}>{item.question}</span>
                </span>
                <span className={styles.qaChevron} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className={styles.qaAnswer} hidden={openIndex !== i}>
                {item.answer}
              </div>
            </div>
          ))}
        </section>

        <div className={styles.divider} />

        {/* Principles */}
        <section className={styles.principlesSection} aria-label="Core principles">
          <p className={styles.sectionLabel}>Core principles</p>
          <div className={styles.principlesGrid}>
            {principles.map((p, i) => (
              <div key={i} className={styles.principleCard}>
                <div className={styles.principleIcon}>{p.icon}</div>
                <div className={styles.principleTitle}>{p.title}</div>
                <div className={styles.principleBody}>{p.body}</div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Tools */}
        <section className={styles.toolsSection} aria-label="Tools and technologies">
          <p className={styles.sectionLabel}>Toolbox</p>
          {toolCategories.map((cat, ci) => (
            <div key={ci} className={styles.toolCategory}>
              <p className={styles.toolCatLabel}>{cat.label}</p>
              <div className={styles.toolGrid}>
                {cat.tools.map((tool, ti) => (
                  <div key={ti} className={styles.chip}>
                    <span className={styles.chipIcon}>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <strong>Want to see this in practice?</strong>
            <span>Each case study documents the system, not just the outcome.</span>
          </div>
          <Link to="/work" className={styles.ctaBtn}>View case studies</Link>
        </div>

      </div>
    </main>
  )
}
