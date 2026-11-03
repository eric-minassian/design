import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"

const screenshots = ["Threads", "Diff review", "Terminal", "Settings"]
const models = ["opus-4.5", "sonnet-4.5", "haiku-4.5", "gpt-5", "gemini-3"]

export const notes =
  "Hides content behind a swipe, so keep it for media where order is not critical. If the slides hold anything people must read, use a list."

export function Default() {
  return (
    <div className="w-full max-w-sm px-12">
      <Carousel>
        <CarouselContent>
          {screenshots.map((name) => (
            <CarouselItem key={name}>
              <div className="flex aspect-video items-center justify-center rounded-xl border bg-linear-to-br from-primary/16 to-primary/2 text-muted-foreground text-sm">
                {name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export function MultipleSlides() {
  return (
    <div className="w-full max-w-lg px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {models.map((model) => (
            <CarouselItem key={model} className="basis-1/3 pl-2">
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-card font-mono text-muted-foreground text-xs">
                {model}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export function Vertical() {
  return (
    <div className="w-full max-w-xs py-12">
      <Carousel opts={{ align: "start" }} orientation="vertical">
        <CarouselContent className="-mt-2 h-44">
          {screenshots.map((name) => (
            <CarouselItem key={name} className="basis-1/2 pt-2">
              <div className="flex h-full items-center justify-center rounded-lg border bg-card text-muted-foreground text-sm">
                {name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
