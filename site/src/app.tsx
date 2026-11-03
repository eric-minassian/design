import * as React from "react"
import {
  BookOpenIcon,
  LaptopIcon,
  MoonIcon,
  PaletteIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react"

import { Button } from "@/components/button"
import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command"
import { Kbd } from "@/components/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { Separator } from "@/components/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/sidebar"
import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"
import { TooltipProvider } from "@/components/tooltip"
import { ACCENTS, ThemeProvider, useTheme, type Theme } from "@/lib/theme"
import { cn } from "@/lib/utils"
import { version } from "../../package.json"
import { ACCENT_SWATCH } from "~/accents"
import { GithubIcon } from "~/components/github-icon"
import { allComponents, componentGroups, foundations, patterns } from "~/nav"
import { ComponentPage } from "~/pages/component-page"
import { FoundationPage } from "~/pages/foundations"
import { GetStartedPage } from "~/pages/get-started"
import { HomePage } from "~/pages/home"
import { NotFoundPage } from "~/pages/not-found"
import { href, navigate, usePath } from "~/router"

function Routes({ path }: { path: string }) {
  const [, section, slug] = path.match(/^\/([\w-]+)(?:\/([\w-]+))?$/) ?? []
  if (path === "/") return <HomePage />
  if (section === "get-started" && !slug) return <GetStartedPage />
  if (section === "foundations" && slug) {
    const doc = foundations.find((item) => item.slug === slug)
    if (doc) return <FoundationPage doc={doc} />
  }
  if (section === "patterns" && slug) {
    const doc = patterns.find((item) => item.slug === slug)
    if (doc) return <ComponentPage key={slug} doc={doc} eyebrow="Pattern" file={`pattern-${slug}`} />
  }
  if (section === "components" && slug) {
    const doc = allComponents.find((item) => item.slug === slug)
    if (doc) return <ComponentPage key={slug} doc={doc} eyebrow="Component" file={slug} />
  }
  return <NotFoundPage />
}

function NavRow({ path, to, children }: { path: string; to: string; children: React.ReactNode }) {
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={path === to}
        render={<a href={href(to)} />}
        size="sm"
        onClick={() => {
          if (isMobile) setOpenMobile(false)
        }}
      >
        <span>{children}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="w-full justify-start px-2.5 text-muted-foreground"
      size="sm"
      variant="outline"
      onClick={onClick}
    >
      <SearchIcon />
      <span className="flex-1 text-left font-normal">Search</span>
      <Kbd className="-me-1">⌘K</Kbd>
    </Button>
  )
}

function SiteSidebar({ path, onSearch }: { path: string; onSearch: () => void }) {
  return (
    <Sidebar>
      <SidebarHeader className="gap-3 px-3 pt-3.5">
        <a className="flex items-center gap-2 px-1 font-semibold text-sm tracking-tight" href={href("/")}>
          <span
            aria-hidden
            className="grid size-5 place-items-center rounded-md bg-foreground"
          >
            <span className="size-2 rounded-full bg-primary" />
          </span>
          Design
          <span className="font-normal text-2xs text-muted-foreground">v{version}</span>
        </a>
        <SearchButton onClick={onSearch} />
      </SidebarHeader>
      <SidebarContent className="no-scrollbar gap-0 px-1 pb-4">
        <SidebarGroup className="py-1">
          <SidebarMenu className="gap-0.5">
            <NavRow path={path} to="/">Overview</NavRow>
            <NavRow path={path} to="/get-started">Get started</NavRow>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="py-1">
          <SidebarGroupLabel>Foundations</SidebarGroupLabel>
          <SidebarMenu className="gap-0.5">
            {foundations.map((item) => (
              <NavRow key={item.slug} path={path} to={`/foundations/${item.slug}`}>
                {item.title}
              </NavRow>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="py-1">
          <SidebarGroupLabel>Patterns</SidebarGroupLabel>
          <SidebarMenu className="gap-0.5">
            {patterns.map((item) => (
              <NavRow key={item.slug} path={path} to={`/patterns/${item.slug}`}>
                {item.title}
              </NavRow>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {componentGroups.map((group) => (
          <SidebarGroup key={group.label} className="py-1">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarMenu className="gap-0.5">
              {group.items.map((item) => (
                <NavRow key={item.slug} path={path} to={`/components/${item.slug}`}>
                  {item.title}
                </NavRow>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t px-3 py-2">
        <Button
          className="justify-start"
          nativeButton={false}
          render={<a href="https://github.com/eric-minassian/design" rel="noreferrer" target="_blank" />}
          size="sm"
          variant="ghost-muted"
        >
          <GithubIcon />
          eric-minassian/design
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

function ThemeControls() {
  const { theme, setTheme, accent, setAccent } = useTheme()
  return (
    <div className="flex items-center gap-1.5">
      <Popover>
        <PopoverTrigger render={<Button aria-label="Accent color" size="icon-sm" variant="ghost" />}>
          <PaletteIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto">
          <p className="mb-2 font-medium text-muted-foreground text-xs">Accent</p>
          <div className="flex gap-1.5">
            {ACCENTS.map((name) => (
              <button
                key={name}
                aria-label={name}
                aria-pressed={accent === name}
                className={cn(
                  "size-6 cursor-pointer rounded-full ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  accent === name && "ring-2 ring-foreground/40"
                )}
                style={{ background: ACCENT_SWATCH[name] }}
                title={name}
                type="button"
                onClick={() => setAccent(name)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <ToggleGroup
        aria-label="Theme"
        value={[theme]}
        variant="segmented"
        onValueChange={(next) => {
          const value = next[0] as Theme | undefined
          if (value) setTheme(value)
        }}
      >
        <ToggleGroupItem aria-label="System" className="px-1.5" value="system">
          <LaptopIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Light" className="px-1.5" value="light">
          <SunIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Dark" className="px-1.5" value="dark">
          <MoonIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function routeTitle(path: string) {
  const [, section, slug] = path.match(/^\/([\w-]+)(?:\/([\w-]+))?$/) ?? []
  const collections = { foundations, patterns, components: allComponents } as const
  if (section && slug && section in collections) {
    const item = collections[section as keyof typeof collections].find((doc) => doc.slug === slug)
    if (item) {
      return { section: section.charAt(0).toUpperCase() + section.slice(1), title: item.title }
    }
  }
  if (path === "/get-started") return { section: null, title: "Get started" }
  return { section: null, title: "Overview" }
}

function Topbar({ path, onSearch }: { path: string; onSearch: () => void }) {
  const { section, title } = routeTitle(path)
  return (
    <header className="surface-glass sticky top-0 z-20 flex h-(--topbar-height) shrink-0 items-center gap-2 border-b px-3 sm:px-4">
      <SidebarTrigger />
      <Separator className="mx-1 h-4 self-center!" orientation="vertical" />
      <p className="min-w-0 truncate text-sm">
        {section && <span className="text-muted-foreground">{section} / </span>}
        <span className="font-medium">{title}</span>
      </p>
      <div className="ms-auto flex items-center gap-1.5">
        <Button aria-label="Search" className="md:hidden" size="icon-sm" variant="ghost" onClick={onSearch}>
          <SearchIcon />
        </Button>
        <ThemeControls />
      </div>
    </header>
  )
}

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const go = (to: string) => {
    onOpenChange(false)
    navigate(to)
  }
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command>
        <CommandInput placeholder="Search the design system" />
        <CommandList>
          <CommandEmpty>Nothing matches that.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem value="Overview" onSelect={() => go("/")}>
              <BookOpenIcon />
              Overview
            </CommandItem>
            <CommandItem value="Get started install" onSelect={() => go("/get-started")}>
              <BookOpenIcon />
              Get started
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Foundations">
            {foundations.map((item) => (
              <CommandItem key={item.slug} value={item.title} onSelect={() => go(`/foundations/${item.slug}`)}>
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Patterns">
            {patterns.map((item) => (
              <CommandItem key={item.slug} value={item.title} onSelect={() => go(`/patterns/${item.slug}`)}>
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {componentGroups.map((group) => (
            <CommandGroup key={group.label} heading={group.label}>
              {group.items.map((item) => (
                <CommandItem key={item.slug} value={item.title} onSelect={() => go(`/components/${item.slug}`)}>
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

function Shell() {
  const path = usePath()
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <SidebarProvider>
      <SiteSidebar path={path} onSearch={() => setSearchOpen(true)} />
      <SidebarInset>
        <Topbar path={path} onSearch={() => setSearchOpen(true)} />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-8 sm:py-12">
          <Routes path={path} />
        </main>
      </SidebarInset>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </SidebarProvider>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Shell />
      </TooltipProvider>
    </ThemeProvider>
  )
}
