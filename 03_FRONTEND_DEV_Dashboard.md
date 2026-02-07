# MONTY — Frontend Developer
## React Dashboard (Parent + Child Views), Admin Toggle, Visualizations, Flowcharts
### Your Role: You are the face. Judges see YOUR work first and longest.

---

## YOUR MISSION

You own the web dashboard — both parent and child views, the admin toggle to switch between them, and all data visualizations including the decision pipeline flowchart. The dashboard is Scene 2 of the demo (60 seconds of judge attention). It must be visually polished, data-rich, and immediately impressive.

---

## TECHNOLOGIES

| Technology | Purpose | Install |
|-----------|---------|---------|
| **React 18** | UI framework | `npx create-react-app monty-dashboard` |
| **Tailwind CSS** | Styling (fast, consistent) | `npm install -D tailwindcss postcss autoprefixer` |
| **Recharts** | Charts (spending categories, trends, habit score) | `npm install recharts` |
| **React Flow** | Decision pipeline flowchart | `npm install reactflow` |
| **Framer Motion** | Animations (companion, transitions) | `npm install framer-motion` |
| **Lucide React** | Icons | `npm install lucide-react` |
| **Axios** | API calls | `npm install axios` |

---

## HOUR-BY-HOUR PLAN

### Hours 0–2: Setup & Layout
- [ ] Scaffold React + Tailwind project
- [ ] Build page structure: Admin toggle → Parent View / Child View
- [ ] Create API service layer (axios wrapper with base URL)
- [ ] Set up routing: `/parent`, `/child`, `/admin`
- [ ] Coordinate with Backend Dev 1 on API contract

### Hours 2–10: Core Dashboard Build
- [ ] **Parent Dashboard:** Habit Strength Score card, savings goal progress bars, spending category chart, AI insights cards, agent memory log, decision flowchart
- [ ] **Child Dashboard:** Savings goals with progress, streak counter, Monty companion, Wait & Win history, implementation intentions
- [ ] **Admin Toggle:** Simple switch at top that swaps between parent/child views
- [ ] Wire up to Backend API with mock data fallback (don't block on backend)

### Hours 10–16: Integration & Visualizations
- [ ] Connect to live Backend API endpoints
- [ ] Build the decision pipeline flowchart (React Flow)
- [ ] Build spending trend chart (line chart, weekly)
- [ ] Build category breakdown (donut chart or bar chart)
- [ ] Build habit strength trajectory (line chart over time)
- [ ] Animate the Monty companion based on companion_state
- [ ] Polish transitions between parent/child views

### Hours 16–18: Visual Polish
- [ ] Color consistency, typography, spacing
- [ ] Ensure everything looks great on a projector (large text, high contrast)
- [ ] Add loading states and empty states
- [ ] Test the exact demo flow: open dashboard → show parent view → show child view

---

## PAGE STRUCTURE

```
App
├── AdminToggle (sticky top bar)
│   ├── [Parent View] button
│   └── [Child View] button
│
├── ParentDashboard
│   ├── HabitStrengthCard          ← single score 0-100, big and bold
│   ├── SavingsGoalsPanel          ← progress bars for each goal
│   ├── SpendingInsightsPanel      ← AI-generated text insights
│   ├── SpendingCategoryChart      ← donut or bar chart
│   ├── WeeklyTrendChart           ← line chart, weekly totals
│   ├── DecisionFlowchart          ← React Flow visualization
│   ├── AgentMemoryLog             ← list of learned preferences
│   └── QuickActions               ← send encouragement, set allowance
│
└── ChildDashboard
    ├── SavingsGoalCards           ← visual progress with $ amounts
    ├── StreakCounter              ← big number + flame icon
    ├── MontyCompanion             ← animated mascot
    ├── WaitAndWinHistory          ← recent rewards earned
    ├── ImplementationIntentions   ← active if-then plans
    └── RecentCoachingLog          ← recent Monty messages
```

---

## KEY COMPONENTS

### 1. Admin Toggle

```jsx
// AdminToggle.jsx
import { useState } from 'react';

export default function AdminToggle({ onSwitch }) {
  const [view, setView] = useState('parent');
  
  return (
    <div className="fixed top-0 w-full bg-slate-900 text-white py-3 px-6 flex items-center justify-between z-50">
      <div className="flex items-center gap-2">
        <span className="text-teal-400 font-bold text-xl">MONTY</span>
        <span className="text-slate-400 text-sm">Family Financial Coach</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => { setView('parent'); onSwitch('parent'); }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            view === 'parent' 
              ? 'bg-teal-500 text-white' 
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          👨‍👩‍👧 Parent View
        </button>
        <button
          onClick={() => { setView('child'); onSwitch('child'); }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            view === 'child' 
              ? 'bg-teal-500 text-white' 
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          🧒 Child View
        </button>
      </div>
    </div>
  );
}
```

### 2. Habit Strength Score (Parent Dashboard Hero)

This is the first thing the parent sees — make it BIG and impactful. Think credit score display.

```jsx
// HabitStrengthCard.jsx
import { motion } from 'framer-motion';

export default function HabitStrengthCard({ score, components }) {
  const getColor = (s) => s >= 70 ? '#10b981' : s >= 40 ? '#f59e0b' : '#ef4444';
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h2 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">
        Financial Habit Strength
      </h2>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative w-40 h-40 mx-auto mb-4"
      >
        {/* Circular progress ring */}
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="54" fill="none"
            stroke={getColor(score)}
            strokeWidth="8"
            strokeDasharray={`${score * 3.39} 339`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold" style={{ color: getColor(score) }}>
            {score}
          </span>
        </div>
      </motion.div>
      <p className="text-slate-600 text-sm">
        {score >= 70 ? '🌟 Excellent habits!' : score >= 40 ? '📈 Building momentum' : '🌱 Just getting started'}
      </p>
      {/* Component breakdown */}
      <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-slate-500">
        <div>🔥 Streak: {components?.savings_streak_days}d</div>
        <div>🛡️ Impulse resist: {(components?.impulse_resistance_rate * 100).toFixed(0)}%</div>
        <div>🎯 Goal pace: {(components?.goal_progress_velocity * 100).toFixed(0)}%</div>
        <div>📋 Plans completed: {components?.implementation_intentions_completed}</div>
      </div>
    </div>
  );
}
```

### 3. Savings Goals Progress (Used in BOTH dashboards)

```jsx
// SavingsGoalCard.jsx
export default function SavingsGoalCard({ goal }) {
  const pct = (goal.current_amount / goal.target_amount) * 100;
  const remaining = goal.target_amount - goal.current_amount;
  const weeksLeft = goal.weekly_contribution > 0 
    ? Math.ceil(remaining / goal.weekly_contribution) 
    : '∞';
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-slate-800">{goal.name}</h3>
        <span className="text-sm text-slate-500">${goal.current_amount} / ${goal.target_amount}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-3 mb-2">
        <div
          className="h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${Math.min(pct, 100)}%`,
            backgroundColor: pct >= 80 ? '#10b981' : pct >= 50 ? '#3b82f6' : '#6366f1',
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400">
        <span>{pct.toFixed(0)}% complete</span>
        <span>~{weeksLeft} weeks to go</span>
      </div>
    </div>
  );
}
```

### 4. Decision Pipeline Flowchart (React Flow)

This is a KEY differentiator for the demo — it shows judges the AI's decision-making process visually.

```jsx
// DecisionFlowchart.jsx
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodeStyles = {
  input: { background: '#dbeafe', border: '2px solid #3b82f6', borderRadius: 12 },
  check: { background: '#fef3c7', border: '2px solid #f59e0b', borderRadius: 12 },
  process: { background: '#e0e7ff', border: '2px solid #6366f1', borderRadius: 12 },
  decision: { background: '#fce7f3', border: '2px solid #ec4899', borderRadius: 12 },
  output: { background: '#d1fae5', border: '2px solid #10b981', borderRadius: 12 },
};

export default function DecisionFlowchart({ pipelineData }) {
  if (!pipelineData) return null;
  
  const nodes = pipelineData.nodes.map((n, i) => ({
    id: n.id,
    data: { label: n.label },
    position: { x: 250, y: i * 120 },
    style: { ...nodeStyles[n.type], padding: 16, fontSize: 13, width: 300 },
  }));
  
  const edges = pipelineData.edges.map((e, i) => ({
    id: `e${i}`,
    source: e.from,
    target: e.to,
    animated: true,
    style: { stroke: '#6366f1' },
  }));
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4" style={{ height: 600 }}>
      <h2 className="text-slate-800 font-semibold mb-3">
        🧠 AI Decision Pipeline — Last Alert
      </h2>
      <div style={{ height: 520 }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
```

### 5. Spending Category Chart

```jsx
// SpendingCategoryChart.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function SpendingCategoryChart({ categories }) {
  const data = Object.entries(categories).map(([name, values]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value: values.sum,
    count: values.count,
  }));
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-slate-800 font-semibold mb-4">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip formatter={(v) => `$${v.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
```

### 6. Monty Companion (Child Dashboard)

```jsx
// MontyCompanion.jsx
import { motion } from 'framer-motion';

const STATES = {
  happy:   { emoji: '🐧', message: "I'm so proud of you!", bg: 'from-teal-400 to-emerald-500' },
  excited: { emoji: '🎉', message: "You're on fire! Keep it up!", bg: 'from-yellow-400 to-orange-500' },
  neutral: { emoji: '🐧', message: "Let's keep going together!", bg: 'from-blue-400 to-indigo-500' },
  worried: { emoji: '😟', message: "Hmm, let's think about this...", bg: 'from-amber-400 to-red-400' },
};

export default function MontyCompanion({ state = 'happy', streakDays }) {
  const s = STATES[state] || STATES.happy;
  
  return (
    <motion.div 
      className={`bg-gradient-to-br ${s.bg} rounded-2xl p-6 text-white text-center`}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="text-6xl mb-3">{s.emoji}</div>
      <h3 className="font-bold text-lg">Monty</h3>
      <p className="text-white/80 text-sm mt-1">{s.message}</p>
      {streakDays > 0 && (
        <div className="mt-3 bg-white/20 rounded-full px-4 py-1 inline-block">
          🔥 {streakDays} day streak!
        </div>
      )}
    </motion.div>
  );
}
```

### 7. Agent Memory Log (Parent Dashboard)

```jsx
// AgentMemoryLog.jsx
export default function AgentMemoryLog({ memories }) {
  const icons = {
    spending_pattern: '📊',
    user_response: '💬',
    goal_update: '🎯',
    habit_observation: '🧠',
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-slate-800 font-semibold mb-4">🧠 What Monty Has Learned</h2>
      <div className="space-y-3">
        {memories.map((m, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
            <span className="text-xl">{icons[m.memory_type] || '📝'}</span>
            <div className="flex-1">
              <p className="text-sm text-slate-700">{m.content}</p>
              <p className="text-xs text-slate-400 mt-1">
                {new Date(m.created_at).toLocaleDateString()}
                {m.suppress_alerts && ' · 🔇 Alerts suppressed'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## API SERVICE LAYER

```jsx
// api.js
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({ baseURL: API_BASE });

export const familyAPI = {
  getOverview: (familyId) => api.get(`/api/family/${familyId}/overview`),
};

export const childAPI = {
  getGoals: (childId) => api.get(`/api/child/${childId}/goals`),
  getSpending: (childId) => api.get(`/api/child/${childId}/spending`),
  getInsights: (childId) => api.get(`/api/child/${childId}/insights`),
  getStreak: (childId) => api.get(`/api/child/${childId}/streak`),
  getImpulseScores: (childId) => api.get(`/api/child/${childId}/impulse-scores`),
  getMemories: (childId) => api.get(`/api/child/${childId}/memories`),
  getIntentions: (childId) => api.get(`/api/child/${childId}/implementation-intentions`),
};

export const flowchartAPI = {
  getDecisionLog: (childId) => api.get(`/api/flowchart/${childId}/decision-log`),
};

export const parentAPI = {
  setAllowance: (parentId, data) => api.post(`/api/parent/${parentId}/allowance`, data),
};
```

---

## MOCK DATA (Use until backend is live)

Create mock data that matches the exact API contract so you can build independently:

```jsx
// mockData.js
export const MOCK = {
  habitScore: {
    score: 73,
    components: {
      savings_streak_days: 14,
      impulse_resistance_rate: 0.67,
      goal_progress_velocity: 0.85,
      spending_consistency: 0.72,
      implementation_intentions_completed: 3,
    }
  },
  goals: [
    { name: "Skateboard Fund", current_amount: 68, target_amount: 120, weekly_contribution: 10 },
    { name: "Gaming Fund", current_amount: 12, target_amount: 60, weekly_contribution: 5 },
    { name: "College Fund", current_amount: 250, target_amount: 5000, weekly_contribution: 10 },
  ],
  categories: {
    food: { sum: 89.50, count: 12, mean: 7.46 },
    entertainment: { sum: 62.97, count: 3, mean: 20.99 },
    clothing: { sum: 37.00, count: 2, mean: 18.50 },
  },
  memories: [
    { memory_type: "user_response", content: "Chipotle every Saturday is family dinner — non-negotiable", created_at: "2026-01-20", suppress_alerts: true },
    { memory_type: "spending_pattern", content: "Tends to impulse-buy on Amazon between 8-10pm on weekdays", created_at: "2026-01-25", suppress_alerts: false },
    { memory_type: "habit_observation", content: "Has been packing lunch 4/5 days since starting implementation plan", created_at: "2026-02-03", suppress_alerts: false },
  ],
  pipelineData: {
    nodes: [
      { id: "detect", label: "Product: Sony Headphones - $45.00 on Amazon", type: "input" },
      { id: "memory", label: "No suppression — Amazon not in non-negotiable list", type: "check" },
      { id: "score", label: "Impulse Score: 0.78 (HIGH)", type: "process" },
      { id: "goal", label: "Impact: 87% of remaining Skateboard Fund", type: "process" },
      { id: "decision", label: "Decision: IMPULSE PAUSE", type: "decision" },
      { id: "action", label: "Show overlay with Wait & Win offer + goal comparison", type: "output" },
    ],
    edges: [
      { from: "detect", to: "memory" },
      { from: "memory", to: "score" },
      { from: "score", to: "goal" },
      { from: "goal", to: "decision" },
      { from: "decision", to: "action" },
    ]
  }
};
```

---

## INTERFACING WITH OTHER TEAM MEMBERS

### ← Backend Dev 1 (provides your data)
All your data comes from their REST API. Key endpoints:
- `GET /api/family/{id}/overview` → parent dashboard
- `GET /api/child/{id}/goals` → savings goal cards
- `GET /api/child/{id}/spending` → charts + insights
- `GET /api/child/{id}/memories` → memory log
- `GET /api/flowchart/{id}/decision-log` → flowchart data

**Critical:** Use mock data (above) until their API is live. Don't block your progress on them.

### ← Chrome Extension Dev (shared context)
Both of you need the same child profile data. Coordinate on how child_id is stored — likely a shared config or URL parameter.

### Demo Flow
During the demo, the presenter will:
1. Start on Amazon (Chrome Extension's moment)
2. Switch to your dashboard — **this is YOUR moment**
3. Show parent view first (60 seconds — habit score, goals, insights, flowchart)
4. Maybe toggle to child view briefly (companion, streak)

---

## VISUAL DESIGN GUIDELINES

- **Color palette:** Teal (#0EA5A0) as primary, Navy (#1B2A4A) for text, warm accents
- **Font:** Inter or system fonts (fast loading)
- **Cards:** Rounded corners (rounded-2xl), subtle shadows, white backgrounds
- **Charts:** Use the same color palette consistently
- **Projector-friendly:** Large text (min 14px), high contrast, nothing relies on subtle color differences
- **Animations:** Subtle — Framer Motion for entrances, don't make judges wait

---

## DEMO PREP CHECKLIST

Before hour 18, verify:
- [ ] Admin toggle works smoothly between parent and child views
- [ ] Habit Strength Score displays prominently with the score ring animation
- [ ] All 3 savings goals show progress bars
- [ ] Spending category chart renders with real data
- [ ] Decision pipeline flowchart renders with React Flow
- [ ] Agent memory log shows the Chipotle memory with suppression badge
- [ ] Child view shows Monty companion with streak counter
- [ ] Everything loads in < 2 seconds
- [ ] Layout looks great at 1920x1080 (projector resolution)
