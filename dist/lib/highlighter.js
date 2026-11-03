"use client";
import { jsx } from "react/jsx-runtime";
import "react";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
// src/lib/highlighter.tsx
const languages = {
	bash: () => import("shiki/langs/shellscript.mjs"),
	css: () => import("shiki/langs/css.mjs"),
	diff: () => import("shiki/langs/diff.mjs"),
	html: () => import("shiki/langs/html.mjs"),
	javascript: () => import("shiki/langs/javascript.mjs"),
	json: () => import("shiki/langs/json.mjs"),
	jsx: () => import("shiki/langs/jsx.mjs"),
	markdown: () => import("shiki/langs/markdown.mjs"),
	python: () => import("shiki/langs/python.mjs"),
	sql: () => import("shiki/langs/sql.mjs"),
	tsx: () => import("shiki/langs/tsx.mjs"),
	typescript: () => import("shiki/langs/typescript.mjs"),
	yaml: () => import("shiki/langs/yaml.mjs")
};
const aliases = {
	js: "javascript",
	md: "markdown",
	py: "python",
	sh: "bash",
	shell: "bash",
	shellscript: "bash",
	ts: "typescript",
	yml: "yaml",
	zsh: "bash"
};
let highlighter;
function getHighlighter() {
	highlighter ??= createHighlighterCore({
		themes: [import("shiki/themes/github-light.mjs"), import("shiki/themes/github-dark.mjs")],
		langs: [],
		engine: createJavaScriptRegexEngine({ forgiving: true })
	});
	return highlighter;
}
function getLanguage(language) {
	const name = language.toLowerCase();
	if (name === "ansi") return name;
	if (name in languages) return name;
	return aliases[name] ?? null;
}
async function loadHighlighter(language) {
	const lang = getLanguage(language);
	if (!lang) return null;
	const shiki = await getHighlighter();
	if (lang !== "ansi" && !shiki.getLoadedLanguages().includes(lang)) await shiki.loadLanguage(languages[lang]);
	return { highlight(code, state) {
		const tokenize = (text) => shiki.codeToTokens(text, {
			lang,
			themes: {
				light: "github-light",
				dark: "github-dark"
			},
			defaultColor: "light-dark()",
			grammarState: state
		}).tokens;
		const tokens = lang === "ansi" ? code.split("\n").flatMap((line) => tokenize(line)) : tokenize(code);
		return {
			lines: tokens.map((line) => line.map((token, index) => /* @__PURE__ */ jsx("span", {
				style: token.htmlStyle,
				children: token.content
			}, index))),
			state: shiki.getLastGrammarState(tokens)
		};
	} };
}
export { loadHighlighter };
