# SaaS Feature Access Control

## Problem Statement

Modern SaaS applications often suffer from *conditional spaghetti*. As products grow, business logic becomes scattered across the codebase in the form of repetitive checks like `if (user.plan === 'pro')`.  

This approach is difficult to test, easy to bypass on the frontend, and extremely hard to maintain at scale.

This project aims to design a centralized, decoupled system for **Feature Gating** and **Role-Based Access Control (RBAC)** that is secure, scalable, and maintainable.

---

## High-Level System Overview

The system acts as a centralized **Gatekeeper** responsible for determining whether a user is allowed to access a specific feature.

### Identity Layer
Responsible for identifying who the user is and what subscription tier or role they belong to.

### Policy Engine
A centralized set of rules that maps **permissions** to **tiers or roles**, defining what actions are allowed.

### Enforcement Layer
Reusable enforcement mechanisms implemented as:
- Frontend components to guide user experience
- Backend middleware to enforce access control securely

---

## Explicit Non-Goals

To keep the focus on architecture and access-control logic, the following are explicitly out of scope:

- **Full Payment Processing**  
  Subscription status will be mocked. This project does not attempt to reimplement payment providers like Stripe.

- **Complex UI/UX**  
  The interface will remain minimal and functional. The emphasis is on logic and system design, not visual polish.

- **Production-Grade Database**  
  An in-memory or mocked persistence layer will be used to focus on authorization algorithms rather than infrastructure concerns.