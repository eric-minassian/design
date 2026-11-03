"use client";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
// src/lib/utils.ts
const twMerge = extendTailwindMerge({ extend: { theme: { text: ["2xs", "3xs"] } } });
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
export { cn };
