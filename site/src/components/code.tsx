import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/button"
import { cn } from "@/lib/utils"

type Highlighter = (code: string, lang: string) => string

let highlighter: Promise<Highlighter> | undefined

function getHighlighter() {
  highlighter ??= (async () => {
    const [{ createHighlighterCore }, { createJavaScriptRegexEngine }, tsx, bash, css, json, light, dark] =
      await Promise.all([
        import("shiki/core"),
        import("shiki/engine/javascript"),
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/shellscript.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/json.mjs"),
        import("shiki/themes/github-light-default.mjs"),
        import("shiki/themes/github-dark-default.mjs"),
      ])
    const core = await createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      langs: [tsx.default, bash.default, css.default, json.default],
      themes: [light.default, dark.default],
    })
    return (code, lang) =>
      core.codeToHtml(code, {
        lang,
        themes: { light: "github-light-default", dark: "github-dark-default" },
        defaultColor: false,
      })
  })()
  return highlighter
}

/** Highlighted source for the docs. Plain text until shiki has loaded, so nothing jumps. */
export function Code({
  code,
  lang = "tsx",
  className,
}: {
  code: string
  lang?: string
  className?: string
}) {
  const [html, setHtml] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false
    void getHighlighter().then((highlight) => {
      if (!cancelled) setHtml(highlight(code, lang))
    })
    return () => {
      cancelled = true
    }
  }, [code, lang])

  return (
    <div className={cn("group/code relative min-w-0 bg-code text-xs", className)}>
      <Button
        aria-label="Copy code"
        className="absolute top-2 right-2 z-10 opacity-0 group-hover/code:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100"
        size="icon-xs"
        variant="ghost-muted"
        onClick={() => {
          void navigator.clipboard.writeText(code)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
      </Button>
      {html === null ? (
        <pre className="overflow-x-auto p-4 leading-relaxed">
          <code>{code}</code>
        </pre>
      ) : (
        <div
          className="docs-code overflow-x-auto [&_pre]:p-4 [&_pre]:leading-relaxed [&_pre]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  )
}
