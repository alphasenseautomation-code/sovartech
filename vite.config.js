import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Dev only: serve the Vercel function in api/enquiry.js at /api/enquiry during `npm run dev`.
// Server-side env vars (RESEND_API_KEY, RESEND_FROM) are read from .env here and stay on the
// server; Vite only exposes VITE_-prefixed variables to browser code.
function enquiryApiDev() {
  return {
    name: 'sovar-enquiry-api-dev',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const key of ['RESEND_API_KEY', 'RESEND_FROM']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }
      server.middlewares.use('/api/enquiry', async (req, res) => {
        const { default: handler } = await server.ssrLoadModule('/api/enquiry.js')
        await handler(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), enquiryApiDev()],
})
