import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        // Opens your specific HTML file in the browser on startup
        open: '/timer.html',
        // Uses a different port so you can run dev and dev2 at the same time
        port: 5174
    }
})
