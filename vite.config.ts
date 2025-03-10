import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), svgLoader()],
})
