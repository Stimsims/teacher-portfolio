// src/routes/tag/[tag]/+page.js
import { posts, getPostsByTag } from '$lib/+Data/posts.js';
import { getTagDescription } from '$lib/+Data/tag_descriptions.js';

export function load({ params }) {
  const { tag } = params;
  const filteredPosts = getPostsByTag(posts, tag);
  const description = getTagDescription(tag);
  console.log(`Filtering posts for tag: ${tag} description: ${description}`, filteredPosts);
  return { tag, filteredPosts, tagDescription: description };
}