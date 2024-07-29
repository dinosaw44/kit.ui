import type { StorybookConfig } from "@storybook/react-vite";
import { basename, resolve } from "path";

const config: StorybookConfig = {
  stories: ["../../components/react/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.cacheDir = resolve(__dirname, '..', '..', '.cache', `vite.${basename(__dirname)}`)
    return config;
  },
};
export default config;
