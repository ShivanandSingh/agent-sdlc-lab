# Task Contract: <task name>

## Inputs
- Trigger: <security alert / issue link / request>
- Repository scope: changes allowed under src/ and depedency
  files; infra/ excluded unless expolicitly requested
- Constaints: no workflow changes without platorm review;
  no secrets introduced; no direct-to-main pushes.

## Outputs
- A pull request containing
    - a structured plan (PR description)
    - a bounded changeset (commits on an agent branch)
    - evidence links to workflow runs

## Success criteria
- [ ] Required checks pass (build/test/lint)
- [ ] The underlying signal is resolved (e.g. vulnerable version no longer reachable, incl, transitive deps)
- [ ] Scope matches intent (no expected files changes)
- [ ] Rollback or escalation path recorded for high-risk work