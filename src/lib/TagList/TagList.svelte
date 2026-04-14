<!-- src/lib/components/TagList.svelte -->
<script>
  export let tags;

  function goToTag(tag) {
    window.location.href = `/tag/${tag}`;
  }
</script>

<ul class="tags">
  {#each tags as tag}
    <!-- <li class="tag opal-text" on:click={() => goToTag(tag)}> -->
        <a href={`/tag/${tag}`}>
          {tag}
        </a>
    <!-- </li> -->
  {/each}
</ul>

<style>
  .tags {
    list-style: none;
    padding: 0;
    text-align: center;
  }
  .tag {
    display: inline-block;
    margin: 0px 0px;
    padding: 0px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s;
    opacity: 0.7;
    text-decoration: underline;
  }
  .tag:hover {
    opacity: 1;
  }
</style>