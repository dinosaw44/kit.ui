import type { StorybookConfig } from "@storybook/angular";
import { basename, resolve } from "path";

const config: StorybookConfig = {
  stories: ["../components/angular/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  async webpackFinal(config) {
    config.cache = {
      type: "filesystem",
      cacheDirectory: resolve(__dirname, '..', '.cache', `webpack.${basename(__dirname)}`)
    }
    return config;
},
};
export default config;
