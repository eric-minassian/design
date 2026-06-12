import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import { defaultClientConditions } from "vite"

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  async viteFinal(config) {
    config.plugins ??= []
    config.plugins.push(tailwindcss())
    config.resolve ??= {}
    // Resolve #components/* package imports to src (live reload) instead of dist
    config.resolve.conditions = ["source", ...defaultClientConditions]
    return config
  },
}

export default config
