<script>
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';
  export let data;

  console.log('Svelte view data', data);

  const { tag, filteredPosts, tagDescription, empty } = data;
  console.log(`Svelte view received tag: ${tag} is empty? ${empty}`, filteredPosts);
</script>

<div class="layout">
  <main>
    <section id="home" class="page">
    {#if empty}
      <p>There are no posts for this tag yet. Check back later!</p>
    {:else}
      <h1>Posts tagged: {tag}</h1>
      <p>{tagDescription}</p>

      {#if filteredPosts && filteredPosts.length > 0}
        <div>
          <MarkdownList examples={filteredPosts}/>
        </div>
      {:else}
        <p>No posts found for this tag: {tag}.</p>
      {/if}
    {/if}
    </section>
  </main>
</div>   