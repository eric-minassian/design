import * as React from "react"
import { CodeIcon } from "lucide-react"

import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { Code } from "~/components/code"

/** A live demo on a framed stage, with its source one click away. */
export function Example({
  title,
  code,
  children,
  bare = false,
}: {
  title?: string
  code?: string
  children: React.ReactNode
  /** Skip the centering, for demos that fill the whole stage. */
  bare?: boolean
}) {
  const [showCode, setShowCode] = React.useState(false)

  return (
    <section className="flex min-w-0 flex-col gap-2">
      {(title || code) && (
        <div className="flex min-h-7 items-center justify-between gap-2">
          {title && <h3 className="font-medium text-sm">{title}</h3>}
          {code && (
            <Button
              className="ms-auto"
              data-pressed={showCode ? "" : undefined}
              size="compact"
              variant="ghost-muted"
              onClick={() => setShowCode((value) => !value)}
            >
              <CodeIcon />
              Code
            </Button>
          )}
        </div>
      )}
      <div className="overflow-hidden rounded-xl border bg-card/40 dark:bg-card">
        <div
          className={cn(
            "min-w-0",
            bare ? "" : "flex min-h-40 flex-wrap items-center justify-center gap-3 p-6 sm:p-8"
          )}
        >
          {children}
        </div>
        {showCode && code && <Code className="border-t" code={code} />}
      </div>
    </section>
  )
}
