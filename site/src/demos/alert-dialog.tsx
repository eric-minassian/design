import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog"
import { Button } from "@/components/button"

export const notes =
  "Only for decisions that cannot be taken back. Clicking outside does nothing, so name the outcome in the button rather than asking for an OK."

export function Destructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive-outline" />}>Delete thread</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this thread?</AlertDialogTitle>
          <AlertDialogDescription>
            The conversation and its worktree at t3/checkout-flake are removed. Commits already pushed stay on origin.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">Keep thread</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete thread</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function WithMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Discard changes</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive-surface text-destructive-foreground">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Discard 14 changed files?</AlertDialogTitle>
          <AlertDialogDescription>
            Uncommitted work in this worktree is lost. There is no stash to come back to.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Discard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function Small() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Stop agent</AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Stop the agent?</AlertDialogTitle>
          <AlertDialogDescription>It is partway through editing 3 files.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter variant="bare">
          <AlertDialogCancel>Keep going</AlertDialogCancel>
          <AlertDialogAction>Stop</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
