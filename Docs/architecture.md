# AI OS - Architecture

## Overview

AI OS is an AI-native SaaS platform designed to centralize business operations around conversational AI.

The system follows a simple architecture:

React → Convex → Claude → Convex → React

The frontend never communicates directly with the LLM.

All AI interactions are executed through Convex Actions.

---

# High-Level Architecture

```
User
    │
    ▼
React UI
    │
    ▼
Convex Mutation
    │
    ▼
Convex Database
    │
    ▼
Convex Scheduler
    │
    ▼
Convex Action (Node)
    │
    ▼
Claude API
    │
    ▼
Convex Internal Mutation
    │
    ▼
Convex Database
    │
    ▼
Realtime Update
    │
    ▼
React UI
```

---

# Responsibilities

## React

Responsible for:

* UI
* User interaction
* Displaying data
* Triggering Convex functions

React should never contain business logic.

---

## Convex

Responsible for:

* Database
* Backend logic
* Realtime synchronization
* Scheduling
* Authentication (future)

Convex is the application's backend.

---

## Claude

Responsible only for:

* Understanding language
* Reasoning
* Generating responses

Claude should never own business logic.

Business rules belong to the application.

---

# Data Flow

Current MVP flow:

1. User sends a message.
2. Message is stored.
3. Scheduler starts an Action.
4. Action calls Claude.
5. Claude generates a response.
6. Response is stored.
7. React updates automatically.

---

# Convex Layers

Queries

Purpose:

Read data.

No side effects.

---

Mutations

Purpose:

Write data.

Never call external APIs.

---

Internal Mutations

Purpose:

Internal writes triggered by Actions.

Never exposed to the client.

---

Actions

Purpose:

Communicate with external services.

Examples:

* Claude
* Email
* Google Calendar
* Stripe
* WhatsApp

---

# Current Database

Current tables:

messages

Fields:

* customerId
* role
* content
* createdAt

The schema is intentionally simple for the MVP.

Future versions may introduce:

* conversations
* users
* organizations
* agents

These are intentionally postponed.

---

# AI Layer

Current model:

Anthropic Claude Sonnet

Responsibilities:

* Answer user questions.
* Generate natural language.
* Assist business workflows.

Future responsibilities:

* Tool calling
* Multi-agent orchestration
* Long-term memory
* Structured outputs

---

# Current Scope

The MVP focuses only on:

* Chat
* Persistent history
* Claude integration
* Automatic updates

Nothing else should be added before this flow is complete.

---

# Future Architecture

The expected evolution is:

MVP

React

↓

Convex

↓

Claude

↓

Chat

↓

Business Actions

↓

External Integrations

↓

Multiple Agents

↓

Production SaaS

Each stage builds on the previous one.

Avoid skipping stages.

---

# Design Philosophy

The architecture intentionally favors:

* Simplicity
* Small iterations
* Low coupling
* High cohesion

Every new feature should extend the existing architecture instead of replacing it.

---

# Architectural Rules

Never bypass Convex.

Never call Claude directly from React.

Never duplicate business logic.

Never expose secrets to the frontend.

Never implement future roadmap features early.

Keep the architecture boring, predictable and maintainable.
