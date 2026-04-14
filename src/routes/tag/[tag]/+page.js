// src/routes/tag/[tag]/+page.js
import { posts, getPostsByTag, getPostsByAITSL } from '$lib/+Data/posts.js';
import { getTagDescription } from '$lib/+Data/tag_descriptions.js';

export function load({ params }) {
  const { tag } = params;
  const filteredTagPosts = getPostsByTag(posts, tag);
  const filteredAITSLPosts = getPostsByAITSL(posts, tag);
  const all = [...filteredTagPosts, ...filteredAITSLPosts];
  const description = getTagDescription(tag);
  console.log(`Filtering posts for tag: ${tag} description: ${description}`, posts);
  return { tag, filteredPosts: all, tagDescription: description };
}