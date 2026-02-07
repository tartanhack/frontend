import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { MOCK_CHAT_MESSAGES, type ChatMessage } from '../mockData';

interface Props {
  kidName?: string;
}

const QUICK_QUESTIONS = [
  'Help me save',
  'What if I...',
  'Goal ideas',
  'Check my $',
];

const MONTY_RESPONSES: Record<string, { text: string; suggestions: string[] }> = {
  'Help me save': {
    text: "Great question! Here are some ideas:\n\nPack lunch instead of buying\nAsk for gift money for goals\nDo extra chores for bonus $\nWait 24 hours before buying\n\nWhich sounds doable for you?",
    suggestions: ['Pack lunch!', 'Extra chores', 'Tell me more'],
  },
  'What if I...': {
    text: "Hmm, what are you thinking about? Tell me what you're considering and I'll help you think it through!",
    suggestions: ['Buy something', 'Skip saving', 'Change my goal'],
  },
  'Goal ideas': {
    text: "Here are some popular goals kids your age save for:\n\nVideo games ($40-70)\nHeadphones ($30-100)\nSkateboard ($50-150)\nPhone case ($15-40)\nGuitar ($100-200)\n\nAnything catch your eye?",
    suggestions: ['Yes, tell me more!', 'I have my own idea', 'Maybe later'],
  },
  'Check my $': {
    text: "Here's your snapshot:\n\nSkateboard: $68 of $120 (57%)\nGaming Fund: $12 of $60 (20%)\n\n14 day streak!\nTotal saved: $80\n\nYou're doing amazing! Keep it up!",
    suggestions: ['Add money', 'Set new goal', 'Thanks!'],
  },
  default: {
    text: "That's a great thought! Let me think about that...\n\nRemember, every smart money decision today builds better habits for tomorrow. I'm here to help whenever you need me!",
    suggestions: ['Thanks Monty!', 'Help me save', 'Check my goals'],
  },
};

export default function KidMonty({ kidName = 'Emma' }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([...MOCK_CHAT_MESSAGES]);
  const [input, setInput] = useState('');

  const addMessage = (text: string, from: 'kid' | 'monty') => {
    const msg: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random()}`,
      from,
      text,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, msg]);
    return msg;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    addMessage(text, 'kid');
    setInput('');

    // Simulate Monty response
    setTimeout(() => {
      const response = MONTY_RESPONSES[text] || MONTY_RESPONSES.default;
      addMessage(response.text, 'monty');
    }, 800);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lilac-500/10">
            <Bot className="h-4 w-4 text-lilac-500" />
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold text-ink">Chat with Monty</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Your money companion
            </p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {QUICK_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            className="shrink-0 rounded-full border border-lilac-300/40 bg-lilac-500/10 px-3.5 py-1.5 text-xs font-medium text-lilac-500 transition-colors hover:bg-lilac-500/20 whitespace-nowrap"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-3 min-h-0">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === 'kid' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.from === 'kid'
                    ? 'bg-lilac-500 text-white rounded-br-md'
                    : 'bg-ink text-mist rounded-bl-md'
                }`}
              >
                {msg.from === 'monty' && (
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <Bot className="h-3 w-3 text-lilac-300" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-lilac-300">Monty</p>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                <p
                  className={`text-[10px] mt-1.5 ${
                    msg.from === 'kid' ? 'text-white/60' : 'text-mist/50'
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="flex gap-2 pb-20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
          placeholder={`Ask me anything, ${kidName}...`}
          className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-lilac-300 focus:outline-none focus:ring-2 focus:ring-lilac-500/20"
        />
        <button
          onClick={() => handleSend(input)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lilac-500 text-white transition hover:-translate-y-0.5 hover:shadow-card"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
