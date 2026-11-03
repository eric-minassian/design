import * as React from "react";
export type Theme = "system" | "light" | "dark";
export type Accent = "indigo" | "rose" | "grove" | "ocean" | "ember" | "iris";
export declare const ACCENTS: readonly Accent[];
/**
 * Inline this in <head> before anything paints to avoid a flash of the wrong
 * theme: <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 */
export declare const themeScript: string;
type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  accent: Accent;
  setAccent: (accent: Accent) => void;
};
/**
 * Light, dark or system, plus the app's accent, persisted to localStorage.
 * Pass `defaultAccent` to give an app its own color out of the box.
 */
declare function ThemeProvider({ defaultTheme, defaultAccent, children }: {
  defaultTheme?: Theme;
  defaultAccent?: Accent;
  children: React.ReactNode;
}): React.JSX.Element;
declare function useTheme(): ThemeContextValue;
export { ThemeProvider, useTheme };