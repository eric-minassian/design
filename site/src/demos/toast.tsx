import { Button } from "@/components/button"
import { toast, Toaster } from "@/components/toast"

export const notes =
  "For news about something the user already started, and never for anything they must read. Errors that need a decision belong in the UI that caused them."

export function Setup() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() => toast.add({ title: "Copied commit hash", description: "5f47bdb is on your clipboard." })}
      >
        Mount once, call from anywhere
      </Button>
    </Toaster>
  )
}

export function Info() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          type: "info",
          title: "Update available",
          description: "Version 0.14 installs on restart.",
        })
      }
    >
      Info
    </Button>
  )
}

export function Success() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          type: "success",
          title: "Pushed to origin",
          description: "12 commits on t3/checkout-flake.",
        })
      }
    >
      Success
    </Button>
  )
}

export function Warning() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          type: "warning",
          title: "Context nearly full",
          description: "This thread has used 92% of its window.",
        })
      }
    >
      Warning
    </Button>
  )
}

export function Error() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          type: "error",
          title: "Push rejected",
          description: "origin/main moved. Pull and try again.",
        })
      }
    >
      Error
    </Button>
  )
}

export function Loading() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2400)), {
          loading: { title: "Running checks", description: "pnpm test --filter checkout" },
          success: { title: "Checks passed", description: "3 passed, 0 failed." },
          error: { title: "Checks failed" },
        })
      }
    >
      Loading
    </Button>
  )
}

export function WithAction() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.add({
          type: "success",
          title: "Thread archived",
          actionProps: {
            children: "Undo",
            onClick: () => toast.close(id),
          },
        })
      }}
    >
      With action
    </Button>
  )
}
