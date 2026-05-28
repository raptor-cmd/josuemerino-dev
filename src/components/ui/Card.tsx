import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  glow?: 'cyan' | 'violet' | 'none'
}

export const Card = ({
  children,
  glow = 'none',
  className = '',
  ...props
}: CardProps) => {
  const glowClass =
    glow === 'cyan'
      ? 'hover:glow-cyan'
      : glow === 'violet'
        ? 'hover:glow-violet'
        : ''

  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
