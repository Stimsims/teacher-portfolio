
import { posts, getPostsByTag, getPostsBySection, countPostsByTag } from '$lib/+Data/posts.js';
// +page.js or +limport { posts, getPostsByTag } from '$lib/+Data/posts.js';ayout.js
export const prerender = true;

export function load() {
  console.log("math_engage posts", getPostsBySection(posts, "math_engage"));
  return {
    work_posts: getPostsByTag(posts, "work"), 
    engagement_posts: getPostsByTag(posts, "engagement"), 
    math_posts: getPostsByTag(posts, "math"), 
    math_engage_posts: getPostsBySection(posts, "math_engage"),
    math_access_posts: getPostsBySection(posts, "math_access"),
    math_assessment_posts: getPostsBySection(posts, "math_assessment"),
    math_extension_posts: getPostsBySection(posts, "math_extension"),
    ai_certificate_posts: getPostsByTag(posts, "certificate"),
    literacy_posts: getPostsByTag(posts, "literacy"),
    tag_count: countPostsByTag(posts),
  };
}
