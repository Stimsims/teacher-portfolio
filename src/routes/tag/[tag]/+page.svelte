
<script>
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';
  export let data;
  console.log(`Svelte view data`, data);
  const { tag, filteredPosts, tagDescription } = data;
  console.log(`Svelte view received tag: ${tag}`, filteredPosts);
</script>

<div class="layout">
  <main>
    <section id="home" class="page">
        <h1>Posts tagged: {tag}</h1>
        <p>{tagDescription}</p>

        {#if filteredPosts && filteredPosts.length > 0}
            <div>
                <MarkdownList examples={filteredPosts}/>
            </div>
        {:else}
        <p>No posts found for this tag: {tag}.</p>
        {/if}

        </section>
    </main>
</div>    