import type { Accent } from "@/lib/theme"

/** Light-mode values, so a picker can show every accent while another is active. */
export const ACCENT_SWATCH: Record<Accent, string> = {
  indigo: "oklch(0.488 0.217 264)",
  rose: "oklch(0.591646 0.217985 0.584)",
  grove: "oklch(0.523295 0.112292 158.089)",
  ocean: "oklch(0.536684 0.120219 247.01)",
  ember: "oklch(0.552831 0.129438 44.656)",
  iris: "oklch(0.525348 0.15373 294.176)",
}
