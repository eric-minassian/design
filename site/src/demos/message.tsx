import { CopyIcon, RotateCcwIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/bubble"
import { Button } from "@/components/button"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/message"

export const notes =
  "An agent's turn has no surface and no avatar, so it reads as a document. Only the person's turns sit on a bubble, which is what makes them easy to find when scanning back."

export const bare = ["Turns"]

export function Turns() {
  return (
    <div className="mx-auto w-full max-w-(--content-max-width) p-4 sm:p-6">
      <MessageGroup>
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>
                The retry test in <code>queue.test.ts</code> fails about one run in ten. Can you
                find out why?
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <MessageContent>
            <p>
              The test advances fake timers before <code>enqueue</code> has resolved, so the retry
              can be scheduled after the clock has already moved. It only passes when the promise
              wins that race.
            </p>
            <p>Two changes make it deterministic:</p>
            <ol>
              <li>
                Await <code>enqueue</code> before calling <code>advanceTimersByTime</code>.
              </li>
              <li>
                Replace the fixed 50ms sleep with <code>vi.waitFor</code>.
              </li>
            </ol>
            <p>
              With both in place, <code>pnpm test queue</code> passed 200 runs in a row.
            </p>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

export function WithActions() {
  return (
    <div className="w-full max-w-(--content-max-width)">
      <Message>
        <MessageContent>
          <p>
            Renamed <code>worker-pool</code> to <code>job-runner</code> and updated 14 imports. The
            public API is unchanged, so nothing downstream needs to move.
          </p>
          <MessageFooter>
            <span>2:41 PM</span>
            <span aria-hidden>·</span>
            <span>18s</span>
            <Button aria-label="Copy" size="icon-xs" variant="ghost-muted">
              <CopyIcon />
            </Button>
            <Button aria-label="Retry" size="icon-xs" variant="ghost-muted">
              <RotateCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

export function RevealOnHover() {
  return (
    <div className="w-full max-w-(--content-max-width)">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Hover this turn to see its timestamp and copy action.</BubbleContent>
          </Bubble>
          <MessageFooter reveal>
            <span>2:38 PM</span>
            <Button aria-label="Copy" size="icon-xs" variant="ghost-muted">
              <CopyIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

export function SharedThread() {
  return (
    <div className="w-full max-w-(--content-max-width)">
      <MessageGroup>
        <Message>
          <MessageAvatar className="size-6">TB</MessageAvatar>
          <MessageContent>
            <MessageHeader>Theo, guest</MessageHeader>
            <Bubble variant="outline">
              <BubbleContent>Does this also cover the retry path on the CLI?</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <MessageHeader>You</MessageHeader>
            <Bubble>
              <BubbleContent>Good catch. Check the CLI retry path as well.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}
