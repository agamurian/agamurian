// vite.config.js
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				experimental: { async: true }
			},
			adapter: adapter(),
			experimental: {
				remoteFunctions: true,
				handleRenderingErrors: true,
				forkPreloads: true
			},
			extensions: ['.svelte', '.svx'],
			preprocess: mdsvex(mdsvexConfig)
		})
	]
});
