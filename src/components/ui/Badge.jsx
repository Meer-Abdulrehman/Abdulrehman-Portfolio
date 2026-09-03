export default function Badge({ children, tone = 'neutral', className = '' }) {
  const tones = {
    neutral: 'bg-surface text-ink-700 border-line',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    volt: 'bg-volt-50 text-volt-600 border-volt-50',
    dark: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/40 font-semibold',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
