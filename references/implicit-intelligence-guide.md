# Implicit Intelligence Reconnaissance Guide

## Purpose

Hidden champions are often small, private, or under-covered. Public financials and market-share estimates are rarely enough to prove a durable moat. This guide provides a structured method to dig out **non-obvious but decisive evidence** about a company's real competitive position.

Use this guide as an extension of **Phase 4: Hidden Champion Discovery** in `industry-bottleneck-hunter`.

---

## When to Use

After you have identified a bottleneck segment and a short list of candidate companies, run an implicit-intelligence pass **before** concluding that a company is a hidden champion.

---

## Research Principles

1. **Evidence over narrative** — Every claim about moat strength must be backed by at least one primary or high-credibility secondary source.
2. **Triangulate** — Never rely on a single source. Use patent databases, trade press, regulatory filings, customer disclosures, and conference materials together.
3. **Disprove bias** — Actively look for evidence that would refute the hidden-champion thesis (licensed technology, customer concentration risk, regulatory warning letters, capacity constraints).
4. **Time-box** — For each candidate, allocate 10–15 minutes of focused search. If critical data remains unavailable, flag the limitation explicitly.

---

## Priority Dimension 1: Technology & Patents

### Why it matters
- Validates whether the company owns the bottleneck technology or merely resells/licensed it.
- Reveals the breadth and defensibility of the patent estate.
- Shows whether competitors can design around the core IP within 3–5 years.

### Key signals
- Number and geography of patent families covering the bottleneck technology.
- Patent citations (forward/backward) and remaining patent life.
- Whether the core process is patented or protected as trade secret.
- Academic papers, conference presentations, or white papers authored by the company's technical team.
- Evidence of indigenous R&D vs. licensed-in technology.

### Primary sources
- CNIPA (China National Intellectual Property Administration)
- USPTO, EPO, WIPO patent databases
- Google Patents / Lens.org
- Company prospectus / annual report R&D section
- University/research institute co-authorship records

### Query templates
```
"{company_name}" patent "{technology_keyword}"
"{company_name}" "{technology_keyword}" 发明专利
assignee:"{company_name}" AND ({technology_keyword})
"{founder_name}" "{technology_keyword}" paper
"{company_name}" 技术来源 授权
```

### Evaluation rubric
| Score | Interpretation |
|---|---|
| Strong | Owns >3 patent families in bottleneck technology; patents cited by competitors; core process protected; indigenous R&D |
| Medium | Holds key patents but narrow scope; some licensed technology; design-around risk visible |
| Weak | No relevant patents; technology clearly licensed; patent claims easy to circumvent |

### Red flags
- Core patents assigned to a university or third party with only an exclusive license.
- Patent families filed only in China, leaving global markets exposed.
- Key inventors have left the company.
- Technology described as "imported" or "co-developed" without clear IP ownership.

---

## Priority Dimension 2: Customers & Supply Chain

### Why it matters
- Customer lock-in is the most reliable proof of pricing power.
- Sole-source or long-term supply relationships are strong evidence of bottleneck status.
- Customer concentration risk can also be a hidden vulnerability.

### Key signals
- Named as sole/primary supplier in customer annual reports or investor materials.
- Appears on OEM approved vendor lists or supplier award lists.
- Long qualification cycle described in investor calls or industry reports.
- Customer switching costs embedded in product design (customized spec, co-developed tooling).
- Procurement notices or tender wins from downstream champions.

### Primary sources
- Downstream OEM annual reports (supplier lists, risk disclosures)
- Industry association member directories and conference speaker rosters
- Government procurement / tender databases
- Trade journals and supply-chain newsletters
- LinkedIn / company newsroom customer case studies

### Query templates
```
"{company_name}" supplier "{downstream_oem}"
"{company_name}" 独家供应商
"{company_name}" 客户 采购
"{company_name}" 战略合作 框架协议
"{downstream_oem}" 供应商名单
```

### Evaluation rubric
| Score | Interpretation |
|---|---|
| Strong | Sole supplier to >1 downstream champion; multi-year contracts; co-development visible; high switching cost |
| Medium | Approved vendor among 2–3 suppliers; some long-term relationships; moderate switching cost |
| Weak | Commodity supplier with no named customers; price-taker; easy substitution |

### Red flags
- Top customer accounts for >50% of revenue and is actively dual-sourcing.
- Customer is building in-house capability.
- Relationship based on a single tender with no follow-on orders.
- No evidence of technical integration; pure spot-market purchasing.

---

## Priority Dimension 3: Regulatory & Capital Signals

### Why it matters
- Regulatory approvals (GMP, FDA, NMPA, EMA, ITAR, export licenses) create legal barriers to entry.
- Capital signals (M&A, strategic investment, expansion capex) reveal where smart money and insiders are placing bets.
- Negative signals (warning letters, license revocation, environmental penalties) can invalidate a moat overnight.

### Key signals
- Number and scope of regulatory licenses relevant to the bottleneck segment.
- Recent facility expansions, capex plans, or government project approvals.
- Strategic investors / state-backed funds / downstream champions taking equity stakes.
- M&A activity: company as acquirer or target.
- Negative: warning letters, product recalls, antitrust actions, environmental violations.

### Primary sources
- NMPA / FDA / EMA approval databases
- Company announcements and prospectus
- Local government environmental and land-use filings
- Equity-change filings (e.g., 权益变动书 in China)
- M&A databases (PitchBook, 36Kr, 投中网)
- Industry newsletters tracking funding rounds

### Query templates
```
"{company_name}" FDA approval
"{company_name}" NMPA 获批
"{company_name}" 环评 扩建
"{company_name}" 融资 战略投资
"{company_name}" 收购 并购
"{company_name}" 警示函 召回
```

### Evaluation rubric
| Score | Interpretation |
|---|---|
| Strong | Holds scarce regulatory licenses; recent capacity expansion backed by strategic investors; no material violations |
| Medium | Basic licenses in place; some funding or M&A activity; minor compliance issues |
| Weak | Missing key licenses; regulatory warning letters; no strategic capital interest |

### Red flags
- Core product subject to regulatory investigation or recall.
- Facility expansion delayed or rejected by regulators.
- Major shareholder divesting; no strategic investors.
- History of environmental or safety violations in a heavily regulated segment.

---

## Workflow Integration

### Step A: Parallel reconnaissance with sub-agents
For each candidate company, spawn 2–3 focused research agents in parallel:

1. **Tech/Patent Agent** — Search patents, papers, R&D pipeline, technology provenance.
2. **Customer/Supply-Chain Agent** — Search customer disclosures, vendor lists, tenders, partnerships.
3. **Regulatory/Capital Agent** — Search approvals, licenses, capex, funding, M&A, violations.

Each agent returns:
- Top 3–5 evidence bullets with URLs or source names.
- A confidence rating (High / Medium / Low).
- A moat-support score (+1, 0, -1) for the dimension.

### Step B: Synthesize and score
Combine the agent outputs into a single **Implicit Intelligence Scorecard**:

```markdown
### {Company Name} — Implicit Intelligence Scorecard

| Dimension | Score | Key Evidence | Confidence |
|---|---|---|---|
| Technology & Patents | +1 / 0 / -1 | ... | High/Medium/Low |
| Customers & Supply Chain | +1 / 0 / -1 | ... | High/Medium/Low |
| Regulatory & Capital Signals | +1 / 0 / -1 | ... | High/Medium/Low |
| **Net Score** | **+3 to -3** | — | — |
```

### Step C: Update the hidden-champion verdict
- **Net +2 to +3**: Strong hidden-champion candidate. Surface in final report.
- **Net 0 to +1**: Plausible but needs verification. Flag as "unconfirmed" in report.
- **Net negative**: Reject or downgrade. Explain which dimension undermines the thesis.

---

## Output Template

Add this block to the company's hidden-champion profile in the final report:

```markdown
#### Implicit Intelligence
- **Patent / Tech Evidence:** [e.g., 12 patent families in XXX; core inventor remains CTO]
- **Customer / Supply-Chain Evidence:** [e.g., Sole source to TSMC for XXX; 5-year contract]
- **Regulatory / Capital Evidence:** [e.g., FDA approved; strategic investment by XXX Fund]
- **Contradictory Evidence:** [e.g., Top customer building in-house; patent only covers China]
- **Overall Implicit Verdict:** [Strong / Medium / Weak / Unconfirmed]
```

---

## Quality Gates

Before finalizing any hidden-champion claim, confirm:

- [ ] At least one piece of implicit evidence supports the moat thesis.
- [ ] No major contradictory evidence was ignored.
- [ ] All evidence is attributed to a named source.
- [ ] Confidence level is stated when evidence is indirect.
- [ ] Private-company estimates are labeled as directional.

---

## Limitations

- Private companies, especially in China, often disclose far less than listed firms.
- Customer names may be redacted in contracts or procurement records.
- Patent claims require technical expertise to interpret; a patent count alone is not proof of moat.
- Regulatory and M&A data can lag by weeks or months.
- Cross-language sources may introduce translation ambiguity. Verify key claims with original-language documents when possible.
