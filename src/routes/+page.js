
import { posts, getPostsByTag, countPostsByTag } from '$lib/+Data/posts.js';
// +page.js or +limport { posts, getPostsByTag } from '$lib/+Data/posts.js';ayout.js
export const prerender = true;

export function load() {
  console.log("work experience posts", getPostsByTag(posts, "work"))
  return {
    work_posts: getPostsByTag(posts, "work"), 
    math_posts: getPostsByTag(posts, "math"), 
    ai_certificate_posts: getPostsByTag(posts, "certificate"),
    literacy_posts: getPostsByTag(posts, "literacy"),
    tag_count: countPostsByTag(posts)
  };
}
