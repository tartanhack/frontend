
export function RangeField({
  label,
  value,
  min,
  max,
  step,
  formatValue,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  onChange: (value: number) => void;
}) {
  const displayValue = formatValue ? formatValue(value) : String(value);
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</span>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-ink"
        />
        <span className="min-w-[70px] self-start rounded-full border border-slate-200 bg-white px-3 py-1 text-center text-sm font-semibold text-ink sm:self-auto">
          {displayValue}
        </span>
      </div>
    </label>
  );
}
