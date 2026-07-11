# AI OS - Prompt Library

This document contains reusable prompts for developing AI OS.

The prompts are intentionally short.

Project context should come from:

* CLAUDE.md
* docs/architecture.md
* docs/roadmap.md
* docs/decisions.md
* docs/audit.md

Never duplicate permanent project information inside prompts.

---

# 1. Feature Implementation

Read the project documentation first.

Goal:

Implement the requested feature.

Before writing code:

* Inspect the project.
* Explain the implementation plan.
* List the files that will change.
* Explain why each file needs to change.
* Wait for approval.

Requirements:

* Stay within the requested scope.
* Do not refactor unrelated code.
* Do not change architecture.
* Stop after implementation.

---

# 2. Architecture Review

Read all project documentation.

Analyze:

* Architecture
* Folder structure
* Responsibilities
* Coupling
* Cohesion
* Scalability

Classify findings as:

Critical

Important

Minor

Do not propose future features.

Focus only on the current roadmap phase.

---

# 3. Code Audit

Perform a senior-level technical audit.

Review:

* TypeScript
* React
* Convex
* Error handling
* Security
* Maintainability
* Performance

Do not modify code.

Produce:

* Findings
* Risks
* Recommendations
* Prioritized action plan

---

# 4. Refactor

Read project documentation.

Refactor only the requested module.

Requirements:

* Preserve behavior.
* Do not change architecture.
* Reduce complexity.
* Reduce duplication.
* Improve readability.

Stop after completing the approved scope.

---

# 5. Bug Fix

Investigate the reported issue.

Before changing code:

* Identify the root cause.
* Explain the cause.
* Explain the proposed fix.

Apply the smallest possible change.

Do not introduce unrelated improvements.

---

# 6. Performance Review

Analyze:

* Rendering
* React components
* Convex queries
* Database usage
* Network calls

Recommend optimizations only if measurable.

Avoid premature optimization.

---

# 7. Documentation Update

Update only the affected documentation.

Do not rewrite unrelated sections.

Keep documentation synchronized with the current architecture.

---

# 8. Pull Request Review

Review the implementation as a senior engineer.

Evaluate:

* Correctness
* Simplicity
* Readability
* Architecture
* Maintainability

Provide:

* Approval status
* Risks
* Suggested improvements

Do not rewrite code unless requested.

---

# 9. Planning

Break the requested feature into small implementation steps.

Each step should:

* Be independently testable.
* Have a clear goal.
* Produce working software.

Avoid large implementation batches.

---

# General Rules

Always:

* Read the documentation first.
* Respect the roadmap.
* Respect accepted architectural decisions.
* Stay within scope.
* Prefer simple solutions.
* Explain reasoning before implementation.

Never:

* Introduce unnecessary abstractions.
* Refactor unrelated files.
* Modify architecture without approval.
* Implement future roadmap features.
* Continue after the requested task has been completed.
