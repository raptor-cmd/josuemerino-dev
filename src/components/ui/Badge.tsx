import type { ReactNode } from 'react'

type BadgeVariant = 'tech' | 'status' | 'tag'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  tech:
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono ' +
    'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--accent-cyan)] ' +
    'transition-colors duration-200',
  status:
    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ' +
    'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400',
  tag:
    'inline-flex items-center px-2.5 py-0.5 rounded text-xs ' +
    'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--fg-muted)]',
}

export const Badge = ({
  variant = 'tech',
  children,
  className = '',
}: BadgeProps) => (
  <span className={`${variantClasses[variant]} ${className}`}>{children}</span>
)
