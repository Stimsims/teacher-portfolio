//import { posts } from '$lib/data/posts.js';

// export function load({ params }) {
//   const { tag } = params;
//   const filteredPosts = posts.filter((post) => post.tags.includes(tag));

//   return { tag, filteredPosts };
// }
export function load({ params }) {
  const { tag } = params;
  console.log("tag page load function called for ", tag);
  return { tag };
}
