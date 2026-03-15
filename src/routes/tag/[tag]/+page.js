// src/routes/tag/[tag]/+page.js
import { posts, getPostsByTag } from '$lib/+Data/posts.js';

export function load({ params }) {
  const { tag } = params;
  const filteredPosts = getPostsByTag(posts, tag);
  console.log(`Filtering posts for tag: ${tag}`, filteredPosts);
  return { tag, filteredPosts };
}