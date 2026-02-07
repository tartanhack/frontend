# MONTY — Master Build Plan
## TartanHacks 2026 | Capital One · Conway · Visa
### Team Reference Document — All Members

---

## 1. THE PAIN POINT

Kids are spending more money, earlier, with less oversight than ever — and parents have no tools to teach financial habits at the moment that matters most: **the point of purchase**.

Three forces are colliding:
- **Digital money access is earlier than ever.** Greenlight, GoHenry, and Step have given millions of kids debit cards — but spending power without spending judgment.
- **E-commerce has eliminated friction.** One-click ordering, saved payment methods, and algorithmic recommendations exploit developing brains. Every natural pause point that once slowed impulse buying is gone.
- **Financial habits form by age 7** (Cambridge University), yet the average American child receives zero formal financial education until high school — a decade too late.

**What existing apps miss:** Every major player (Greenlight, GoHenry/Acorns Early, Step, FamZoo, BusyKid, Modak) shares the same flaw — they notify parents *after* spending happens and educate kids *separately* from spending. No product intervenes at the moment of impulse with contextual, AI-powered coaching. That gap is Monty's entire thesis.

> **The Insight:** Behavioral psychology research shows that interventions at the point of decision (not before, not after) produce 80–300% improvements in savings behavior. Every kids' finance app intervenes at the wrong moment.

---

## 2. VALUE PROPOSITION

> **One-liner:** Monty is the AI financial coach that helps kids build real money habits by intervening at the moment of impulse — not after it's too late.

### For Parents
Monty replaces helicopter oversight with intelligent coaching. Parents get a unified dashboard showing their child's financial behavior, habit strength over time, and Monty's coaching insights — confidence that their kid is learning without requiring constant supervision.

### For Kids
Monty is a friendly coach, not a cop. It doesn't block purchases or lecture. It shows up at the right moment: "This hoodie costs the same as 3 weeks of your skateboard savings — still want it?" It celebrates streaks, grows a visual companion that evolves with good habits, and makes saving feel like a game.

### For Judges
Monty represents **behavior change at the point of decision, powered by developmental psychology and real-time AI**. This aligns with:
- **Capital One:** Financial empowerment for the next generation
- **Conway:** AI that surfaces the right information at the right time for better decisions
- **Visa:** An intelligent budget planner that doesn't just track spending but actively shapes behavior

### Ramp's Principle Applied to Families
Traditional kids' banking apps profit from transaction fees — they benefit when your child spends more. Monty's incentives are explicitly aligned with building better habits, not driving transaction volume.

---

## 3. SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                     MONTY SYSTEM ARCHITECTURE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────────┐    ┌───────────────┐ │
│  │   CHROME      │    │   WEB DASHBOARD   │    │   BACKEND     │ │
│  │   EXTENSION   │    │   (React+Tailwind)│    │   API         │ │
│  │              │    │                  │    │   (FastAPI)    │ │
│  │  Content     │    │  Parent View     │    │               │ │
│  │  Script      │◄──►│  Child View      │◄──►│  Nessie API   │ │
│  │  (DOM inject)│    │  Admin Toggle    │    │  AI Engine    │ │
│  │              │    │                  │    │  Agent Memory  │ │
│  │  Service     │    │  Visualizations  │    │  Analytics    │ │
│  │  Worker      │────►│  Flowcharts      │    │  Pipeline     │ │
│  │  (AI calls)  │    │                  │    │               │ │
│  └──────────────┘    └──────────────────┘    └───────────────┘ │
│         │                                           │           │
│         └───────────── REST API ─────────────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Components
1. **Chrome Extension (Manifest V3)** — Client-side intervention engine. Detects shopping pages, injects Monty's overlay, triggers AI coaching.
2. **Web Dashboard (React + Tailwind)** — Parent view, child view, and admin toggle to switch between them. Visualizations, flowcharts, spending insights.
3. **Backend API (Python FastAPI)** — AI coaching engine, agent memory system, Nessie API integration, behavioral analysis pipeline.

---

## 4. TEAM ASSIGNMENTS

| Role | Person | Primary Responsibility | Key Interfaces |
|------|--------|----------------------|----------------|
| **Backend Dev 1** | TBD | Nessie API integration, data seeding, API endpoints, agent memory store | → Frontend (REST API), → Chrome Ext (REST API) |
| **Backend Dev 2** | TBD | AI coaching engine, behavioral analysis pipeline, impulse scoring model | → Backend Dev 1 (shared DB), → Frontend (insights API) |
| **Frontend Dev** | TBD | React dashboard (parent + child views), admin toggle, data visualizations, flowcharts | ← Backend (REST API), ← Chrome Ext (shared state) |
| **Chrome Ext Dev** | TBD | Manifest V3 extension, DOM injection on shopping sites, overlay UI, service worker | → Backend (AI coaching API), → Frontend (shared user state) |

---

## 5. DATA SCHEMA

### 5A. Nessie API Resources (What We Pull)

```
NESSIE API HIERARCHY:
Customer → Account(s) → Transaction(s)
                      → Purchase(s) → Merchant
                      → Transfer(s)
                      → Deposit(s)
                      → Withdrawal(s)
                      → Bill(s)
```

**Customer** (represents parent OR child)
```json
{
  "_id": "string",
  "first_name": "string",
  "last_name": "string",
  "address": {
    "street_number": "string",
    "street_name": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  }
}
```

**Account** (one per savings goal + one checking)
```json
{
  "_id": "string",
  "type": "Savings | Checking | Credit Card",
  "nickname": "string",       // e.g., "Skateboard Fund", "Lunch Money"
  "rewards": 0,
  "balance": 0,
  "customer_id": "string"
}
```

**Purchase** (spending transaction)
```json
{
  "_id": "string",
  "merchant_id": "string",
  "medium": "balance",
  "purchase_date": "2026-02-06",
  "amount": 0,
  "status": "pending | cancelled | completed",
  "description": "string",
  "payer_id": "string"       // account_id
}
```

**Merchant**
```json
{
  "_id": "string",
  "name": "string",
  "category": ["food", "entertainment", "clothing", ...],
  "address": { ... },
  "geocode": { "lat": 0, "lng": 0 }
}
```

**Transfer** (between accounts, e.g., checking → savings goal)
```json
{
  "_id": "string",
  "transaction_date": "2026-02-06",
  "status": "pending | cancelled | completed",
  "medium": "balance",
  "payer_id": "string",      // source account
  "payee_id": "string",      // destination account
  "amount": 0,
  "description": "string"
}
```

> **⚠️ NESSIE GOTCHAS (from past hackathon teams):**
> - API is HTTP only (not HTTPS) — some browsers may block mixed content
> - Merchant categories are poorly documented — test valid values early
> - Account types must be exact strings ("Savings", "Checking", "Credit Card")
> - No webhooks — you must poll for changes
> - API key goes as query param: `?key=YOUR_KEY`

### 5B. Monty Internal Data (What We Create)

These are stored in our own backend database (SQLite for hackathon speed):

**Agent Memory** (per child)
```json
{
  "child_id": "string",
  "memories": [
    {
      "id": "uuid",
      "created_at": "datetime",
      "type": "spending_pattern | user_response | goal_update | habit_observation",
      "content": "User says Chipotle is for family dinners, non-negotiable",
      "category": "food",
      "merchant_id": "string",
      "suppress_alerts_until": "datetime | null",
      "confidence": 0.85
    }
  ]
}
```

**Savings Goal** (Monty-specific, maps to Nessie account)
```json
{
  "id": "uuid",
  "child_id": "string",
  "nessie_account_id": "string",
  "name": "Skateboard",
  "target_amount": 120.00,
  "current_amount": 68.00,
  "created_at": "datetime",
  "projected_completion": "datetime",
  "weekly_contribution_rate": 10.00
}
```

**Impulse Score** (per purchase event)
```json
{
  "purchase_id": "string",
  "timestamp": "datetime",
  "amount": 45.00,
  "merchant_category": "electronics",
  "impulse_score": 0.82,          // 0 = planned, 1 = impulse
  "factors": {
    "time_of_day": "evening",      // evening purchases more impulsive
    "day_of_week": "Saturday",     // weekend spending higher
    "category_frequency": "rare",  // first time in this category
    "amount_vs_average": 2.3,      // 2.3x their average purchase
    "velocity": "burst"            // 3rd purchase in 2 hours
  },
  "alert_triggered": true,
  "alert_type": "impulse_pause",
  "child_response": "waited",      // waited | proceeded | dismissed
  "agent_memory_updated": true
}
```

**Habit Strength Score** (composite metric, 0–100)
```json
{
  "child_id": "string",
  "date": "2026-02-06",
  "score": 73,
  "components": {
    "savings_streak_days": 14,
    "impulse_resistance_rate": 0.67,   // % of impulse alerts where they waited
    "goal_progress_velocity": 0.85,    // on track vs behind
    "spending_consistency": 0.72,      // low variance = more disciplined
    "implementation_intentions_completed": 3  // out of 5 active plans
  }
}
```

**Implementation Intention** (if-then plans for behavior change)
```json
{
  "id": "uuid",
  "child_id": "string",
  "created_at": "datetime",
  "trigger": "When I want to buy snacks after school",
  "action": "I will check my skateboard fund progress first",
  "status": "active | completed | revised",
  "success_count": 8,
  "total_triggered": 12,
  "success_rate": 0.67
}
```

### 5C. API Contract (Backend → Frontend)

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/api/family/{family_id}/overview` | GET | Full family dashboard data | Habit scores, goals, recent activity |
| `/api/child/{child_id}/goals` | GET | All savings goals for child | Array of goals with progress |
| `/api/child/{child_id}/spending` | GET | Spending analysis & patterns | Categories, burst detection, trends |
| `/api/child/{child_id}/insights` | GET | AI-generated spending insights | Array of insight strings |
| `/api/child/{child_id}/streak` | GET | Current savings streak data | Streak days, companion state |
| `/api/child/{child_id}/impulse-scores` | GET | Recent impulse score history | Array of scored purchases |
| `/api/child/{child_id}/memories` | GET | Agent memory log (for parent view) | Array of learned preferences |
| `/api/child/{child_id}/implementation-intentions` | GET/POST | If-then plans | Array of active plans |
| `/api/coaching/evaluate` | POST | AI evaluates a potential purchase | Coaching message, impulse score, goal impact |
| `/api/coaching/chat` | POST | Conversational AI interaction | AI response with context |
| `/api/parent/{parent_id}/allowance` | POST/PUT | Set/update child allowance | Confirmation |
| `/api/child/{child_id}/wait-and-win` | POST | Log a "Wait & Win" decision | Reward confirmation |
| `/api/flowchart/{child_id}/decision-log` | GET | Decision pipeline visualization data | Decision tree nodes + edges |

### 5D. Chrome Extension ↔ Backend Contract

| Endpoint | Method | Description | Payload |
|----------|--------|-------------|---------|
| `/api/extension/detect` | POST | Send detected product for evaluation | `{ url, product_name, price, merchant, child_id }` |
| `/api/extension/response` | POST | Log child's response to alert | `{ alert_id, response: "waited" | "proceeded" | "dismissed" }` |
| `/api/extension/goals` | GET | Fetch child's current goals for overlay | `{ child_id }` |
| `/api/extension/streak` | GET | Fetch current streak for popup | `{ child_id }` |

---

## 6. AGENT MEMORY SYSTEM

### How It Works

The agent memory is the core differentiator for Conway track. It's a persistent, evolving knowledge base about each child's spending behavior, preferences, and learned exceptions.

### Memory Lifecycle

```
1. DETECT → Purchase pattern detected (e.g., weekly Chipotle)
2. ALERT → Agent asks: "Hey, you spend $15 on Chipotle every Saturday. Want to talk about it?"
3. LISTEN → Child responds: "It's family dinner, I can't skip it"
4. STORE → Memory created: { type: "user_response", content: "Chipotle = family dinner, non-negotiable", suppress_alerts_until: "30 days" }
5. ADAPT → Next Saturday, no alert. Instead: "Enjoy family dinner tonight! 🌯"
6. REVIEW → After 30 days, gently check in: "Still doing family Chipotle Saturdays? Just checking!"
```

### When the Agent Interacts

| Trigger | Example | Alert Style |
|---------|---------|-------------|
| **Predicted impulse buy** | Browsing Amazon headphones, no prior search history | Chrome overlay with opportunity cost |
| **Spending burst detected** | 3 purchases in 2 hours, weekend evening | Gentle check-in: "Busy shopping day! Want to set a limit?" |
| **Subscription found** | Recurring $9.99 charge, no recent usage | Parent dashboard flag + child notification |
| **Goal milestone approaching** | $10 away from skateboard goal | Celebration + encouragement |
| **Implementation intention trigger** | After-school snack time (matches their if-then plan) | Reminder of their own plan |
| **Meal prep suggestion** | Predicted lunch-out based on pattern | Proactive: "Want to try packing lunch this weekend?" |
| **Weekly reflection** | Sunday evening | "This week: you saved $23 and resisted 4 impulse buys!" |

### When the Agent Does NOT Interact

- **Learned non-negotiable spending** (stored in memory with suppression)
- **Small, routine purchases** below a threshold (e.g., $3 school supplies)
- **Planned purchases** the child has already discussed or added to a goal
- **Immediately after a "proceeded" decision** — no guilt-tripping

---

## 7. DEMO SCRIPT (2–3 Minutes)

### Scene 1: Chrome Extension (60s)
Open Amazon → browse $45 headphones → Monty overlay slides in automatically → shows skateboard goal progress bar → opportunity cost: "This = 37% of your skateboard" → "Wait & Win" button → AI message adapted to age → companion mascot reacts

### Scene 2: Parent Dashboard (60s)
Switch to dashboard → admin toggle showing parent view → Habit Strength Score (73/100) → savings goal progress bars → spending category breakdown chart → AI-generated insight: "Emma's impulse rate dropped from 6/week to 2/week" → agent memory log showing learned preferences → decision pipeline flowchart

### Scene 3: AI Coaching Chat (30–40s)
Child asks: "Should I buy the Pokemon game?" → Monty pulls real spending data → contextual response with reframe, not rejection → suggests adding as next goal → shows projected timeline

---

## 8. 24-HOUR BUILD PLAN

| Phase | Hours | Focus | Milestone |
|-------|-------|-------|-----------|
| **Setup** | 0–2 | Scaffold all 3 components, Nessie API key, seed data | All repos created, connectivity tested |
| **Core Sprint** | 2–10 | Chrome ext DOM detection + overlay, Dashboard layout, Backend API + Nessie CRUD, AI prompts | Basic overlay on Amazon, dashboard shows Nessie data |
| **Integration** | 10–16 | Connect extension → backend → dashboard, wire real data, implement streak + Wait & Win, polish AI | Full demo flow functional |
| **Stretch** | 16–18 | ONLY if core is solid: VAPI voice, subscription detective, education reels | Skip if behind |
| **Polish** | 18–24 | Rehearse demo 5x, fix visual glitches, seed compelling data, prepare Q&A | Demo-ready |

> **⏰ Golden Rule:** At hour 18, STOP building features and START polishing the demo. A smooth 3-minute demo wins. A buggy feature doesn't.

---

## 9. TRACK POSITIONING CHEAT SHEET

| Track | Lead With | Key Pitch Line | Technical Proof Points |
|-------|-----------|----------------|----------------------|
| **Capital One** | Financial empowerment for youth via Nessie API | "We're starting with the most important audience — children — at the most important moment — the point of purchase." | Full Nessie CRUD, named savings accounts, purchase analysis, transfers |
| **Conway** | AI decision-support that empowers, not decides | "A 10-year-old deciding on $45 headphones faces imperfect information about their future self. Monty is their decision-support layer." | Adaptive developmental psychology model, agent memory, impulse scoring |
| **Visa** | Intelligent budget planner that shapes behavior | "Monty adds the one thing no budget planner has: real-time behavioral intervention at the point of purchase." | Subscription detection, category analysis, family-level budget view |

---

## 10. JUDGE Q&A PREP

**"How is this different from Greenlight?"**
→ Greenlight notifies after spending. Monty intervenes at the moment of decision. No existing product does this.

**"What makes the AI more than a GPT wrapper?"**
→ Three things: (1) An impulse scoring model that classifies purchases as planned vs. impulse using timing, category, and velocity analysis. (2) Adaptive coaching that maps to Piaget's developmental stages. (3) A persistent agent memory that learns each child's patterns and exceptions over time.

**"What's the evidence for these behavioral techniques?"**
→ Commitment devices: 80–300% improvement in savings (Green Bank study). Loss-aversion framing: losses weighted 2x vs. gains (Kahneman & Tversky). Implementation intentions: medium-to-large effect size (d=0.65) across 94 studies. Financial habits form by age 7 (Cambridge University).

**"How does the agent memory work?"**
→ When we detect a recurring pattern, we ask the child about it. Their response becomes a stored memory that suppresses future alerts for that specific behavior. The agent learns what's non-negotiable and stops nagging. It adapts.

**"Would parents actually use this?"**
→ Parents today face an impossible choice: helicopter oversight (unsustainable), total restriction (prevents learning), or hope-for-the-best (no learning). Monty is the fourth option: intelligent coaching that works alongside the child in real time.
