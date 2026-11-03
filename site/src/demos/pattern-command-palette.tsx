import * as React from "react"
import { GitBranchIcon, MessageSquarePlusIcon, MoonIcon, SettingsIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/command"
import { Kbd } from "@/components/kbd"
import { useTheme } from "@/lib/theme"

export const notes =
  "Bind it to ⌘K, put every action in it, and list the common ones before anyone has typed. It complements your menus and never replaces them."

export function Palette() {
  const [open, setOpen] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
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
        <Kbd>⌘J</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command" />
          <CommandList>
            <CommandEmpty>Nothing matches that.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}>
                <MessageSquarePlusIcon />
                New thread
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <GitBranchIcon />
                Switch branch
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <TerminalIcon />
                Toggle terminal
                <CommandShortcut>⌘J</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Preferences">
              <CommandItem
                onSelect={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  setOpen(false)
                }}
              >
                <MoonIcon />
                Toggle dark mode
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <SettingsIcon />
                Open settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
