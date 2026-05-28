import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'px-6 py-3 rounded-full font-semibold text-sm tracking-wide ' +
    'bg-[var(--accent-cyan)] text-[#080c18] ' +
    'hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] ' +
    'transition-all duration-200',
  ghost:
    'px-6 py-3 rounded-full font-semibold text-sm tracking-wide ' +
    'border border-[var(--border)] text-[var(--fg)] ' +
    'hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] ' +
    'transition-all duration-200',
  icon:
    'p-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] ' +
    'hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] ' +
    'transition-all duration-200',
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => (
  <button className={`${variantClasses[variant]} ${className}`} {...props}>
    {children}
  </button>
)
