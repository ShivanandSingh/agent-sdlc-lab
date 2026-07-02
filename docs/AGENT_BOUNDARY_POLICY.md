# Agent Boundary Policy - agent-sdlc-lab

## Scope Statement
Agents in this repository are scoped to the IMPLEMENTATION and VALIDATION stages of the SDLC.
Agents propose; humans and policy accept.

## Path-based risk zones

| Path                  | Risk          | Agent may modify      |
|-----------------------|---------------|-----------------------|
| docs/                 | Low           | Yes, automnomously via PR|
| src/                  | Medium        |yes, via PR + checks + Review|
| infra/                | High          | Only when explicitly requested|
| .github/workflows/    | High          | No - platform review required |
| Secrets /settings     | Critical      | Never - Prepare only, human executes|

## Non-negotiable rules

1. No direct pushes to main - all agent work arrives via pull request.
2. Workflow and infra changes are treated as higher risk than app code.
3. Deployment actions require environment approval by human.
4. Every agent PR must contain a structured plan (see PR template)

