import clsx from 'clsx';

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text'
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number';
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</span>
      <input
        type={type}
        inputMode={type === 'number' ? 'numeric' : undefined}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={clsx(
          'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base shadow-card outline-none transition',
          'focus:border-ink focus:ring-2 focus:ring-ink/10'
        )}
      />
    </label>
  );
}
