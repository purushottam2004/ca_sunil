import { tickerItems } from '@/data/taxTicker'

export default function TaxTicker() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="bg-brand-navy text-brand-gold h-9 flex items-center overflow-hidden text-sm font-medium select-none">
      <div
        className="flex gap-12 whitespace-nowrap animate-ticker hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            {item}
            <span className="text-brand-gold/50 mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
