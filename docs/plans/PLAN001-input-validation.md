# PLAN001: Add input validation to add()

## Goal
Reject non-numeric inputs in add() with a clear error

## Scope 
- src/app.js (modify)
- src/app.test.js (extend)
- no changes outside src/

## Steps
1. Add type check for both arguments
2. Throw TypeError with descriptive message
3. Add two negative-path tests

## Success criteria
- [ ] CI test job passes
- [ ] Negative-path tests prove rejection behaviour
- [ ] Diff touches only the two files in scope

## Risk + mitigations
- Breaking existing callers -> covered by existing test
## Rollback
- Single-commit revert; no data or config impact