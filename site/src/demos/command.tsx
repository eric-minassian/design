import * as React from "react"
import { GitBranchIcon, MessageSquarePlusIcon, SettingsIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/command"
import { Kbd } from "@/components/kbd"

export const notes =
  "The keyboard route to everything in the app. It complements the menus and never replaces them, since people have to already know what to type."

export function Palette() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open palette
        <Kbd>⌘K</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search threads and commands" />
          <CommandList>
            <CommandEmpty>Nothing matches that.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <MessageSquarePlusIcon />
                New thread
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GitBranchIcon />
                Switch branch
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <TerminalIcon />
                Open terminal
                <CommandShortcut>⌃`</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent threads">
              <CommandItem>Fix flaky checkout test</CommandItem>
              <CommandItem>Extract line item totals</CommandItem>
              <CommandItem disabled>Migrate to Vite 8 (archived)</CommandItem>
            </CommandGroup>
          </CommandList>
          <CommandFooter>
            <span>12 threads in t3code</span>
            <span className="flex items-center gap-1">
              <Kbd>↵</Kbd>
              to run
            </span>
          </CommandFooter>
        </Command>
      </CommandDialog>
    </>
  )
}

export function Inline() {
  return (
    <Command className="max-w-md">
      <CommandInput placeholder="Filter models" />
      <CommandList className="max-h-48">
        <CommandEmpty>No models found.</CommandEmpty>
        <CommandGroup heading="Anthropic">
          <CommandItem>Claude Opus</CommandItem>
          <CommandItem>Claude Sonnet</CommandItem>
        </CommandGroup>
        <CommandGroup heading="OpenAI">
          <CommandItem>GPT-5 Codex</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem>
            <SettingsIcon />
            Manage providers
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
