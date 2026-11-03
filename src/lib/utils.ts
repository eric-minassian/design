import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Register the dense type scale so tailwind-merge treats `text-2xs` as a font
// size instead of a text color.
const twMerge = extendTailwindMerge({
  extend: {
    theme: { text: ["2xs", "3xs"] },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
