# BiggyPank Onboarding Experience Design
## Rocket Money-Style Interactive Questionnaire Flow

---

## Design Philosophy

**NOT THIS:** Forms with input fields, "Next" buttons, progress bars at the top

**THIS:** Conversational journey where each screen is a beautiful, single-focus question with delightful interactions. Users feel like they're having a chat with Monty, not filling out paperwork.

---

## Visual Language

### Screen Transitions
- **Slide animations** between questions (left-to-right flow)
- **Elastic easing** on all interactions (bouncy, playful feel)
- **Micro-celebrations** after each answer (confetti burst, Monty reactions, haptic feedback)
- **Progress indication** via subtle dot navigation at bottom (not a traditional progress bar)

### Interaction Patterns
- **Tap-to-select cards** that grow/shrink with physics
- **Swipeable carousels** for browsing options
- **Drag-to-set sliders** with satisfying snap points
- **Voice of Monty** providing context and encouragement between questions
- **No keyboard unless absolutely necessary** - everything is tappable/swipeable

### Typography Hierarchy
- **Question text:** Large (28-32px), bold, centered, using display font (Fredoka/Rubik)
- **Monty's commentary:** Medium (16-18px), lighter weight, conversational tone
- **Option labels:** Clear (18-20px), high contrast
- **Helper text:** Small (14px), subtle color

---

## Complete Onboarding Flow

### **PRE-FLOW: Splash Screen (0-2 seconds)**
```
Full screen gradient (teal → purple)
Monty logo animates in with bounce
"BiggyPank" wordmark fades up
Auto-transitions to Question 1
```

---

### **Question 1: Role Selection**
```
VISUAL:
- Monty penguin in top third, waving
- Two large cards in bottom two-thirds

MONTY SAYS:
"Hi! I'm Monty 🐧 Welcome to BiggyPank!"

QUESTION (centered, big):
"Who's setting this up?"

OPTIONS (stacked vertically, 50/50 split):
┌─────────────────────────────────┐
│  👨‍👩‍👧‍👦                           │
│  I'm a Parent                   │
│  Setting up for my family       │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  🧒                              │
│  I'm a Kid                       │
│  Joining my family              │
└─────────────────────────────────┘

INTERACTION:
- Tap card → card scales to 1.05x → immediate transition
- Selected card gets gradient background
- Monty reacts with excited animation

BRANCH:
- Parent → Q2a (Family Setup Path)
- Kid → Q2b (Join Family Path)
```

---

## PARENT PATH

### **Question 2a: Family Name**
```
VISUAL:
- Monty in corner, holding a sign

MONTY SAYS:
"Let's create your family squad! 👨‍👩‍👧‍👦"

QUESTION:
"What should we call your family?"

INTERACTION:
- Single large input field (centered)
- Placeholder examples cycle through:
  "The Johnsons"
  "Team Rodriguez" 
  "Casa de Garcia"
  "The Smith Crew"
- Auto-capitalizes first letter
- As user types, Monty holds up a sign that updates in real-time
- Button only appears after 3+ characters typed

BOTTOM BUTTON:
[That's us! ✨] - appears with slide-up animation
```

---

### **Question 3a: Parent Name**
```
VISUAL:
- Monty holding a clipboard, taking notes

MONTY SAYS:
"Perfect! And what should I call you?"

QUESTION:
"What's your name?"

INTERACTION:
- Single input field
- Examples: "Sarah", "Dad", "Mom", "Papa"
- Monty "writes" on clipboard as you type (animation)
- Suggested titles appear as pills below if you type "mom"/"dad"
  [Mom] [Dad] [Papa] [Mama]

BOTTOM BUTTON:
[Nice to meet you, {Name}! 👋]
```

---

### **Question 4a: Number of Kids**
```
VISUAL:
- Monty juggling in background
- Large number in center

MONTY SAYS:
"How many awesome kids are we coaching?"

QUESTION:
"Select number of children:"

INTERACTION:
- Horizontal swipeable number picker (like iOS)
- Numbers 1-6 with large typography
- Center number is biggest (48px), others fade
- Swipe left/right to change
- Can also tap +/- buttons on sides
- Monty juggles the corresponding number of balls

BOTTOM BUTTON:
[That's the squad! 🎯]
```

---

### **Question 5a-N: Kid Details (Repeat per child)**
```
MONTY SAYS:
"Tell me about kid #1! 🌟"

SUB-QUESTION 1: Name
VISUAL:
- Input field with playful placeholder
"What's their name?"

[Continue] button appears after typing

---

SUB-QUESTION 2: Age
"How old is {Kid Name}?"

INTERACTION:
- Horizontal scrollable age selector (1-18)
- Large numbers, carousel style
- Snap to each age with haptic
- Monty's expression changes based on age
  (baby face for young, sunglasses for teens)

[Got it!]

---

SUB-QUESTION 3: Avatar Selection
"Pick {Kid Name}'s character!"

INTERACTION:
- Grid of 12 avatar options
  🦊 Fox | 🐰 Rabbit | 🐻 Bear | 🦁 Lion
  🐼 Panda | 🐯 Tiger | 🐸 Frog | 🐨 Koala
  🦉 Owl | 🐙 Octopus | 🦄 Unicorn | 🐢 Turtle
- Tap to select → avatar zooms and bounces
- Selected avatar gets sparkle effect
- Monty appears next to selected avatar

[Perfect! ✨]

---

REPEAT for each additional kid with number counter:
"Tell me about kid #2! 🌟"
Dot indicator shows 2/3 kids completed
```

---

### **Question 6a: Account Connection Decision**
```
VISUAL:
- Split screen comparison
- Bank icon on left, demo mode icon on right

MONTY SAYS:
"Want to connect real accounts now, or explore first?"

QUESTION:
"Choose your path:"

OPTIONS (side by side):
┌──────────────────┐  ┌──────────────────┐
│  🏦              │  │  🎮              │
│  Connect Bank    │  │  Demo Mode       │
│                  │  │                  │
│  Real money      │  │  Play around     │
│  Real lessons    │  │  Connect later   │
└──────────────────┘  └──────────────────┘

IF "Connect Bank" selected:
  → Sub-flow: Plaid/Nessie integration
     (Keep it sleek, use Plaid's native UI)

IF "Demo Mode":
  → Skip to Q7a
```

---

### **Question 7a: Set Up First Goals (For each kid)**
```
MONTY SAYS:
"Let's set {Kid Name}'s first savings goal! 🎯"

QUESTION:
"What is {Kid Name} saving for?"

INTERACTION:
- Popular goal cards in scrollable carousel
  Each card shows:
  - Icon (skateboard, game controller, bike, phone)
  - Name
  - Typical price range
  
┌────────────┐ ┌────────────┐ ┌────────────┐
│  🛹        │ │  🎮        │ │  🚲        │
│ Skateboard │ │Video Game  │ │  Bike      │
│ $80-$150   │ │ $50-$80    │ │ $150-$400  │
└────────────┘ └────────────┘ └────────────┘

- Scroll horizontally to see more
- "Something else" card at the end for custom

IF preset selected:
  → Auto-fills goal with smart defaults
  → "Adjust if needed" screen with slider

IF custom:
  → "What is it?" (text input)
  → "How much does it cost?" (currency input with $ prefix)
  → "Add a photo?" (optional image upload)

---

SUB-QUESTION: Weekly Allowance
"How much does {Kid Name} get each week?"

INTERACTION:
- Currency input with keypad
- Suggested amounts appear as quick-tap pills
  [$5] [$10] [$15] [$20] [$25]
- Monty calculates ETA in real-time
  "At $10/week, they'll reach it in 12 weeks! 🎉"

[Set Goal!]
```

---

### **Question 8a: Success Celebration**
```
VISUAL:
- Full-screen confetti animation
- Monty doing a celebration dance (animated)
- All kid avatars bounce in from sides

MONTY SAYS:
"🎉 Woohoo! The {Family Name} are ready to roll!"

SUMMARY CARD (centered):
┌─────────────────────────────────┐
│  Your BiggyPank Family:         │
│                                 │
│  👨‍👩‍👧 The Johnsons                │
│                                 │
│  🦊 Emma (age 10)               │
│  Goal: Skateboard ($120)        │
│                                 │
│  🐰 Lucas (age 7)               │
│  Goal: LEGO Set ($60)           │
│                                 │
└─────────────────────────────────┘

AUTO-ADVANCE after 3 seconds to dashboard
Or tap:
[Go to Dashboard! 🚀]
```

---

## KID PATH (Joining Existing Family)

### **Question 2b: Join Code**
```
MONTY SAYS:
"Ask your parent for your family code! 👨‍👩‍👧"

QUESTION:
"Enter your family code:"

INTERACTION:
- Large 6-digit code input
- Auto-formats as: XXX-XXX
- Animated character separators
- Each digit appears with bounce
- Haptic feedback on each entry
- Auto-submits when 6 digits entered

VISUAL:
- Monty holding a phone, waiting expectantly
- As digits are entered, Monty gets more excited

ERROR STATE:
If invalid: Monty looks confused, code shakes
"Hmm, that code didn't work. Try again?"

SUCCESS:
Code dissolves into confetti
Monty cheers
→ Transition to Q3b
```

---

### **Question 3b: Select Your Profile**
```
MONTY SAYS:
"Found your family! 🎉"

QUESTION:
"Which one is you?"

INTERACTION:
- Cards showing each kid profile in family
  Each card shows:
  - Avatar
  - Name
  - Age
  
┌──────────────────┐
│  🦊              │
│  Emma            │
│  Age 10          │
└──────────────────┘

┌──────────────────┐
│  🐰              │
│  Lucas           │
│  Age 7           │
└──────────────────┘

- Tap to select
- Selected card zooms in
- Monty appears next to selected avatar

[That's me! ✨]
```

---

### **Question 4b: Set Your First Goal**
```
(Same as Question 7a but personalized)

MONTY SAYS:
"Hey Emma! What are you saving for? 🎯"

[Same goal selection interface as parent path]
```

---

### **Question 5b: Success**
```
VISUAL:
- Confetti explosion
- Monty high-five animation

MONTY SAYS:
"You're all set, Emma! Let's start saving! 🚀"

SUMMARY:
┌─────────────────────────────────┐
│  Your Goal:                     │
│                                 │
│  🛹 Skateboard                  │
│  $120                           │
│                                 │
│  Weekly allowance: $10          │
│  You'll get there in: 12 weeks  │
│                                 │
└─────────────────────────────────┘

[Let's go! 🎉]
→ Transition to kid dashboard
```

---

## Technical Animation Specs

### Card Interactions
```
On Tap:
- Scale: 1.0 → 1.05 (100ms ease-out)
- Shadow: subtle → prominent
- Haptic: light impact

On Select:
- Scale: 1.05 → 1.1 → 1.0 (200ms elastic)
- Background: gradient animation
- Border: glow effect
- Confetti burst from center
- Haptic: medium impact
```

### Transition Between Questions
```
Current screen:
- Fade opacity 1.0 → 0.0 (200ms)
- Transform: scale 1.0 → 0.95 (200ms)
- Slide: translateX(0) → translateX(-50px) (200ms)

Next screen:
- Fade opacity 0.0 → 1.0 (300ms, delay 100ms)
- Transform: scale 1.05 → 1.0 (300ms elastic)
- Slide: translateX(50px) → translateX(0) (300ms)

Overlap timing creates smooth handoff
```

### Monty Reactions
```
Idle: Gentle breathing animation (2s loop)
Excited: Jump + spin (600ms)
Thinking: Head tilt + "..." bubbles
Celebrating: Dance animation (1s)
Confused: Scratch head + question mark
```

### Input Feedback
```
On Focus:
- Input field scales up slightly
- Background color shifts
- Label animates to top

On Type:
- Haptic on each character
- Monty's expression becomes focused
- Character counter pulses when near limit

On Complete:
- Success checkmark animates in
- Button slides up from bottom
- Haptic success pattern
```

---

## Onboarding Data Collection Summary

### Parent Path Collects:
1. Family name
2. Parent name
3. Number of kids
4. For each kid:
   - Name
   - Age
   - Avatar choice
5. Account connection preference
6. For each kid:
   - First savings goal
   - Target amount
   - Weekly allowance

### Kid Path Collects:
1. Family join code
2. Profile selection
3. First savings goal
4. (Inherits allowance from parent setup)

### Post-Onboarding State
```
User lands in:
- Parent → Parent dashboard (all kids overview)
- Kid → Kid dashboard (their personal view)

First-time tutorials trigger:
- "Swipe through your goals"
- "Tap Monty to chat"
- "Check the Stats tab to see your progress"

Chrome extension install prompt:
- "Install our browser buddy to get coaching while you shop!"
- Deep link to Chrome Web Store
- Skippable but incentivized (bonus streak day)
```

---

## Edge Cases & Polish

### Network Issues
- All inputs save locally first
- If disconnected: "Saving locally... we'll sync when you're back online"
- Monty shows "loading" animation
- Retry logic in background

### Validation Errors
- Never use red error text
- Monty provides friendly guidance
  "Oops! Goal amounts need to be at least $1"
- Input shakes gently
- Soft haptic feedback

### Back Button Behavior
- Swipe right to go back (iOS gesture)
- Android back button goes to previous question
- Data persists when going back
- Confirm dialog on exit: "Want to finish setting up later?"

### Progress Saving
- Every answer saves to localStorage immediately
- "Resume setup" if user exits mid-flow
- Can restart from beginning if desired

### Accessibility
- All interactions have keyboard alternatives
- Screen reader announces Monty's messages
- High contrast mode support
- Font size respects system settings
- Haptics can be disabled in settings

---

This creates an onboarding that feels like a conversation with a friendly coach, not a bureaucratic form. Every tap is satisfying, every transition is delightful, and users are excited to finish because it's actually *fun*.