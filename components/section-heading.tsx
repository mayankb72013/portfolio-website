interface SectionHeadingProps {
  number: string
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-lg text-primary md:text-xl">
        {number + "."}
      </span>
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <div className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  )
}
