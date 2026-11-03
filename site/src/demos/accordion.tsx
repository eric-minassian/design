import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion"

export const notes =
  "Good for reference content people scan once, like FAQs and settings explanations. If people need to compare sections, show them all."

export function Default() {
  return (
    <Accordion className="max-w-md" defaultValue={["worktrees"]}>
      <AccordionItem value="worktrees">
        <AccordionTrigger>Where do worktrees live?</AccordionTrigger>
        <AccordionContent>
          Each thread gets its own worktree under ~/.t3/worktrees, so agents never step on your checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="models">
        <AccordionTrigger>Can I switch models mid-thread?</AccordionTrigger>
        <AccordionContent>
          Yes. The next turn uses the new model, and the history carries over.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="approvals">
        <AccordionTrigger>What needs my approval?</AccordionTrigger>
        <AccordionContent>
          Anything outside the worktree, plus any command you have not allowed yet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Multiple() {
  return (
    <Accordion className="max-w-md" defaultValue={["build", "test"]} multiple>
      <AccordionItem value="build">
        <AccordionTrigger>Build</AccordionTrigger>
        <AccordionContent>Compiled 412 modules in 3.1s.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="test">
        <AccordionTrigger>Test</AccordionTrigger>
        <AccordionContent>128 passed, 2 skipped.</AccordionContent>
      </AccordionItem>
      <AccordionItem disabled value="deploy">
        <AccordionTrigger>Deploy</AccordionTrigger>
        <AccordionContent>Waiting for the checks above.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Bordered() {
  return (
    <Accordion className="max-w-md rounded-xl border px-3.5">
      <AccordionItem value="shell">
        <AccordionTrigger>Shell integration</AccordionTrigger>
        <AccordionContent>Runs commands in your login shell with your environment.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="git">
        <AccordionTrigger>Git identity</AccordionTrigger>
        <AccordionContent>Commits use the name and email from your git config.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
