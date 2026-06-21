# industry-bottleneck-hunter

A Claude Code skill for identifying supply chain bottlenecks and hidden champion companies in any industry.

## What It Does

This skill applies a systematic framework to analyze industries through the lens of **structural bottlenecks** — the narrow but critical points in a value chain that control pricing, output, and competitive dynamics. It then identifies **hidden champions**: small-output companies that hold monopoly or oligopoly positions in these bottleneck segments through proprietary core technology.

Inspired by the geopolitical concept of the Strait of Hormuz (a narrow waterway controlling 20% of global oil flow), this skill helps you find the equivalent "chokepoints" in any industry's supply chain.

## When to Use

- **Investment research**: Find overlooked companies with durable pricing power
- **Business strategy**: Understand where real leverage exists in your industry's supply chain
- **Supply chain security**: Identify single points of failure that could disrupt operations
- **Market entry**: Determine which upstream or midstream segments are most defensible
- **Competitive intelligence**: Map who controls the critical technology nodes

## How It Works

The skill guides through a 5-phase analytical workflow:

1. **Industry Selection** — Map sub-sectors by lifecycle stage and focus on rising segments
2. **Value Chain Decomposition** — Break the chain into upstream, midstream, and downstream links
3. **Bottleneck Scanning** — Score each link on concentration, technology barriers, substitution difficulty, capacity elasticity, and value capture
4. **Hidden Champion Discovery** — Search within bottleneck links for small companies with technology monopolies
5. **Synthesis** — Produce a structured report with actionable findings

## Installation

### Option 1: via `npx` (Recommended — no clone needed)

```bash
npx industry-bottleneck-hunter
```

Or install directly from the GitHub repository:

```bash
npx github:jojogh/industry-bottleneck-hunter
```

This will copy the skill into `~/.claude/skills/industry-bottleneck-hunter/`.

### Option 2: via `npm`

```bash
npm install -g industry-bottleneck-hunter
industry-bottleneck-hunter
```

### Option 3: Manual / symlink

```bash
# Clone the repo
git clone https://github.com/jojogh/industry-bottleneck-hunter.git

# Symlink into your global Claude Code skills directory
ln -s "$(pwd)/industry-bottleneck-hunter" ~/.claude/skills/industry-bottleneck-hunter
```

### Project-Local

Copy the skill directory into your project's `.claude/skills/` folder.

## Usage

Activate by mentioning the skill's trigger concepts in your prompt:

```
Analyze the AI chip industry and find the bottleneck links
```

```
Find the "Strait of Hormuz" in the EV battery supply chain
```

```
Look for hidden champion companies in semiconductor equipment
```

## Example Output Structure

```markdown
# Industry Bottleneck Analysis: AI Accelerators

## Rising Sub-Sectors
| Sub-Sector | Stage | Growth Driver |
|------------|-------|---------------|
| AI Training Chips | Growth | LLM scaling laws |
| HBM Memory | Growth | Bandwidth bottleneck |
| CoWoS Packaging | Growth | Chiplet integration |

## Bottleneck: CoWoS Advanced Packaging
- Score: 23/25
- Concentration: TSMC dominates with >90% share
- Tech Barrier: 10+ years of process know-how
- Substitution Risk: Low — no alternative at leading edge

## Hidden Champion: [Example Company]
- Segment: Bumping equipment for CoWoS
- Revenue: ~$200M (vs. $50B+ AI chip market)
- Core Tech: Proprietary thermal compression bonding
- Moat: Sole supplier to TSMC for 3nm chiplet assembly
```

## Key Concepts

| Term | Definition |
|------|------------|
| **Strait of Hormuz Link** | A narrow, irreplaceable bottleneck in a supply chain where disruption cascades disproportionately |
| **Hidden Champion** | A small-to-mid-sized company that dominates a niche global market through technology leadership |
| **Capacity Inelasticity** | Inability to rapidly scale supply in response to demand increases |
| **Customer Lock-in** | Long qualification cycles or design integration that prevents supplier switching |

## Tips for Best Results

- Provide a specific industry name (e.g., "solid-state batteries" rather than just "energy")
- Specify geography if relevant (global vs. China vs. US supply chains differ significantly)
- Clarify your goal (investment vs. supply chain security vs. competitive entry)
- Be prepared to verify private company estimates against primary sources
