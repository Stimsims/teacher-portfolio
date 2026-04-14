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
			base: ''//netlify doesn't need this -> dev ? '' : '/teacher-portfolio'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}

				// otherwise fail the build
				throw new Error("my error!" + message);
			},
			entries: ['*']       // pre-render whenever possible
		}
	}
};

export default config;
