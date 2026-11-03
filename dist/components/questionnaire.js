"use client";
"use client";
import { cn } from "../lib/utils.js";
import { buttonVariants } from "./button.js";
import { CheckIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Questionnaire as Questionnaire$1 } from "@shadcn/react/questionnaire";
// src/components/questionnaire.tsx
function Questionnaire({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Root, {
		"data-slot": "questionnaire",
		className: cn("flex w-full min-w-0 flex-col gap-2", className),
		...props
	});
}
function QuestionnaireProgress({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Progress, {
		"data-slot": "questionnaire-progress",
		className: cn("min-h-[1lh] w-fit min-w-[14ch] text-2xs text-muted-foreground tabular-nums", className),
		...props
	});
}
function QuestionnaireItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Item, {
		"data-slot": "questionnaire-item",
		className: cn("flex min-w-0 flex-col gap-1.5 border-0 p-0 outline-none", className),
		...props
	});
}
function QuestionnaireTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Title, {
		"data-slot": "questionnaire-title",
		className: cn("mb-0.5 p-0 text-sm/relaxed font-medium text-pretty text-foreground [&:not(:has(~[data-slot=questionnaire-description]))]:mb-1.5", className),
		...props
	});
}
function QuestionnaireDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Description, {
		"data-slot": "questionnaire-description",
		className: cn("text-sm/relaxed text-pretty text-muted-foreground", className),
		...props
	});
}
function QuestionnaireChoices({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Choices, {
		"data-slot": "questionnaire-choices",
		className: cn("group/questionnaire-choices -mx-1.5 grid min-w-0", className),
		...props
	});
}
function QuestionnaireChoice({ children, className, ...props }) {
	return /* @__PURE__ */ jsxs(Questionnaire$1.Choice, {
		"data-slot": "questionnaire-choice",
		className: cn("group/questionnaire-choice relative flex cursor-pointer items-start gap-2.5 rounded-md py-1.5 ps-1.5 pe-1.5 text-start text-sm text-foreground/72 transition-colors outline-none select-none hover:bg-accent has-[>input:focus-visible]:ring-2 has-[>input:focus-visible]:ring-ring has-[>input:focus-visible]:ring-inset data-checked:text-foreground pointer-coarse:after:absolute pointer-coarse:after:inset-x-0 pointer-coarse:after:top-1/2 pointer-coarse:after:min-h-11 pointer-coarse:after:-translate-y-1/2", "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-64", className),
		...props,
		children: [
			/* @__PURE__ */ jsx(Questionnaire$1.ChoiceInput, {
				"data-slot": "questionnaire-choice-input",
				className: "absolute inset-0 z-10 size-full cursor-pointer opacity-0"
			}),
			/* @__PURE__ */ jsxs("span", {
				"aria-hidden": "true",
				"data-slot": "questionnaire-choice-indicator",
				className: "pointer-events-none relative mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm border border-input bg-background shadow-xs/5 not-dark:bg-clip-padding group-data-[type=radio]/questionnaire-choice:rounded-full group-data-invalid/questionnaire-choice:border-destructive/36 group-data-checked/questionnaire-choice:border-primary group-data-checked/questionnaire-choice:bg-primary group-data-checked/questionnaire-choice:text-primary-foreground group-data-checked/questionnaire-choice:shadow-none dark:bg-input/32 dark:group-data-checked/questionnaire-choice:bg-primary",
				children: [/* @__PURE__ */ jsx("span", {
					"data-slot": "questionnaire-choice-indicator-dot",
					className: "hidden size-1.5 rounded-full bg-primary-foreground group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
				}), /* @__PURE__ */ jsx(CheckIcon, {
					"data-slot": "questionnaire-choice-indicator-check",
					strokeWidth: 3,
					className: "hidden size-3 group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
				})]
			}),
			/* @__PURE__ */ jsx(Questionnaire$1.ChoiceLabel, {
				"data-slot": "questionnaire-choice-label",
				className: "flex min-w-0 flex-1 flex-col gap-0.5 font-medium",
				children
			}),
			/* @__PURE__ */ jsx(Questionnaire$1.ChoiceShortcut, {
				"data-slot": "questionnaire-choice-shortcut",
				className: "pointer-events-none ms-auto hidden h-5 min-w-5 shrink-0 items-center justify-center rounded bg-foreground/[0.07] px-1 font-sans text-xs font-medium text-muted-foreground group-data-[shortcut]/questionnaire-choice:inline-flex"
			})
		]
	});
}
function QuestionnaireChoiceDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "questionnaire-choice-description",
		className: cn("text-2xs font-normal text-secondary-label", className),
		...props
	});
}
function QuestionnaireInput({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "questionnaire-input-wrapper",
		className: "group/questionnaire-input relative w-full min-w-0 before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]",
		children: /* @__PURE__ */ jsx(Questionnaire$1.Input, {
			"data-slot": "questionnaire-input",
			className: cn("h-9 w-full min-w-0 rounded-lg border border-input bg-background px-[calc(--spacing(3)-1px)] text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow outline-none not-dark:bg-clip-padding focus-visible:border-ring focus-visible:shadow-none focus-visible:ring-[3px] focus-visible:ring-inset disabled:pointer-events-none disabled:opacity-64 aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 sm:h-8 sm:text-sm dark:bg-input/32", "placeholder:text-placeholder", className),
			...props
		})
	});
}
function QuestionnaireError({ className, ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Error, {
		"data-slot": "questionnaire-error",
		className: cn("mt-0.5 text-xs text-destructive-foreground", className),
		...props
	});
}
function QuestionnaireActions({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "questionnaire-actions",
		className: cn("grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1.5 pt-1", className),
		...props
	});
}
function QuestionnairePrevious({ children, className, size = "sm", variant = "outline", ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Previous, {
		"data-slot": "questionnaire-previous",
		"data-size": size,
		"data-variant": variant,
		className: cn(buttonVariants({
			size,
			variant
		}), "col-start-1 row-start-1 justify-self-start", className),
		...props,
		children: children ?? "Previous"
	});
}
function QuestionnaireSkip({ children, className, size = "sm", variant = "ghost-muted", ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Skip, {
		"data-slot": "questionnaire-skip",
		"data-size": size,
		"data-variant": variant,
		className: cn(buttonVariants({
			size,
			variant
		}), "col-start-2 row-start-1 justify-self-end", className),
		...props,
		children: children ?? "Skip"
	});
}
function QuestionnaireNext({ children, className, size = "sm", variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Next, {
		"data-slot": "questionnaire-next",
		"data-size": size,
		"data-variant": variant,
		className: cn(buttonVariants({
			size,
			variant
		}), "col-start-3 row-start-1 justify-self-end", className),
		...props,
		children: children ?? "Next"
	});
}
function QuestionnaireSubmit({ children, className, size = "sm", variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Questionnaire$1.Submit, {
		"data-slot": "questionnaire-submit",
		"data-size": size,
		"data-variant": variant,
		className: cn(buttonVariants({
			size,
			variant
		}), "col-start-3 row-start-1 justify-self-end", className),
		...props,
		children: children ?? "Submit"
	});
}
export { Questionnaire, QuestionnaireActions, QuestionnaireChoice, QuestionnaireChoiceDescription, QuestionnaireChoices, QuestionnaireDescription, QuestionnaireError, QuestionnaireInput, QuestionnaireItem, QuestionnaireNext, QuestionnairePrevious, QuestionnaireProgress, QuestionnaireSkip, QuestionnaireSubmit, QuestionnaireTitle };
