---
name: industry-bottleneck-hunter
description: Use when the user wants to map supply-chain chokepoints and hidden-champion companies in an industry. Triggers — "bottleneck analysis", "supply chain chokepoint", "Strait of Hormuz", "hidden champion", "moat scan", or decomposing a company's business lines before industry analysis.
metadata:
  author: Alex Zhang <yuanhao.zhang@gmail.com>
---

# industry-bottleneck-hunter

> Find the chokepoints and hidden champions in any industry supply chain.

## Leading Concepts

- **Chokepoint (Strait-of-Hormuz link):** A narrow, irreplaceable value-chain node whose disruption cascades downstream. It passes five tests: few suppliers, high downstream dependency, hard to substitute, inelastic capacity, and high value capture.
- **Hidden champion:** A small-output company that dominates a chokepoint through proprietary core technology.
- **Moat scan:** The legwork that proves a hidden champion's defensibility — patents, customer lock-in, regulatory licenses, and capital signals.

## Workflow

### Phase 0: Business-Line Decomposition (conditional)

**Trigger:** The user gives a company name or stock code instead of an industry.

**Steps:**
1. Map every material segment: >5% revenue, high gross margin, or strategic pipeline value.
2. Present a summary table: Segment | Revenue Share | Growth | Margin | Lifecycle | Moat Signal.
3. Ask the user which segment to analyze, or offer to run the strongest-bottleneck segment by default.

**Completion:** The user has confirmed the target segment, or you have explicit permission to proceed with the default.

### Phase 1: Industry & Lifecycle Mapping

**Steps:**
1. Confirm target industry, geography, and goal: investment, business entry, supply-chain security, or competitive intelligence.
2. List major sub-sectors and classify each as Introduction, Growth, Maturity, or Decline.
3. Select Growth/Rising sub-sectors for deeper analysis.

**Completion:** You have 1–3 rising sub-sectors and the user's goal is recorded.

### Phase 2: Value-Chain Decomposition

**Steps:**
1. For each rising sub-sector, map upstream → midstream → downstream in 4–6 major links.
2. For each link, estimate supplier concentration, gross margin, capital intensity, and technology maturity.

**Completion:** Each rising sub-sector has a value-chain tree with concentration and margin notes on every link.

### Phase 3: Chokepoint Scan

**Steps:**
1. Score each link 1–5 on the five chokepoint criteria in `references/chokepoint-criteria.md`.
2. Mark links scoring ≥18/25 as candidate chokepoints.
3. For each candidate, answer: (a) % of downstream output that would halt if blocked for 6 months; (b) new-entrant time-to-viability; (c) minimum viable scale and required capital.
4. Narrow to 1–3 primary chokepoints per sub-sector.

**Completion:** You have 1–3 ranked chokepoints per rising sub-sector, each with quantitative justification.

### Phase 4: Hidden-Champion Discovery

**Steps:**
1. Search within each chokepoint for candidate companies: industry associations, patents, niche reports, sole-source OEM suppliers, and M&A activity.
2. Compile a profile for each candidate: revenue, employees, core tech, key patents, major customers, market share, financial trend, and risks.
3. Run the implicit-intelligence moat scan from `references/implicit-intelligence-guide.md` across Technology & Patents, Customers & Supply Chain, and Regulatory & Capital Signals.
4. Update the verdict: Strong / Plausible / Reject.

**Completion:** You have 1–5 candidate companies per chokepoint, each with an implicit-intelligence scorecard and a final verdict.

### Phase 5: Synthesis

**Steps:**
1. Produce the structured report using `references/output-template.md`.
2. State the highest-conviction chokepoint, the most attractive hidden champion, and the timeline to watch.
3. Flag evidence gaps and confidence levels explicitly.

**Completion:** A complete report is returned to the user and every claim has a source or an explicit confidence label.

## Quality Gates

Before finalizing, confirm:
- [ ] Every chokepoint claim has quantitative support: market share, capacity, or margin.
- [ ] Every hidden-champion claim has at least one piece of implicit evidence.
- [ ] Technology moats are distinguished from capital moats.
- [ ] Chinese companies are checked for indigenous versus licensed technology.
- [ ] Evidence gaps and private-company estimates are labeled as directional.

## Limitations

- This skill provides analytical structure, not real-time data. Verify financials against primary sources before acting.
- Private-company estimates are directional.
- Moats erode; reassess annually for fast-moving industries.
