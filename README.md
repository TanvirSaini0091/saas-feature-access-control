# React Feature Access Control & Permission Gating Demo

This project is a **frontend-only React application** that demonstrates a clean, centralized approach to feature access control (feature gating) based on user tiers. It focuses on **architecture and enforcement patterns**, not backend security or visual polish.

The application renders a single dashboard page whose UI dynamically adapts based on the current user’s subscription tier (`FREE` or `PRO`). Feature visibility and interactivity are controlled declaratively using a reusable guard component rather than scattered conditional logic.

---

## What This Project Demonstrates

This project exists to show **how frontend permission logic can be structured sanely** in a real-world SaaS-style UI.

It demonstrates:

- Centralized permission definitions
- Declarative feature gating at the component boundary
- Separation of identity, policy, and UI
- “Hide vs Disable” feature access patterns
- Event interception to block unauthorized interactions
- Audit logging for denied access attempts

This is **not** a full product, backend, or production-ready security system.

---

## The Problem: Conditional Spaghetti

In many frontend applications, feature access is handled with repeated checks like:

```js
if (user.plan === 'pro') { ... }
```

When these checks spread across components, the codebase becomes difficult to maintain, risky to change, and hard to reason about.

This project replaces scattered conditionals with:

- A **single source of truth** for permissions
- A **FeatureGuard** component that enforces access declaratively
- UI components that remain unaware of tier logic

---

## Folder Structure

```txt
src/
├─ components/
│  └─ TierSwitcher.js
├─ context/
│  └─ AuthContext.js
├─ features/
│  └─ dashboard/
│     └─ Dashboard.js
├─ guards/
│  └─ FeatureGuard.js
├─ lib/
│  └─ permissions.js
├─ utils/
│  └─ logger.js
├─ App.js
└─ index.js
```

---

## Architecture Overview

### Centralized Permission Model

All permissions and tier definitions live in a single file:

```js
lib/permissions.js
```

This ensures access rules are modified in one place.

---

### Auth Context as the Enforcement Layer

`AuthContext` simulates an authenticated user and exposes:

- `user`
- `setUser`
- `hasPermission(permission)`

Permission checks are memoized and include audit logging for denied access attempts.

---

### FeatureGuard Component

`FeatureGuard` is a reusable wrapper that enforces access rules declaratively.

Supported behaviors:

- **Hide**: Removes unauthorized UI from the DOM
- **Disable**: Shows UI but intercepts interaction via `onClickCapture`

---

## Audit Logging

Denied access attempts are logged via `utils/logger.js` for observability.

---

## Dev Tier Switcher

A floating **Tier Switcher** allows toggling between `FREE` and `PRO` tiers for demo purposes.

---

## Security Note

This project implements **client-side access control only**.

All real security enforcement must happen on the backend in production systems.

---

## Explicit Non-Goals

- Backend services
- Authentication flows
- Databases
- Payment systems
- Production security enforcement

---

## Running the Project

```bash
npm install
npm start
```

Use the tier switcher to observe how the UI adapts based on permissions.

---

This project is intentionally small and focused on **frontend access control architecture**, not product completeness.
