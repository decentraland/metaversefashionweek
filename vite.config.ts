import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import svgLoader from "vite-svg-loader"
// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const envVariables = loadEnv(mode, process.cwd())
  return {
    plugins: [react(), svgLoader()],
    base: envVariables.VITE_BASE_URL,
  }
})
