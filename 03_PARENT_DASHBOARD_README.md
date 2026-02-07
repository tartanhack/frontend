# BiggyPank Parent Dashboard
## Data-Rich Insights & Family Financial Overview

---

## Overview

The Parent Dashboard is the command center for understanding your child's financial development. It provides actionable insights without overwhelming, celebrates progress without micromanaging, and empowers parents with AI-powered coaching intelligence. This is NOT just a transaction log – it's a behavior analysis tool that shows whether your child is building real financial habits.

**Core Principle:** Give parents confidence through insight, not control through restriction.

---

## Design Philosophy

### What This IS
✅ A behavior analysis dashboard  
✅ An insight engine showing patterns  
✅ A celebration of progress and growth  
✅ A window into what Monty is teaching  
✅ A tool for informed guidance  

### What This Is NOT
❌ A transaction micromanager  
❌ A surveillance tool  
❌ A punitive tracking system  
❌ Focused on what went wrong  
❌ Overwhelming with data dumps  

---

## Visual Language

### Color Palette (Professional but Warm)
```
Primary: #0EA5A0 (teal) - Trustworthy, calm
Secondary: #1E40AF (deep blue) - Professional, data
Accent Success: #10B981 (green) - Growth, progress
Accent Warning: #F59E0B (orange) - Attention needed
Background: #F8FAFC (soft white) - Clean, spacious
Cards: #FFFFFF - Elevated, important
Text Primary: #1F2937 - Readable, serious
Text Secondary: #6B7280 - Supporting info
```

### Typography
```
Headers: Inter or DM Sans (24-32px, bold) - Clean, modern
Body: DM Sans (16px) - Readable, professional
Numbers/Stats: Space Mono (24-40px, bold) - Emphasis
Labels: DM Sans (14px, medium) - Clear hierarchy
```

### Data Visualization
- Clean, minimal charts (no chartjunk)
- Consistent color coding across all charts
- Hover states show detailed tooltips
- Mobile-friendly (simplified on smaller screens)

---

## Screen Structure

### Bottom Navigation (Same as Kid's)

```
┌─────────────────────────────────┐
│                                 │
│     [MAIN CONTENT AREA]         │
│                                 │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ 🏠    👨‍👩‍👧    📊    🧠    ⚙️    │
│Home  Family Stats Insights Set  │
└─────────────────────────────────┘
```

#### Tab Specifications

**🏠 Home Tab** (Default)
- Family overview
- All kids' progress at-a-glance
- Recent activity feed
- Quick actions

**👨‍👩‍👧 Family Tab**
- Individual kid deep-dives
- Switch between kids
- Per-kid goals and stats
- Kid-specific insights

**📊 Stats Tab**
- Family-wide analytics
- Spending patterns
- Habit strength trends
- Comparative data (when multiple kids)

**🧠 Insights Tab**
- AI-generated insights
- Monty's observations
- Behavioral patterns detected
- Recommendations

**⚙️ Settings Tab**
- Family settings
- Allowance management
- Notification preferences
- Account connection

---

## Home Tab (Family Overview)

### Layout Structure

```
┌─────────────────────────────────┐
│ The Johnsons                    │
│ Family Dashboard                │
├─────────────────────────────────┤
│                                 │
│ Family Habit Strength 📊        │
│ ┌─────────────────────────┐    │
│ │       ⭕ 73             │    │ ← Aggregate score
│ │    Excellent habits!     │    │
│ │                          │    │
│ │ Emma: 78  Lucas: 68      │    │
│ └─────────────────────────┘    │
│                                 │
│ Active Goals (3)         [View] │
│ ┌─────────────────────────┐    │
│ │ 🦊 Emma • Skateboard     │    │
│ │ ▓▓▓▓▓▓▓▓░░░ 68%         │    │
│ │ $68/$120 • 5 weeks       │    │
│ └─────────────────────────┘    │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 🐰 Lucas • LEGO Set      │    │
│ │ ▓▓▓░░░░░░░░ 30%          │    │
│ │ $18/$60 • 8 weeks        │    │
│ └─────────────────────────┘    │
│                                 │
│ Recent Activity                 │
│ • Emma waited on headphones 🎧  │
│   2 hours ago                   │
│ • Lucas added $5 to LEGO goal   │
│   Yesterday                     │
│ • Emma reached 14-day streak 🔥 │
│   Today                         │
│                                 │
│ AI Insights 🧠           [More] │
│ "Emma's impulse rate dropped    │
│  from 6/week to 2/week"         │
│                                 │
│ Quick Actions                   │
│ [💰 Send Bonus] [💬 Message]   │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Family Habit Strength Score

The hero metric – a composite score showing overall financial behavior health.

```
┌─────────────────────────────────┐
│ Family Habit Strength 📊        │
│                                 │
│           ⭕ 73                 │
│                                 │
│     Excellent habits!           │
│                                 │
│ ────────────────────────────── │
│ Individual Scores:              │
│ 🦊 Emma:  78 (↑ +3 this week)   │
│ 🐰 Lucas: 68 (→ steady)         │
│                                 │
│ Components:                     │
│ • Streak days: 14 avg           │
│ • Impulse resist: 67%           │
│ • Goal velocity: 85%            │
│ • Consistency: 72%              │
└─────────────────────────────────┘
```

**Visual Design:**
- Large circular progress ring (same as kid's view)
- Color-coded:
  - 70-100: Green (excellent)
  - 40-69: Orange (building)
  - 0-39: Yellow (getting started)
- Animated fill on page load
- Tap to see detailed breakdown

**Score Calculation:**
```
Habit Strength = weighted average of:
- Savings streak consistency (25%)
- Impulse resistance rate (30%)
- Goal progress velocity (25%)
- Spending consistency/predictability (10%)
- Implementation intentions completed (10%)
```

**Interaction:**
- Tap score → Full breakdown modal
- Shows trend over time (line chart)
- Week-over-week comparison
- What's improving, what needs attention

---

### Component: Active Goals Overview

Simplified view of all family goals:

```
Active Goals (3)                [View All]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────┐
│ 🦊 Emma • Skateboard            │
│ ▓▓▓▓▓▓▓▓░░░░░░ 68%            │
│ $68 of $120 • 5 weeks left      │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🐰 Lucas • LEGO Set             │
│ ▓▓▓░░░░░░░░░░░ 30%             │
│ $18 of $60 • 8 weeks left       │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🦊 Emma • Gaming Fund           │
│ ▓▓░░░░░░░░░░░░ 20%             │
│ $12 of $60 • 10 weeks left      │
└─────────────────────────────────┘
```

**Design:**
- Kid avatar + goal name
- Progress bar (same chunky style)
- Key metrics: current/target, time remaining
- Tap card → Navigate to goal detail

**Status Indicators:**
- Green: On track
- Orange: Behind schedule
- Red: At risk (no recent activity)
- Purple glow: Nearly complete (90%+)

---

### Component: Recent Activity Feed

Real-time family financial activity:

```
Recent Activity                  [Filter]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 🦊 Emma waited on headphones 🎧
  Monty suggested waiting • 2 hours ago
  [View Interaction]

• 🐰 Lucas added $5 to LEGO goal
  Allowance deposit • Yesterday at 3pm
  
• 🦊 Emma reached 14-day streak 🔥
  Longest streak yet! • Today at 9am
  [Send Congrats]

• 🐰 Lucas browsed on Amazon
  No purchase made • Yesterday at 7pm

• 🦊 Emma completed "Pack Lunch" challenge
  Earned $15 bonus • 2 days ago
  [View Challenge]

[Load More]
```

**Activity Types:**
- 💰 Money added to goal
- 🛡️ Impulse purchase resisted
- 🔥 Streak milestone
- 🎯 Goal milestone reached
- 💬 Monty interaction
- 🏆 Badge/achievement earned
- 👀 Browsing activity (no purchase)
- ⚠️ Unusual spending pattern detected

**Interaction:**
- Tap activity → See full details
- Filter by kid, activity type, date
- Send reaction/encouragement directly from feed

**Visual Design:**
- Timeline format (vertical)
- Kid avatar on left
- Activity description + context
- Timestamp (relative: "2 hours ago")
- Action buttons when relevant

---

### Component: AI Insights Preview

Quick-hit insights from Monty's analysis:

```
AI Insights 🧠                   [View All]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────┐
│ 🎯 Positive Pattern             │
│                                 │
│ "Emma's impulse rate dropped    │
│  from 6/week to 2/week since    │
│  starting her skateboard goal"  │
│                                 │
│ Impact: High                    │
│ Confidence: 92%                 │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 💡 Opportunity                  │
│                                 │
│ "Lucas shops most between       │
│  8-10pm. Consider setting a     │
│  'wait until morning' rule"     │
│                                 │
│ [Create Rule]                   │
└─────────────────────────────────┘
```

**Insight Categories:**
- 🎯 Positive patterns (celebrate)
- ⚠️ Risk patterns (gentle alert)
- 💡 Opportunities (actionable suggestions)
- 📊 Data patterns (neutral observations)
- 🧠 Learning moments (teaching opportunities)

**Insight Properties:**
- Clear, parent-friendly language
- Context and evidence
- Impact level (high/medium/low)
- Confidence score
- Actionable next steps (when applicable)

---

### Component: Quick Actions Bar

Fast access to common parent tasks:

```
Quick Actions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[💰 Send Bonus]  [💬 Send Message]
[🎯 Set Challenge] [👀 View All]
```

**Action Details:**

**Send Bonus:**
```
┌─────────────────────────────────┐
│ Send Bonus Money                │
│                                 │
│ To: [Select kid ▼]              │
│ 🦊 Emma                         │
│                                 │
│ Amount: $[____]                 │
│ Quick: [$5] [$10] [$20] [$50]   │
│                                 │
│ Reason:                         │
│ ( ) Great job!                  │
│ ( ) Extra chores                │
│ ( ) Special occasion            │
│ (•) Custom: [_____________]     │
│                                 │
│ Add to which goal?              │
│ [Skateboard ▼]                  │
│                                 │
│ [Cancel]              [Send!]   │
└─────────────────────────────────┘
```

**Send Message:**
```
┌─────────────────────────────────┐
│ Send Encouragement              │
│                                 │
│ To: [Select kid ▼]              │
│                                 │
│ Quick Messages:                 │
│ • Great job this week! 🎉       │
│ • So proud of your progress! 💪 │
│ • Keep up the great work! ⭐    │
│ • You're doing amazing! 🏆      │
│                                 │
│ Or write custom:                │
│ [_________________________]     │
│                                 │
│ This will show in their         │
│ app as a special message        │
│ from you! 💌                    │
│                                 │
│ [Cancel]              [Send]    │
└─────────────────────────────────┘
```

**Set Challenge:**
```
┌─────────────────────────────────┐
│ Create Weekly Challenge         │
│                                 │
│ For: [All kids ▼]               │
│                                 │
│ Challenge Type:                 │
│ ( ) Pack lunch 5x               │
│ ( ) No impulse buys for 7 days  │
│ ( ) Save $X this week           │
│ (•) Custom challenge            │
│                                 │
│ Description:                    │
│ [_________________________]     │
│                                 │
│ Reward:                         │
│ $[____] bonus + badge           │
│                                 │
│ Duration:                       │
│ [This Week ▼]                   │
│                                 │
│ [Cancel]            [Create]    │
└─────────────────────────────────┘
```

---

## Family Tab (Individual Kid Deep-Dive)

Detailed view for a specific child's financial behavior.

### Layout

```
┌─────────────────────────────────┐
│ ← Back    Emma's Dashboard      │
│ [Switch: Emma ▼] [Lucas]        │
├─────────────────────────────────┤
│                                 │
│ Habit Strength                  │
│ ┌─────────────────────────┐    │
│ │      ⭕ 78              │    │
│ │   Excellent habits!      │    │
│ │   ↑ +3 from last week    │    │
│ │                          │    │
│ │ 🔥 14d  🛡️ 67%  🎯 85%   │    │
│ └─────────────────────────┘    │
│                                 │
│ Goals Progress                  │
│ ┌─────────────────────────┐    │
│ │ [Detailed goal cards]    │    │
│ └─────────────────────────┘    │
│                                 │
│ Spending Patterns 📊            │
│ ┌─────────────────────────┐    │
│ │ [Category breakdown]     │    │
│ │ [Time-of-day heatmap]    │    │
│ └─────────────────────────┘    │
│                                 │
│ What Monty Learned 🧠           │
│ ┌─────────────────────────┐    │
│ │ [Agent memory log]       │    │
│ └─────────────────────────┘    │
│                                 │
│ Decision History 🔍             │
│ ┌─────────────────────────┐    │
│ │ [Recent decisions]       │    │
│ └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Kid Selector

Quick switch between kids:

```
┌─────────────────────────────────┐
│ [Emma's Dashboard ▼]            │
│                                 │
│ Dropdown shows:                 │
│ • 🦊 Emma (age 10)              │
│ • 🐰 Lucas (age 7)              │
└─────────────────────────────────┘
```

**Interaction:**
- Tap to see dropdown
- Select different kid → Page updates
- Maintains scroll position
- Smooth transition

---

### Component: Individual Habit Score

Same as family overview but kid-specific:

```
┌─────────────────────────────────┐
│ Emma's Habit Strength           │
│                                 │
│           ⭕ 78                 │
│                                 │
│     Excellent habits!           │
│     ↑ +3 from last week         │
│                                 │
│ Components:                     │
│ 🔥 Streak: 14 days              │
│ 🛡️ Impulse resist: 67%          │
│ 🎯 Goal velocity: 85%           │
│ 📊 Consistency: 72%             │
│ ✅ Plans completed: 3/5         │
│                                 │
│ [View Trend →]                  │
└─────────────────────────────────┘
```

**Tap "View Trend":**
Opens modal with line chart showing score over time (last 12 weeks).

---

### Component: Spending Patterns

Visualizations showing when/where/how much.

#### Category Breakdown (Donut Chart)

```
┌─────────────────────────────────┐
│ Spending by Category            │
│ Last 30 days: $189.47           │
│                                 │
│      [Donut Chart]              │
│                                 │
│ 🍕 Food:     $89.50 (47%)       │
│ 🎮 Games:    $62.97 (33%)       │
│ 👕 Clothes:  $37.00 (20%)       │
│                                 │
│ Compare to: [Last Month ▼]      │
└─────────────────────────────────┘
```

**Chart Details:**
- Interactive: hover/tap segment → see details
- Color-coded by category
- Shows percentage and dollar amount
- Can compare time periods

#### Time of Day Heatmap

```
┌─────────────────────────────────┐
│ When Emma Shops Online          │
│                                 │
│ Mon  [░░░▓▓▓░░░░░░░░░░░░]      │
│ Tue  [░░░░░░░░░▓▓░░░░░░░]      │
│ Wed  [░░░░░░░░░░░▓▓▓▓░░░]      │
│ Thu  [░░░░░░░▓▓▓▓▓░░░░░░]      │
│ Fri  [░░░░░░░░░░░░▓▓▓▓▓▓]      │
│ Sat  [░░░▓▓▓▓▓▓▓░░░░░░░░]      │
│ Sun  [░░░░░░░░░░░░░░░░░░]      │
│      6am    12pm    6pm   12am  │
│                                 │
│ Most active: Weeknights 8-10pm  │
└─────────────────────────────────┘
```

**Insights:**
- Darker = more activity
- Helps identify impulse windows
- Suggests optimal check-in times

#### Weekly Trend (Line Chart)

```
┌─────────────────────────────────┐
│ Weekly Spending Trend           │
│                                 │
│ $60│                            │
│    │        ●                   │
│ $40│    ●       ●               │
│    │ ●              ●       ●   │
│ $20│                            │
│   └────────────────────────────│
│    W1  W2  W3  W4  W5  W6  W7  │
│                                 │
│ Average: $38/week               │
│ Trend: ↓ Decreasing (good!)     │
└─────────────────────────────────┘
```

---

### Component: What Monty Learned (Agent Memory Log)

Shows what the AI has learned about this child:

```
┌─────────────────────────────────┐
│ What Monty Learned About Emma   │
│                                 │
│ 💬 User Response                │
│ "Chipotle every Saturday is     │
│  family dinner — non-negotiable"│
│ Jan 20 • Alerts suppressed 🔇   │
│                                 │
│ 📊 Spending Pattern             │
│ "Tends to impulse-buy on Amazon │
│  between 8-10pm on weekdays"    │
│ Jan 25 • Active monitoring      │
│                                 │
│ 🧠 Habit Observation            │
│ "Has been packing lunch 4/5     │
│  days since starting plan"      │
│ Feb 3 • Reinforcing behavior    │
│                                 │
│ 🎯 Goal Update                  │
│ "Skateboard is primary focus,   │
│  willing to delay other wants"  │
│ Feb 5 • High priority           │
│                                 │
│ [View Full Memory →]            │
└─────────────────────────────────┘
```

**Memory Types:**
- 💬 User Response (what kid told Monty)
- 📊 Spending Pattern (detected behavior)
- 🧠 Habit Observation (progress tracking)
- 🎯 Goal Update (priority changes)
- ⚠️ Risk Flag (concerning pattern)

**Interaction:**
- Each memory is a card
- Shows date created
- Status indicator (active, suppressed, expired)
- Tap to see full details + history

**Why This Matters:**
Parents see that Monty isn't just rules-based but actually *learns* their child's context and stops nagging about legitimate exceptions.

---

### Component: Decision History

Log of Monty's interventions and kid's responses:

```
┌─────────────────────────────────┐
│ Recent Decisions                │
│                                 │
│ Feb 7, 3:42pm                   │
│ 🎧 Sony Headphones - $45        │
│ └─ Monty: Impulse pause         │
│    "This is 37% of skateboard"  │
│ └─ Emma: Waited ✓               │
│    Saved $45                    │
│                                 │
│ Feb 6, 8:15pm                   │
│ 🎮 Fortnite V-Bucks - $10       │
│ └─ Monty: Gentle check-in       │
│    "Using gaming fund?"         │
│ └─ Emma: Proceeded              │
│    From gaming budget           │
│                                 │
│ Feb 5, 2:30pm                   │
│ 🍫 Candy - $3.50                │
│ └─ Monty: No intervention       │
│    (Below threshold)            │
│ └─ Emma: Purchased              │
│                                 │
│ [View All Decisions →]          │
└─────────────────────────────────┘
```

**Decision Outcomes:**
- ✓ Waited (impulse resisted)
- → Proceeded (made purchase)
- ⏸️ Delayed (saved to cart for later)
- ❌ Cancelled (decided not to buy)

**Visual Design:**
- Timeline format
- Indented to show decision flow
- Color-coded outcomes:
  - Green: Waited/saved
  - Blue: Proceeded with plan
  - Gray: No intervention needed
  - Orange: Cancelled after pause

**Tap Decision:**
Opens detail modal with:
- Full conversation
- Monty's reasoning
- Goal impact calculation
- Similar past decisions

---

## Stats Tab (Family Analytics)

Higher-level data visualizations and comparisons.

### Layout

```
┌─────────────────────────────────┐
│ Family Statistics 📊            │
│ Last 30 days                    │
├─────────────────────────────────┤
│                                 │
│ Overview                        │
│ ┌───────┐ ┌───────┐ ┌───────┐ │
│ │ $103  │ │  87%  │ │  12   │ │
│ │ Saved │ │Resist │ │ Wins  │ │
│ └───────┘ └───────┘ └───────┘ │
│                                 │
│ Habit Strength Trend            │
│ ┌─────────────────────────┐    │
│ │ [Line chart over time]   │    │
│ └─────────────────────────┘    │
│                                 │
│ Goal Progress Velocity          │
│ ┌─────────────────────────┐    │
│ │ [Bar chart by kid]       │    │
│ └─────────────────────────┘    │
│                                 │
│ Impulse Pause Success Rate      │
│ ┌─────────────────────────┐    │
│ │ [Success vs total]       │    │
│ └─────────────────────────┘    │
│                                 │
│ Spending by Day of Week         │
│ ┌─────────────────────────┐    │
│ │ [Bar chart]              │    │
│ └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Overview Cards

Key metrics at-a-glance:

```
┌─────────────────────────────────┐
│ ┌───────┐ ┌───────┐ ┌───────┐ │
│ │ $103  │ │  87%  │ │  12   │ │
│ │ Total │ │Impulse│ │Badges │ │
│ │ Saved │ │Resist │ │Earned │ │
│ │       │ │       │ │       │ │
│ │ ↑ +$23│ │ ↑ +5% │ │ ↑ +3  │ │
│ └───────┘ └───────┘ └───────┘ │
│                                 │
│ ┌───────┐ ┌───────┐ ┌───────┐ │
│ │  18   │ │  3    │ │  92%  │ │
│ │Impulse│ │Active │ │Streak │ │
│ │Pauses │ │Goals  │ │Rate   │ │
│ │       │ │       │ │       │ │
│ │ → Same│ │ ↑ +1  │ │ ↑ +3% │ │
│ └───────┘ └───────┘ └───────┘ │
└─────────────────────────────────┘
```

**Design:**
- 3×2 grid of metric cards
- Large number (32px)
- Label below (14px)
- Change indicator (arrow + delta)
- Color-coded arrows (green up, red down, gray flat)

---

### Component: Habit Strength Trend

Shows how family habit strength has evolved:

```
┌─────────────────────────────────┐
│ Habit Strength Over Time        │
│                                 │
│ 100│                            │
│    │                   ●────●   │
│  75│            ●──●──┘         │
│    │       ●──●─┘               │
│  50│    ●─┘                     │
│    │ ●─┘                        │
│  25│                            │
│   └────────────────────────────│
│    W1  W2  W3  W4  W5  W6  W7  │
│                                 │
│ Family: 73 (↑ +8 from Week 1)   │
│ Emma: 78 • Lucas: 68            │
│                                 │
│ [Export Data]                   │
└─────────────────────────────────┘
```

**Features:**
- Line chart showing 8 weeks of history
- Multiple lines if multiple kids (color-coded)
- Hover/tap point → see exact score + date
- Export to CSV

---

### Component: Goal Progress Velocity

How fast are kids progressing toward their goals?

```
┌─────────────────────────────────┐
│ Goal Progress Velocity          │
│ How fast they're saving         │
│                                 │
│ Emma                            │
│ ▓▓▓▓▓▓▓▓▓░ 85%                 │
│ On track (ahead by 1 week)      │
│                                 │
│ Lucas                           │
│ ▓▓▓▓▓▓░░░░ 60%                 │
│ Slightly behind schedule        │
│                                 │
│ Target: 100% = on schedule      │
│ >100% = ahead • <100% = behind  │
└─────────────────────────────────┘
```

**Calculation:**
```
Velocity = (actual_progress / expected_progress) × 100
Expected = (current_date - start_date) / (target_date - start_date)
```

---

### Component: Impulse Pause Success

How often do kids wait when Monty suggests it?

```
┌─────────────────────────────────┐
│ Impulse Pause Success Rate      │
│                                 │
│      [Donut Chart]              │
│         87%                     │
│                                 │
│ ✓ Waited: 15 times              │
│ → Proceeded: 2 times            │
│ ⏸️ Delayed: 1 time              │
│                                 │
│ Total interventions: 18         │
│ Amount saved: $287              │
└─────────────────────────────────┘
```

**Visual:**
- Large donut chart showing success %
- Breakdown by outcome
- Total saved amount highlighted

---

### Component: Spending by Day of Week

When is spending highest?

```
┌─────────────────────────────────┐
│ Spending by Day of Week         │
│                                 │
│ $60│                            │
│    │                         ▓  │
│ $40│                 ▓   ▓   ▓  │
│    │         ▓   ▓   ▓   ▓   ▓  │
│ $20│     ▓   ▓   ▓   ▓   ▓   ▓  │
│    │ ▓   ▓   ▓   ▓   ▓   ▓   ▓  │
│   └────────────────────────────│
│    Sun Mon Tue Wed Thu Fri Sat  │
│                                 │
│ Highest: Friday ($52 avg)       │
│ Lowest: Sunday ($12 avg)        │
└─────────────────────────────────┘
```

---

## Insights Tab (AI Intelligence)

Monty's analysis and recommendations for parents.

### Layout

```
┌─────────────────────────────────┐
│ AI Insights 🧠                  │
│ Generated by Monty              │
├─────────────────────────────────┤
│                                 │
│ [Filter: All Types ▼] [Emma ▼] │
│                                 │
│ This Week (3 insights)          │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 🎯 Positive Pattern     │    │
│ │ Emma                    │    │
│ │                         │    │
│ │ "Emma's impulse rate    │    │
│ │  dropped 66% in last    │    │
│ │  3 weeks (6→2 per week)"│    │
│ │                         │    │
│ │ Impact: High            │    │
│ │ Confidence: 94%         │    │
│ │                         │    │
│ │ [View Details]          │    │
│ └─────────────────────────┘    │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 💡 Opportunity          │    │
│ │ Lucas                   │    │
│ │                         │    │
│ │ "Lucas asks about items │    │
│ │  but rarely follows     │    │
│ │  through. Great impulse │    │
│ │  control! Consider      │    │
│ │  celebrating this."     │    │
│ │                         │    │
│ │ [Send Congrats]         │    │
│ └─────────────────────────┘    │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 📊 Pattern Detected     │    │
│ │ Emma                    │    │
│ │                         │    │
│ │ "Emma shops primarily   │    │
│ │  8-10pm on school nights│    │
│ │  Try: 'Morning check-in'│    │
│ │  rule for evening carts"│    │
│ │                         │    │
│ │ [Create Rule]           │    │
│ └─────────────────────────┘    │
│                                 │
│ Last Week (2 insights)          │
│ [Show older insights]           │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Insight Card

Detailed insight with context and actions:

```
┌─────────────────────────────────┐
│ 🎯 Positive Pattern             │
│ Emma • High Impact              │
├─────────────────────────────────┤
│                                 │
│ Insight:                        │
│ "Emma's impulse purchase rate   │
│  has dropped by 66% over the    │
│  last 3 weeks (from 6 per week  │
│  to 2 per week)"                │
│                                 │
│ Why This Matters:               │
│ This shows strong development   │
│ of self-control and delayed     │
│ gratification—critical skills   │
│ that predict financial success. │
│                                 │
│ Evidence:                       │
│ • Week 1: 6 impulse purchases   │
│ • Week 2: 4 impulse purchases   │
│ • Week 3: 2 impulse purchases   │
│                                 │
│ What Changed:                   │
│ Emma started actively using her │
│ skateboard goal as a reference  │
│ point. Monty's "opportunity     │
│ cost" framing is resonating.    │
│                                 │
│ Suggested Action:               │
│ Celebrate this progress!        │
│ Consider a bonus or special     │
│ acknowledgment to reinforce.    │
│                                 │
│ Confidence: 94%                 │
│ Generated: Feb 7, 2026          │
│                                 │
│ [Send Congrats] [Dismiss]       │
└─────────────────────────────────┘
```

---

### Insight Types in Detail

#### 🎯 Positive Pattern
- Celebrates improvement
- Shows data/evidence
- Suggests reinforcement
- High confidence (>80%)

#### ⚠️ Risk Pattern
```
┌─────────────────────────────────┐
│ ⚠️ Risk Pattern                 │
│ Lucas • Medium Impact           │
├─────────────────────────────────┤
│                                 │
│ Insight:                        │
│ "Lucas hasn't added to his      │
│  LEGO fund in 2 weeks. Goal     │
│  timeline is slipping."         │
│                                 │
│ Potential Issue:                │
│ When kids lose momentum, goals  │
│ can feel unattainable and lead  │
│ to abandonment.                 │
│                                 │
│ Suggested Actions:              │
│ 1. Check in: "Still excited     │
│    about the LEGO set?"         │
│ 2. Adjust goal if too high      │
│ 3. Add milestone reward at 50%  │
│                                 │
│ [Message Lucas] [Adjust Goal]   │
└─────────────────────────────────┘
```

#### 💡 Opportunity
```
┌─────────────────────────────────┐
│ 💡 Opportunity                  │
│ Emma • High Impact              │
├─────────────────────────────────┤
│                                 │
│ Insight:                        │
│ "Emma successfully resisted     │
│  impulse purchases 4 times this │
│  week but we haven't celebrated │
│  this pattern yet."             │
│                                 │
│ Why Act Now:                    │
│ Positive reinforcement within   │
│ 48 hours of behavior is most    │
│ effective for habit formation.  │
│                                 │
│ Suggested Message:              │
│ "I noticed you waited on buying │
│  4 things this week! That takes │
│  real discipline. Proud of you!"│
│                                 │
│ [Send This Message]             │
│ [Write Custom Message]          │
└─────────────────────────────────┘
```

#### 📊 Pattern Detected
```
┌─────────────────────────────────┐
│ 📊 Pattern Detected             │
│ Family-wide • Info              │
├─────────────────────────────────┤
│                                 │
│ Observation:                    │
│ "Most impulse purchases happen  │
│  on Friday evenings after 8pm"  │
│                                 │
│ Data:                           │
│ • Fridays: 12 impulse events    │
│ • Other days: avg 2 events      │
│ • Peak time: 8-10pm             │
│                                 │
│ Context:                        │
│ End-of-week fatigue reduces     │
│ self-control. This is normal!   │
│                                 │
│ Options:                        │
│ • No action needed (awareness)  │
│ • Set Friday "pause" reminder   │
│ • Review carts Saturday morning │
│                                 │
│ [Create Reminder] [Ignore]      │
└─────────────────────────────────┘
```

#### 🧠 Learning Moment
```
┌─────────────────────────────────┐
│ 🧠 Learning Moment              │
│ Emma • Teaching Opportunity     │
├─────────────────────────────────┤
│                                 │
│ Situation:                      │
│ "Emma asked Monty: 'Why can't   │
│  I just buy it and save less    │
│  next week?'"                   │
│                                 │
│ Monty's Response:               │
│ [Shows conversation]            │
│                                 │
│ Why This Is Good:               │
│ Emma is engaging with financial │
│ concepts (opportunity cost,     │
│ trade-offs). These questions    │
│ show active learning.           │
│                                 │
│ Parent Follow-up Idea:          │
│ "I saw you asked Monty about    │
│  saving vs spending. Want to    │
│  talk about how I handle this?" │
│                                 │
│ [Start Conversation]            │
└─────────────────────────────────┘
```

---

## Settings Tab

Family configuration and account management.

### Layout

```
┌─────────────────────────────────┐
│ Settings ⚙️                     │
├─────────────────────────────────┤
│                                 │
│ Family Profile                  │
│ ┌─────────────────────────┐    │
│ │ The Johnsons            │    │
│ │ Parent: Sarah           │    │
│ │ Kids: Emma, Lucas       │    │
│ │ [Edit Family]           │    │
│ └─────────────────────────┘    │
│                                 │
│ Kids Management                 │
│ ────────────────────────────    │
│ 🦊 Emma (age 10)                │
│    Allowance: $10/week          │
│    [Edit] [View Code]           │
│                                 │
│ 🐰 Lucas (age 7)                │
│    Allowance: $5/week           │
│    [Edit] [View Code]           │
│                                 │
│ [+ Add Another Kid]             │
│                                 │
│ Account Connection              │
│ ────────────────────────────    │
│ ✓ Connected to Capital One      │
│ Checking: ****1234              │
│ [Manage Connection]             │
│                                 │
│ Notifications                   │
│ ────────────────────────────    │
│ Goal milestones        [ON]     │
│ Weekly summaries       [ON]     │
│ Risk alerts            [ON]     │
│ AI insights            [ON]     │
│ Kid messages           [ON]     │
│                                 │
│ Privacy & Security              │
│ ────────────────────────────    │
│ Parent PIN: ****                │
│ [Change PIN]                    │
│ Two-factor auth        [OFF]    │
│                                 │
│ Data & Export                   │
│ ────────────────────────────    │
│ Export transaction history      │
│ Download reports                │
│ Delete family data              │
│                                 │
│ About                           │
│ ────────────────────────────    │
│ Version 1.0.0                   │
│ Privacy Policy                  │
│ Terms of Service                │
│ Contact Support                 │
│                                 │
│ [Log Out]                       │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Kid Management

Edit individual kid settings:

```
┌─────────────────────────────────┐
│ Edit Kid Settings               │
│ 🦊 Emma                         │
├─────────────────────────────────┤
│                                 │
│ Basic Info                      │
│ Name: [Emma________]            │
│ Age: [10]                       │
│ Avatar: 🦊 [Change]             │
│                                 │
│ Allowance Settings              │
│ Weekly amount: $[___10___]      │
│ Day: [Saturday ▼]               │
│ Auto-deposit: [ON]              │
│                                 │
│ Permissions                     │
│ Can create goals:     [ON]      │
│ Max goal value:  $[___500__]    │
│ Needs approval for   $[___50+_] │
│                                 │
│ Monty Settings                  │
│ Intervention level:             │
│ ( ) Light (big purchases only)  │
│ (•) Normal (balanced)           │
│ ( ) Active (all purchases)      │
│                                 │
│ Chat with Monty:     [ON]       │
│                                 │
│ Join Code                       │
│ Current: A3F-9K2                │
│ [Generate New Code]             │
│                                 │
│ Danger Zone                     │
│ [Remove Kid from Family]        │
│                                 │
│ [Cancel]              [Save]    │
└─────────────────────────────────┘
```

---

### Component: Notification Preferences

Fine-grained control over alerts:

```
┌─────────────────────────────────┐
│ Notification Preferences        │
│                                 │
│ Goal Progress                   │
│ ☑ 25% milestone reached         │
│ ☑ 50% milestone reached         │
│ ☑ 75% milestone reached         │
│ ☑ Goal completed                │
│                                 │
│ Behavioral Alerts               │
│ ☑ Impulse purchase resisted     │
│ ☑ Unusual spending detected     │
│ ☑ Streak milestone (7, 14, 30d) │
│ □ Every streak day              │
│                                 │
│ AI Insights                     │
│ ☑ High-impact insights          │
│ ☑ Risk patterns detected        │
│ □ All insights (can be many)    │
│                                 │
│ Weekly Summary                  │
│ ☑ Send every Sunday at 6pm      │
│ Day: [Sunday ▼]                 │
│ Time: [6:00 PM ▼]               │
│                                 │
│ Kid Communications              │
│ ☑ Kid sends message             │
│ ☑ Kid asks for approval         │
│                                 │
│ Delivery Method                 │
│ ☑ Push notification             │
│ ☑ Email (sarah@example.com)     │
│ □ SMS (for urgent only)         │
│                                 │
│ Quiet Hours                     │
│ [9:00 PM] to [7:00 AM]          │
│ (Urgent only during quiet time) │
│                                 │
│ [Cancel]              [Save]    │
└─────────────────────────────────┘
```

---

## Advanced Features

### Decision Pipeline Flowchart

Visualize how Monty made a decision (for Conway track judges):

```
┌─────────────────────────────────┐
│ Decision Pipeline               │
│ Sony Headphones • $45           │
├─────────────────────────────────┤
│                                 │
│   [Product Detected]            │
│         │                       │
│         ↓                       │
│   [Check Memory]                │
│   ✓ No suppression              │
│         │                       │
│         ↓                       │
│   [Impulse Score: 0.78]         │
│   HIGH                          │
│         │                       │
│         ↓                       │
│   [Goal Impact]                 │
│   37% of skateboard fund        │
│         │                       │
│         ↓                       │
│   [Decision: PAUSE]             │
│         │                       │
│         ↓                       │
│   [Show Overlay]                │
│   "Wait & Win" offer            │
│                                 │
└─────────────────────────────────┘
```

**Built with React Flow:**
- Nodes: Steps in decision process
- Edges: Flow between steps
- Interactive: Click node to see details
- Export as image

---

### Weekly Summary Report

Automated report sent to parents:

```
┌─────────────────────────────────┐
│ Weekly Summary                  │
│ Feb 1-7, 2026                   │
├─────────────────────────────────┤
│                                 │
│ 🎉 Great week!                  │
│                                 │
│ Highlights:                     │
│ • Emma reached 2-week streak    │
│ • Lucas saved $15 this week     │
│ • 5 impulse purchases avoided   │
│ • $87 total saved               │
│                                 │
│ Progress Update:                │
│ Emma's Skateboard: 68% (↑ +12%) │
│ Lucas's LEGO Set: 30% (↑ +8%)   │
│                                 │
│ Skill Development:              │
│ Emma showed strong impulse      │
│ control this week, resisting    │
│ 4 potential purchases.          │
│                                 │
│ This Week's Focus:              │
│ Lucas is close to 50% on his    │
│ LEGO goal—celebrate when he     │
│ reaches it!                     │
│                                 │
│ [View Full Dashboard]           │
└─────────────────────────────────┘
```

---

## Responsive Design

### Mobile (375px-768px)
- Single column layout
- Bottom nav always visible
- Cards stack vertically
- Charts simplify (fewer data points)
- Swipe gestures for navigation

### Tablet (768px-1024px)
- Two-column layout where appropriate
- Side nav option
- More detailed charts
- Split-screen view for kid comparison

### Desktop (1024px+)
- Three-column dashboard
- Persistent side navigation
- Full-featured charts with all data
- Multi-kid comparison view
- Expanded tooltips and details

---

## Technical Implementation

### State Management

```javascript
interface ParentDashboardState {
  family: {
    id: string;
    name: string;
    parentName: string;
    kids: Kid[];
  };
  
  selectedKidId?: string; // For family tab
  
  habitScores: {
    family: HabitScore;
    byKid: Record<string, HabitScore>;
    history: HabitScoreHistory[];
  };
  
  goals: Goal[];
  
  activity: Activity[];
  
  insights: Insight[];
  
  analytics: {
    spending: SpendingAnalytics;
    patterns: Pattern[];
    comparisons: Comparison[];
  };
  
  preferences: ParentPreferences;
}
```

### API Endpoints

```javascript
// Family Overview
GET /api/parent/{parent_id}/dashboard
Response: {
  family: FamilyData,
  habitScores: HabitScoreData,
  goals: Goal[],
  recentActivity: Activity[],
  topInsights: Insight[]
}

// Individual Kid Detail
GET /api/parent/{parent_id}/kid/{kid_id}/detail
Response: {
  kid: KidData,
  habitScore: HabitScore,
  goals: Goal[],
  spending: SpendingAnalytics,
  memories: Memory[],
  decisions: Decision[]
}

// Analytics Data
GET /api/parent/{parent_id}/analytics
Query params: ?timeframe=30d&kid_id={optional}
Response: {
  overview: OverviewMetrics,
  trends: TrendData[],
  patterns: Pattern[],
  comparisons: Comparison[]
}

// AI Insights
GET /api/parent/{parent_id}/insights
Query params: ?type={all|positive|risk|opportunity}&kid_id={optional}
Response: {
  insights: Insight[],
  totalCount: number
}

// Send Bonus
POST /api/parent/{parent_id}/send-bonus
Body: {
  kidId: string,
  amount: number,
  reason: string,
  goalId?: string
}
Response: { success: boolean, newBalance: number }

// Send Message
POST /api/parent/{parent_id}/send-message
Body: {
  kidId: string,
  message: string,
  type: 'encouragement' | 'question' | 'general'
}
Response: { success: boolean, deliveredAt: string }
```

---

## Performance Optimizations

### Data Fetching
- Cache dashboard data (2 min TTL)
- Lazy load charts (only when visible)
- Paginate activity feed
- Background refresh for insights

### Chart Rendering
- Use canvas for complex charts (better performance)
- Limit data points on mobile
- Debounce zoom/pan interactions
- Virtual scroll for long lists

### Image/Asset Optimization
- Compress kid avatars
- Lazy load goal images
- Use SVG for icons
- Preload critical assets

---

## Accessibility

### Screen Reader
- All charts have text alternatives
- Data tables for complex visualizations
- Insight cards fully navigable
- Announcements for important updates

### Keyboard Navigation
- All interactive elements keyboard-accessible
- Shortcuts for common actions
- Focus management in modals
- Skip navigation links

### Color Contrast
- All text meets WCAG AA
- Charts use patterns + color
- High contrast mode available

---

This parent dashboard transforms transaction tracking into behavior understanding. Parents see not just *what* their kids spend, but *how* they're developing financial judgment—and that's the real value.
