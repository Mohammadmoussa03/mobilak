import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

type Variant = 'light' | 'accent'

type Props = {
  href: string
  label: string
  sublabel?: string
  icon: ReactNode
  variant?: Variant
  /** Entrance-stagger class, e.g. "a-row a-row-1". */
  className?: string
}

const shell =
  'sheen group grid grid-cols-[46px_1fr_16px] items-center gap-[15px] min-h-[76px] px-[18px] rounded-[20px] ' +
  'border select-none outline-none transition-[transform,border-color,box-shadow,filter] duration-200 ease-[var(--ease-out-soft)] ' +
  'will-change-transform focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ' +
  'active:scale-[0.975] motion-reduce:active:scale-100'

const skin: Record<Variant, string> = {
  light:
    'sheen-light bg-white border-ink/[0.07] ' +
    'shadow-[0_1px_2px_rgba(25,24,23,.05),0_12px_26px_-20px_rgba(25,24,23,.35)] ' +
    'hover:-translate-y-0.5 hover:border-accent-light/50 ' +
    'hover:shadow-[0_2px_4px_rgba(25,24,23,.05),0_22px_36px_-22px_rgba(40,70,110,.45)] ' +
    'active:shadow-[0_1px_2px_rgba(25,24,23,.06)]',
  accent:
    'sheen-accent bg-[linear-gradient(168deg,#7ba7dc_0%,#5f8ec7_100%)] border-[rgba(70,110,160,.5)] ' +
    'shadow-[0_1px_2px_rgba(40,70,110,.2),0_16px_30px_-18px_rgba(40,70,110,.6),inset_0_1px_0_rgba(255,255,255,.35)] ' +
    'hover:-translate-y-0.5 hover:saturate-[1.06] hover:brightness-[1.03] ' +
    'hover:shadow-[0_2px_5px_rgba(40,70,110,.22),0_26px_40px_-20px_rgba(40,70,110,.7),inset_0_1px_0_rgba(255,255,255,.4)] ' +
    'active:shadow-[0_1px_2px_rgba(40,70,110,.25),inset_0_1px_0_rgba(255,255,255,.25)]',
}

const chip: Record<Variant, string> = {
  light: 'bg-chip border border-ink/[0.05] text-ink-soft',
  accent: 'a-tile bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.6)] text-accent-deep',
}

const title: Record<Variant, string> = {
  light: 'text-ink',
  accent: 'text-white',
}

const sub: Record<Variant, string> = {
  light: 'text-muted',
  accent: 'text-white/80',
}

const chevron: Record<Variant, string> = {
  light: 'text-chevron',
  accent: 'text-white/75',
}

export function SocialButton({
  href,
  label,
  sublabel,
  icon,
  variant = 'light',
  className = '',
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sublabel ? `${label} — ${sublabel}` : label}
      className={`${shell} ${skin[variant]} ${className}`}
    >
      <span
        className={`grid size-[46px] place-items-center rounded-[14px] ${chip[variant]}`}
        aria-hidden="true"
      >
        {icon}
      </span>

      <span className="flex min-w-0 flex-col gap-[3px]">
        <span className={`truncate text-[16px] font-semibold tracking-[0.01em] ${title[variant]}`}>
          {label}
        </span>
        {sublabel ? (
          <span className={`truncate text-[12.5px] tracking-[0.01em] ${sub[variant]}`}>
            {sublabel}
          </span>
        ) : null}
      </span>

      {/* The nudge loop owns the wrapper's transform, so the hover shift stays on the icon. */}
      <span
        className={`a-chevron ${variant === 'accent' ? 'a-chevron-accent' : ''} inline-flex`}
        aria-hidden="true"
      >
        <ChevronRight
          size={16}
          strokeWidth={1.5}
          className={`transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-[2px] ${chevron[variant]}`}
        />
      </span>
    </a>
  )
}
