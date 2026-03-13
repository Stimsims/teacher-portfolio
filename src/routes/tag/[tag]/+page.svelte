
<script>
  export let data;
  console.log(`Svelte view data`, data);
  const { tag, filteredPosts } = data;
  console.log(`Svelte view received tag: ${tag}`, filteredPosts);
</script>
<h1>Posts tagged: {tag}</h1>

{#if filteredPosts && filteredPosts.length > 0}
  <ul>
    {#each filteredPosts as post}
      <li>
        <a href="{post.path}">{post.title}</a>
        <p>{post.summary}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts found for this tag: {tag}.</p>
{/if}