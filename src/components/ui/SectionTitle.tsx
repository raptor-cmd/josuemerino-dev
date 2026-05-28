interface SectionTitleProps {
  label: string
  title: string
  className?: string
}

export const SectionTitle = ({ label, title, className = '' }: SectionTitleProps) => (
  <div className={`mb-14 ${className}`}>
    <p className="font-mono text-sm text-[var(--accent-cyan)] mb-3 tracking-widest uppercase opacity-80">
      {label}
    </p>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight">
      {title}
    </h2>
  </div>
)
