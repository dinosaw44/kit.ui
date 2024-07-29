import { default as base } from "../svelte/main";
import { refs } from "./refs";
import { basename, resolve } from "path";

const stories = ["../../elements/**/*.stories.@(js|ts|svelte)"]

const config: typeof base = {
    ...base,
    stories,
    refs,
    async viteFinal(config) {
        config.cacheDir = resolve(__dirname, '..', '..', '.cache', `vite.${basename(__dirname)}`)
        return config;
    },
}

export default config;