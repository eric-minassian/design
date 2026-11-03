import * as React from "react"
import { SendHorizontalIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/bubble"
import { Button } from "@/components/button"
import { Message, MessageContent } from "@/components/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/message-scroller"

const turns = [
  { id: "1", role: "user", text: "Why does the queue retry test fail about one run in ten?" },
  {
    id: "2",
    role: "agent",
    text: "The test advances fake timers before enqueue has resolved, so the retry can be scheduled after the clock has already moved. It only passes when the promise wins that race.",
  },
  { id: "3", role: "user", text: "Can you fix it without touching the queue itself?" },
  {
    id: "4",
    role: "agent",
    text: "Yes. The queue is correct, and only the test assumes an ordering it never asked for. Awaiting enqueue before advancing the clock removes the race.",
  },
  { id: "5", role: "user", text: "Do that, and swap the fixed sleep for something less fragile." },
  {
    id: "6",
    role: "agent",
    text: "Done. The sleep is now a vi.waitFor on the retry count, which returns as soon as the retry lands instead of always waiting 50ms.",
  },
  { id: "7", role: "user", text: "Run it a few hundred times to be sure." },
  {
    id: "8",
    role: "agent",
    text: "pnpm test queue passed 200 runs in a row, and the suite is 400ms faster without the sleep.",
  },
]

const reply =
  "Reading src/queue/retry.ts now. The backoff is computed from the attempt count, and attempts start at one, so the first retry waits twice as long as the docs say. That is a real bug, separate from the flaky test. I can fix it in this branch or open a follow-up, whichever you prefer."

export const notes =
  "Stays pinned to the bottom while a turn streams and lets go the moment you scroll up. The jump button only appears once you have left the live edge."

export const bare = ["Thread", "ScrolledBack", "Streaming"]

export function Thread() {
  return (
    <MessageScrollerProvider autoScroll>
      <MessageScroller className="h-96">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {turns.map((turn) => (
              <MessageScrollerItem key={turn.id} messageId={turn.id}>
                <Message align={turn.role === "user" ? "end" : "start"}>
                  <MessageContent>
                    {turn.role === "user" ? (
                      <Bubble>
                        <BubbleContent>{turn.text}</BubbleContent>
                      </Bubble>
                    ) : (
                      <p>{turn.text}</p>
                    )}
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

export function ScrolledBack() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <MessageScroller className="h-72">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {turns.map((turn) => (
              <MessageScrollerItem key={turn.id} messageId={turn.id}>
                <Message align={turn.role === "user" ? "end" : "start"}>
                  <MessageContent>
                    {turn.role === "user" ? (
                      <Bubble>
                        <BubbleContent>{turn.text}</BubbleContent>
                      </Bubble>
                    ) : (
                      <p>{turn.text}</p>
                    )}
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

export function Streaming() {
  const [text, setText] = React.useState("")
  const [streaming, setStreaming] = React.useState(false)

  React.useEffect(() => {
    if (!streaming) return
    const words = reply.split(" ")
    let index = 0
    setText("")
    const timer = setInterval(() => {
      index += 1
      setText(words.slice(0, index).join(" "))
      if (index === words.length) setStreaming(false)
    }, 60)
    return () => clearInterval(timer)
  }, [streaming])

  return (
    <div className="flex flex-col">
      <MessageScrollerProvider autoScroll>
        <MessageScroller className="h-72">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {turns.slice(4).map((turn) => (
                <MessageScrollerItem key={turn.id} messageId={turn.id}>
                  <Message align={turn.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      {turn.role === "user" ? (
                        <Bubble>
                          <BubbleContent>{turn.text}</BubbleContent>
                        </Bubble>
                      ) : (
                        <p>{turn.text}</p>
                      )}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
              {text && (
                <MessageScrollerItem messageId="reply">
                  <Message>
                    <MessageContent>
                      <p>{text}</p>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              )}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <div className="flex justify-end border-t p-2">
        <Button disabled={streaming} size="sm" variant="outline" onClick={() => setStreaming(true)}>
          <SendHorizontalIcon />
          Stream a reply
        </Button>
      </div>
    </div>
  )
}
