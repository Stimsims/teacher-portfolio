import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex({
		extensions: ['.svx']
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: false        // ← allow non-prerenderable routes
		}),
		paths: {
			base: dev ? '' : '/teacher-portfolio'
		},
		prerender: {
			entries: ['*']       // pre-render whenever possible
		}
	}
};

export default config;
