import { motion } from 'framer-motion';
import { Search, CheckCircle, Cpu, Target, Zap, Send } from 'lucide-react';

interface PipelineNode {
  id: string;
  label: string;
  type: 'input' | 'check' | 'process' | 'decision' | 'output';
}

interface PipelineEdge {
  from: string;
  to: string;
}

interface Props {
  data: {
    nodes: PipelineNode[];
    edges: PipelineEdge[];
  };
}

const NODE_STYLES: Record<string, { bg: string; border: string; iconColor: string; Icon: React.ComponentType<{ className?: string }> }> = {
  input: { bg: 'bg-white', border: 'border-slate-200', iconColor: 'text-teal-500', Icon: Search },
  check: { bg: 'bg-white', border: 'border-slate-200', iconColor: 'text-coral-500', Icon: CheckCircle },
  process: { bg: 'bg-white', border: 'border-slate-200', iconColor: 'text-lilac-500', Icon: Cpu },
  decision: { bg: 'bg-white', border: 'border-slate-200', iconColor: 'text-teal-700', Icon: Zap },
  output: { bg: 'bg-white', border: 'border-slate-200', iconColor: 'text-teal-500', Icon: Send },
};

// Map node types to icons for variety in the pipeline
const NODE_TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  input: Search,
  check: CheckCircle,
  process: Cpu,
  decision: Target,
  output: Send,
};

export default function DecisionFlowchart({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-5">
        <Cpu className="w-4 h-4 text-lilac-500" />
        <h2 className="font-display text-ink text-base font-semibold">AI Decision Pipeline</h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 ml-auto">Last Alert</span>
      </div>
      <div className="flex flex-col items-center gap-0">
        {data.nodes.map((node, i) => {
          const style = NODE_STYLES[node.type] || NODE_STYLES.process;
          const IconComponent = NODE_TYPE_ICONS[node.type] || Cpu;
          return (
            <div key={node.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className={`${style.bg} border ${style.border} rounded-xl px-5 py-3 max-w-sm flex items-center gap-3`}
              >
                <div className={`w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-3.5 h-3.5 ${style.iconColor}`} />
                </div>
                <p className="text-sm text-slate-600">{node.label}</p>
              </motion.div>
              {i < data.nodes.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="w-px h-6 bg-slate-200 origin-top"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
