import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
//import { enhance } from '@sveltejs/enhanced-img/vite';

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
			fallback: null
		}),
		paths: {
			base: dev ? '' : '/teacher-portfolio'
		},
		prerender: {
			entries: ['*'] // pre-render all pages
		}
	},
	// vite: {
	// 	plugins: [enhance()]
	// }
};

export default config;
