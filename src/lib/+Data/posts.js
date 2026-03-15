export const posts = Object.entries(
  import.meta.glob('/src/lib/+Data/posts/*.svx', { eager: true })
).map(([path, module]) => {
  const { metadata, default: component } = module; // SVX default export is the Svelte component
  return {
    ...metadata,
    component, // store the SVX body here
    path: path
      .replace('/src/lib/+Data/posts/', '/posts/')
      .replace('.svx', ''),
  };
});
export function getPostsByTag(posts, tag) {
  return posts.filter((post) => post.tags?.includes(tag));
}