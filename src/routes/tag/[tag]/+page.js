// src/routes/tag/[tag]/+page.js
import { posts } from '$lib/+Data/posts.js';

export function load({ params }) {
  const { tag } = params;
  const filteredPosts = posts.filter((post) => post.tags?.includes(tag));
  console.log(`Filtering posts for tag: ${tag}`, filteredPosts);
  return { tag, filteredPosts };
}