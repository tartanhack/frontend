# BiggyPank Onboarding Flow
## Rocket Money-Style Interactive Questionnaire Experience

---

## Overview

The onboarding flow is the user's first impression of BiggyPank. It transforms what could be a tedious signup form into an engaging, conversational journey with Monty the penguin. Users feel like they're being welcomed into a community, not filling out paperwork.

**Goal:** Get families set up and excited in under 2 minutes with zero friction.

---

## Design Philosophy

### What We're NOT Building
❌ Traditional multi-step forms with input fields  
❌ Progress bars at the top  
❌ "Next" and "Back" buttons everywhere  
❌ Boring validation error messages  
❌ Corporate, transactional feel  

### What We ARE Building
✅ Conversational journey (one question at a time)  
✅ Beautiful, single-focus screens  
✅ Tap-to-select interactions (minimal typing)  
✅ Delightful micro-animations and celebrations  
✅ Monty as your guide throughout  
✅ Playful, warm, family-friendly tone  

---

## Visual Language

### Color Palette
```
Primary Gradient: #0EA5A0 (teal) → #8B5CF6 (purple)
Accent: #F59E0B (warm orange) for celebrations
Background: #FAFAFA (soft white)
Cards: #FFFFFF with soft shadows
Text Primary: #1F2937 (dark gray)
Text Secondary: #6B7280 (medium gray)
```

### Typography
```
Display/Questions: Fredoka or Rubik (28-32px, bold)
Monty's Voice: DM Sans (16-18px, regular)
Options: DM Sans (18-20px, medium)
Helper Text: DM Sans (14px, regular)
Numbers: Space Mono (for monetary values)
```

### Animation Principles
- **Elastic easing** for playful feel
- **Stagger animations** for multiple elements
- **Micro-celebrations** after each answer
- **Physics-based** interactions (spring animations)
- **Haptic feedback** on mobile devices

---

## Flow Structure

```
Splash Screen (2s auto)
    ↓
Q1: Role Selection (Parent vs Kid)
    ↓
    ├─ PARENT PATH ────────────────┐
    │  Q2a: Family Name             │
    │  Q3a: Parent Name             │
    │  Q4a: Number of Kids          │
    │  Q5a: Kid Details (×N)        │
    │  Q6a: Account Connection      │
    │  Q7a: Set Goals (×N)          │
    │  Q8a: Success Celebration     │
    └───────────────────────────────┘
    │
    └─ KID PATH ───────────────────┐
       Q2b: Enter Join Code         │
       Q3b: Select Your Profile     │
       Q4b: Set Your First Goal     │
       Q5b: Success Celebration     │
       ──────────────────────────────┘
```

---

## Screen Specifications

### Template Structure
Every onboarding screen follows this structure:

```
┌─────────────────────────────────┐
│  Monty Character (top third)    │  ← Animated, reactive
│  + Speech Bubble                │
├─────────────────────────────────┤
│                                 │
│  QUESTION TEXT                  │  ← Large, centered, bold
│  (centered, prominent)          │
│                                 │
├─────────────────────────────────┤
│  INTERACTION AREA               │  ← Cards, inputs, or pickers
│  (main interaction)             │
│                                 │
├─────────────────────────────────┤
│  • • • •                        │  ← Dot indicator (bottom)
│  [Primary Action Button]        │  ← Only appears when valid
└─────────────────────────────────┘
```

---

## Splash Screen
**Duration:** 2 seconds (auto-advance)

### Visual Description
- Full-screen gradient background (teal → purple)
- Monty logo animates in with elastic bounce
- "BiggyPank" wordmark fades up beneath logo
- Subtle particle effects in background

### Animation Sequence
```
0.0s: Gradient background fades in
0.2s: Monty logo drops from top with bounce
0.5s: Logo settles, slight wiggle
0.8s: "BiggyPank" wordmark fades in
1.5s: Particles begin floating
2.0s: Fade to Q1 with slide transition
```

### Implementation Notes
- No user interaction required
- Preload next screen assets during splash
- Skip button in corner (subtle) for returning users
- Use Lottie animation for Monty logo

---

## Q1: Role Selection

### Monty Says
"Hi! I'm Monty 🐧 Welcome to BiggyPank!"

### Question
"Who's setting this up?"

### Options
Two vertically-stacked cards (50/50 split):

**Option 1: Parent**
```
Icon: 👨‍👩‍👧‍👦
Title: "I'm a Parent"
Subtitle: "Setting up for my family"
```

**Option 2: Kid**
```
Icon: 🧒
Title: "I'm a Kid"  
Subtitle: "Joining my family"
```

### Interaction Design
- Cards have subtle gradient borders
- On hover/press: Scale to 1.05x
- On select: 
  - Scale to 1.1x then back to 1.0x (elastic)
  - Gradient background fills card
  - Confetti burst from center
  - Haptic feedback (medium impact)
  - Immediate transition to next screen

### Routing
- Parent → Q2a (Family Setup Path)
- Kid → Q2b (Join Family Path)

### Technical Notes
- Save role to localStorage immediately
- Track analytics: parent_onboarding_start vs kid_onboarding_start
- Monty animation reacts differently based on selection

---

## PARENT PATH

### Q2a: Family Name

#### Monty Says
"Let's create your family squad! 👨‍👩‍👧‍👦"

#### Question
"What should we call your family?"

#### Interaction
Single large input field (centered, rounded, shadow)

**Placeholder Examples** (cycle through every 3s):
- "The Johnsons"
- "Team Rodriguez"
- "Casa de Garcia"
- "The Smith Crew"
- "The Anderson Family"

**Visual Feedback:**
- As user types, Monty holds up a sign that updates in real-time
- Sign animates: write → erase → write with new text
- Auto-capitalize first letter of each word

**Validation:**
- Minimum 3 characters
- Button only appears after valid input
- No special characters except spaces and hyphens

#### Primary Button
"That's us! ✨" (slides up from bottom)

#### Technical Notes
```javascript
// State management
familyName: string (min 3 chars, max 50 chars)

// Validation
const isValid = familyName.trim().length >= 3;

// Animation triggers
onChange: Update Monty's sign
onValid: Slide button up
onSubmit: Confetti + transition
```

---

### Q3a: Parent Name

#### Monty Says
"Perfect! And what should I call you?"

#### Question
"What's your name?"

#### Interaction
Single input field with smart suggestions

**Input Behavior:**
- As user types, show suggested titles as pills below
- If user types "mom" → suggest [Mom] [Mommy] [Mama]
- If user types "dad" → suggest [Dad] [Daddy] [Papa]
- If user types "abuelo" → suggest [Abuelo] [Abuelito]
- Generic names → no suggestions

**Visual Feedback:**
- Monty "writes" on clipboard as you type
- Clipboard shows checkmark when valid

**Validation:**
- Minimum 2 characters
- Letters and spaces only

#### Primary Button
"Nice to meet you, {Name}! 👋"

#### Technical Notes
```javascript
// State
parentName: string

// Smart title detection
const titleSuggestions = {
  mom: ['Mom', 'Mommy', 'Mama', 'Ma'],
  dad: ['Dad', 'Daddy', 'Papa', 'Pa'],
  abuelo: ['Abuelo', 'Abuelito'],
  abuela: ['Abuela', 'Abuelita'],
  // etc...
};

// Button personalizes with name
buttonText: `Nice to meet you, ${parentName}! 👋`
```

---

### Q4a: Number of Kids

#### Monty Says
"How many awesome kids are we coaching?"

#### Question
"Select number of children:"

#### Interaction
Horizontal swipeable number picker (iOS wheel style)

**Number Range:** 1-6

**Visual Design:**
- Center number is largest (48px, bold)
- Side numbers fade and scale down
- Infinite scroll feel (loops at ends)
- +/- buttons on far left/right

**Monty Reaction:**
- Juggles corresponding number of balls
- 1 kid: Tossing one ball
- 2 kids: Juggling two
- 3+ kids: Juggling frantically (comedic)

**Haptic Feedback:**
- Light impact on each scroll snap
- Medium impact on +/- button tap

#### Primary Button
"That's the squad! 🎯"

#### Technical Notes
```javascript
// State
numberOfKids: number (1-6)

// Picker implementation
const numbers = [1, 2, 3, 4, 5, 6];
const centerIndex = Math.floor(numbers.length / 2);

// Monty animation states
const montyJuggling = {
  1: 'juggle_one',
  2: 'juggle_two',
  3: 'juggle_three_plus'
};
```

---

### Q5a: Kid Details (Repeating Loop)

This section repeats for each kid (numberOfKids times)

#### Progress Indicator
"Tell me about kid #N! 🌟"
Dot indicators show progress: • • ○ (2 of 3 complete)

---

#### Q5a.1: Kid Name

**Question:**
"What's their name?"

**Interaction:**
- Single input field
- Playful placeholders: "Emma", "Lucas", "Sophia", "Liam"
- Monty waves excitedly as you type

**Validation:**
- Minimum 2 characters
- No duplicate names in family

**Button:**
"Continue ✨"

---

#### Q5a.2: Kid Age

**Question:**
"How old is {KidName}?"

**Interaction:**
Horizontal carousel age selector (1-18)

**Visual Design:**
- Large numbers in center (42px)
- Smaller numbers on sides (24px)
- Color-coded ranges:
  - 1-6: Soft blue (little kids)
  - 7-12: Teal (tweens)
  - 13-18: Purple (teens)

**Monty Reaction:**
- Ages 1-6: Baby face, pacifier
- Ages 7-12: Normal Monty, backpack
- Ages 13-18: Cool Monty, sunglasses

**Haptic:** Snap feedback on each age

**Button:**
"Got it! ✓"

---

#### Q5a.3: Avatar Selection

**Question:**
"Pick {KidName}'s character!"

**Interaction:**
Grid of 12 avatar options (3×4 grid on mobile, 4×3 on tablet)

**Avatar Options:**
```
🦊 Fox        🐰 Rabbit     🐻 Bear       🦁 Lion
🐼 Panda      🐯 Tiger      🐸 Frog       🐨 Koala
🦉 Owl        🐙 Octopus    🦄 Unicorn    🐢 Turtle
```

**Visual Design:**
- Each avatar is a rounded square card
- Subtle gradient background
- On tap: Zoom + bounce animation
- Selected: Sparkle effect, thicker border
- Monty appears next to selected avatar

**Button:**
"Perfect! ✨"

**Technical Notes:**
```javascript
// Avatar data structure
interface Avatar {
  id: string;
  emoji: string;
  name: string;
  color: string; // gradient base color
}

// Selection animation
onAvatarSelect: {
  - Scale selected: 1.0 → 1.2 → 1.1
  - Sparkle particles: 8-12 particles radiating
  - Unselect others: Scale 1.0 → 0.95 → 1.0
  - Haptic: Medium impact
}
```

---

#### After All Kids Complete
Show summary card with slide-in animation:
```
┌─────────────────────────────┐
│  Your Squad:                │
│  🦊 Emma (age 10)           │
│  🐰 Lucas (age 7)           │
│  🐻 Sophia (age 13)         │
└─────────────────────────────┘
```

Auto-advance after 1.5s or tap to continue.

---

### Q6a: Account Connection

#### Monty Says
"Want to connect real accounts now, or explore first?"

#### Question
"Choose your path:"

#### Options
Side-by-side cards (50/50 split)

**Option 1: Connect Bank**
```
Icon: 🏦
Title: "Connect Bank"
Subtitle: "Real money, real lessons"
Badge: "Recommended"
```

**Option 2: Demo Mode**
```
Icon: 🎮
Title: "Demo Mode"
Subtitle: "Play around, connect later"
```

#### Interaction
- Both cards visible simultaneously
- Tap to select (same animations as Q1)
- "Learn more" link under each (expands accordion with details)

#### Branch Logic

**If "Connect Bank" selected:**
→ Sub-flow: Plaid Integration
- Use Plaid Link SDK (native component)
- White-label to match BiggyPank branding
- Show "Powered by Plaid" at bottom
- On success: Return to onboarding
- On cancel: Return to Q6a with "Try again?" option

**If "Demo Mode" selected:**
→ Skip to Q7a
- Create demo bank account in backend
- Seed with realistic transaction data
- Show badge throughout app: "Demo Mode" with option to upgrade

#### Technical Notes
```javascript
// Plaid configuration
const plaidConfig = {
  token: 'link-sandbox-token',
  onSuccess: (public_token, metadata) => {
    // Exchange token with backend
    // Store account_id
    // Continue to Q7a
  },
  onExit: (err, metadata) => {
    // Return to Q6a
    // Show "No problem! You can connect later" message
  }
};
```

---

### Q7a: Set First Goal (For Each Kid)

Repeats for each kid in family.

#### Monty Says
"Let's set {KidName}'s first savings goal! 🎯"

#### Question
"What is {KidName} saving for?"

#### Interaction
Horizontal scrollable carousel of preset goals

**Preset Goal Cards:**
Each card shows:
- Large icon/emoji
- Goal name
- Typical price range
- Tap to select

```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  🛹         │ │  🎮         │ │  🚲         │
│ Skateboard  │ │ Video Game  │ │  Bike       │
│ $80-$150    │ │ $50-$80     │ │ $150-$400   │
└─────────────┘ └─────────────┘ └─────────────┘

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  📱         │ │  🎸         │ │  💻         │
│  Phone      │ │  Guitar     │ │  Laptop     │
│ $300-$800   │ │ $150-$400   │ │ $500-$1000  │
└─────────────┘ └─────────────┘ └─────────────┘

┌─────────────┐
│  ✏️         │
│  Custom     │
│  Goal       │
└─────────────┘
```

**Scroll Behavior:**
- Horizontal momentum scroll
- Snap to center
- Cards scale slightly when centered
- 3-4 cards visible at once

#### Branch Logic

**If Preset Goal Selected:**
→ Auto-fills with smart defaults
→ Shows "Adjust if needed" screen

**If Custom Goal Selected:**
→ Q7a.1: Custom goal flow

---

#### Q7a (Preset) - Adjust Screen

Shows selected goal with editable fields:

```
┌─────────────────────────────┐
│  🛹 Skateboard              │
│                             │
│  How much does it cost?     │
│  [$___120___]              │  ← Pre-filled, editable
│                             │
│  Weekly allowance:          │
│  [$____10____]             │  ← Required input
│                             │
└─────────────────────────────┘
```

**Monty's Real-Time Calculation:**
As user adjusts values, Monty shows ETA:
"At $10/week, {KidName} will reach it in 12 weeks! 🎉"

**Visual Feedback:**
- Timeline visualization appears
- Progress bar shows 0% → 100% over weeks
- Milestone markers at 25%, 50%, 75%

---

#### Q7a.1: Custom Goal Flow

**Step 1: What is it?**
- Text input for goal name
- Placeholder: "LEGO set", "Taylor Swift concert", "Art supplies"
- Emoji picker appears with relevant suggestions

**Step 2: How much?**
- Currency input with $ prefix
- Suggested amounts: [$25] [$50] [$100] [$200] (quick tap)
- Or manual entry

**Step 3: Add a photo? (Optional)**
- Camera icon and "Upload" option
- Drag-and-drop area
- Skip button prominent ("I'll add later")

**Step 4: Weekly Allowance**
- Same as preset flow

---

#### Primary Button
"Set Goal! 🎯"

**On Submit:**
- Goal card animates and "locks in"
- Confetti burst
- Monty cheers
- If more kids: "Next: {NextKidName}'s goal!"
- If last kid: → Q8a

---

### Q8a: Success Celebration

#### Visual
Full-screen celebration:
- Confetti explosion (3-4 bursts)
- Monty doing victory dance (Lottie animation)
- All kid avatars bounce in from sides with stagger
- Background gradient pulses

#### Monty Says
"🎉 Woohoo! The {FamilyName} are ready to roll!"

#### Summary Card
Shows complete family setup:

```
┌──────────────────────────────────┐
│  Your BiggyPank Family:          │
│                                  │
│  👨‍👩‍👧 The Johnsons                  │
│                                  │
│  🦊 Emma (age 10)                │
│  Goal: Skateboard ($120)         │
│  Weekly: $10                     │
│                                  │
│  🐰 Lucas (age 7)                │
│  Goal: LEGO Set ($60)            │
│  Weekly: $5                      │
│                                  │
└──────────────────────────────────┘
```

#### Auto-Advance
- Shows for 3 seconds
- Auto-transitions to parent dashboard
- Or tap button to skip wait

#### Primary Button
"Go to Dashboard! 🚀"

#### Technical Notes
```javascript
// Celebration sequence
celebrationSequence: [
  { time: 0,    action: 'confetti_burst_1' },
  { time: 200,  action: 'avatars_slide_in' },
  { time: 400,  action: 'confetti_burst_2' },
  { time: 600,  action: 'summary_card_fade_in' },
  { time: 800,  action: 'monty_dance_start' },
  { time: 3000, action: 'button_appear' },
  { time: 6000, action: 'auto_advance' }
];

// Create user accounts in backend
await createFamily({
  name: familyName,
  parent: parentName,
  kids: kidsData,
  goals: goalsData,
  accountType: 'demo' | 'connected'
});
```

---

## KID PATH

### Q2b: Enter Join Code

#### Monty Says
"Ask your parent for your family code! 👨‍👩‍👧"

#### Question
"Enter your family code:"

#### Interaction
6-digit code input (XXX-XXX format)

**Visual Design:**
- 6 large individual digit boxes
- Auto-formats with hyphen after 3rd digit
- Each digit appears with bounce animation
- Haptic feedback on each key press
- Auto-submits when 6 digits entered

**Monty Animation:**
- Holds a phone, waiting expectantly
- Gets more excited with each digit entered
- At 6 digits: Calls someone (phone to ear)

#### Validation States

**Invalid Code:**
- Code boxes shake left-right
- Turn red briefly then back to default
- Monty looks confused (tilts head, question mark)
- Message: "Hmm, that code didn't work. Try again?"
- Code clears automatically

**Valid Code:**
- Code boxes turn green
- Checkmarks appear in each box
- Confetti burst
- Monty cheers (jumps up)
- Auto-transition to Q3b

#### Helper Text
"Parent codes are found in Settings → Family → Invite Kid"

#### Technical Notes
```javascript
// Code format
format: 'XXX-XXX' (uppercase letters and numbers)
example: 'A3F-9K2'

// Validation
onCodeComplete: async (code) => {
  const isValid = await validateFamilyCode(code);
  if (isValid) {
    // Store family_id
    // Fetch family data
    // Transition to Q3b
  } else {
    // Shake animation
    // Clear code
    // Show error
  }
}

// Security
- Codes expire after 7 days
- One-time use per kid
- Case-insensitive matching
```

---

### Q3b: Select Your Profile

#### Monty Says
"Found your family! 🎉  
The {FamilyName}"

#### Question
"Which one is you?"

#### Interaction
Vertical stack of kid profile cards

**Profile Card Design:**
Each card shows:
- Avatar (large, centered)
- Name (bold, 20px)
- Age

```
┌─────────────────────┐
│        🦊           │
│       Emma          │
│      Age 10         │
└─────────────────────┘

┌─────────────────────┐
│        🐰           │
│       Lucas         │
│       Age 7         │
└─────────────────────┘
```

**Interaction:**
- Tap card to select
- Selected card zooms to 1.1x
- Other cards fade to 60% opacity
- Monty appears next to selected avatar
- Sparkle effect around selected card

**If only 1 kid:**
- Auto-select after 1 second
- No need to tap
- Show "Welcome, {Name}!" message

#### Primary Button
"That's me! ✨"

#### Technical Notes
```javascript
// State from family fetch
interface Kid {
  id: string;
  name: string;
  age: number;
  avatar: string;
  hasCompletedOnboarding: boolean;
}

// Filter logic
const availableKids = kids.filter(k => !k.hasCompletedOnboarding);

// Auto-select if only one
if (availableKids.length === 1) {
  setTimeout(() => selectKid(availableKids[0]), 1000);
}
```

---

### Q4b: Set Your First Goal

Identical to Q7a but personalized to selected kid.

#### Monty Says
"Hey {KidName}! What are you saving for? 🎯"

#### Interaction
Same carousel of preset goals + custom option

#### Key Difference
- Allowance amount is **read-only** (set by parent)
- Shows: "Your weekly allowance: $10 (set by parent)"
- Can still adjust target amount if needed

---

### Q5b: Success Celebration

#### Visual
- Confetti burst
- Monty high-five animation
- Kid's avatar bounces in

#### Monty Says
"You're all set, {KidName}! Let's start saving! 🚀"

#### Summary Card
```
┌──────────────────────────────────┐
│  Your Goal:                      │
│                                  │
│  🛹 Skateboard                   │
│  $120 target                     │
│                                  │
│  Weekly allowance: $10           │
│  You'll get there in: 12 weeks   │
│                                  │
│  🔥 Start your streak today!     │
└──────────────────────────────────┘
```

#### Primary Button
"Let's go! 🎉"

**On Tap:**
- Transition to kid dashboard
- Show first-time tutorial tooltips

---

## Technical Implementation Guide

### State Management

Use React Context or Redux for onboarding state:

```javascript
interface OnboardingState {
  // Common
  currentStep: string;
  role: 'parent' | 'kid';
  
  // Parent path
  familyName?: string;
  parentName?: string;
  numberOfKids?: number;
  kids?: KidProfile[];
  accountType?: 'demo' | 'connected';
  accountId?: string;
  
  // Kid path
  familyCode?: string;
  selectedKidId?: string;
  
  // Common
  goals?: Goal[];
}

interface KidProfile {
  tempId: string; // UUID for local state
  name: string;
  age: number;
  avatar: string;
  goal?: Goal;
}

interface Goal {
  name: string;
  targetAmount: number;
  weeklyContribution: number;
  customPhoto?: string;
  isCustom: boolean;
}
```

### Navigation Structure

```javascript
// Parent flow
const parentSteps = [
  'splash',
  'role-selection',
  'family-name',
  'parent-name',
  'number-of-kids',
  'kid-details-loop', // Dynamic based on numberOfKids
  'account-connection',
  'goals-setup-loop', // Dynamic based on numberOfKids
  'success'
];

// Kid flow
const kidSteps = [
  'splash',
  'role-selection',
  'join-code',
  'profile-selection',
  'goal-setup',
  'success'
];

// Navigation functions
const goToNextStep = () => {
  const currentIndex = steps.indexOf(currentStep);
  setCurrentStep(steps[currentIndex + 1]);
};

const goToPreviousStep = () => {
  const currentIndex = steps.indexOf(currentStep);
  if (currentIndex > 0) {
    setCurrentStep(steps[currentIndex - 1]);
  }
};
```

### Animation Library Setup

Use Framer Motion for all animations:

```javascript
// Shared animation variants
export const pageTransition = {
  initial: { 
    opacity: 0, 
    x: 50,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  }
};

export const cardTap = {
  scale: 1.05,
  transition: { duration: 0.1 }
};

export const cardSelect = {
  scale: [1, 1.1, 1.0],
  transition: {
    duration: 0.4,
    type: "spring",
    stiffness: 300
  }
};
```

### Data Persistence

Save progress locally throughout onboarding:

```javascript
// Auto-save on every step
useEffect(() => {
  localStorage.setItem('onboarding_progress', JSON.stringify({
    currentStep,
    data: onboardingState,
    timestamp: Date.now()
  }));
}, [currentStep, onboardingState]);

// Check for existing progress on mount
useEffect(() => {
  const saved = localStorage.getItem('onboarding_progress');
  if (saved) {
    const { currentStep, data, timestamp } = JSON.parse(saved);
    
    // Expire after 24 hours
    if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
      // Show "Resume setup?" dialog
      showResumeDialog(currentStep, data);
    }
  }
}, []);
```

### Backend Integration Points

```javascript
// API calls during onboarding

// 1. Validate family code (kid path)
POST /api/onboarding/validate-code
Body: { code: string }
Response: { valid: boolean, familyId?: string, familyName?: string }

// 2. Create family (parent path)
POST /api/onboarding/create-family
Body: {
  familyName: string,
  parentName: string,
  kids: KidProfile[],
  goals: Goal[],
  accountType: 'demo' | 'connected',
  accountId?: string
}
Response: { 
  familyId: string, 
  parentId: string,
  kidIds: string[],
  joinCodes: string[] // One per kid
}

// 3. Complete kid onboarding
POST /api/onboarding/complete-kid-setup
Body: {
  familyId: string,
  kidId: string,
  goal: Goal
}
Response: { success: boolean, kidDashboardUrl: string }

// 4. Exchange Plaid token
POST /api/onboarding/exchange-plaid-token
Body: { publicToken: string, familyId: string }
Response: { accountId: string, success: boolean }
```

---

## Accessibility Considerations

### Screen Reader Support
- Every screen has clear heading hierarchy
- Buttons have descriptive labels
- Form inputs have associated labels
- Error messages are announced
- Progress indicators are read

### Keyboard Navigation
- Tab order follows visual flow
- Enter submits current screen
- Escape goes back
- Arrow keys work in pickers/carousels

### Reduced Motion
- Detect `prefers-reduced-motion`
- Disable decorative animations
- Keep functional transitions (fade only)
- No auto-playing confetti

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements have 3:1 contrast with background
- Focus indicators are visible (2px outline)

### Touch Targets
- All interactive elements minimum 44×44px
- Generous padding around tap areas
- Swipe gestures have alternative tap controls

---

## Testing Checklist

### Functional Testing
- [ ] Parent path completes successfully
- [ ] Kid path completes successfully
- [ ] Family code validation works
- [ ] Invalid inputs show appropriate errors
- [ ] Navigation back/forward works
- [ ] Data persists across page refresh
- [ ] Resume onboarding works
- [ ] Plaid integration connects
- [ ] Demo mode creates account

### Visual Testing
- [ ] All animations play smoothly (60fps)
- [ ] Responsive on mobile (375px - 428px)
- [ ] Responsive on tablet (768px - 1024px)
- [ ] Works in portrait and landscape
- [ ] No layout shift during transitions
- [ ] Monty animations load properly
- [ ] Confetti renders correctly

### User Experience Testing
- [ ] Completes in under 2 minutes
- [ ] No confusing steps
- [ ] Error messages are friendly
- [ ] Progress is clear
- [ ] Can exit and resume
- [ ] Feels fun, not tedious

### Performance Testing
- [ ] Initial load under 2 seconds
- [ ] Transitions feel instant (<100ms)
- [ ] No jank on animations
- [ ] Images lazy load
- [ ] Lottie animations preload

---

## Edge Cases & Error Handling

### Network Issues
- Show Monty "loading" animation
- "Hang tight, connecting..." message
- Retry logic (3 attempts)
- Fallback: "Saved locally, we'll sync later"

### Invalid Family Code
- Shake animation
- Clear input
- Monty looks confused
- "That code didn't work. Check with your parent?"

### Duplicate Kid Names
- Show warning: "You already added a kid named Emma"
- Suggest: "Use Emma K. or Emma (age 10)?"

### Browser Back Button
- Treat same as "Previous" step
- Preserve data
- Show confirmation on first step: "Exit setup?"

### Session Timeout
- Save all data to localStorage
- Show resume dialog on return
- Data persists for 24 hours

### Plaid Connection Failure
- Friendly message: "Bank connection didn't work"
- Options: "Try again" or "Skip for now"
- Don't block progress

---

## Analytics & Metrics

### Track These Events

```javascript
// Flow progression
track('onboarding_started', { role });
track('onboarding_step_completed', { step, role, duration });
track('onboarding_completed', { role, totalDuration });

// Drop-off points
track('onboarding_abandoned', { step, role });
track('onboarding_resumed', { step, role });

// Interaction events
track('family_code_validated', { success: boolean });
track('goal_selected', { goalType, isCustom });
track('avatar_selected', { avatar });
track('account_connection_chosen', { type: 'demo' | 'connected' });

// Errors
track('onboarding_error', { step, errorType, errorMessage });
```

### Success Metrics
- **Completion rate:** % who finish onboarding
- **Average time:** Median time to complete
- **Drop-off points:** Which steps lose users
- **Path distribution:** Parent vs kid starts
- **Account connection rate:** % who connect real accounts

---

## Future Enhancements (Post-Hackathon)

### V2 Features
- [ ] Multi-language support
- [ ] Voice input option for names
- [ ] Photo upload for custom goals (with preview)
- [ ] Video tutorial overlays
- [ ] Parent tutorial (separate from kid tutorial)
- [ ] Family theme selection (color palette)
- [ ] Accessibility settings wizard
- [ ] Invite via SMS/email
- [ ] QR code for family join
- [ ] Import from existing kids' banking app

### Advanced Personalization
- [ ] Age-appropriate vocabulary adjustment
- [ ] Cultural goal presets (quinceañera, bar mitzvah)
- [ ] Regional currency support
- [ ] School grade-based goal suggestions
- [ ] Sibling goal collaboration option

---

This onboarding flow transforms signup from a chore into an experience families will remember. Monty isn't just a mascot – he's the guide who makes financial responsibility feel achievable and fun from day one.
