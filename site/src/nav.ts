export type ComponentDoc = {
  slug: string
  title: string
  description: string
  /** Base UI primitive page, when this wraps one. */
  baseUi?: string
}

export type ComponentGroup = { label: string; items: ComponentDoc[] }

export const foundations = [
  { slug: "color", title: "Color", description: "Quiet zinc in light, true black in dark, one action color per app." },
  { slug: "typography", title: "Typography", description: "The platform font first, and a type scale built for dense UI." },
  { slug: "geometry", title: "Geometry", description: "Compact controls, an 8px radius, and spacing that holds them together." },
  { slug: "surfaces", title: "Surfaces", description: "Glass for what floats, grain for what sits, borders for the rest." },
  { slug: "motion", title: "Motion", description: "Short, decelerating, and duty-cycled so idle screens stay idle." },
  { slug: "icons", title: "Icons", description: "Lucide at a lighter 1.75 stroke, muted until they matter." },
]

export const patterns = [
  { slug: "app-shell", title: "App shell", description: "Rail, inset canvas, and a topbar that fades content underneath." },
  { slug: "settings", title: "Settings", description: "Grouped rows with the control on the right. No forms for simple choices." },
  { slug: "conversation", title: "Conversation", description: "A narrow reading lane, tool activity, and a floating composer." },
  { slug: "command-palette", title: "Command palette", description: "Everything reachable from the keyboard, in one glass sheet." },
  { slug: "states", title: "Empty and loading", description: "What a screen says when it has nothing to show yet." },
]

export const componentGroups: ComponentGroup[] = [
  {
    label: "Actions",
    items: [
      { slug: "button", title: "Button", description: "Every press in the system, from a solid call to action to a 20px icon.", baseUi: "button" },
      { slug: "button-group", title: "Button group", description: "Related actions fused into a single control." },
      { slug: "toggle", title: "Toggle", description: "A pressable on/off, with segmented and pill variants.", baseUi: "toggle" },
      { slug: "toggle-group", title: "Toggle group", description: "One or many pressed options from a small set.", baseUi: "toggle-group" },
    ],
  },
  {
    label: "Forms",
    items: [
      { slug: "input", title: "Input", description: "A single line of text with an inset focus ring.", baseUi: "input" },
      { slug: "textarea", title: "Textarea", description: "Multi-line text that grows with its content." },
      { slug: "input-group", title: "Input group", description: "Icons, text and buttons attached to an input." },
      { slug: "input-otp", title: "Input OTP", description: "One-time codes, one slot per character." },
      { slug: "number-field", title: "Number field", description: "A number with stepper buttons and scrub-friendly keys.", baseUi: "number-field" },
      { slug: "select", title: "Select", description: "Pick one option from a glass popup.", baseUi: "select" },
      { slug: "native-select", title: "Native select", description: "The platform picker, for phones and long lists." },
      { slug: "combobox", title: "Combobox", description: "A select you can type into.", baseUi: "combobox" },
      { slug: "checkbox", title: "Checkbox", description: "A yes or no that applies when the form does.", baseUi: "checkbox" },
      { slug: "radio-group", title: "Radio group", description: "One choice, every option visible.", baseUi: "radio-group" },
      { slug: "switch", title: "Switch", description: "A setting that applies the moment you flip it.", baseUi: "switch" },
      { slug: "slider", title: "Slider", description: "An approximate value along a range.", baseUi: "slider" },
      { slug: "calendar", title: "Calendar", description: "Single dates and ranges on a compact grid." },
      { slug: "label", title: "Label", description: "Names a control and extends its hit area." },
      { slug: "field", title: "Field", description: "Label, control, description and error, laid out.", baseUi: "field" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { slug: "dialog", title: "Dialog", description: "A focused task on a glass sheet.", baseUi: "dialog" },
      { slug: "alert-dialog", title: "Alert dialog", description: "A confirmation you have to answer.", baseUi: "alert-dialog" },
      { slug: "sheet", title: "Sheet", description: "A panel docked to an edge of the window.", baseUi: "dialog" },
      { slug: "drawer", title: "Drawer", description: "A sheet you can drag, for touch.", baseUi: "drawer" },
      { slug: "popover", title: "Popover", description: "Rich content anchored to a trigger.", baseUi: "popover" },
      { slug: "tooltip", title: "Tooltip", description: "A short label for an icon-only control.", baseUi: "tooltip" },
      { slug: "hover-card", title: "Hover card", description: "A preview of what a link points at.", baseUi: "preview-card" },
      { slug: "dropdown-menu", title: "Dropdown menu", description: "Actions behind a trigger.", baseUi: "menu" },
      { slug: "context-menu", title: "Context menu", description: "Actions for the thing under the pointer.", baseUi: "context-menu" },
      { slug: "menubar", title: "Menubar", description: "A desktop-style row of menus.", baseUi: "menubar" },
      { slug: "command", title: "Command", description: "A searchable list of everything you can do." },
    ],
  },
  {
    label: "Navigation",
    items: [
      { slug: "sidebar", title: "Sidebar", description: "The navigation rail, with quiet row states." },
      { slug: "tabs", title: "Tabs", description: "Switch views in place, as pills or an underline.", baseUi: "tabs" },
      { slug: "breadcrumb", title: "Breadcrumb", description: "Where this page sits." },
      { slug: "pagination", title: "Pagination", description: "Move through a long result set." },
      { slug: "navigation-menu", title: "Navigation menu", description: "Top-level site links with rich popups.", baseUi: "navigation-menu" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { slug: "alert", title: "Alert", description: "A message that stays until it is dealt with." },
      { slug: "toast", title: "Toast", description: "A message that comes and goes.", baseUi: "toast" },
      { slug: "badge", title: "Badge", description: "A small label, tinted by meaning." },
      { slug: "status-dot", title: "Status dot", description: "State you can read at a glance." },
      { slug: "progress", title: "Progress", description: "How far along a known amount of work is.", baseUi: "progress" },
      { slug: "spinner", title: "Spinner", description: "Work of unknown length." },
      { slug: "skeleton", title: "Skeleton", description: "The shape of what is about to load." },
      { slug: "empty", title: "Empty", description: "What to say when there is nothing to show." },
    ],
  },
  {
    label: "Display",
    items: [
      { slug: "card", title: "Card", description: "A raised, bordered group of related content." },
      { slug: "item", title: "Item", description: "A flexible row: media, text, and actions." },
      { slug: "table", title: "Table", description: "Dense data with hairline rows." },
      { slug: "data-table", title: "Data table", description: "Sort, search, filter, select and page through rows." },
      { slug: "avatar", title: "Avatar", description: "A person or workspace, with a fallback.", baseUi: "avatar" },
      { slug: "kbd", title: "Kbd", description: "A keyboard shortcut hint." },
      { slug: "separator", title: "Separator", description: "A hairline between things.", baseUi: "separator" },
      { slug: "accordion", title: "Accordion", description: "Stacked sections that expand in place.", baseUi: "accordion" },
      { slug: "collapsible", title: "Collapsible", description: "One section that opens and closes.", baseUi: "collapsible" },
      { slug: "scroll-area", title: "Scroll area", description: "A thin scrollbar with optional edge fades.", baseUi: "scroll-area" },
      { slug: "resizable", title: "Resizable", description: "Panels you can drag apart." },
      { slug: "aspect-ratio", title: "Aspect ratio", description: "Holds media to a fixed shape." },
      { slug: "carousel", title: "Carousel", description: "Swipe through a row of media." },
      { slug: "chart", title: "Chart", description: "Recharts, wired to a validated color order." },
    ],
  },
  {
    label: "Conversation",
    items: [
      { slug: "message", title: "Message", description: "One turn in a thread, with its avatar and metadata." },
      { slug: "bubble", title: "Bubble", description: "The surface a user turn sits on." },
      { slug: "message-scroller", title: "Message scroller", description: "A thread that sticks to the bottom as it streams." },
      { slug: "attachment", title: "Attachment", description: "Files and images in a composer or a turn." },
      { slug: "code-block", title: "Code block", description: "Highlighted, copyable code that handles streaming." },
      { slug: "trace", title: "Trace", description: "Tool calls and reasoning, collapsed until asked for." },
      { slug: "marker", title: "Marker", description: "A quiet divider inside a thread." },
      { slug: "questionnaire", title: "Questionnaire", description: "An agent asking you to pick." },
    ],
  },
]

export const allComponents = componentGroups.flatMap((group) => group.items)
