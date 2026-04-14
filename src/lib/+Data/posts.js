export const posts = Object.entries(
  import.meta.glob('/src/lib/+Data/posts/**/*.svx', { eager: true })
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
export function getPostsByAITSL(posts, tag) {
  return posts.filter((post) => post.aitsl?.includes(tag));
}
export function getPostsBySection(posts, section) {
  console.log(`Filtering posts by section: ${section}`, posts);
  return posts.filter((post) => post.sections?.includes(section));
}

export function countPostsByTag(posts) {
    let tagCounts = {};
    const flattenedTagCount = []
    console.log('Counting tags')
    posts.forEach(post => {
        if (post.tags) {
            post.tags.forEach(tag => {
                console.log(`Counting tag: ${tag} for post: ${post.title}`);
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        }
    });
    console.log('Tag counts:', tagCounts);
    for (let tag in tagCounts) {
        flattenedTagCount.push({x: tag, y: tagCounts[tag]})
    }
    console.log('Flattened tag count:', flattenedTagCount);
    return flattenedTagCount;
}

export function countPostsByAITSL(posts) {
    let aitslCounts = {};
    const flattenedAitslCount = []
    console.log('Counting AITSL')
    posts.forEach(post => {
        if (post.aitsl) {
            post.aitsl.forEach(a => {
                console.log(`Counting AITSL: ${a} for post: ${post.title}`);
                aitslCounts[a] = (aitslCounts[a] || 0) + 1;
            });
        }
    });
    console.log('AITSL counts:', aitslCounts);
    for (let tag in aitslCounts) {
        flattenedAitslCount.push({x: tag, y: aitslCounts[tag]})
    }
    console.log('Flattened aitsl count:', flattenedAitslCount);
    return flattenedAitslCount;
}