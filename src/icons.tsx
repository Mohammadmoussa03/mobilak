import type { LucideProps } from 'lucide-react'

/**
 * lucide-react v1 no longer ships brand marks, so Instagram and TikTok are drawn
 * here using lucide's own geometry conventions (24×24 box, round caps, stroke
 * driven by `currentColor`) to sit flush with the lucide icons used elsewhere.
 */

export function Instagram({ size = 24, strokeWidth = 1.6, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTok({ size = 24, strokeWidth = 1.6, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="8.5" cy="17" r="3.4" />
      <path d="M11.9 17V3.6c1.3 2.6 3.2 3.9 5.9 4.1" />
    </svg>
  )
}
