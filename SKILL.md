---
name: industry-bottleneck-hunter
description: Analyze any industry to identify rising sub-chains, find the "Strait of Hormuz" bottleneck links, and discover small-cap companies with monopoly core technology.
author: Alex Zhang <yuanhao.zhang@gmail.com>
---

# industry-bottleneck-hunter

> Cross-agent skill for Claude Code and OpenAI Codex CLI.

## Description

Analyze any industry to identify rising sub-chains, find the "Strait of Hormuz" bottleneck links, and discover small-cap companies with monopoly core technology.

## When to Use

Use this skill when:
- Researching a new industry for investment, business entry, or competitive intelligence
- Looking for "hidden champion" companies in overlooked supply chain segments
- Trying to understand where the real pricing power lies in a value chain
- Evaluating which upstream bottleneck could disrupt an entire downstream industry
- Building an industry map that exposes structural vulnerabilities and opportunities

## Core Capabilities

1. **Industry Lifecycle Positioning** - Determine which sub-sectors are in ascent vs. maturity vs. decline
2. **Value Chain Decomposition** - Map the complete chain from raw materials to end consumer
3. **Bottleneck Identification** - Pinpoint the "Strait of Hormuz" links that control flow and pricing
4. **Hidden Champion Screening** - Find small-output companies that hold monopoly or oligopoly positions in critical technology nodes
5. **Moat Assessment** - Evaluate technology barriers, switching costs, and substitution risks for each bottleneck candidate

## Analytical Framework

### The "Strait of Hormuz" Concept

In global energy, the Strait of Hormuz is a narrow waterway through which ~20% of world oil passes. It is small in physical size but irreplaceable in systemic importance. Every industry has equivalent bottlenecks:

| Trait | Meaning in Supply Chain Context |
|-------|--------------------------------|
| **Narrow channel** | Few or single suppliers globally |
| **High throughput dependency** | Large downstream value depends on this node |
| **No viable alternative route** | Switching cost or substitution is prohibitively expensive |
| **Easy to control** | Dominant player can restrict supply or raise prices |
| **Disproportionate impact** | A small disruption cascades into large downstream losses |

### Screening Criteria for Bottleneck Segments

Apply these five filters sequentially:

1. **Concentration Ratio** — Do the top 3 players control >70% global supply?
2. **Technology Barrier** — Does production require >5 years of R&D or proprietary know-how?
3. **Substitution Difficulty** — Would switching suppliers require redesigning downstream products?
4. **Capacity Inelasticity** — Can supply be scaled up quickly in response to demand? (Desired answer: No)
5. **Value Capture** — Does this node capture a high margin despite representing a small % of final product cost?

### Screening Criteria for Target Companies

Within each bottleneck segment, rank companies on:

1. **Output Scale** — Annual revenue or production volume is small relative to downstream market size (prefer <5% of chain value)
2. **Technology Monopoly** — Holds core patents, trade secrets, or process IP that competitors cannot replicate within 3-5 years
3. **Customer Lock-in** — Long qualification cycles, integrated into customer product design, or sole-source contracts
4. **Pricing Power** — Demonstrated ability to raise prices without significant volume loss
5. **Defensibility** — Network effects, learning curve advantages, or regulatory barriers protect position

## Workflow

### Phase 1: Industry Selection and Lifecycle Mapping

Determine the user's target industry. If unspecified, ask:
- "Which industry do you want to analyze?" (e.g., AI, EV batteries, semiconductors, biotech, robotics, commercial aerospace)
- "Are you focused on a specific geography or global markets?"
- "What is your goal — investment, business entry, supply chain security, or competitive intelligence?"

Once the industry is identified, map its major sub-sectors and classify each by lifecycle stage:
- **Introduction** — Early R&D, pre-commercialization
- **Growth/Rising** — Rapid demand expansion, capacity building, new entrants
- **Maturity** — Stable demand, consolidation, margin compression
- **Decline** — Shrinking demand, substitution threats

Focus analysis on sub-sectors in the **Growth/Rising** phase.

### Phase 2: Value Chain Decomposition

For each rising sub-sector, decompose the value chain into 4-6 major links. Use this template:

```
Sub-Sector: [Name]
│
├── Upstream
│   ├── Raw Materials
│   ├── Refining/Purification
│   └── Key Components
│
├── Midstream
│   ├── Core Manufacturing Equipment
│   ├── Process Technology
│   └── Quality Control/Testing
│
└── Downstream
    ├── Integration/Assembly
    ├── Distribution
    └── End Applications
```

For each link, estimate:
- Number of global suppliers (concentration)
- Typical gross margin range
- Capital intensity
- Technology maturity level

### Phase 3: Bottleneck Identification (The "Strait of Hormuz" Scan)

Apply the five bottleneck screening criteria to each value chain link. Score each link 1-5 on each criterion. Links scoring 18+ out of 25 are candidate bottlenecks.

For each candidate, ask:
- "If this link were blocked for 6 months, what % of downstream output would halt?"
- "How long would it take a new entrant to achieve commercial viability?"
- "What is the minimum viable scale, and how much capital is required to reach it?"

Narrow to 1-3 primary bottlenecks per sub-sector.

### Phase 4: Hidden Champion Discovery

Within each bottleneck link, identify companies that match the target profile:

**Search strategy:**
1. Start with industry association member lists and conference speaker rosters
2. Review patent filings in the bottleneck technology area (top assignees)
3. Check semiconductor/equipment/materials industry reports for "niche player" mentions
4. Look for companies that are sole-source suppliers to major OEMs
5. Examine M&A activity — who are the acquirees in this space?

**For each candidate company, compile:**
- Company name and headquarters
- Estimated annual revenue and employee count
- Core product/technology description
- Key patents or proprietary processes
- Major customers (if public)
- Market share estimate in bottleneck segment
- Years in business and founder/CEO background
- Recent financial trends (revenue growth, margin expansion)
- Risk factors (customer concentration, regulatory exposure, technology obsolescence)

### Phase 5: Synthesis and Output

Produce a structured report:

```markdown
# Industry Bottleneck Analysis: [Industry Name]

## Executive Summary
- Industry: [Name]
- Analysis Date: [Date]
- Key Finding: [1-2 sentence takeaway]

## Rising Sub-Sectors
| Sub-Sector | Lifecycle Stage | Growth Driver | Key Risk |
|------------|----------------|---------------|----------|
| [Name] | Growth | [Driver] | [Risk] |

## Value Chain Maps
### [Sub-Sector 1]
[Tree diagram]

### Bottleneck Links
| Link | Concentration | Tech Barrier | Substitution Risk | Capacity Elasticity | Value Capture | Total Score |
|------|--------------|--------------|-------------------|---------------------|---------------|-------------|
| [Link] | 5 | 5 | 4 | 2 | 5 | 21 |

## Hidden Champions
### [Company Name]
- **Segment:** [Bottleneck link]
- **Revenue:** [Estimate]
- **Employees:** [Count]
- **Core Tech:** [Description]
- **Market Position:** [Oligopoly/Monopoly/Dominant]
- **Key Customers:** [Names]
- **Moat Strength:** [High/Medium/Low] — [Explanation]
- **Investment Thesis:** [Why this company matters]

## Key Risks to Monitor
1. [Risk 1]
2. [Risk 2]
3. [Risk 3]

## Opportunity Assessment
- **Highest conviction bottleneck:** [Link]
- **Most attractive hidden champion:** [Company]
- **Timeline to watch:** [When supply/demand imbalance may peak]
```

## Quality Standards

- Every bottleneck claim must include quantitative justification (market share data, capacity numbers, or margin evidence)
- Distinguish between "hard to enter due to capital" vs. "hard to enter due to technology" — only the latter creates durable moats
- Flag when analysis is limited by information availability (private companies, undisclosed contracts)
- Never assume monopoly status without evidence of customer lock-in or switching costs
- For Chinese companies, check whether technology is indigenous or licensed — licensed tech does not constitute a moat

## Limitations
- This skill provides analytical structure, not real-time market data. Verify all financial figures against primary sources before making investment decisions.
- Private company revenue and market share estimates may be inaccurate; treat them as directional rather than precise.
- Technology moats erode over time; reassess at least annually for fast-moving industries.
- Use this skill only when the user has specified an industry or accepted a proposed industry. Do not proceed with generic examples if the user has a specific target.
