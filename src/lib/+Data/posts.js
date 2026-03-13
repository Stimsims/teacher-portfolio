export const posts = Object.entries(
  import.meta.glob('/src/lib/+Data/posts/*.svx', { eager: true })
).map(([path, module]) => {
  const { metadata } = module; // SvelteKit's SVX exposes frontmatter as `metadata`
  return {
    ...metadata,
    path: path
      .replace('/src/lib/+Data/posts/', '/posts/')
      .replace('.svx', ''), // optional: compute a nice route path
  };
});

