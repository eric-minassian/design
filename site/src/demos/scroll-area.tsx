import { ScrollArea } from "@/components/scroll-area"

const commits = [
  { sha: "5f47bdb", message: "fix: ship prebuilt dist for reliable GitHub installs" },
  { sha: "36894e7", message: "fix: declare packages in workspace so git installs work" },
  { sha: "9f31b3b", message: "Fix CI install: use pnpm 11 allowBuilds for esbuild" },
  { sha: "a8934ec", message: "Add all 55 shadcn components, Storybook and Pages deploy" },
  { sha: "c89fb85", message: "initial" },
  { sha: "b12ef09", message: "chore: pin recharts to 3.8.0" },
  { sha: "e4a0c71", message: "feat: add dropdown glass utility" },
  { sha: "70d3f1a", message: "fix: stop tooltip flicker on scroll" },
  { sha: "1c9ab44", message: "refactor: move tokens into their own file" },
  { sha: "d8e2f60", message: "docs: write the design language down" },
  { sha: "3ab71c2", message: "feat: support data-accent on html" },
  { sha: "92fe0d7", message: "chore: remove unused Storybook config" },
]

const branches = [
  "main",
  "feat/auth-guard",
  "feat/thread-search",
  "fix/reconnect",
  "chore/base-ui",
  "docs/design-language",
  "fix/tooltip-flicker",
]

export const notes =
  "Most scrolling should use the global 6px scrollbar. Reach for this when you need fades, or a thumb that stays out of the way until hover."

export function Default() {
  return (
    <ScrollArea className="h-56 max-w-md rounded-xl border">
      <ul className="flex flex-col p-1">
        {commits.map((commit) => (
          <li key={commit.sha} className="flex gap-3 rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
            <span className="font-mono text-muted-foreground text-xs leading-5">{commit.sha}</span>
            <span className="truncate">{commit.message}</span>
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}

export function ScrollFade() {
  return (
    <ScrollArea className="h-56 max-w-md rounded-xl border" scrollFade>
      <ul className="flex flex-col p-1">
        {commits.map((commit) => (
          <li key={commit.sha} className="flex gap-3 px-2 py-1.5 text-sm">
            <span className="font-mono text-muted-foreground text-xs leading-5">{commit.sha}</span>
            <span className="truncate">{commit.message}</span>
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}

export function Horizontal() {
  return (
    <ScrollArea className="h-auto max-w-sm rounded-lg border" scrollFade>
      <div className="flex w-max gap-1 p-1">
        {branches.map((branch) => (
          <span key={branch} className="rounded-md bg-accent px-2 py-1 font-mono text-xs">
            {branch}
          </span>
        ))}
      </div>
    </ScrollArea>
  )
}
