# BiggyPank Kid Dashboard
## Mobile-First Financial Gaming Experience for Children

---

## Overview

The Kid Dashboard is where young users interact with BiggyPank daily. It's their personal financial command center disguised as a game. Every interaction should feel rewarding, visual, and age-appropriate. This is NOT a banking app – it's a companion that makes saving money feel like leveling up in their favorite game.

**Core Principle:** Kids should WANT to open this app every day, not because they have to, but because it's genuinely fun and rewarding.

---

## Design Philosophy

### What This IS
✅ A game about reaching goals  
✅ A friendly companion (Monty) who celebrates wins  
✅ A visual progress tracker that feels exciting  
✅ A source of pride and achievement  
✅ Safe, positive, age-appropriate  

### What This Is NOT
❌ A boring banking interface  
❌ A place to see all transactions (that's for parents)  
❌ Overwhelming with numbers and charts  
❌ Preachy or condescending  
❌ Focused on restrictions  

---

## Visual Language

### Color Palette (Kid-Optimized)
```
Primary: #0EA5A0 (teal) - Energetic, friendly
Secondary: #8B5CF6 (purple) - Magical, special
Accent: #F59E0B (orange) - Excitement, celebration
Success: #10B981 (green) - Progress, growth
Background: #F8FAFC (soft white) - Clean, airy
Cards: #FFFFFF - Elevated, important

Gradients:
- Goal progress: teal → blue → purple (as they progress)
- Streak fire: orange → red → yellow
- Celebration: multi-color confetti
```

### Typography
```
Headers: Fredoka (28-36px, bold) - Playful, rounded
Body: DM Sans (16-18px) - Readable, friendly
Numbers/Money: Space Mono (20-32px, bold) - Special, important
Labels: DM Sans (14px, medium) - Clear, subtle
```

### Iconography
- Emojis for quick recognition (🛹 🎮 🔥 🏆)
- Rounded, playful custom icons
- Large, tappable (minimum 44px)
- Colorful, not flat gray

---

## Screen Structure

### Bottom Navigation (5 Tabs)

```
┌─────────────────────────────────┐
│                                 │
│     [MAIN CONTENT AREA]         │
│                                 │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ 🏠    🎯    📊    🐧    ⚙️      │
│Home  Goals Stats Monty Settings │
└─────────────────────────────────┘
```

#### Tab Specifications

**🏠 Home Tab** (Default)
- Hero: Monty companion + streak
- Quick goal progress overview
- Recent wins/achievements
- Today's challenge (if any)

**🎯 Goals Tab**
- All savings goals (detailed)
- Add new goal button
- Goal timeline view
- Milestone celebrations

**📊 Stats Tab**
- Kid-friendly visualizations
- Streak calendar
- Badges & achievements
- Personal records

**🐧 Monty Tab**
- Chat with Monty
- Ask questions
- Get advice
- View tips & tricks

**⚙️ Settings Tab**
- Profile (avatar, name)
- Notifications preferences
- Help & support
- Parent controls lock

---

## Home Tab (Main Screen)

### Layout Structure

```
┌─────────────────────────────────┐
│ 👋 Hi, Emma!             14🔥   │ ← Header with streak
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐   │
│  │   [MONTY COMPANION]     │   │ ← Animated, reactive
│  │   "Great job today!"    │   │
│  │   🐧 Happy • 14 day     │   │
│  └─────────────────────────┘   │
│                                 │
│  Your Goals 🎯               ↗  │ ← Section header
│  ┌─────────────────────────┐   │
│  │ 🛹 Skateboard            │   │
│  │ ▓▓▓▓▓▓▓▓░░░ 68%         │   │ ← Chunky progress
│  │ $68 of $120 • $52 to go │   │
│  │ 📅 5 weeks left          │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🎮 Gaming Fund           │   │
│  │ ▓▓░░░░░░░░░ 20%          │   │
│  │ $12 of $60 • $48 to go   │   │
│  │ 📅 10 weeks left         │   │
│  └─────────────────────────┘   │
│                                 │
│  Recent Wins 🏆                 │
│  • Waited on candy → +$3 💰     │
│  • Packed lunch 5x → +$15 🎉    │
│  • Reached 2 week streak → +1🔥 │
│                                 │
│  [View All Goals]               │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Header Bar

```
┌─────────────────────────────────┐
│ 👋 Hi, Emma!             14🔥   │
│ Saturday, Feb 7                 │
└─────────────────────────────────┘
```

**Elements:**
- Greeting with name (changes based on time of day)
  - "Good morning, Emma!" (6am-12pm)
  - "Hi, Emma!" (12pm-6pm)
  - "Good evening, Emma!" (6pm-10pm)
  - "Night owl, Emma! 🦉" (10pm-6am)
- Date in friendly format
- Streak counter (right aligned, prominent)

**Streak Counter:**
- Shows flame emoji + number
- Tap to see streak details
- Pulses when they've maintained streak today
- Changes color based on streak length:
  - 1-6 days: Orange flame
  - 7-13 days: Red flame
  - 14+ days: Rainbow/animated flame

**Interaction:**
- Tap greeting → Profile quick view
- Tap streak → Streak detail modal

---

### Component: Monty Companion Card

The emotional heart of the home screen. Monty is ALIVE and reacts to the kid's behavior.

```
┌─────────────────────────────────┐
│                                 │
│           🐧                    │
│        (animated)               │
│                                 │
│    "Great job today!"           │
│                                 │
│    Happy • 14 day streak        │
│                                 │
└─────────────────────────────────┘
```

**Visual Design:**
- Large card, rounded corners (24px)
- Gradient background (changes with mood)
- Monty animation (Lottie or CSS)
- Message text (16-18px, centered)
- Status indicator (emoji + text)

**Monty States & Messages:**

| State | Emoji | Background | Message Examples | When Shown |
|-------|-------|------------|------------------|------------|
| Happy | 🐧 | Teal → Blue | "Great job today!"<br>"You're doing awesome!"<br>"I'm proud of you!" | Default, good progress |
| Excited | 🎉 | Orange → Yellow | "You're on fire! 🔥"<br>"Incredible streak!"<br>"Almost there!" | Near goal, high streak |
| Celebrating | 🎊 | Rainbow | "You did it! 🎉"<br>"Goal reached!"<br>"Amazing work!" | Goal completed |
| Encouraging | 💪 | Purple → Pink | "Keep going!"<br>"You've got this!"<br>"Small steps count!" | Slow progress |
| Thinking | 🤔 | Blue → Purple | "Hmm, interesting..."<br>"Let me check..." | After impulse pause |
| Neutral | 🐧 | Soft Blue | "Let's keep going!"<br>"New day, new wins!" | No recent activity |

**Animation Behaviors:**
- Idle: Gentle breathing (2s loop)
- Happy: Bounce up and down
- Excited: Jump with rotation
- Celebrating: Confetti burst around
- Encouraging: Pumping fists
- Thinking: Tilt head, scratch chin

**Interaction:**
- Tap Monty → Opens chat (Monty tab)
- Long press → Monty does special animation
- Haptic feedback on tap

**Dynamic Messages:**
Monty's message updates based on context:
- Morning: "Good morning! Ready to save today?"
- After purchase: "Nice choice waiting on that!"
- Near goal: "Only $12 to go for your skateboard!"
- New week: "New week, new goals! Let's go!"
- Birthday: "Happy birthday! 🎂 Here's a special bonus!"

---

### Component: Goal Progress Cards

Simplified, visual, exciting version of goals.

```
┌─────────────────────────────────┐
│ 🛹 Skateboard                   │
│                                 │
│ ▓▓▓▓▓▓▓▓░░░                   │  ← Chunky bar
│                                 │
│ $68 of $120 • $52 to go         │
│ 📅 5 weeks left                 │
│                                 │
│ [+Add Money] [View Details]     │
└─────────────────────────────────┘
```

**Design Specifications:**

**Progress Bar:**
- Height: 32px (chunky, not subtle)
- Border-radius: 16px (pill shape)
- Segments: Show 10-12 segments (like health bar in games)
- Colors: Gradient that changes with progress
  - 0-33%: Purple → Blue
  - 34-66%: Blue → Teal
  - 67-100%: Teal → Green
- Animation: Fill animates when card appears (1s duration)
- Glow effect when near completion (>90%)

**Text Hierarchy:**
```
🛹 Skateboard           ← Goal name (20px, bold)
$68 of $120             ← Progress (18px, bold)
$52 to go               ← Remaining (16px, medium, muted)
📅 5 weeks left         ← Timeline (14px, regular, muted)
```

**Action Buttons:**
- [+ Add Money]: Log manual contribution
- [View Details]: Go to goal detail page

**Interaction States:**

**On Tap Card:**
- Scale: 1.0 → 0.98 → 1.0 (press effect)
- Navigate to goal detail page

**On Milestone Reached:**
- Confetti burst from card
- Card pulses with glow
- Monty appears and celebrates
- Achievement badge unlocks

**Special States:**

*Almost Done (90%+):*
```
┌─────────────────────────────────┐
│ 🛹 Skateboard                   │
│ ⭐ Almost there! ⭐             │
│ ▓▓▓▓▓▓▓▓▓▓▓▓ 92%               │
│ Just $10 to go!                 │
└─────────────────────────────────┘
```
- Animated sparkles around card
- Progress bar has pulsing glow
- "Almost there!" badge

*Completed:*
```
┌─────────────────────────────────┐
│ 🛹 Skateboard                   │
│ 🎉 Goal Reached! 🎉             │
│ ▓▓▓▓▓▓▓▓▓▓▓▓ 100%              │
│ $120 of $120 • You did it!      │
│ [Claim Reward] [Set New Goal]   │
└─────────────────────────────────┘
```
- Rainbow gradient progress bar
- Confetti animation
- Celebration sound/haptic
- Options to claim or set next goal

---

### Component: Recent Wins Feed

Quick wins and achievements that make kids feel good.

```
Recent Wins 🏆
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Waited on candy → +$3 💰
  2 hours ago

• Packed lunch 5x → +$15 🎉  
  Yesterday

• Reached 2 week streak → +1🔥
  Today

[View All Achievements]
```

**Design:**
- Simple list, no heavy UI
- Emoji + action + reward
- Timestamp in relative format
- Max 3 items on home screen
- Tap to see full achievement history

**Types of Wins:**
- **Impulse Pause:** "Waited on [item]"
- **Streak Milestone:** "Reached N day streak"
- **Goal Contribution:** "Added $X to [goal]"
- **Weekly Challenge:** "Packed lunch Nx"
- **Special:** Parent bonus, birthday gift

**Animation:**
- New wins slide in from bottom
- Pulse briefly when added
- Confetti micro-burst for big wins

---

## Goals Tab (Detailed View)

Full view of all savings goals with more detail and control.

### Layout

```
┌─────────────────────────────────┐
│ Your Goals 🎯                   │
│ 2 active • $80 total saved      │
├─────────────────────────────────┤
│                                 │
│ [ACTIVE GOALS]                  │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 🛹 Skateboard           │    │
│ │ (Expanded card)         │    │
│ │ - Timeline view         │    │
│ │ - Contribution history  │    │
│ │ - Adjust target         │    │
│ └─────────────────────────┘    │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 🎮 Gaming Fund          │    │
│ │ (Collapsed card)        │    │
│ └─────────────────────────┘    │
│                                 │
│ [COMPLETED GOALS] (collapsible) │
│                                 │
│ ┌─────────────────────────┐    │
│ │ 🎧 Headphones ✓         │    │
│ │ Completed Jan 15        │    │
│ └─────────────────────────┘    │
│                                 │
│ [+ Add New Goal]                │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Detailed Goal Card

When a goal is tapped/expanded, show full details:

```
┌─────────────────────────────────┐
│ 🛹 Skateboard                   │
│                                 │
│ ▓▓▓▓▓▓▓▓░░░░░░ 68%            │
│                                 │
│ Progress                        │
│ ────────────────────────────── │
│ $68 saved                       │
│ $52 to go                       │
│ Target: $120                    │
│                                 │
│ Timeline 📅                     │
│ ────────────────────────────── │
│ Started: Jan 1                  │
│ Goal date: Mar 15               │
│ Weeks left: 5 weeks             │
│                                 │
│ Weekly Plan 💪                  │
│ ────────────────────────────── │
│ Your allowance: $10/week        │
│ On track to finish: Mar 15      │
│                                 │
│ Recent Contributions            │
│ ────────────────────────────── │
│ • Feb 6: +$10 (allowance)       │
│ • Feb 3: +$5 (bonus)            │
│ • Jan 30: +$10 (allowance)      │
│                                 │
│ Actions                         │
│ ────────────────────────────── │
│ [+ Add Money Now]               │
│ [✏️ Edit Goal]                  │
│ [🎨 Change Photo]               │
│ [🗑️ Delete Goal]               │
│                                 │
└─────────────────────────────────┘
```

**Edit Goal Modal:**
- Adjust target amount
- Change goal name
- Update photo/emoji
- Set target date (optional)
- Adjust weekly contribution (shows impact on timeline)

**Add Money Modal:**
```
┌─────────────────────────────────┐
│ Add to Skateboard Fund 🛹       │
│                                 │
│ How much?                       │
│ $ [_____] 10                    │
│                                 │
│ Quick amounts:                  │
│ [$5] [$10] [$20] [$50]          │
│                                 │
│ Source:                         │
│ ( ) Allowance                   │
│ (•) Bonus/Gift                  │
│ ( ) Other                       │
│                                 │
│ Note (optional):                │
│ "Sold old toys"                 │
│                                 │
│ [Cancel]              [Add it!] │
└─────────────────────────────────┘
```

---

### Component: Goal Timeline Visualization

Visual timeline showing progress over time:

```
Goal Timeline: Skateboard 🛹
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jan 1        Feb 1        Mar 1     Mar 15
  │            │            │          │
  ●────────────●────────────●──────────○
  $0          $40          $68       $120
  Start    On Track!     You are    Goal!
                           here
                            ↑

▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 68%

Milestones:
✓ $30 - First month! (Jan 29)
✓ $60 - Halfway there! (Feb 20)
○ $90 - Almost done! (Est. Mar 1)
○ $120 - Goal reached! (Est. Mar 15)
```

**Features:**
- Horizontal timeline with key dates
- Current position marked clearly
- Past milestones checked off
- Future milestones with estimated dates
- Visual progress bar below
- Confetti when milestone is reached

---

### Component: Add New Goal Button

```
┌─────────────────────────────────┐
│                                 │
│         + Add New Goal          │
│                                 │
│   What are you saving for?      │
│                                 │
└─────────────────────────────────┘
```

**On Tap:**
Opens same goal creation flow from onboarding:
1. Choose preset or custom
2. Set target amount
3. Add photo (optional)
4. Weekly contribution

**Goal Limit:**
- Maximum 5 active goals
- If at limit: "Finish or archive a goal first!"
- Show suggestion to focus on fewer goals

---

## Stats Tab (Kid-Friendly Analytics)

Data visualization that kids actually understand and care about.

### Layout

```
┌─────────────────────────────────┐
│ Your Stats 📊                   │
│ Week of Feb 1-7                 │
├─────────────────────────────────┤
│                                 │
│ This Week 🗓️                    │
│ ┌───────────────────────────┐  │
│ │ $23 Saved       4 Wins    │  │
│ │ 7 Day Streak    2 Goals   │  │
│ └───────────────────────────┘  │
│                                 │
│ Streak Calendar 🔥              │
│ ┌───────────────────────────┐  │
│ │ S M T W T F S             │  │
│ │ ✓ ✓ ✓ ✓ ✓ ✓ ✓             │  │ ← Checkmarks for each day
│ └───────────────────────────┘  │
│ 14 days • Longest: 20 days     │
│                                 │
│ Badges & Achievements 🏆        │
│ ┌───────────────────────────┐  │
│ │ 🎯 First Goal   🔥 Week    │  │
│ │ 💪 Wait & Win   ⭐ Saver   │  │
│ └───────────────────────────┘  │
│ 12 earned • 8 more to unlock   │
│                                 │
│ Personal Records 📈             │
│ ┌───────────────────────────┐  │
│ │ Longest streak: 20 days   │  │
│ │ Most saved/week: $45      │  │
│ │ Goals completed: 2        │  │
│ │ Best impulse resist: 10x  │  │
│ └───────────────────────────┘  │
│                                 │
│ [View Full History]             │
│                                 │
└─────────────────────────────────┘
```

---

### Component: Week Summary Card

```
┌───────────────────────────────┐
│ This Week 🗓️                  │
│ Feb 1-7                       │
├───────────────────────────────┤
│                               │
│  $23         4                │
│  Saved       Wins             │
│  💰          🏆               │
│                               │
│  7           2                │
│  Day Streak  Active Goals     │
│  🔥          🎯               │
│                               │
└───────────────────────────────┘
```

**Design:**
- 2×2 grid of key metrics
- Large numbers (32px)
- Emoji icons
- Labels below (14px)
- Previous week comparison (optional): "↑ +$5 from last week"

---

### Component: Streak Calendar

Visual calendar showing daily streak progress:

```
Streak Calendar 🔥
14 days strong!

┌────────────────────────────────┐
│  S   M   T   W   T   F   S    │
│  ✓   ✓   ✓   ✓   ✓   ✓   ✓    │
│  ✓   ✓   ✓   ✓   ✓   ✓   ✓    │
│  ○   ○   ○   ○   ○   ○   ○    │  ← Current week
└────────────────────────────────┘

Your longest streak: 20 days 🏆
Current streak: 14 days 🔥
```

**Visual Design:**
- Grid showing last 3 weeks
- Checkmarks for days with activity
- Today highlighted with different color
- Empty circles for future days
- Tap day → See what they did that day

**Streak Rules (Shown in info icon):**
"Your streak grows when you:
• Add money to a goal
• Resist an impulse purchase
• Complete a savings challenge

Don't worry! Your streak pauses on:
• Days with no spending opportunity
• Days you're not online"

---

### Component: Badges & Achievements

Gamification element that rewards behavior:

```
Badges & Achievements 🏆
12 earned • 8 more to unlock

┌─────────────────────────────────┐
│ 🎯  ⭐  🔥  💪  🏅  📈  ✨  🎊 │
│                                 │
│ Tap a badge to see details      │
└─────────────────────────────────┘

Locked Badges (Preview):
🔒 30 Day Streak
🔒 $500 Saved
🔒 5 Goals Completed
```

**Badge Categories:**

| Badge | Name | Requirement | Reward |
|-------|------|-------------|--------|
| 🎯 | First Goal | Create your first goal | Unlocked at onboarding |
| 💪 | Wait & Win | Resist 10 impulse buys | Extra $5 bonus |
| 🔥 | Week Warrior | 7-day streak | Streak multiplier |
| ⭐ | Super Saver | Save $100 total | Avatar customization |
| 🏆 | Goal Crusher | Complete 3 goals | Special Monty animation |
| 💎 | Diamond Hands | 30-day streak | Parent bonus unlock |
| 📈 | Momentum | 5 weeks consistent saving | Unlock new features |
| 🎉 | Big Win | Reach a goal over $200 | Certificate + celebration |

**Badge Detail Modal:**
```
┌─────────────────────────────────┐
│            🔥                   │
│      Week Warrior               │
│                                 │
│  Keep a 7-day savings streak!   │
│                                 │
│  Earned: Feb 7, 2026            │
│  Progress: 7/7 days ✓           │
│                                 │
│  Reward:                        │
│  • 1.5x streak multiplier       │
│  • Special badge on profile     │
│  • Monty celebration            │
│                                 │
│  [Share] [Close]                │
└─────────────────────────────────┘
```

---

### Component: Personal Records

Highlight the kid's best achievements:

```
Personal Records 📈
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 Longest streak
   20 days (Dec 2025)

💰 Most saved in a week
   $45 (Jan 2026)

🎯 Goals completed
   2 goals total

🛡️ Best impulse resist streak
   10 in a row

📅 Days using BiggyPank
   42 days
```

**Design:**
- Simple list format
- Icon + title + value
- Date/context in parentheses
- Celebratory when a new record is set

**New Record Animation:**
- Confetti burst
- "New Record!" banner
- Monty celebrates
- Badge notification (if earned)

---

## Monty Tab (AI Chat Interface)

Chat with Monty for advice, questions, or just to talk.

### Layout

```
┌─────────────────────────────────┐
│ Chat with Monty 🐧              │
│                                 │
├─────────────────────────────────┤
│                                 │
│ [Chat bubbles area]             │
│                                 │
│ Monty: "Hi Emma! How can I      │
│         help you today?"        │
│                                 │
│ Emma:  "Should I buy this game?"│
│                                 │
│ Monty: "Let me check your       │
│         goals... The game costs │
│         $60. That's the same as │
│         your Gaming Fund goal!  │
│         Want to save for it?"   │
│                                 │
│ [Suggested responses]           │
│ [Yes, help me save!]            │
│ [Tell me more]                  │
│ [Maybe later]                   │
│                                 │
├─────────────────────────────────┤
│ [Text input]                    │
│ "Ask me anything..."     [Send] │
└─────────────────────────────────┘
```

---

### Chat Behavior

**Monty's Personality:**
- Friendly, encouraging, never judgmental
- Age-appropriate language
- Uses emojis naturally
- Celebrates wins enthusiastically
- Gentle when discussing challenges
- Suggests, doesn't command

**Sample Interactions:**

*Kid asks about purchase:*
```
Emma: Should I buy these shoes?

Monty: Let me check! 👟 
       How much do they cost?

Emma: $45

Monty: Got it! $45 is about 37% of your 
       skateboard fund ($120 goal).
       
       If you save it instead, you'll get 
       your skateboard 4 weeks sooner! 🛹
       
       What feels right to you?
       
       [Save it] [Buy the shoes] [Unsure]
```

*Kid asks for advice:*
```
Emma: How can I save money faster?

Monty: Great question! Here are some ideas:
       
       💡 Pack lunch instead of buying
       💡 Ask for gift money for goals
       💡 Do extra chores for bonus $
       💡 Wait 24 hours before buying
       
       Which sounds doable for you?
```

*Kid celebrates win:*
```
Emma: I just added $20 to my goal!

Monty: 🎉 AMAZING! That's awesome!
       
       You're now at $88 of $120.
       Just $32 to go! You're so close!
       
       At this rate, you'll get your
       skateboard in just 3 weeks! 🛹
       
       Keep crushing it! 💪
```

**Suggested Responses:**
- After Monty's message, show 2-3 quick tap responses
- Makes conversation easy for kids
- Can still type custom responses
- Suggestions are context-aware

---

### Quick Questions (Shortcuts)

Buttons at top of chat for common questions:

```
Quick Questions:
┌──────────────┐ ┌──────────────┐
│ Help me save │ │ What if I... │
└──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐
│  Goal ideas  │ │ Check my $   │
└──────────────┘ └──────────────┘
```

**On Tap:**
- Instantly sends that question to Monty
- Gets immediate contextual response
- Reduces typing for kids

---

## Settings Tab

Simple, clean settings that kids can understand.

### Layout

```
┌─────────────────────────────────┐
│ Settings ⚙️                     │
├─────────────────────────────────┤
│                                 │
│ Your Profile                    │
│ ┌─────────────────────────┐    │
│ │ 🦊 Emma (age 10)        │    │
│ │ Member since Jan 2026   │    │
│ │ [Edit Profile]          │    │
│ └─────────────────────────┘    │
│                                 │
│ Preferences                     │
│ ────────────────────────────    │
│ Notifications          [ON]     │
│ Sound Effects          [ON]     │
│ Haptic Feedback        [ON]     │
│ Reduced Motion         [OFF]    │
│                                 │
│ Family                          │
│ ────────────────────────────    │
│ The Johnsons                    │
│ Your parent: Sarah              │
│ Your code: A3F-9K2              │
│                                 │
│ Help & Support                  │
│ ────────────────────────────    │
│ How BiggyPank Works             │
│ Tips & Tricks                   │
│ Report a Problem                │
│ Contact Parent                  │
│                                 │
│ About                           │
│ ────────────────────────────    │
│ Version 1.0.0                   │
│ Privacy Policy                  │
│ Terms of Service                │
│                                 │
│ 🔒 Parent Controls              │
│ ────────────────────────────    │
│ [Requires Parent PIN]           │
│                                 │
│ [Log Out]                       │
│                                 │
└─────────────────────────────────┘
```

---

### Edit Profile Modal

```
┌─────────────────────────────────┐
│ Edit Your Profile               │
│                                 │
│ Choose Avatar:                  │
│ 🦊 🐰 🐻 🦁 🐼 🐯 🐸 🐨       │
│ [Selected: 🦊]                  │
│                                 │
│ Display Name:                   │
│ [Emma________]                  │
│                                 │
│ Theme Color:                    │
│ [Teal] [Purple] [Orange] [Blue] │
│                                 │
│ [Cancel]              [Save]    │
└─────────────────────────────────┘
```

**What Kids Can Edit:**
- Avatar emoji
- Display name (not legal name)
- Theme color (accent color throughout app)
- Notification preferences

**What Kids CANNOT Edit:**
- Age
- Family membership
- Account connection
- Parent controls

---

### Notifications Settings

```
Notifications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Goal Milestones
  Get notified when you reach 25%, 50%,
  75% of your goal

☑ Streak Reminders
  Daily reminder to keep your streak alive

☑ Monty Messages
  Get tips and encouragement from Monty

□ Weekly Summary
  See your week's progress every Sunday

☑ Achievement Unlocks
  Celebrate when you earn badges

Quiet Hours: 9:00 PM - 7:00 AM
[Change]
```

---

## Interaction Patterns

### Pull-to-Refresh

On home screen and goals tab:
- Pull down from top
- Monty appears pulling down with you
- Release: Monty jumps up, data refreshes
- Haptic feedback on release

### Swipe Gestures

**Goal Cards:**
- Swipe left → Quick delete (with confirm)
- Swipe right → Quick edit

**Chat Messages:**
- Swipe right on Monty's message → Quick reply suggestions

### Long Press Actions

**Goal Card Long Press:**
- Shows action menu:
  - Quick add money
  - Edit goal
  - Share progress
  - Archive goal

**Badge Long Press:**
- Shows badge details modal
- Option to share achievement

---

## Celebration Animations

### Micro-Celebrations (Frequent)
- Small confetti burst (3-5 particles)
- Quick haptic pulse
- Sound effect (optional, can disable)
- Monty reacts with emoji

**Triggers:**
- Money added to goal
- Streak day completed
- Small milestone reached (25%, 50%)

### Medium Celebrations (Weekly)
- Larger confetti (10-15 particles)
- Medium haptic pattern
- Monty animation (jump/cheer)
- Success sound

**Triggers:**
- Week streak milestone
- 75% of goal reached
- Badge unlocked

### Major Celebrations (Rare)
- Full-screen confetti explosion
- Multi-step haptic sequence
- Monty does victory dance (Lottie)
- Celebratory music
- Share prompt

**Triggers:**
- Goal completed
- Major badge earned (30-day streak)
- Personal record broken

---

## Empty States

### No Goals Yet
```
┌─────────────────────────────────┐
│                                 │
│           🎯                    │
│                                 │
│   No goals yet!                 │
│                                 │
│   What would you like to        │
│   save for?                     │
│                                 │
│   [Create Your First Goal]      │
│                                 │
└─────────────────────────────────┘
```

### No Recent Activity
```
┌─────────────────────────────────┐
│           🐧                    │
│                                 │
│   Quiet day!                    │
│                                 │
│   Want to add money to          │
│   your goal?                    │
│                                 │
│   [Add Money]                   │
│                                 │
└─────────────────────────────────┘
```

### Streak Broken
```
┌─────────────────────────────────┐
│           😔                    │
│                                 │
│   Your streak ended at 14 days  │
│                                 │
│   That's okay! Let's start a    │
│   new one today!                │
│                                 │
│   [Start New Streak]            │
│                                 │
└─────────────────────────────────┘
```

**Important:** Never shame or scold. Always encouraging, forward-looking.

---

## Loading States

### Initial Load
- Monty animation (walking/loading)
- "Getting your goals ready..." message
- Progress indicator (subtle)

### Goal Data Loading
- Skeleton screens (animated placeholders)
- Maintain layout structure
- No jarring content shifts

### Action Feedback
- Button shows loading spinner
- Disable button while processing
- Success/error feedback after action

---

## Technical Implementation Notes

### State Management

```javascript
interface KidDashboardState {
  kid: {
    id: string;
    name: string;
    age: number;
    avatar: string;
    themeColor: string;
  };
  
  goals: Goal[];
  
  streak: {
    currentDays: number;
    longestDays: number;
    lastActivityDate: string;
  };
  
  monty: {
    state: 'happy' | 'excited' | 'celebrating' | 'encouraging' | 'neutral';
    message: string;
    animation: string;
  };
  
  achievements: {
    badges: Badge[];
    recentWins: Win[];
    personalRecords: Record[];
  };
  
  preferences: {
    notifications: boolean;
    soundEffects: boolean;
    hapticFeedback: boolean;
    reducedMotion: boolean;
  };
}
```

### API Endpoints

```javascript
// Kid Dashboard Data
GET /api/kid/{kid_id}/dashboard
Response: {
  goals: Goal[],
  streak: StreakData,
  monty: MontyState,
  achievements: AchievementData,
  recentActivity: Activity[]
}

// Add Money to Goal
POST /api/kid/{kid_id}/goals/{goal_id}/add
Body: { amount: number, source: string, note?: string }
Response: { success: boolean, newBalance: number }

// Chat with Monty
POST /api/kid/{kid_id}/chat
Body: { message: string, context?: object }
Response: { 
  reply: string, 
  suggestedResponses?: string[],
  actions?: Action[]
}

// Update Streak
POST /api/kid/{kid_id}/streak/activity
Body: { activityType: string, timestamp: string }
Response: { 
  streakDays: number, 
  milestoneReached?: boolean,
  badgeUnlocked?: Badge
}
```

### Performance Optimizations

**Image Loading:**
- Use WebP format for images
- Lazy load goal photos
- Cache avatar emojis
- Preload Monty animations

**Animation Performance:**
- Use CSS transforms (GPU-accelerated)
- Limit simultaneous animations
- Pause animations when tab not active
- Respect reduced-motion preference

**Data Fetching:**
- Cache dashboard data (5 min TTL)
- Optimistic updates for quick actions
- Background refresh every 30s when active
- Pull-to-refresh for manual updates

---

## Accessibility

### Screen Reader Support
- All interactive elements have labels
- Progress bars announce percentage
- Monty's messages are read aloud
- Goal milestones are announced

### Keyboard Navigation
- Tab order follows visual flow
- All actions accessible via keyboard
- Shortcuts for common actions (Ctrl+N for new goal)

### Color Contrast
- Text meets WCAG AA (4.5:1 minimum)
- Progress bars have texture patterns (not just color)
- Focus indicators are visible

### Touch Targets
- Minimum 44×44px for all interactive elements
- Generous padding around buttons
- Swipe gestures have alternative tap controls

---

## Testing Scenarios

### User Flow Tests
- [ ] New kid completes onboarding
- [ ] Add money to goal
- [ ] Reach goal milestone (25%, 50%, 75%, 100%)
- [ ] Maintain streak for 7 days
- [ ] Break streak and restart
- [ ] Chat with Monty about purchase decision
- [ ] Unlock badge
- [ ] Create new goal
- [ ] Edit existing goal
- [ ] Share achievement
- [ ] Change avatar/theme

### Edge Cases
- [ ] No goals created yet
- [ ] All goals completed
- [ ] Goal reaches 100% exactly
- [ ] Streak breaks while offline
- [ ] Network error during action
- [ ] Parent deletes account
- [ ] Multiple achievements unlock simultaneously

---

This kid dashboard creates an experience where saving money feels like playing a game they want to win. Every interaction rewards, celebrates, and encourages – never punishes or shames.
