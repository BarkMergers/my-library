import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts()
    ],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "MyLibrary",
            formats: ["es", "umd"],
            fileName: (format) => `my-library.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        }
    }
});