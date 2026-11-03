import * as React from "react"
import { FolderIcon, GitBranchIcon, MessageSquareIcon, PlusIcon, SettingsIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Kbd } from "@/components/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/sidebar"
import { StatusDot } from "@/components/status-dot"

export const notes =
  "A zinc-50 rail in light and true black in dark. Rows stay muted until hovered, and the selected row lifts to white. Wrap your app in SidebarProvider and render Sidebar next to SidebarInset; it collapses with ⌘B and becomes a sheet on phones."

export const bare = ["Threads", "Nested"]

export function Threads() {
  const [active, setActive] = React.useState("retry")

  return (
    <SidebarProvider className="min-h-0">
      <Sidebar className="h-96 border-r" collapsible="none">
        <SidebarHeader>
          <Button className="justify-start" size="sm" variant="outline">
            <PlusIcon />
            New thread
            <Kbd className="ms-auto -me-1">⌘N</Kbd>
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>design</SidebarGroupLabel>
            <SidebarMenu className="gap-0.5">
              <SidebarMenuItem>
                <SidebarMenuButton isActive={active === "retry"} onClick={() => setActive("retry")}>
                  <StatusDot className="size-1.5" motion="pulse" tone="primary" />
                  <span>Fix flaky retry test</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={active === "queue"} onClick={() => setActive("queue")}>
                  <StatusDot className="size-1.5" motion="ping" tone="warning" />
                  <span>Rename queue module</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>2h</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={active === "deploy"} onClick={() => setActive("deploy")}>
                  <StatusDot className="size-1.5" tone="success" />
                  <span>Add deploy preview env</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>1d</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

export function Nested() {
  return (
    <SidebarProvider className="min-h-0">
      <Sidebar className="h-72 border-r" collapsible="none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu className="gap-0.5">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FolderIcon />
                  <span>design</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#/components/sidebar" isActive>
                      <GitBranchIcon />
                      <span>main</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#/components/sidebar">
                      <GitBranchIcon />
                      <span>fix/retry</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageSquareIcon />
                  <span>t3code</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
