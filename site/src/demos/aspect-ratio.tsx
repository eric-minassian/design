import { AspectRatio } from "@/components/aspect-ratio"

export const notes =
  "Reserve the space before media loads, so the page does not jump. Set the ratio and let the width come from the layout."

export function Video() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        className="overflow-hidden rounded-xl border bg-linear-to-br from-primary/24 to-primary/4"
        ratio={16 / 9}
      >
        <span className="absolute start-3 bottom-2 text-muted-foreground text-xs">16 / 9</span>
      </AspectRatio>
    </div>
  )
}

export function Shapes() {
  return (
    <div className="grid w-full max-w-md grid-cols-[1fr_2fr] items-start gap-3">
      <AspectRatio className="overflow-hidden rounded-xl border bg-accent" ratio={1}>
        <span className="absolute start-3 bottom-2 text-muted-foreground text-xs">1 / 1</span>
      </AspectRatio>
      <AspectRatio className="overflow-hidden rounded-xl border bg-linear-to-br from-accent to-transparent" ratio={21 / 9}>
        <span className="absolute start-3 bottom-2 text-muted-foreground text-xs">21 / 9</span>
      </AspectRatio>
    </div>
  )
}
