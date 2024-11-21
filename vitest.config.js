import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'json-summary', 'json', 'cobertura'],
            provider: 'v8'
        },
    },
})
