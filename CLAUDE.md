# AI OS - Development Guide

## Project Vision

AI OS is an AI-powered operating system for businesses.

The goal is to build an intelligent platform capable of understanding user requests, maintaining conversational context, and executing real business actions through external integrations.

Examples include:

* Customer support
* Appointment scheduling
* CRM assistance
* Email generation
* Business automation
* AI agents
* Document processing

Current priority:

Build a clean, maintainable MVP before expanding features.

---

# Core Principles

* Simplicity over complexity.
* Readability over cleverness.
* Build only what is needed now.
* Avoid premature optimization.
* Prefer maintainable solutions.
* Keep the codebase easy to understand.

When multiple valid solutions exist, always prefer the one that modifies fewer files and introduces the least architectural complexity.

---

# Technology Stack

## Frontend

* React
* TypeScript
* Vite

## Backend

* Convex

## AI

* Anthropic Claude API

## Deployment

* Railway (future)

## Version Control

* Git
* GitHub

---

# Architecture Guidelines

Every file should have a single responsibility.

Business logic should remain independent from UI.

AI logic should remain independent from business logic.

Avoid unnecessary abstractions.

Avoid unnecessary design patterns.

Avoid creating folders that only contain one file.

Do not introduce new architecture unless it solves an existing problem.

---

# Convex Conventions

Use Queries only for reading.

Use Mutations only for writing.

Use Internal Mutations for internal persistence.

Use Actions only for external services such as:

* Claude
* APIs
* Email providers
* External integrations

Never call external APIs inside Mutations.

When a Mutation needs an Action, use the Convex Scheduler.

Reuse existing Queries and Mutations whenever possible.

Do not duplicate business logic.

---

# React Conventions

Use functional components.

Keep components focused.

Split components only when they become difficult to maintain.

Avoid unnecessary Context providers.

Avoid unnecessary custom hooks.

Avoid unnecessary global state.

Prefer composition over abstraction.

---

# TypeScript Conventions

Avoid using any.

Prefer explicit typing.

Use Convex generated types whenever possible.

Keep interfaces small.

Use descriptive names.

---

# AI Conventions

Claude is the primary language model.

Use the latest stable Claude Sonnet model unless another model is explicitly requested.

Keep prompts concise.

Separate prompts from business logic whenever practical.

Never hardcode secrets.

Never expose API keys.

---

# Development Workflow

For every implementation task:

1. Inspect the project.
2. Explain the implementation plan.
3. Identify the files that will change.
4. Wait for approval.
5. Implement only the approved scope.
6. Stop after finishing.

Do not continue with additional improvements unless explicitly requested.

---

# Scope Control

Do not:

* Refactor unrelated files.
* Introduce new dependencies without justification.
* Modify project architecture without approval.
* Implement future roadmap features.
* Optimize code that is not a bottleneck.
* Add features outside the requested scope.

If a better idea is discovered during implementation, finish the requested task first and then propose the improvement separately.

---

# Code Quality Standards

Write production-quality code.

Keep functions cohesive.

Keep components focused.

Minimize duplication.

Handle errors gracefully.

Prefer explicit code over magic.

Leave the project easier to understand after every change.

---

# Documentation

Permanent documentation is stored in:

Docs/architecture.md

Docs/roadmap.md

Docs/decisions.md

Docs/audit.md

Docs/prompts.md

This file contains only permanent development rules.

---

# Communication Rules

Before writing code:

* Explain the plan.
* Explain why the approach was chosen.
* List the files that will change.

During implementation:

* Stay within the approved scope.

After implementation:

* Summarize what changed.
* Mention any trade-offs.
* Suggest the next logical step.

Never make unrelated changes without approval.


## Implementation Strategy

Before implementing any feature:

1. Inspect the existing codebase.
2. Reuse existing code whenever possible.
3. Check for relevant Skills and use the best available one when appropriate.
4. Prefer mature libraries over custom implementations.
5. Write new code only when no suitable solution exists.
6. Keep the implementation as simple as possible.
7. Modify the fewest files necessary.
8. Explain significant technical decisions before implementation.

## When a Skill is selected:

* Briefly explain why it was chosen.
* Follow the Skill only if it does not conflict with the project's documentation or accepted architectural decisions.
* If a conflict exists, explain it before proceeding.

# Documentation Priority

When documentation exists, always use it as the source of truth.

Priority order:

1. CLAUDE.md
2. Docs/decisions.md
3. Docs/architecture.md
4. Docs/roadmap.md
5. Source code

If documentation conflicts with the implementation, report the inconsistency before making changes.