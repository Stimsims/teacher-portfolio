// mdsvex.config.js
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svx', '.md'],
  smartypants: true,
  layout: {
    _: './src/lib/layouts/Default.svelte'
  },
  frontmatter: {
    marker: '-', // default is '-'
    parse: true  // ensures frontmatter is parsed
  }
};