import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
const srcPath = path.resolve('src');

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(srcPath) }],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/shared/styles/globals.scss";`,
				includePaths: [srcPath]
			}
		},
	},
});