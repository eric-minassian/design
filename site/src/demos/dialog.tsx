import { GitBranchIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { Input } from "@/components/input"

export const notes =
  "For a task that has to finish or be abandoned before the thread can continue. If the user might want to keep reading underneath, use a sheet or a popover instead."

export function Form() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Rename thread</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename thread</DialogTitle>
          <DialogDescription>The name shows in the sidebar and in pull request titles.</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Input aria-label="Thread name" defaultValue="Fix flaky checkout test" />
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function ScrollingBody() {
  const commits = [
    "fix(checkout): wait for the payment iframe",
    "test(checkout): retry on stale element",
    "chore: bump playwright to 1.58",
    "refactor(cart): extract line item totals",
    "feat(cart): show tax estimate",
    "fix(cart): round before summing",
    "docs: note the staging seed command",
    "chore: drop unused fixture",
    "test(cart): cover empty state",
    "fix(session): refresh before expiry",
    "style: sort imports",
    "chore: regenerate lockfile",
  ]
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Review commits</DialogTrigger>
      <DialogContent className="max-h-[min(32rem,100%)]">
        <DialogHeader>
          <DialogTitle>12 commits ahead of main</DialogTitle>
          <DialogDescription>These will be pushed to origin/t3/checkout-flake.</DialogDescription>
        </DialogHeader>
        <DialogPanel className="space-y-0">
          {commits.map((commit) => (
            <p className="truncate py-1.5 font-mono text-xs" key={commit}>
              {commit}
            </p>
          ))}
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Push</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function Nested() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Create worktree</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create worktree</DialogTitle>
          <DialogDescription>A new checkout for this thread, branched from main.</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Input aria-label="Branch name" defaultValue="t3/checkout-flake" />
        </DialogPanel>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="ghost" />}>
              <GitBranchIcon />
              Change base
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Base branch</DialogTitle>
                <DialogDescription>The parent scales back while this one is open.</DialogDescription>
              </DialogHeader>
              <DialogPanel>
                <Input aria-label="Base branch" defaultValue="main" />
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button />}>Done</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DialogClose render={<Button />}>Create</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function BareFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>What changed</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Updated to 0.14</DialogTitle>
          <DialogDescription>
            Threads now remember their model, and worktrees clean themselves up after merge.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter variant="bare">
          <DialogClose render={<Button />}>Got it</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
