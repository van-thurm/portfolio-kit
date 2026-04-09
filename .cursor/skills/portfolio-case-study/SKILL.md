---
name: portfolio-case-study
description: Generate, format, and review portfolio case studies optimized for design leadership hiring. Use when creating case study content, reviewing draft case studies, extracting metrics from project history, or formatting portfolio narratives. Triggers on requests to write case studies, review portfolio content, extract impact metrics, draft project descriptions, or improve portfolio copy. Adapts product design case study conventions for design ops, creative technology, and design leadership roles.
---

# Portfolio Case Study Skill

Generate and review portfolio case studies using patterns derived from competitive analysis of designers hired at top-tier enterprise SaaS and tech companies.

## Table of Contents

**Workflow**
- [Modes](#modes)
- [Mode 1: Intake + Draft](#mode-1-intake--draft)
- [Mode 2: Review](#mode-2-review)
- [Mode 3: Refine](#mode-3-refine)

**Pattern Library**
- [Identity Statement Patterns](#identity-statement-patterns)
- [Case Study Anatomy](#case-study-anatomy)
- [Metrics Extraction by Role Type](#metrics-extraction-by-role-type)
- [Impact Calculator](#impact-calculator)
- [Professional Signals](#professional-signals)
- [Voice and Tone](#voice-and-tone)
- [Portfolio Architecture](#portfolio-architecture)
- [Social Proof Patterns](#social-proof-patterns)
- [Strategic Absence Checklist](#strategic-absence-checklist)
- [Role Adaptation: Design Ops & Creative Technology](#role-adaptation-design-ops--creative-technology)
- [Quality Bar](#quality-bar)

## Modes

This skill operates in three modes:

1. **Intake + Draft** -- Gather raw material from the user, extract metrics, produce a structured draft
2. **Review** -- Evaluate existing case study content against the pattern library
3. **Refine** -- Take a draft and sharpen it against specific criteria

Determine the mode from user intent. If unclear, ask.

## Mode 1: Intake + Draft

### Step 1: Context Gathering

Use `AskQuestion` to collect project fundamentals. Ask in batches of 3-4 questions max. Start with:

**Batch 1 -- Project Identity:**
- What was the project/initiative? (name and one-line description)
- What was your role and title?
- Who was on the team? (roles and approximate count)
- What was the timeline?

**Batch 2 -- Problem and Stakes:**
- What business problem or organizational gap did this address?
- Who felt the pain? (users, teams, leadership, customers)
- What was happening before you got involved? (the "before" state)
- What would have happened if nobody solved this?

**Batch 3 -- What You Did:**
- What were the 2-3 most important decisions you made?
- What did you build, ship, establish, or change?
- Where did you face resistance or constraints, and how did you navigate them?
- Who did you need to align or influence?

### Step 2: Professional Signals

Before metrics, surface the signals that hiring managers read between the lines for. Ask using `AskQuestion`:

**Scope and ownership:**
- What parts of this did YOU specifically own versus what the team owned? (Aim for 1-2 things only you could speak to.)
- Did you inherit an existing system or build from scratch? (Signals context comfort.)

**Operating mode:**
- Were you leading, executing, or both? Did that shift over the project? (Range signal.)
- How much context existed when you started -- clear brief, rough direction, or ambiguity?

**Velocity:**
- What's the tightest timeline in this story? Any "shipped in X weeks" moments?
- Were there phases -- a fast initial push then iteration, or steady build?

Weave these into the draft as exposition, not as a separate section. See [Professional Signals](#professional-signals) for guidance on how to surface each signal.

### Step 3: Impact Calculator

Run a structured metrics interview using `AskQuestion` with multiple-choice options for each question. Read [Metrics Extraction by Role Type](#metrics-extraction-by-role-type) and [Impact Calculator](#impact-calculator) before asking.

The goal: turn every qualitative claim into a data-backed statement the reader can scan. Use `AskQuestion` to walk through each impact area with concrete options the user can select from -- never open-ended text prompts. Build the multiple-choice options from reasonable ranges based on the context gathered in Steps 1-2. Every question should have 3-5 concrete options plus a "Let me give you different numbers" escape hatch.

### Step 4: Draft Generation

Structure the case study using [Case Study Anatomy](#case-study-anatomy) and follow [Voice and Tone](#voice-and-tone) before drafting.

**Required elements:**
1. Project header (title, role, team, timeline, tags)
2. Overview (2-3 sentences: what you joined, what you did, what changed)
3. Problem framing (business context, not feature description)
4. 2-4 solution sections (each: decision framed as a response to a challenge)
5. Outcomes (metrics, proof, or credible before/after)

**Length targets:**
- Overview: 2-3 sentences
- Problem section: 3-5 sentences
- Each solution section: 4-8 sentences
- Outcome section: 2-4 sentences with hard numbers
- Total case study: 600-1200 words

### Step 5: Adaptation Check

After drafting, verify the content against the user's role type. See [Role Adaptation](#role-adaptation-design-ops--creative-technology).

For design ops / creative technology / design leadership:
- Reframe any "I designed [feature]" language toward "I built [system/process/tool]" or "I established [practice/framework]"
- Ensure metrics use operational vocabulary (adoption, velocity, scale, consolidation) not just product metrics (conversion, retention)
- Check that cross-functional influence is visible -- design ops lives at intersections
- Verify that the story shows systems thinking, not just execution

## Mode 2: Review

Read the full pattern library below, then evaluate the content against each pattern category. Produce a structured review:

| Category | Rating | Notes |
|----------|--------|-------|
| Identity statement | strong / adequate / weak | ... |
| Problem framing | strong / adequate / weak | ... |
| Voice and tone | strong / adequate / weak | ... |
| Metrics and proof | strong / adequate / weak | ... |
| Professional signals | strong / adequate / weak | ... |
| Structure and scanning | strong / adequate / weak | ... |
| Strategic absence | strong / adequate / weak | ... |
| Role-appropriate framing | strong / adequate / weak | ... |

For each "adequate" or "weak" rating, provide a specific rewrite suggestion with before/after examples. Use the [Strategic Absence Checklist](#strategic-absence-checklist) and [Vanity Metrics vs Impact Metrics](#vanity-metrics-vs-impact-metrics) sections to flag anti-patterns.

## Mode 3: Refine

Take a specific piece of feedback or a weak area from a review and produce targeted rewrites. Show before/after for each change. Preserve the user's voice -- improve structure and impact, don't homogenize.

---

# Pattern Library

Patterns derived from competitive analysis of portfolios by designers hired at top-tier enterprise SaaS and big tech companies.

## Identity Statement Patterns

Formula: **Name + Title/Current Context + Domain + Value Claim** in 1-3 sentences.

Strong examples:
- "Product designer with 11 years of experience turning ideas into high-impact solutions for fleet management and IoT." -- Domain-specific, states value, no filler.
- "Sr. Product Designer at [Company], FinTech. Supporting payments, lending, and financial services across web and mobile." -- Title, company, domain, scope in one breath.
- "Design ops leader and creative technologist building the systems, tools, and practices that make design teams fast and focused." -- Names the operating model, not just the title.

What to avoid:
- Design philosophy manifestos ("I believe in human-centered design")
- Generic statements that could apply to any designer
- Listing tools or methodologies

For design ops / creative technology: Replace "I design X" with the systems-level equivalent. Name what you enable, build, or operate -- not what you pixel-push.

## Case Study Anatomy

Every strong case study follows: **Business Context -> Discovery/Insight -> Design Decision -> Outcome/Proof**

This is NOT the design process walkthrough (empathize -> define -> ideate -> prototype -> test). Skip the ritual. Go straight to what was learned and what was done about it.

### Section 1: Project Header

Required metadata:
- Project/company name
- Role title
- Team composition (roles and count)
- Timeline
- Skill/contribution tags (e.g., "0->1 Product Design", "Design System", "Systems Thinking")

### Section 2: Overview

2-3 sentences. What you joined, what you did, what changed. This is the movie trailer -- if it resonates, they read on.

### Section 3: Problem Framing

Frame the problem in business terms, not design terms.

### Section 4: Solution Sections (2-4)

Each section header should read as a strategic decision, not a feature name.

### Section 5: Outcomes

Hard numbers, business language. End on proof, not reflection.

## Metrics Extraction by Role Type

### Product / UX Design Metrics
- Revenue impact (ARR, MRR, conversion lift, upsell rate)
- User behavior (activation rate, retention, NPS, repeat engagement, support volume)
- Efficiency (time-to-task, error rates, support cost reduction, steps to completion)
- Scale (users, transactions, markets, geographic reach)

### Design Ops Metrics
- Team velocity (time from concept to ship, review cycle time)
- Tool/system adoption (% of team using the system, components adopted)
- Process improvements (steps eliminated, handoff time reduced)
- Scale enabled (team growth supported, products covered, orgs served)
- Consolidation (tools replaced, redundancies eliminated)
- Quality consistency (design debt reduced, audit pass rates)
- Onboarding speed (time for new designer to first contribution)

### Creative Technology Metrics
- Systems built (prototypes, tools, pipelines, frameworks)
- Engineering time saved or redirected
- Production throughput (assets per sprint, review turnaround)
- Cross-functional adoption (teams using what you built)

### Design Leadership Metrics
- Team scaling (hired X designers, grew team from N to M)
- Retention and attrition
- Culture/practice (rituals established, critique cadence)
- Organizational influence (stakeholders aligned, cross-functional partnerships)

## Impact Calculator

Walk users through formulas to generate portfolio-ready metrics from raw project facts. See Mode 1, Step 3.

## Professional Signals

These signals are read between the lines by hiring managers. They should emerge through exposition, not in a separate "my role" table.

- Individual vs Team Scope: Make it clear what YOU specifically owned without diminishing the team.
- Timeline as Velocity Signal: Use timeline as a narrative element that signals how fast you move.
- Context Comfort: Signal whether you ramped into complexity or built from zero.
- Leading vs Executing Range: Show both direction-setting and hands-on execution.

## Voice and Tone

### Verb Selection
Strong ownership verbs: led, designed, built, shipped, established, shaped, defined, drove, launched, created, facilitated, scaled, consolidated

### I vs We
- "I" for: decisions, design direction, strategy, personal contributions
- "We" for: launches, team outcomes, company results, shared discoveries

### Register
Professional but human. Not academic, not casual. Confident without arrogance. Let results speak.

## Portfolio Architecture

- **Project-based**: Homepage lists projects. Each is a self-contained case study.
- **Competency-based**: Organized by what you do, not by project. Strong for design ops / leadership.
- **Hybrid**: Homepage descriptions function as mini-narratives before click-through.

## Strategic Absence Checklist

Content that should NOT appear:
- Process tourism ("First I conducted 12 interviews...")
- Tools and technology lists without strategic context
- Generic design philosophy statements
- Comprehensive catalogs of everything touched
- Apologies or hedging
- "I learned a lot" conclusions
- Vanity metrics in stat rows (see below)

### Vanity Metrics vs Impact Metrics

Reserve stat rows for numbers that would survive a "so what?" from a skeptical VP.

| Type | Example | Verdict |
|---|---|---|
| Vanity | "70 designers attended" | How many attend anything? What changed? |
| Impact | "~1,250 designer-hours reclaimed annually" | Quantified outcome with ongoing business value |
| Impact | "7->1 icon libraries consolidated" | Before/after that implies time savings |

## Role Adaptation: Design Ops & Creative Technology

| Product Design Pattern | Design Ops / Creative Tech Adaptation |
|---|---|
| "I designed [feature]" | "I built [system/process/tool]" |
| Conversion / retention metrics | Adoption rates, velocity improvements, time savings |
| UI screenshots | System diagrams, workflow visualizations, before/after process maps |
| "Shipped to N users" | "Adopted by N teams" or "Enabled M designers" |

## Quality Bar

Content that passed as "fine" in 2023 now reads as low-effort. The portfolio itself is evidence of the same craft the designer claims to bring to work.
