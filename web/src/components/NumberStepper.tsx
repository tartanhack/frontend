
export function NumberStepper({
  label,
  value,
  min,
  max,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:gap-3 sm:p-6">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</span>
      <div className="flex items-center justify-between gap-6">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-10 w-10 rounded-full border border-slate-200 text-lg font-semibold text-ink transition hover:border-ink"
        >
          -
        </button>
        <div className="flex flex-col items-center">
          <span className="font-display text-4xl text-ink">{value}</span>
          <span className="text-xs text-slate-500">kids</span>
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-10 w-10 rounded-full border border-slate-200 text-lg font-semibold text-ink transition hover:border-ink"
        >
          +
        </button>
      </div>
      <div className="flex justify-between text-xs text-slate-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
