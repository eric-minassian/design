import { DownloadIcon, FileCodeIcon, FileTextIcon, ImageIcon, RotateCcwIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/attachment"
import { Spinner } from "@/components/spinner"

const screenshot =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#18181b"/><rect x="12" y="14" width="60" height="6" rx="3" fill="#71717a"/><rect x="12" y="28" width="96" height="6" rx="3" fill="#3f3f46"/><rect x="12" y="42" width="78" height="6" rx="3" fill="#3f3f46"/><rect x="12" y="66" width="96" height="40" rx="6" fill="#27272a"/><rect x="22" y="78" width="44" height="6" rx="3" fill="#ef4444"/><rect x="22" y="90" width="66" height="6" rx="3" fill="#52525b"/></svg>`
  )

export const notes =
  "Use the file card when a turn sends files without words, and the small sizes inside a composer. A failed upload says why and offers the retry right there."

export function FileCards() {
  return (
    <div className="flex w-full flex-col items-end gap-1">
      <Attachment className="w-64">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>retry.test.ts</AttachmentTitle>
          <AttachmentDescription>TS · 4.2 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download retry.test.ts">
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-64">
        <AttachmentTrigger aria-label="Preview ci-failure.log" />
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>ci-failure.log</AttachmentTitle>
          <AttachmentDescription>LOG · 118 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download ci-failure.log">
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Attachment className="w-full max-w-full" state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>coverage-report.html</AttachmentTitle>
          <AttachmentDescription>Uploading, 62%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-full max-w-full" state="processing">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-review.mov</AttachmentTitle>
          <AttachmentDescription>Compressing</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment className="w-full max-w-full" state="error">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>heap-dump.bin</AttachmentTitle>
          <AttachmentDescription>Larger than the 50 MB limit</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Retry upload">
            <RotateCcwIcon />
          </AttachmentAction>
          <AttachmentAction aria-label="Remove heap-dump.bin">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-full max-w-full" state="idle">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Drop a screenshot</AttachmentTitle>
          <AttachmentDescription>PNG or JPG, up to 50 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}

export function ComposerStrip() {
  return (
    <AttachmentGroup className="w-full max-w-xl">
      <Attachment size="sm">
        <AttachmentMedia variant="image">
          <img alt="" src={screenshot} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>failing-test.png</AttachmentTitle>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove failing-test.png">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment size="sm">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>queue.ts</AttachmentTitle>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove queue.ts">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>pasted-text.md</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  )
}

export function ImageTiles() {
  return (
    <AttachmentGroup>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img alt="Screenshot of a failing test" src={screenshot} />
        </AttachmentMedia>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove screenshot" variant="glass">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment orientation="vertical" state="uploading">
        <AttachmentMedia variant="image">
          <img alt="Screenshot uploading" src={screenshot} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sidebar.png</AttachmentTitle>
          <AttachmentDescription>Uploading</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  )
}
