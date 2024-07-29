import type { StorybookConfig } from "@storybook/svelte-vite";
import { basename, resolve } from "path";

const config: StorybookConfig = {
  stories: ["../components/svelte/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  async viteFinal(config) {
    config.cacheDir = resolve(__dirname, '..', '.cache', `vite.${basename(__dirname)}`)
    return config;
  },
};
export default config;
