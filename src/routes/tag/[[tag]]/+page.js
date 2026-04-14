export const prerender = true;

import { posts } from '$lib/+Data/posts.js';

export async function entries() {
  // Flatten tags + AITSL
  const allTags = posts.flatMap((p) => p.tags || []);
  const allAitsl = posts.flatMap((p) => p.aitsl || []);

  // Deduplicate and slugify
  const uniqueSlugs = Array.from(new Set([...allTags, ...allAitsl]))
    .map((s, i) => {
      const slug = s
        ?.toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-') // spaces→dashes
        .replace(/[^\w.-]+/g, ''); // remove invalid chars
      console.log(`Slug[${i}]:`, JSON.stringify(s), '→', JSON.stringify(slug));
      return slug;
    })
    .filter(Boolean); // ✅ remove empty/null

  // Map to route entries
  const paths = uniqueSlugs.map((slug) => `/tag/${slug}`);
  console.log('Entries for /tag/[tag]:', paths);

  return paths;
}

export function load({ params }) {
  const tag = params.tag;

  // If there's no tag (like visiting /tag/) – return empty and let +error.svelte handle 404
  if (!tag) {
    console.warn('No tag provided in URL');
    return { tag: null, filteredPosts: [] };
  }

  const filteredTagPosts = posts.filter(post => post.tags?.includes(tag));
  const filteredAitslPosts = posts.filter(post => post.aitsl?.includes(tag));
  const filteredPosts = [...filteredTagPosts, ...filteredAitslPosts];
  
  // if (filteredPosts.length === 0) {
  //   // Throw to trigger 404 page
  //   throw Error(404, `No posts found for tag: ${tag}`);
  // }

  return { tag, filteredPosts, empty: filteredPosts.length === 0 };
}