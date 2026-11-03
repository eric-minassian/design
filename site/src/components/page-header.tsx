import type * as React from "react"

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <header className="mb-8 flex flex-col gap-2">
      {eyebrow && <p className="font-medium text-muted-foreground text-xs">{eyebrow}</p>}
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-semibold text-2xl tracking-tight">{title}</h1>
        {actions}
      </div>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
    </header>
  )
}
