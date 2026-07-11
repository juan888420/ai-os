# AI OS - Technical Decisions

This document records architectural decisions that should remain stable throughout the project.

New decisions may be added over time.

Existing decisions should not be changed unless there is a strong technical reason.

---

# ADR-001

Title

Convex is the primary backend.

Decision

Convex is responsible for:

* Database
* Backend
* Realtime synchronization
* Scheduling
* Server functions

Reason

Convex significantly simplifies backend development while providing realtime capabilities out of the box.

Status

Accepted

---

# ADR-002

Title

Claude is the primary LLM.

Decision

Anthropic Claude is the default language model.

Reason

High reasoning quality.

Excellent developer experience.

Good API support.

Status

Accepted

---

# ADR-003

Title

React is the frontend framework.

Decision

The UI will be built with React and TypeScript.

Status

Accepted

---

# ADR-004

Title

Keep the architecture simple.

Decision

Avoid unnecessary abstractions.

Prefer modifying existing code over creating new layers.

Reason

The project is still in the MVP phase.

Status

Accepted

---

# ADR-005

Title

Business logic belongs in Convex.

Decision

Business rules should not live inside React components.

Reason

The frontend should remain focused on presentation.

Status

Accepted

---

# ADR-006

Title

AI logic remains isolated.

Decision

Claude interactions should remain inside Convex Actions.

Reason

The frontend must never communicate directly with the LLM.

Status

Accepted

---

# ADR-007

Title

No premature optimization.

Decision

Do not introduce:

* caching
* pagination
* complex abstractions
* microservices

until there is a real need.

Reason

Working software is the priority.

Status

Accepted

---

# ADR-008

Title

Incremental development.

Decision

The project grows in small iterations.

Each milestone should be functional before starting the next one.

Status

Accepted

---

# ADR-009

Title

Documentation first.

Decision

Before large implementations:

* update documentation
* explain the plan
* obtain approval

Reason

Keeps development predictable and reduces unnecessary refactoring.

Status

Accepted

---

# ADR-010

Title

Production quality.

Decision

Even during the MVP stage:

* write clean code
* use TypeScript correctly
* handle errors
* avoid duplicated logic

Reason

Technical debt should remain low.

Status

Accepted

---

# Future Decisions

Examples of future ADRs:

* Authentication provider
* Billing provider
* Vector database
* Memory architecture
* Multi-agent orchestration
* Deployment strategy
* Monitoring
* Testing strategy

Only add new ADRs when an important architectural decision has been made.
