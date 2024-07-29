import type { StorybookConfig } from "storybook/internal/types";
import pkg from "../../package.json"

const { config } = pkg

export const references = Object.fromEntries(Object.entries(config).map(([ route, port ]) => {
    return [ route, {
        title: route[0].toUpperCase() + route.slice(1),
        local: `http://localhost:${port}`,
        pages: `${process.env.BASE_PATH}/${route}`
    }]
})) /* {
    "angular": {
        "title": "angular",
        "local": "http://localhost:7001",
        "pages": `${process.env.BASE_PATH}/angular`
    },
    "react": {
        "title": "react",
        "local": "http://localhost:7002",
        "pages": `${process.env.BASE_PATH}/react`
    },
    "svelte": {
        "title": "svelte",
        "local": "http://localhost:7003",
        "pages": `${process.env.BASE_PATH}/svelte`
    },
    "vue": {
        "title": "vue",
        "local": "http://localhost:7004",
        "pages": `${process.env.BASE_PATH}/vue`
    },
} */

export const refs: StorybookConfig['refs'] = (config, { configType }) => {
    const refKey = configType === 'DEVELOPMENT'
        ? 'local'
        : 'pages';

    const newRefs = {};
    
    for (const [key, value] of Object.entries(references)) {
        newRefs[key] = {
            title: value.title,
            url: value[refKey],
        }
    }

    return newRefs;
}