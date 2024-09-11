import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const envVariables = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    base: envVariables.VITE_BASE_URL,
  }
})
