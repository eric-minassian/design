import { version } from "../../../package.json"
import { Code } from "~/components/code"
import { PageHeader } from "~/components/page-header"

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-medium text-base">{title}</h2>
      {children}
    </section>
  )
}

function Snippet({ code, lang }: { code: string; lang: string }) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <Code code={code} lang={lang} />
    </div>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground text-sm leading-relaxed [&_code]:rounded-sm [&_code]:bg-accent [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-foreground [&_code]:text-xs">
      {children}
    </p>
  )
}

export function GetStartedPage() {
  return (
    <>
      <PageHeader
        title="Get started"
        description="Two lines of CSS, then import what you need. Requires React 19 and Tailwind CSS 4."
      />
      <div className="flex flex-col gap-10">
        <Step title="Install">
          <Prose>
            CI publishes each change on <code>main</code> to the <code>release</code> branch as a
            built package, and tags each version. Track the branch, or pin a tag for an app you
            do not want moving under you.
          </Prose>
          <Snippet
            lang="bash"
            code={`# latest\npnpm add github:eric-minassian/design#release\n\n# pinned\npnpm add github:eric-minassian/design#v${version}`}
          />
        </Step>
        <Step title="Add the styles">
          <Prose>
            In your Tailwind entry file. This brings in the tokens, fonts, base styles and
            utilities, and tells Tailwind where the component classes are. There is no{" "}
            <code>@source</code> line to remember.
          </Prose>
          <Snippet lang="css" code={`@import "tailwindcss";\n@import "@eric-minassian/design/styles.css";`} />
        </Step>
        <Step title="Use a component">
          <Prose>Each component has its own entry point, so an app only bundles what it imports.</Prose>
          <Snippet
            lang="tsx"
            code={`import { Button } from "@eric-minassian/design/button"\nimport { cn } from "@eric-minassian/design/utils"\n\nexport function Save({ className }: { className?: string }) {\n  return <Button className={cn("w-full", className)}>Save changes</Button>\n}`}
          />
        </Step>
        <Step title="Set up the theme">
          <Prose>
            <code>ThemeProvider</code> handles light, dark and system, and persists the choice. Give
            each app its own color with <code>defaultAccent</code>. Inline{" "}
            <code>themeScript</code> in the head so the first paint is already correct.
          </Prose>
          <Snippet
            lang="tsx"
            code={`import { ThemeProvider, themeScript } from "@eric-minassian/design/theme"\n\n// In <head>, before anything paints:\n<script dangerouslySetInnerHTML={{ __html: themeScript }} />\n\n// Around your app:\n<ThemeProvider defaultAccent="grove">\n  <App />\n</ThemeProvider>`}
          />
        </Step>
        <Step title="Use a one-off brand color">
          <Prose>
            The six accents cover most apps. For anything else, override the action color in your
            stylesheet, after the import. Everything solid and every focus ring follows it.
          </Prose>
          <Snippet
            lang="css"
            code={`:root {\n  --primary: oklch(0.55 0.2 30);\n  --primary-foreground: white;\n}\n\n.dark {\n  --primary: oklch(0.7 0.17 30);\n  --primary-foreground: black;\n}`}
          />
        </Step>
        <Step title="Point your coding agent at the rules">
          <Prose>
            <code>DESIGN.md</code> ships with the package and holds the recipes in a form an agent
            can follow. Add a line to your app's <code>AGENTS.md</code> or <code>CLAUDE.md</code>.
          </Prose>
          <Snippet lang="bash" code={`UI follows node_modules/@eric-minassian/design/DESIGN.md.`} />
        </Step>
      </div>
    </>
  )
}
